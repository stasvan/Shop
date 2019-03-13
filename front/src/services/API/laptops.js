const tvs = [
    {
        "id": 1,
        "brand": "Apple",
        "model": "iPhone ",
        "description": "this is 5",
        "year": 2012,
        "price": 400
    },
    {
        "id": 2,
        "brand": "Apple",
        "model": "iPhone 6",
        "description": "this is 6",
        "year": 2014,
        "price": 500
    }

];

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const getTvs = () =>
    delay(500)
        .then(() => {
            return tvs;
        });