import { services } from '../services';

export const userActions = {
    fetchCategories,
    getProfile,
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
        console.log("user profile ", promise.data.data);
        dispatch(fetchedData("FETCHED_PROFILE", promise.data.data));
      } else {
        console.log("error");
      }
    });
  };
}