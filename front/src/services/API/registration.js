export const getPhones = () =>
    fetch('http://localhost:8090/phones')
        .then(data => data.json())
        .then((data) => {
            //console.log(data);
            return data });


export const doRegistration = (role, email, password) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const myInit = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            email: email,
            password: password,
            role: role
        })
    };

    fetch('http://localhost:8090/registration', myInit)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            alert(JSON.stringify(data.message));
        });
};