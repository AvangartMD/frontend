import { services } from "../services";

export const authActions = {
  fetchBanners,
  fetcInfo,
  fetcHallFrameInfo,
  fetchDashboardConfig,
  getCreators,
  getMoreCreators,
  getMarketPlaceNFT,
  getMoreMarketPlaceNFT,
  getCollections,
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
        dispatch(fetchedData("FETCHED_NFT_BANNERS", promise.data.data));
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
        dispatch(fetchedData("FETCHED_INFO", promise.data.data));
      } else {
        // console.log('error in fetcInfo actions');
      }
    });
  };
}

function fetcHallFrameInfo() {
  return (dispatch) => {
    const response = services.get(`/admin/hall-frame-info/list`);
    return response.then((promise) => {
      if (promise.data) {
        dispatch(fetchedData('FETCHED_HALL_FRAME_INFO', promise.data.data));
      } else {
        // console.log('error in fetcHallFrameInfo actions');
      }
    });
  };
}

function fetchDashboardConfig() {
  return (dispatch) => {
    const response = services.get(`/admin/dashboard/list`);
    return response.then((promise) => {
      if (promise.data) {
        dispatch(fetchedData("FETCHED_DASHBOARD", promise.data.data));
      } else {
        // console.log('error in fetchDashboardConfig actions');
      }
    });
  };
}

function getCreators(params={}) {
  return async (dispatch) => {
    const response = services.post(`user/listVerifiefCreator`, params);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData("FETCHED_PAGINATION", promise.data.pagination));
        dispatch(fetchedData("FETCHED_CREATORS", promise.data.data));
      } else {
        // console.log("error");
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
        // console.log("error");
      }
    });
  };
}

function getMarketPlaceNFT(params={}) {
  return async (dispatch) => {
    const response = services.post(`nft/listMarketPlace`, params);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData("FETCHED_PAGINATION", promise.data.pagination));
        dispatch(fetchedData("FETCHED_MARKETPLACE", promise.data.data));
      } else {
        // console.log("error");
      }
    });
  };
}

function getMoreMarketPlaceNFT(params={}) {
  return async (dispatch) => {
    const response = services.post(`nft/listMarketPlace`, params);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData("FETCHED_PAGINATION", promise.data.pagination));
        dispatch(fetchedData("FETCHED_MORE_MARKETPLACE", promise.data.data));
      } else {
        // console.log("error");
      }
    });
  };
}

function getCollections(params={}) {
  return async (dispatch) => {
    const response = services.get(`nft/listCollection`, params);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData("FETCHED_COLLECTIONS", promise.data.data));
      } else {
        // console.log("error");
      }
    });
  };
}
