export const loginUserService = async ({ email, password }) => {
    const response = await fetch(`http://localhost:3000/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
        
    }
    return json.data;
};