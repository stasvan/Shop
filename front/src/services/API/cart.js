
export const addToCart = (userId, productShopId, fixedPrice, token) => {
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
            userId: userId,
            productShopId: productShopId,
            fixedPrice: fixedPrice
        })
    };

    console.log(token);

    return fetch('http://localhost:8090/cart', myInit)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            return JSON.stringify(data.message);
        });
};