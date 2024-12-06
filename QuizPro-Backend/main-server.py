import pymongo
from pymongo import MongoClient
from flask import Flask, jsonify, request
from flask_cors import CORS
import bcrypt
from flask_bcrypt import Bcrypt



app = Flask(__name__)
bcrypt = Bcrypt(app)


CORS(app, resources={r"/*": {"origins": "*"}})
cluster = MongoClient("mongodb+srv://rafalelsynch:Dh0NTZCx8sKufYC3@user-signin.wg0nr.mongodb.net/?retryWrites=true&w=majority&appName=user-signin")

db = cluster["users"];
collection = db["quizpro-users"];




print(collection);


@app.route('/users', methods=['GET'])
def get_users():
    try:
        # Access the 'users' collection from the MongoDB database
        users = list(collection.find())
        # If there are no users in the collection
        if not users:
            return jsonify({"message": "No users found"}), 404

        # Convert MongoDB ObjectId to string for JSON compatibility
        for user in users:
            user['_id'] = str(user['_id'])

        return jsonify(users)
    
    except Exception as e:
        print(f"Error while fetching users: {e}")
        return jsonify({"message": "Internal Server Error", "error": str(e)}), 500


        
@app.route('/users', methods=['POST'])
def add_user():
    try:
        # Get the JSON data from the request
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")
        pw_hash = bcrypt.generate_password_hash(password).decode('utf-8')
        

        # Insert the new user into the MongoDB 'users' collection
        collection.insert_one({"email": email, "password":pw_hash })

        return jsonify({"message": "User added successfully!"}), 201

    except Exception as e:
        print(f"Error while adding user: {e}")
        return jsonify({"message": "Internal Server Error", "error": str(e)}), 500



if __name__ == '__main__':
    app.run(host='localhost', port=5200)
