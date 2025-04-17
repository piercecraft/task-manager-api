const Task = require('../models/task');

function resetTaskDatabase() {
    // clear tasks by wiping the array
    tasks = [];
    currentId = 1;

    // Add test data
    Task.create({ title: 'Test Task 1' });
    Task.create({ title: 'Test Task 2' });
}

module.exports = { resetTaskDatabase };