import { services } from '../services';

export const userActions = {
    fetchCategories,
    getProfile,
    getUserNFT,
    getCreators,
    updateUserDetails,
    getMoreCreators,
}

function fetchedData(type, data) {
  return {
    type: type,
    data: data,
  };
}

function fetchCategories() {
    return (dispatch) => {
      const response = services.get(`/category/list`);
      return response.then((promise) => {
        if (promise.data) {
          dispatch(fetchedData('FETCHED_CATEGORIES', promise.data.data));
        } else {
          // console.log('error in fetchCategories actions');
        }
      });
    };
}

function getProfile(userId) {
  return async (dispatch) => {
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
    const response = services.get(`nft/listNftByUser`);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData("FETCHED_USER_NFT", promise.data.data));
      } else {
        console.log("error");
      }
    });
  };
}

function getCreators(params={}) {
  return async (dispatch) => {
    const response = services.post(`user/listVerifiefCreator`, params);
    response.then((promise) => {
      if (promise.status === 200) {
        console.log(promise.data.data)
        dispatch(fetchedData("FETCHED_PAGINATION", promise.data.pagination));
        dispatch(fetchedData("FETCHED_CREATORS", promise.data.data));
      } else {
        console.log("error");
      }
    });
  };
}

function getMoreCreators(params={}) {
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