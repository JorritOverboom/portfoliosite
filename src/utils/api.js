export const fetchToDos = async () => {
    const res = await fetch('/api/gettodos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if(!res.ok) {
        throw new Error('Failed to fetch todos');
    }

    return res.json();
};

export const fetchInProgress = async () => {
    const res = await fetch('/api/inprogress');
    return res.json();
};

export const fetchFinished = async () => {
    const res = await fetch('/api/finished');
    return res.json();
};

export const addNewToDo = async (newToDo) => {
    const res = await fetch('/api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newToDo),
    });
    return res.json();
};

export const addNewInProgress = async (newInProgress) => {
    const res = await fetch('/api/inprogress', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newInProgress),
    });
    return res.json();
};

export const addNewFinished = async (newFinished) => {
    const res = await fetch('/api/finished', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFinished),
    });
    return res.json();
}; 

export const removeToDo = async (id) => {
    const res = await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
    });
    return res.json();
};

export const removeInProgress = async (id) => {
    const res = await fetch(`/api/inprogress/${id}`, {
        method: 'DELETE',
    });
    return res.json();
};

export const removeFinished = async (id) => {
    const res = await fetch(`/api/finished/${id}`, {
        method: 'DELETE',
    });
    return res.json();
};

