
export const addItemToCart = (productShopId, fixedPrice, token) => {
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // const jwt = "Bearer " + token;
    // myHeaders.append("Authorization", jwt);

    const myInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
            productShopId: productShopId,
            fixedPrice: fixedPrice
        })
    };

    return fetch('http://localhost:8090/cart', myInit)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            return data.message;
        });
};

export const getCartItems = (token) => {

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    return fetch('http://localhost:8090/cart', {
        method: "GET",
        headers: myHeaders
    })
        .then(data => data.json())
        .then((data) => {
            return data });
};

export const deleteItemFromCart = (token, cartItemId) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append('Content-Type', 'application/json');

    return fetch('http://localhost:8090/cart', {
        method: "DELETE",
        headers: myHeaders,
        body: JSON.stringify({
            cartItemId: cartItemId,
        })
    })
        .then(data => data.json())
        .then((data) => {
            return data });
};