## TASK MANAGER API

DESCRIPTION:  
A simple REST API for task management built with Node.js and Express that allows creating, reading, updating and deleting tasks.

KEY FEATURES:

- Create tasks with title and description
- Retrieve all tasks or individual tasks by ID
- Modify existing tasks
- Remove tasks
- Uses in-memory storage (can be upgraded to database)

TECHNOLOGY STACK:

- Node.js (runtime)
- Express (web framework)

INSTALLATION INSTRUCTIONS:

1. Clone the repository:  
   git clone <https://github.com/piercecraft/task-manager-api.git>
2. Navigate to project directory:  
   cd task-manager-api
3. Install dependencies:  
   npm install
4. Start the server:  
   npm run dev

API ENDPOINTS:

Base URL: <http://localhost:3000/api/tasks>

CREATE TASK:

- Method: POST
- Request Body Format:  
   {  
   "title": "Your task title",  
   "description": "Your task description"  
   }

GET ALL TASKS:

- Method: GET
- No body required

GET SINGLE TASK:

- Method: GET
- URL Format: /api/tasks/{id}

UPDATE TASK:

- Method: PATCH
- URL Format: /api/tasks/{id}
- Uses same body format as Create

DELETE TASK:

- Method: DELETE
- URL Format: /api/tasks/{id}

EXAMPLE USAGE:

To create a task:  
curl -X POST -H "Content-Type: application/json" -d '{"title":"My task"}' <http://localhost:3000/api/tasks>

To get all tasks:  
curl <http://localhost:3000/api/tasks>

PROJECT STRUCTURE:  
src/  
app.js - Main application setup  
routes/ - API endpoint definitions  
controllers/ - Business logic  
models/ - Data handling  
utils/ - Helper functions
