import { combineReducers } from "redux";
import {
  fetchNonce,
  fetchAuthData,
  fetchCategoryList,
  fetchCollectionList,
  fetchNewNFTId,
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
  fetchUserProfile,
  fetchProfile,
} from "./user.reducer";

const rootReducer = combineReducers({
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
});

export default rootReducer;
