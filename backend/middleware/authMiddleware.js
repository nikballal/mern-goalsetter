//authMiddleware to protect the routes (that are private by authenticating jwt)
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer") //since tokens start with e.g 'Bearer 039304930'
  ) {
    try {
      //Get token from header
      token = req.headers.authorization.split(" ")[1]; //'e.g Bearer 039304930', i.e you will get 039304930

      //Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //Get user from the token
      req.user = await User.findById(decoded.id).select("-password"); //exclude the hashed password

      next(); //to call the next piece of middleware after the end of one middleware
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };

// Steps in setting up authmiddleware
// 1. Check for authorization header, make sure it is bearer token
// 2. Assign token to variable, decode and verify the token
// 3. Get user from the token
// 4. Call next piece of middleware through next()
