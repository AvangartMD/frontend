import { services } from '../services';

export const authActions = {
  fetchBanners,
  fetcInfo,
  fetchDashboardConfig,
};

function fetchedData(type, data) {
  return {
    type: type,
    data: data,
  };
}

function fetchBanners() {
    return (dispatch) => {
      const response = services.get(`/admin/banner/list`);
      return response.then((promise) => {
        if (promise.data) {
          dispatch(fetchedData('FETCHED_NFT_BANNERS', promise.data.data));
        } else {
          // console.log('error in getBanners actions');
        }
      });
    };
}

function fetcInfo() {
  return (dispatch) => {
    const response = services.get(`/admin/info/list`);
    return response.then((promise) => {
      if (promise.data) {
        dispatch(fetchedData('FETCHED_INFO', promise.data.data));
      } else {
        // console.log('error in fetcInfo actions');
      }
    });
  };
}

function fetchDashboardConfig() {
    return (dispatch) => {
      const response = services.get(`/admin/dashboard/list`);
      return response.then((promise) => {
        if (promise.data) {
          dispatch(fetchedData('FETCHED_DASHBOARD', promise.data.data));
        } else {
          // console.log('error in fetchDashboardConfig actions');
        }
      });
    };
}
