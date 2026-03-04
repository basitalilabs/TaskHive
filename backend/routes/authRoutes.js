const express = require('express');
const Controller = require("../controllers/authController")
const {validate, registerValidation, loginValidation} = require("../middleware/validate")
const router = express.Router();

router.post("/register", validate(registerValidation), Controller.isRegister);
router.post("/login",validate(loginValidation), Controller.isLogin)

module.exports = router;