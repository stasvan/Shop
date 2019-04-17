export const validateToken = (token) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const myInit = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            token: token
        })
    };

    return fetch('http://localhost:8090/validateJwt', myInit)
        .then(data => data.json())
        .then((data) => {
            console.log(data.message);
            return data.message
        });
};