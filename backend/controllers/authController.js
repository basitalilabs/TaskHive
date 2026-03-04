const User = require("../models/User");
const asyncHandler = require("../middleware/asyncHandler");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


const isRegister = asyncHandler(async(req, res) => {
    const { name, email, password } = req.body; 
    const existingUser = await User.findOne({ email });
    console.log('existingUser:', existingUser);
    if(existingUser){
        return res.status(400).json({message : "User is Already Exist!"})
    }
    const user = await User.create({name, email, password});
    console.log('user created:', user);
    res.status(201).json(
    {
        _id: user._id, 
        name: user.name, 
        email: user.email
    });
})

const isLogin = asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    const existingUser = await User.findOne({ email });
    if(!existingUser){
        return res.status(400).json({ message: "Email not found" });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if(!isMatch){
        return res.status(400).json({ message: "Wrong password" });
    }
    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(200).json({
        token,
        _id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email
    })
})


module.exports = {isRegister, isLogin}