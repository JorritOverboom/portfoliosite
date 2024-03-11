export const addNewUser = async (newUser) => {
    const res = await fetch('/api/users/createUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    });
    return res.json();
}