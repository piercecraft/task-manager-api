// In-memory data store for simplicity (would be replaced with a database in production)
let tasks = [];
let currentId = 1;

class Task {
    static async findAll() {
        return tasks;
    }

    static async findById(id) {
        return tasks.find(task => task.id === parseInt(id));
    }

    static async create({ title, description = '' }) {
        const newTask = {
            id: currentId++,
            title,
            description,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        tasks.push(newTask);
        return newTask;
    }

    static async update(id, { title, description }) {
        const taskIndex = tasks.findIndex(task => task.id === parseInt(id));

        if (taskIndex === -1) return null;

        const updatedTask = {
            ...tasks[taskIndex],
            title: title || tasks[taskIndex].title,
            description: description || tasks[taskIndex].description,
            updatedAt: new Date().toISOString()
        };

        tasks[taskIndex] = updatedTask;
        return updatedTask;
    }

    static async delete(id) {
        const taskIndex = tasks.findIndex(task => task.id === parseInt(id));

        if (taskIndex === -1) return false;

        tasks = tasks.filter(task => task.id !== parseInt(id));
        return true;
    }
}

module.exports = Task;