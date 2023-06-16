const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc     register users
//@route    POST api/users
//@access   public
const registerUser = 
// asyncHandler(async 
    (req, res) => {
  res.json({message: 'register'})
}
// );

//@desc     authenticate users
//@route    POST api/users/login
//@access   public
const loginUser = 
// asyncHandler(async 
    (req, res) => {
  res.json({message: 'login'})
}
// );

//@desc     get users data
//@route    GET api/users/me
//@access   public
const getMe = 
// asyncHandler(async 
    (req, res) => {
  res.json({message: 'mee'})
}
// );

module.exports = { registerUser, loginUser, getMe};
