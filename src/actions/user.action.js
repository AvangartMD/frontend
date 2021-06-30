import { services } from "../services";

export const userActions = {
<<<<<<< HEAD
  fetchCategories,
  getProfile,
  getUserNFT,
  getCreators,
  updateUserDetails,
  getMoreCreators,
  createCollection,
};
=======
    fetchCategories,
    getUserNFT,
    updateUserDetails,
}
>>>>>>> da8ec694d0f4c1d81ff88c4c72b30133f5d7e4de

function fetchedData(type, data) {
  return {
    type: type,
    data: data,
  };
}

function fetchCategories() {
  return async (dispatch) => {
    const response = services.get(`/category/list`);
    const promise = await response;
    if (promise.data) {
      dispatch(fetchedData("FETCHED_CATEGORIES", promise.data.data));
    } else {
      // console.log('error in fetchCategories actions');
    }
  };
}

<<<<<<< HEAD
function getProfile(userId) {
  return (dispatch) => {
    const response = services.get(`user/userDetails?userId?=${userId}`);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData("FETCHED_PROFILE", promise.data.data));
      } else {
        console.log("error");
      }
    });
  };
}

=======
>>>>>>> da8ec694d0f4c1d81ff88c4c72b30133f5d7e4de
function updateUserDetails(params) {
  return async (dispatch) => {
    const response = services.put(`user/update`, params);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData("PROFILE_UPDATED", promise.data.data));
      } else {
        console.log("error");
      }
    });
  };
}

function getUserNFT() {
  return async (dispatch) => {
    const response = services.get(`nft/listNftByUser`, true);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData("FETCHED_USER_NFT", promise.data.data));
      } else {
        console.log("error");
      }
    });
  };
}
<<<<<<< HEAD
function createCollection(data) {
  let params = JSON.stringify(data);
  console.log("new", params);
  return async (dispatch) => {
    const response = services.post("nft/addCollection", params);
    response.then((promise) => {
      console.log("promise", response);
      if (promise.status === 200) {
        console.log("thus", promise.data);
        dispatch(fetchedData("CREATE_COLLECTION", promise.data));
      } else {
        dispatch(fetchedData("CREATE_COLLECTION", promise.response.data));
      }
    });
  };
}

function getCreators(params = {}) {
  return async (dispatch) => {
    const response = services.post(`user/listVerifiefCreator`, params);
    response.then((promise) => {
      if (promise.status === 200) {
        console.log(promise.data.data);
        dispatch(fetchedData("FETCHED_PAGINATION", promise.data.pagination));
        dispatch(fetchedData("FETCHED_CREATORS", promise.data.data));
      } else {
        console.log("error");
      }
    });
  };
}

function getMoreCreators(params = {}) {
  return async (dispatch) => {
    const response = services.post(`user/listVerifiefCreator`, params);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData("FETCHED_PAGINATION", promise.data.pagination));
        dispatch(fetchedData("FETCHED_MORE_CREATORS", promise.data.data));
      } else {
        console.log("error");
      }
    });
  };
}
=======
>>>>>>> da8ec694d0f4c1d81ff88c4c72b30133f5d7e4de
