
// API request functions for users
export const createUser = async (newUser) => {
    try {
        const res = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });

        if(!res.ok) {
            const data = await res.json();
            return data;
        };

        return res;
    }
    catch (error) {
        console.log('Create user failed', error);
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
