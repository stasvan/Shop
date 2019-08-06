

export const getProductTypes = () =>
    fetch(`http://localhost:8090/productTypes`)
        .then(data => data.json())
        .then((data) => {
            return data
        });

export const getProductsByType = (type) =>
    fetch(`http://localhost:8090/productsByType?type=${type}`)
        .then(data => data.json())
        .then((data) => {
            return data
        });
