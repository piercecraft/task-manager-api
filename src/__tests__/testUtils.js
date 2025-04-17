const Task = require('../models/task');

function resetTaskDatabase() {
    // Clear all tasks (for in-memory DB)
    Task.findAll().forEach(t => Task.delete(t.id));
    const { seed } = require("./seedTestDB"); seed();
    Task.create({ title: 'Test Task 1' });
    Task.create({ title: 'Test Task 2' });
}

module.exports = { resetTaskDatabase };
