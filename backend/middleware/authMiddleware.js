const jwt = require('jsonwebtoken');
const asyncHandler = require('../middleware/asyncHandler');
const User = require("../models/User");

const protect = asyncHandler(async(req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if(!token){
        return res.status(401).json({ 
            success : false, 
            message : "No token, authorization denied"
        })
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
})

module.exports = protect;