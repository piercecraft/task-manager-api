let tasks = [];
let currentId = 1;

class Task {
    static create({ title, description = '' }) {
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

    static findAll() {
        return [...tasks];  // copy of the array
    }

    static findById(id) {
        return tasks.find(task => task.id === id);
    }

    static delete(id) {
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
            return true;
        }
        return false;
    }
}

module.exports = Task;