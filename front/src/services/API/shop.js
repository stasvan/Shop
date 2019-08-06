

export const getShopInfo = (token) => {

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    return fetch('http://localhost:8090/shop', {
        method: "GET",
        headers: myHeaders
    })
        .then(data => data.json())
        .then((data) => {
            //console.log(data);
            return data });
};