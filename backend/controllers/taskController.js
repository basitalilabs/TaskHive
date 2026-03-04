const Task = require('../models/Task');
const asyncHandler = require("../middleware/asyncHandler");

const getTask = asyncHandler(async(req, res)=>{
    const task = await Task.find({userId : req.user._id});
    res.status(200).json(task)
})

const createTask = asyncHandler(async(req, res) => {
    const task = await Task.create({...req.body, userId : req.user._id});
    res.status(201).json(task);
});

const updateTask = asyncHandler(async(req, res) => {
    const task = await Task.findOneAndUpdate({ _id: req.params.id, userId: req.user._id}, req.body, {new : true})
    res.status(200).json(task)
});

const toggleStatus = asyncHandler(async(req, res) => {
    const task = await Task.findOne({_id : req.params.id, userId : req.user._id});
    if(task.status === "pending") task.status = "complete";
    else task.status = "pending";
    await task.save();
    res.status(200).json(task);
})

const destroyTask = asyncHandler(async(req, res) => {
    const task = await Task.findOneAndDelete({_id : req.params.id, userId : req.user._id});
    res.status(200).json({ message: "Task deleted successfully" });
})


module.exports = {getTask, createTask, updateTask, toggleStatus, destroyTask}