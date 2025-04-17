const Task = require('../models/task');

// Centralized error handler, we were getting too spread out
const handleErrors = (res, error, defaultMessage = 'An error occurred') => {
    console.error(error);
    const message = error.message || defaultMessage;
    const status = error.status || 500;
    res.status(status).json({ error: message });
};

// Validate task input
// TBD: implement Joi or express-validator, but simple validation is fine for now
const validateTaskInput = ({ title }) => {
    if (!title) throw { message: 'Title is required', status: 400 };
};

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        handleErrors(res, error);
    }
};

const createTask = async (req, res) => {
    try {
        validateTaskInput(req.body);
        const newTask = await Task.create(req.body);
        res.status(201).json(newTask);
    } catch (error) {
        handleErrors(res, error);
    }
};

const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) throw { message: 'Task not found', status: 404 };
        res.json(task);
    } catch (error) {
        handleErrors(res, error);
    }
};

const updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.update(
            req.params.id,
            req.body
        );
        if (!updatedTask) throw { message: 'Task not found', status: 404 };
        res.json(updatedTask);
    } catch (error) {
        handleErrors(res, error);
    }
};

const deleteTask = async (req, res) => {
    try {
        const deleted = await Task.delete(req.params.id);
        if (!deleted) throw { message: 'Task not found', status: 404 };
        res.status(204).send();
    } catch (error) {
        handleErrors(res, error);
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};