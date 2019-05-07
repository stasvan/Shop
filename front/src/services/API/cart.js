
export const addToCart = (productShopId, fixedPrice, token) => {
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

    console.log(token);

    return fetch('http://localhost:8090/cart', myInit)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            return JSON.stringify(data.message);
        });
};

export const getCartItems = (userId) =>
    fetch(`http://localhost:8090/cart/${userId}`)
        .then(data => data.json())
        .then((data) => {
            //console.log(data);
            return data });
