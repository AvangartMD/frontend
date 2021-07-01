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
  // fetchCreators,
  // fetchPagination,
  // fetchMoreCreators,
  fetchNewCollection,
} from "./user.reducer";

const rootReducer = combineReducers({
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
});

export default rootReducer;
