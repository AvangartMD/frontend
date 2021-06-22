import { services } from "../services";

function setData(data, type) {
  return {
    type: type,
    data: data,
  };
}
function addNFT(data) {
  return (dispatch) => {
    const url = "nft/addNft";
    let params = JSON.stringify({ data });
    const response = services.post(url, params);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(setData(promise.data.data, "ADD_NFT"));
      } else {
        // console.log('erroer');
      }
    });
  };
}
function authLogin(nonce, signature) {
  return (dispatch) => {
    const url = "user/login";
    let params = JSON.stringify({
      nonce: nonce,
      signature: signature,
    });
    const response = services.post(url, params);
    response.then((promise) => {
      if (promise.status === 200) {
        localStorage.setItem("authKey", promise.data.data.token);
        console.log("token", promise.data.data);
        dispatch(setData(promise.data.data, "AUTH_LOGIN"));
      } else {
        // console.log('erroer');
      }
    });
  };
}
function generateNonce(address) {
  return async (dispatch) => {
    const url = `user/genrateNonce/${address}`;
    const response = services.get(url);
    response.then((promise) => {
      if (promise.status === 200) {
        console.log("token", promise.data.data);
        dispatch(setData(promise.data.data.nonce, "GENERATE_NONCE"));
      } else {
        console.log("erroer");
      }
    });
  };
}

export const defiActions = { addNFT, authLogin, generateNonce };
