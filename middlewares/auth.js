const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to authenticate and verify JWT token
exports.auth = (req, res, next) => {
    try {
        // Extract JWT token from the Authorization header or request body
        const token = req.body.token;

        if (!token) {
            // If token is missing, return an unauthorized response
            return res.status(401).json({
                success: false,
                message: "Token is missing"
            });
        }

        // Verify the token
        try {
            // Decode and verify the JWT token using the secret
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);

            // Attach the decoded user information to the request object for later use
            req.user = decode;

            // Move to the next middleware or route handler
            next();
            
        } catch (error) {
            // If token verification fails, return an unauthorized response
            console.error("Error:", error);
            return res.status(401).json({
                success: false,
                message: "Token is Invalid"
            });
        }
        
    } catch (error) {
        // If an unexpected error occurs, return an unauthorized response
        return res.status(401).json({
            success: false,
            message: "Something went wrong while verifying the token"
        });
    }
};

// Middleware to check if the user is a student
exports.isStudent = (req, res, next) => {
    try {
        // Check if the user's role is not "Student"
        if (req.user.role !== "Student") {
            // If not a student, return an unauthorized response
            return res.status(401).json({
                success: false,
                message: "This is a protected route for students"
            });
        }

        // Move to the next middleware or route handler
        next();
    } catch (error) {
        // If an unexpected error occurs, return a server error response
        return res.status(500).json({
            success: false,
            message: "User role is not matching"
        });
    }
};

// Middleware to check if the user is an admin
exports.isAdmin = (req, res, next) => {
    try {
        // Check if the user's role is not "Admin"
        if (req.user.role !== "Admin") {
            // If not an admin, return an unauthorized response
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Admin"
            });
        }

        // Move to the next middleware or route handler
        next();
    } catch (error) {
        // If an unexpected error occurs, return a server error response
        return res.status(500).json({
            success: false,
            message: "User role is not matching"
        });
    }
};
