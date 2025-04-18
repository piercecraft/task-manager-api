const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks');

// Basic CRUD routes
router.get('/', getAllTasks);
router.post('/', createTask);
router.get('/:id', getTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

// TBD:
// auth/users/jwt
// API subs:
// '/?status=:status': return by status value
// '/?priority=:priority': return by priority value
// '/?search=:keyword': return keyword matches in title or description
// '/?sortBy=dueDate&order=asc': sortability and order
// and a mix of the above with & as seperator, e.g. /?status=completed&sortBy=dueDate&order=asc
// '/?page=2&limit=10': basic pagination

// future: task assignment, task completion, comments, audit

module.exports = router;