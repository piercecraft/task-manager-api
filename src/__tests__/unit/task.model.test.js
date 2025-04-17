const Task = require('../../models/task');
const { resetTaskDatabase } = require('../testUtils');

describe('Task Model', () => {
  beforeEach(() => {
    resetTaskDatabase();
  });

  test('should create a task with id', () => {
    const task = Task.create({ title: 'Test Task' });
    expect(task).toHaveProperty('id');
    expect(typeof task.id).toBe('number');
  });

  test('should find created task', () => {
    const newTask = Task.create({ title: 'Find Me' });
    const foundTask = Task.findById(newTask.id);
    expect(foundTask.title).toBe('Find Me');
  });
});