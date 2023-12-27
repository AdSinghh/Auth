const express = require('express');
const router = express.Router();

// Importing controller functions for login and signup
const { login, signup } = require('../controllers/Auth');

// Importing middleware functions for authentication and authorization
const { auth, isStudent, isAdmin } = require('../middlewares/auth');

// Route for user login
router.post("/login", login);

// Route for user signup
router.post("/signup", signup);

// Testing protected route with a single middleware (auth)
router.get("/test", auth, (req, res) => {
  // If the middleware (auth) is passed, return a welcome message
  res.status(200).json({
    success: true,
    message: "Welcome to the route of Test"
  });
});

// Protected route for students
router.get("/student", auth, isStudent, (req, res) => {
  // If both auth and isStudent middlewares are passed, return a welcome message for students
  res.status(200).json({
    success: true,
    message: "Welcome to the route of Student"
  });
});

// Protected route for admins
router.get("/admin", auth, isAdmin, (req, res) => {
  // If both auth and isAdmin middlewares are passed, return a welcome message for admins
  res.status(200).json({
    success: true,
    message: "Welcome to the route of Admin"
  });
});

// Export the router for use in other parts of the application
module.exports = router;
