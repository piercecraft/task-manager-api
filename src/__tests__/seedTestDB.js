// src/__tests__/seedTestDB.js
const Task = require('../models/task');

module.exports = {
  seed: () => {
    Task.create({ title: 'Seed Task 1', description: 'From seed' });
    Task.create({ title: 'Seed Task 2', description: 'From seed' });
    return Task.findAll();
  },
  clear: () => {
    Task.findAll().forEach(t => Task.delete(t.id));
  }
};