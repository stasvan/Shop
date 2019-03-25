

export const getProductShops = (productId) =>
    fetch(`http://localhost:8090/productShops/${productId}`)
        .then(data => data.json())
        .then((data) => { return data });