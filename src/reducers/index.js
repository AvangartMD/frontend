import { combineReducers } from "redux";
import {
  fetchNonce,
  fetchAuthData,
  fetchCategoryList,
  fetchCollectionList,
  fetchNewNFTId,
  fetchUserProfile,
  fetchResponseFailed,
  fetchUpdatedNFTId,
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
  fetchProfileInfo,
  fetchHallOfFrameCollector,
  fetchHallOfFrameArtwork,
  fetchHallOfFrameArtist,
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
  fetchProfileBanner,
  fetchLanguage,
  verified_by_instagram,
  fetch_twitter_access_token,
  verified_by_twitter,
  fetchListToken,
} from "./user.reducer";

const rootReducer = combineReducers({
  fetchLanguage,
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
  fetchProfileBanner,
  fetchProfileInfo,
  fetchUpdatedNFTId,
  fetchHallOfFrameCollector,
  fetchHallOfFrameArtwork,
  fetchHallOfFrameArtist,
  verified_by_instagram,
  fetch_twitter_access_token,
  verified_by_twitter,
  fetchListToken,
});

export default rootReducer;
