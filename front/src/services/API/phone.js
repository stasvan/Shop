

export const getPhones = () =>
    fetch('http://localhost:8090/phones')
        .then(data => data.json())
        .then((data) => {
            //console.log(data);
            return data });

export const getPhoneById = (phoneId) =>
    fetch(`http://localhost:8090/phones/${phoneId}`)
        .then(data => data.json())
        .then((data) => {
            //console.log(data);
            return data });

