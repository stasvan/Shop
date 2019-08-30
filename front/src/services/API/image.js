
export const changeShopImage = (shopName, fd, token) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    // myHeaders.append("Content-Type", "multipart/form-data");

    const myInit = {
        method: 'POST',
        headers: myHeaders,
        body: fd
    };

    return fetch(`http://localhost:8090/image/shop/${shopName}`, myInit)
        .then(res => {
           console.log(res);
           return res
        });
}