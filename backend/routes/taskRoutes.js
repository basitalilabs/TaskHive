const express = require('express');
const protect = require("../middleware/authMiddleware")
const Controller = require("../controllers/taskController")
const {validate, taskValidation} = require("../middleware/validate")
const router = express.Router();

router.get("/", protect,  Controller.getTask)
router.post("/", protect, validate(taskValidation), Controller.createTask)
router.patch("/:id",protect,  validate(taskValidation), Controller.updateTask);
router.patch("/:id/status", protect, Controller.toggleStatus);
router.delete("/:id",protect, Controller.destroyTask);

module.exports = router;