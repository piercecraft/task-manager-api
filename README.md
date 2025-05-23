## TASK MANAGER API

# Task Manager API

## Description

A simple REST API for task management built with Node.js and Express that allows creating, reading, updating and deleting tasks.

## Key Features

- Create tasks with title and description
- Retrieve all tasks or individual tasks by ID
- Modify existing tasks
- Remove tasks
- Uses in-memory storage (can be upgraded to database)

## Technology Stack

- **Node.js** (runtime)
- **Express** (web framework)

## Installation Instructions

1. Clone the repository:
   ```powershell
   git clone https://github.com/piercecraft/task-manager-api.git
   ```
2. Navigate to project directory:
   ```powershell
   cd task-manager-api
   ```
3. Install dependencies:
   ```powershell
   npm install
   ```
4. Start the server:
   ```powershell
   npm run dev
   ```

## API Endpoints

**Base URL**: `http://localhost:3000/api/tasks`

### Create Task

- **Method**: POST
- **Request Body**:
  ```json
  {
    "title": "Your task title",
    "description": "Your task description"
  }
  ```

### Get All Tasks

- **Method**: GET
- **No body required**

### Get Single Task

- **Method**: GET
- **URL Format**: `/api/tasks/{id}`

### Update Task

- **Method**: PATCH
- **URL Format**: `/api/tasks/{id}`
- **Body**: Same format as Create

### Delete Task

- **Method**: DELETE
- **URL Format**: `/api/tasks/{id}`

## Example Usage

Create a task:

```powershell
curl -X POST -H "Content-Type: application/json" -d '{"title":"My task"}' http://localhost:3000/api/tasks
```

Get all tasks:

```powershell
curl http://localhost:3000/api/tasks
```

## Project Structure

```
src/
├── app.js          # Main application setup
├── routes/         # API endpoint definitions
├── controllers/    # Business logic
├── models/         # Data handling
└── utils/          # Helper functions
```

## Testing

### Local Testing

```powershell
npm test           # Run all tests (unit + integration)
npm run test:watch # Interactive watch mode
npm run coverage   # Generate report (saved to coverage/)
```

### Test Structure

| Type            | Location                     | Test Command           |
| --------------- | ---------------------------- | ---------------------- |
| **Unit**        | `src/__tests__/unit/`        | `npx jest unit`        |
| **Integration** | `src/__tests__/integration/` | `npx jest integration` |
| **All**         | `src/__tests__/`             | `npx jest` (default)   |

## CI/CD

Automated testing via GitHub Actions:

- Runs on push & pull requests
- Tests Node.js 20.x
- Uploads coverage reports as artifacts

![Tests](https://github.com/piercecraft/task-manager-api/actions/workflows/tests.yml/badge.svg)

### Coverage Reports

Generated in `coverage/`:

```powershell
open coverage/lcov-report/index.html  # View detailed report
```

Key Metrics Tracked:

- Statement coverage
- Branch coverage
- Function coverage
- Line coverage
