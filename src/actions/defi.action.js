import { CostExplorer } from "aws-sdk";
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
    let params = JSON.stringify(data);
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
    response.then(async (promise) => {
      if (promise.status === 200) {
        localStorage.setItem("token", promise.data.data.token);
        if (promise.data.data.token) {
          const newresp = await services.getWeb3();
          newresp.isLoggedIn = true;
          dispatch(setData(newresp, "FETCH_WEB3_DATA"));
        }
        dispatch(setData(promise.data.data, "AUTH_LOGIN"));
        localStorage.setItem('avarnGart', promise.data.data.details.id)
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
function getCategoryList() {
  return async (dispatch) => {
    const url = `category/list`;
    const response = services.get(url);
    response.then((promise) => {
      if (promise.status === 200) {
        console.log("category List", promise.data.data);
        dispatch(setData(promise.data.data, "CATEGORY_LIST"));
      } else {
        console.log("erroer");
      }
    });
  };
}
function getCollectionList() {
  return async (dispatch) => {
    const url = `nft/listCollection`;
    const response = services.get(url, true);
    response.then((promise) => {
      if (promise.status === 200) {
        console.log("collection here", promise.data.data);
        dispatch(setData(promise.data.data, "COLLECTION_LIST"));
      } else {
        console.log("erroer");
      }
    });
  };
}

export const defiActions = {
  addNFT,
  authLogin,
  generateNonce,
  getCategoryList,
  getCollectionList,
};
