

export const getLaptops = () =>
    fetch('http://localhost:8090/laptops')
        .then(data => data.json())
        .then((data) => {
            //console.log(data);
            return data });

export const getLaptopById = (laptopId) =>
    fetch(`http://localhost:8090/laptops/${laptopId}`)
        .then(data => data.json())
        .then((data) => {
            //console.log(data);
            return data });

