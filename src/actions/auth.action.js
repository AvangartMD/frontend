import { services } from '../services';
import { Cookies } from '../views/cookies';
import { expiryTime } from '../config';

export const authActions = {
  fetchBanners,
  fetchDashboardConfig,
};

function fetchedData(type, data) {
  return {
    type: type,
    data: data,
  };
}

function fetchBanners() {
  let data = Cookies.getWithExpiry('banners');
  if (!data) {
    return (dispatch) => {
      const response = services.get(`/admin/banner/list`);
      return response.then((promise) => {
        if (promise.data) {
          Cookies.setWithExpiry('banners', promise.data.data, expiryTime); // store data in localstorage
          dispatch(fetchedData('FETCHED_NFT_BANNERS', promise.data.data));
        } else {
          // console.log('error in getBanners actions');
        }
      });
    };
  } else {
    return (dispatch) => {
      return dispatch(fetchedData('FETCHED_NFT_BANNERS', data));
    };
  }
}

function fetchDashboardConfig() {
  let data = Cookies.getWithExpiry('dasboard');
  if (!data) {
    return (dispatch) => {
      const response = services.get(`/admin/dashboard/list`);
      return response.then((promise) => {
        if (promise.data) {
          Cookies.setWithExpiry('dasboard', promise.data.data, expiryTime); // store data in localstorage
          dispatch(fetchedData('FETCHED_DASHBOARD', promise.data.data));
        } else {
          // console.log('error in fetchDashboardConfig actions');
        }
      });
    };
  } else {
    return (dispatch) => {
      return dispatch(fetchedData('FETCHED_DASHBOARD', data));
    };
  }
}
