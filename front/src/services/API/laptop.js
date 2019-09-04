

export const getLaptops = (search, page, limit) =>
    fetch(`http://localhost:8090/laptops/page/${page}/${limit}?search=${search}`, {
        method: "GET",
    })
        .then(data => data.json())
        .then((data) => {
            //console.log(data);
            return data
        });


export const getLaptopByBrandNameAndModel = (brandName, model) =>
    fetch(`http://localhost:8090/laptops/${brandName}/${model}`)
        .then(data => data.json())
        .then((data) => {
            //console.log(data);
            return data });

