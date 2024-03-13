
export const checkExistingUser = async (username) => {
    const res = await fetch('/api/users/checkExistingUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
    });
    return res.json();
}

export const addNewUser = async (newUser) => {
    const res = await fetch('/api/users/createUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    });
    return res.json();
};

export const addDefaultTasks = async (newUserId) => {
    const res = await fetch('/api/users/addDefaultTasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: newUserId }),
    });

    if(!res.ok) {
        throw new Error('Failed to add default tasks to database');
    }
};

export const loginUser = async (user) => {
    try {
        const res = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if(!res.ok) {
            const data = await res.json();
            return data;
        };

        return res;
    }
    catch (error) {
        console.log('Login failed', error);
    }
};

export const logoutUser = async () => {
    try {
        const res = await fetch('/api/users/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(!res.ok) {
            throw new Error('Failed to log out');
        }
        
        return res;
    }
    catch (error) {
        console.log('Logout failed', error);
    }
};

export const checkLoggedIn = async () => {
    try {
        const res = await fetch('/api/users/checkLoggedIn', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(!res.ok) {
            throw new Error('Failed to check if user is logged in');
        }

        const data = await res.json();

        return data;
    }
    catch (error) {
        console.log('Check failed', error);
    }
}