const request = require('supertest');
const app = require('../../app');
const { resetTaskDatabase } = require('../testUtils');

describe('Tasks API', () => {
  beforeEach(resetTaskDatabase);

  test('GET /api/tasks - should return all tasks', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
