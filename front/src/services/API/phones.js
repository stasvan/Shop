const phones = [
    {
        "id": 1,
        "model": "iPhone 5",
        "brand": "Apple",
        "year": 2012,
    },
    {
        "id": 2,
        "model": "iPhone 6",
        "brand": "Apple",
        "year": 2014,
    }
];

const shopsPrices = [
    {
        "shop": "Electrosila",
        "price": 400,
    },
    {
        "shop": "Sosedi",
        "price": 500,
    }
];

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const getPhones = () =>
    delay(500)
        .then(() => {
            return phones;
        });

export const getPhoneById = (id) =>
    delay(500)
        .then(() => {
            const phoneInfo = phones.find(phone => phone.id === id);
            return phoneInfo;
        });