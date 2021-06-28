import { services } from '../services';

export const userActions = {
    fetchCategories,
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
