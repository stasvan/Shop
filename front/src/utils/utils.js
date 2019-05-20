import {toast} from 'react-toastify';

function showStatusErrorToast(err) {
  const res = err.response
  toast.error(`Error ${res.status} has occured! ${res.statusText}`, {
    position: toast.POSITION.TOP_LEFT,
    autoClose: 5000
  })
}

function showTextErrorToast(err) {
  toast.info(err, {
    position: toast.POSITION.TOP_LEFT,
    autoClose: 5000
  })
}

function showTextToast(text) {
  toast(text, {
    position: toast.POSITION.TOP_LEFT,
    autoClose: 5000,
  })
}

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = decodeURIComponent(atob(base64Url).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(base64);
}

export {
  parseJwt,
  showStatusErrorToast,
  showTextErrorToast,
  showTextToast
}
