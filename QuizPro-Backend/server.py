from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS

# MongoDB URI - Ensure the username and password are correct
uri = "mongodb+srv://rafalelsynch:Dh0NTZCx8sKufYC3@user-signin.wg0nr.mongodb.net/?retryWrites=true&w=majority&appName=user-signin"





# Initialize Flask app
app = Flask(__name__)

# Enable CORS (Cross-Origin Resource Sharing) for all routes
CORS(app, resources={r"/*": {"origins": "*"}})

# Set up the MONGO_URI in Flask configuration
app.config["MONGO_URI"] = uri

# Initialize Flask-PyMongo and Flask-Bcrypt
mongo = PyMongo(app)
bcrypt = Bcrypt(app)

print(mongo.db)

@app.route('/', methods=['GET'])
def index():
    return "Welcome to Flask with MongoDB!"

# A route to get all users from MongoDB
@app.route('/users', methods=['GET'])
def get_users():
    try:
        # Access the 'users' collection from the MongoDB database
        users_collection = mongo.db.sample_mflix.users
        users = list(users_collection.find())

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

# A route to insert a new user into MongoDB
@app.route('/users', methods=['POST'])
def add_user():
    try:
        # Get the JSON data from the request
        data = request.get_json()
        username = data.get("username")
        email = data.get("email")

        # Insert the new user into the MongoDB 'users' collection
        mongo.db.users.insert_one({"username": username, "email": email})

        return jsonify({"message": "User added successfully!"}), 201

    except Exception as e:
        print(f"Error while adding user: {e}")
        return jsonify({"message": "Internal Server Error", "error": str(e)}), 500

# Start the Flask app
if __name__ == '__main__':
    app.run(host='localhost', port=5200)
