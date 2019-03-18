


export const getImage = (url) =>
    fetch(`${url}`)
        .then((data) => {
            console.log(data);
            return data });
