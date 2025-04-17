const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks');

const app = express();

// Middleware
app.use(bodyParser.json());

// Add this before your API routes
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Task Manager API</title>
        <style>
          body { font-family: sans-serif; line-height: 1.5; padding: 2rem; }
          code { background: #f4f4f4; padding: 0.2rem 0.4rem; border-radius: 3px; }
        </style>
      </head>
      <body>
        <h1>Task Manager API</h1>
        <h2>Endpoints</h2>
        <ul>
          <li><strong>GET /api/tasks</strong> - List all tasks</li>
          <li><strong>POST /api/tasks</strong> - Create task (JSON body: { "title": "string", "description": "string" })</li>
          <li><strong>GET /api/tasks/:id</strong> - Get single task</li>
          <li><strong>PATCH /api/tasks/:id</strong> - Update task</li>
          <li><strong>DELETE /api/tasks/:id</strong> - Remove task</li>
        </ul>
      </body>
      </html>
    `);
});

// API routes
app.use('/api/tasks', taskRoutes);

// Error handling (middleware)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;