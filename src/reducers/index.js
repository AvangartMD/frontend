import { combineReducers } from "redux";
import {
  fetchNonce,
  fetchAuthData,
  fetchCategoryList,
  fetchCollectionList,
  fetchNewNFTId,
  fetchUserProfile,
  fetchResponseFailed,
} from "./defi.reducer";
import {
  fetchDashboardBanners,
  fetchDashboard,
  fetchDashboardInfo,
  fetchDashboardHallFrameInfo,
  fetchCreators,
  fetchPagination,
  fetchMoreCreators,
  fetchMarketPlaceNFT,
  fetchMoreMarketPlaceNFT,
  fetchCollections,
  fetchCollectionDetails,
  fetchMoreCollections,
  updateCollection,
  fetchTopNFT,
  fetchTopCollection,
} from "./auth.reducer";
import {
  fetchNFTContractInstance,
  fetchNetworkId,
  fetchWeb3Data,
} from "./web3.reducer";
import {
  fetchCategory,
  updateProfile,
  fetchUserNFT,
  fetchNewCollection,
  fetchUserDraftNFT,
  fetchSingleNFTDetails,
  fetchProfile,
  fetchLikesCount,
  fetchIsLiked,
  fetchIsFollow,
  fetchLikedNFT,
  fetchCollectedNFT,
  fetchCollectionNFT,
  fetchNFTEditionHistory,
  fetchNotifications,
} from "./user.reducer";

const rootReducer = combineReducers({
  fetchIsLiked,
  fetchLikesCount,
  fetchSingleNFTDetails,
  fetchUserDraftNFT,
  fetchNewCollection,
  fetchCategoryList,
  fetchCollectionList,
  fetchNewNFTId,
  fetchAuthData,
  fetchNonce,
  fetchNFTContractInstance,
  fetchNetworkId,
  fetchDashboardBanners,
  fetchDashboardInfo,
  fetchDashboard,
  fetchWeb3Data,
  fetchCategory,
  fetchDashboardHallFrameInfo,
  updateProfile,
  fetchUserNFT,
  fetchCreators,
  fetchPagination,
  fetchMoreCreators,
  fetchMarketPlaceNFT,
  fetchMoreMarketPlaceNFT,
  fetchCollections,
  fetchCollectionDetails,
  fetchUserProfile,
  fetchProfile,
  fetchResponseFailed,
  fetchMoreCollections,
  updateCollection,
  fetchIsFollow,
  fetchTopNFT,
  fetchTopCollection,
  fetchLikedNFT,
  fetchCollectedNFT,
  fetchCollectionNFT,
  fetchNFTEditionHistory,
  fetchNotifications,
});

export default rootReducer;
