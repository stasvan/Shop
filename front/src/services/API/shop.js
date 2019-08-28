

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

export const changeShopInfo = (token, name, description, phone,
                             country, city, street, house, apartment) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const myInit = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify({
            shopName: name,
            description: description,
            phoneNumber: phone,
            country: country,
            city: city,
            street: street,
            house: house,
            apartment: apartment,
        })
    };

    return fetch('http://localhost:8090/shop', myInit)
        .then(data => data.json())
        .then((data) => {
            console.log(data);
            return data });
}