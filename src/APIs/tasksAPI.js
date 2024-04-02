// API request functions for tasks
export const fetchTasks = async () => {
    const res = await fetch('/api/tasks/getTasks', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if(!res.ok) {
        throw new Error('Failed to fetch to do tasks from database');
    }
    return res.json();
};

export const addNewTask = async (newTask) => {
    const res = await fetch('/api/tasks/createTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
    });

    if(!res.ok) {
        throw new Error('Failed to add new task to database');
    }

    return res.json();
};

export const deleteTask = async (id) => {
    const res = await fetch(`/api/tasks/deleteTask/${id}`, {
        method: 'DELETE'
    });

    if(!res.ok) {
        throw new Error('Failed to delete task in database');
    }

};

// Changes the status of the task to 'todo', 'inprogress' or 'finished'
export const updateTask = async (task) => {
    const { id, status } = task;
    const res = await fetch(`/api/tasks/moveTask/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status })
    });

    if(!res.ok) {
        throw new Error(`Failed to move task in database`);
    }

    return res.json();
};