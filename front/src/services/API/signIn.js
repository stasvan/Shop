
export const doSignIn = (email, password) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const myInit = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            email: email,
            password: password
        })
    };

    return fetch('http://localhost:8090/sign-in', myInit)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            return data;
        });
};