// Import the Mongoose library
const mongoose = require('mongoose');

// Define a Mongoose Schema for the "user" collection
const userSchema = new mongoose.Schema({
    // Define a field for the user's name
    name: {
        type: String,       // The type is String
        required: true,     // The field is required
        trim: true          // Trim leading and trailing whitespaces
    },

    // Define a field for the user's email
    email: {
        type: String,       // The type is String
        required: true,     // The field is required
        trim: true          // Trim leading and trailing whitespaces
    },

    // Define a field for the user's role with predefined values
    role: {
        type: String,       // The type is String
        enum: ["Admin", "Student", "Visitor"]  // The field should have one of these values
    },

    // Define a field for the user's password
    password: {
        type: String,       // The type is String
        required: true      // The field is required
    }
});

// Create a Mongoose Model based on the Schema, named "user"
module.exports = mongoose.model("user", userSchema);
