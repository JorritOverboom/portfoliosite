export const fetchToDoTasks = async () => {
    const res = await fetch('/api/tasks/getToDoTasks', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if(!res.ok) {
        throw new Error('Failed to fetch to do tasks');
    }
    return res.json();
};

export const fetchInProgressTasks = async () => {
    const res = await fetch('/api/tasks/getInProgressTasks', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if(!res.ok) {
        throw new Error('Failed to fetch in progress tasks');
    }
    return res.json();
};

export const fetchFinishedTasks = async () => {
    const res = await fetch('/api/tasks/getFinishedTasks', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if(!res.ok) {
        throw new Error('Failed to fetch finished tasks');
    }
    return res.json();
};

export const addNewTask = async (newToDo) => {
    const res = await fetch('/api/tasks/createTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newToDo),
    });
    return res.json();
};

export const deleteTask = async (id) => {
    const res = await fetch(`/api/tasks/deleteTask/${id}`, {
        method: 'DELETE'
    });

    if(!res.ok) {
        throw new Error('Failed to delete task');
    }
};

export const updateTaskToToDo = async (id) => {
    const res = await fetch(`/api/tasks/moveTaskToToDo/${id}`, {
        method: 'PUT'
    });

    if(!res.ok) {
        throw new Error('Failed to move task');
    }

    return res.json();
};

export const updateTaskToInProgress = async (id) => {
    const res = await fetch(`/api/tasks/moveTaskToInProgress/${id}`, {
        method: 'PUT'
    });

    if(!res.ok) {
        throw new Error('Failed to move task');
    }

    return res.json();
};

export const updateTaskToFinished = async (id) => {
    const res = await fetch(`/api/tasks/moveTaskToFinished/${id}`, {
        method: 'PUT'
    });

    if(!res.ok) {
        throw new Error('Failed to move task');
    }

    return res.json();
};