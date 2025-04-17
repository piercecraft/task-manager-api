const Task = require('../../models/task');
const { resetTaskDatabase } = require('../testUtils');

describe('Task Model', () => {
  beforeEach(resetTaskDatabase);

  test('should create a task', () => {
    const task = Task.create({ title: 'Unit Test Task' });
    expect(task).toMatchObject({
      id: expect.any(Number),
      title: 'Unit Test Task',
      description: expect.any(String)
    });
  });
});
