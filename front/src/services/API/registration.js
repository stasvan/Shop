
export const doRegistration = (role, email, password, name, surname, phone,
                               country, city, street, house, apartment) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const myInit = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            email: email,
            password: password,
            role: role,
            name: name,
            surname: surname,
            phone: phone,
            country: country,
            city: city,
            street: street,
            house: house,
            apartment: apartment,
        })
    };

    return fetch('http://localhost:8090/registration', myInit)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            return data.message;
        });
};