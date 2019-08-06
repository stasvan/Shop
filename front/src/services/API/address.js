

export const getUserAddress = (token) => {

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    return fetch('http://localhost:8090/address/user', {
        method: "GET",
        headers: myHeaders
    })
        .then(data => data.json())
        .then((data) => {
            //console.log(data);
            return data });
};