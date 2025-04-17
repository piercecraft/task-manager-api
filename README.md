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
npx jest --coverage # Generate coverage report
```

### Test Structure

| Type            | Location                     | Description                    |
| --------------- | ---------------------------- | ------------------------------ |
| **Unit**        | `src/__tests__/unit/`        | Model/business logic tests     |
| **Integration** | `src/__tests__/integration/` | API endpoint tests (Supertest) |

### Azure Pipelines

The [`azure-pipelines.yml`](./azure-pipelines.yml) runs tests on push with:

- Automatic test execution
- JUnit test reporting
- Fail-fast on critical errors

```yaml
# Pipeline snippet (simplified)
steps:
  - script: npm ci
  - script: npm test
    displayName: "Run Jest Tests"
  - task: PublishTestResults@2
    inputs:
      testResultsFiles: "test-results.xml"
```

### Coverage Reports

Generated in `coverage/`:

- Terminal summary during local runs
- HTML details: `coverage/lcov-report/index.html`
- CI publishes to Azure Test Results
