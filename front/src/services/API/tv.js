

export const getTvs = (page, limit) =>
    fetch(`http://localhost:8090/tvs/page/${page}/${limit}`, {
        method: "GET",
    })
        .then(data => data.json())
        .then((data) => {
            //console.log(data);
            return data });

export const getTvByBrandNameAndModel = (brandName, model) =>
    fetch(`http://localhost:8090/tvs/${brandName}/${model}`)
        .then(data => data.json())
        .then((data) => {
            //console.log(data);
            return data });

