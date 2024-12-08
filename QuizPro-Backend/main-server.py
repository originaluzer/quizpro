import pymongo
from pymongo import MongoClient
from flask import Flask, jsonify, request,send_from_directory
from flask_cors import CORS
import bcrypt
from flask_bcrypt import Bcrypt

app = Flask(__name__, static_folder='./build', static_url_path='/')

bcrypt = Bcrypt(app)
CORS(app, resources={r"/*": {"origins": "*"}})
cluster = MongoClient("mongodb+srv://rafalelsynch:Dh0NTZCx8sKufYC3@user-signin.wg0nr.mongodb.net/?retryWrites=true&w=majority&appName=user-signin")

db = cluster["users"];
collection = db["quizpro-users"];



@app.route('/')
def index():
    try:
        print("Serving index.html from ur")
        return send_from_directory(app.static_folder, 'index.html')
    except Exception as e:
        return str(e), 500  



        
@app.route('/api/users', methods=['POST'])
def add_user():
    try:
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")
        
        
        existing_user = collection.find_one({"email": email})
        if existing_user:
            return jsonify({"message": "Email already in use"}), 400  # Bad request if email is taken

        # Hash the password before saving it
        pw_hash = bcrypt.generate_password_hash(password).decode('utf-8')
        
        # Insert the new user into the MongoDB 'users' collection
        collection.insert_one({"email": email, "password": pw_hash})

        return jsonify({"message": "User added successfully!"}), 201

    except Exception as e:
        print(f"Error while adding user: {e}")
        return jsonify({"message": "Internal Server Error", "error": str(e)}), 500
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


@app.route('/api/login', methods=['POST'])
def login_user():
    try:
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")
        
        user = collection.find_one({"email": email})
        
        if user:
            if bcrypt.check_password_hash(user['password'], password):
                return jsonify({"message": "Login successful!"}), 200
            else:
                return jsonify({"message": "Invalid credentials"}), 401
        else:
            return jsonify({"message": "User not found"}), 404

    except Exception as e:
        print(f"Error while logging in: {e}")
        return jsonify({"message": "Internal Server Error", "error": str(e)}), 500

@app.errorhandler(404)   
def not_found(e):   
  return app.send_static_file('index.html')



if __name__ == '__main__':
    app.run(host='localhost', port=5200)
