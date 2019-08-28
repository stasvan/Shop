

export const getPhones = (page, limit) =>
    fetch(`http://localhost:8090/phones/page/${page}/${limit}`, {
        method: "GET",
    })
        .then(data => data.json())
        .then((data) => {
            // console.log(data);
            return data });

export const getPhoneByBrandNameAndModel = (brandName, model) =>
    fetch(`http://localhost:8090/phones/${brandName}/${model}`)
        .then(data => data.json())
        .then((data) => {
            //console.log(data);
            return data });

