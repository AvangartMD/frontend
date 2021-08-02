import { services } from '../services';

export const userActions = {
  fetchCategories,
  getProfile,
  getUserNFT,
  getCreators,
  updateUserDetails,
  getMoreCreators,
  createCollection,
  getUserDraftNFT,
  getSingleNFTDetails,
  getLikesCount,
  likeToggler,
  getIsLiked,
  getIsFollow,
  followToggler,
  getLikedNFT,
  getCollectedNFT,
  getCollectionNFT,
  getEditionHistory,
  getNotifications,
  getProfileBanner,
};

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
      dispatch(fetchedData('FETCHED_CATEGORIES', promise.data.data));
    } else {
      // console.log('error in fetchCategories actions');
    }
  };
}

function getProfile(userId) {
  return (dispatch) => {
    const response = services.get(`user/userDetails?userId=${userId}`, true);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData('FETCHED_PROFILE', promise.data.data));
      } else {
        // console.log("error");
      }
    });
  };
}

function updateUserDetails(params) {
  return async (dispatch) => {
    try {
      const response = services.put(`user/update`, params);
      response.then((promise) => {
        if (promise.status === 200) {
          dispatch(fetchedData('PROFILE_UPDATED', promise.data.data));
        } else {
          // console.log("error");
        }
      });
      response.then((data) => {
        if (data.response) {
          dispatch(fetchedData('API_FAILED', data.response.data.message));
        }
      });
    } catch (error) {
      // console.log("error");
    }
  };
}

function getUserNFT(id, filter) {
  return async (dispatch) => {
    const response = services.get(
      id
        ? `nft/listNftByUser/${id}?status=${filter}`
        : `nft/listNftByUser?status=${filter}`,
      true
    );
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData('FETCHED_USER_NFT', promise.data.data));
      } else {
        // console.log("error");
      }
    });
  };
}
function createCollection(data) {
  let params = JSON.stringify(data);
  return async (dispatch) => {
    const response = services.post('nft/addCollection', params);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData('CREATE_COLLECTION', promise.data));
      } else {
        dispatch(fetchedData('CREATE_COLLECTION', promise.response.data));
      }
    });
  };
}

function getCreators(params = {}) {
  return async (dispatch) => {
    const response = services.post(`user/listVerifiefCreator`, params);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData('FETCHED_PAGINATION', promise.data.pagination));
        dispatch(fetchedData('FETCHED_CREATORS', promise.data.data));
      } else {
        // console.log("error");
      }
    });
  };
}

function getMoreCreators(params = {}) {
  return async (dispatch) => {
    const response = services.post(`user/listVerifiefCreator`, params);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData('FETCHED_PAGINATION', promise.data.pagination));
        dispatch(fetchedData('FETCHED_MORE_CREATORS', promise.data.data));
      } else {
        // console.log("error");
      }
    });
  };
}

function getUserDraftNFT() {
  return async (dispatch) => {
    const response = services.get(`nft/listNftByUser?filter=draft`, true);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData('FETCHED_USER_DRAFT_NFT', promise.data.data));
      } else {
        // console.log("error");
      }
    });
  };
}

function getSingleNFTDetails(id) {
  return async (dispatch) => {
    const response = services.get(`nft/single/${id}`, true);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData('FETCHED_SINGLE_NFT_DETAILS', promise.data.data));
      } else {
        // console.log("error");
      }
    });
  };
}

function getLikesCount(id) {
  return async (dispatch) => {
    const response = services.get(`like/getLikesCount/${id}`);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData('FETCHED_LIKES_COUNT', promise.data.data));
      } else {
        // console.log("error");
      }
    });
  };
}
function likeToggler(id) {
  return async (dispatch) => {
    const response = services.get(`like/toggle/${id}`, true);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(getIsLiked(id));
        dispatch(getLikesCount(id));
      } else {
        // console.log("error");
      }
    });
  };
}

function getIsLiked(id) {
  return async (dispatch) => {
    const response = services.get(`like/isLiked/${id}`, true);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData('FETCHED_IS_LIKED', promise.data.data));
      } else {
        // console.log("error");
      }
    });
  };
}

function getIsFollow(id) {
  return async (dispatch) => {
    const response = services.get(`follow/checkIsFollowed/${id}`, true);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData('FETCHED_IS_FOLLOW', promise.data.data));
      } else {
        // console.log("error");
      }
    });
  };
}

function followToggler(id) {
  return async (dispatch) => {
    const response = services.get(`follow/toggle/${id}`, true);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(getIsFollow(id));
      } else {
        // console.log("error");
      }
    });
  };
}

function getLikedNFT(id) {
  return async (dispatch) => {
    const response = services.get(
      id ? `nft/getLikedNfts/${id}` : `nft/getLikedNfts`,
      true
    );
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData('FETCHED_LIKED_NFT', promise.data.data));
      } else {
        // console.log("error");
      }
    });
  };
}

function getCollectedNFT(id) {
  return async (dispatch) => {
    const response = services.get(
      id ? `nft/getCollectedNfts/${id}` : `nft/getCollectedNfts`,
      true
    );
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData('FETCHED_COLLECTED_NFT', promise.data.data));
      } else {
        // console.log("error");
      }
    });
  };
}

function getCollectionNFT(id) {
  return async (dispatch) => {
    const response = services.get(
      id ? `nft/listCollection/${id}` : `nft/listCollection`,
      true
    );
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData('FETCHED_COLLECTION_NFT', promise.data.data));
      } else {
        // console.log("error");
      }
    });
  };
}

function getEditionHistory(nftId, edition) {
  return async (dispatch) => {
    const response = services.get(`nft/history/${nftId}/${edition}`);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData('FETCHED_NFT_EDITION_HISTORY', promise.data.data));
      } else {
        // console.log("error");
      }
    });
  };
}

function getNotifications() {
  return async (dispatch) => {
    const response = services.get(`notification/list`, true);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData('FETCHED_NOTIFICATIONS', promise.data.data));
      } else {
        // console.log("error");
      }
    });
  };
}

function getProfileBanner() {
  return (dispatch) => {
    const response = services.get(`/admin/profile-info/list`);
    return response.then((promise) => {
      if (promise.data) {
        dispatch(fetchedData('FETCHED_PROFILE_BANNERS', promise.data.data));
      } else {
        // console.log("error");
      }
    });
  };
}
