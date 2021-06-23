import { combineReducers } from "redux";
import { fetchNonce, fetchAuthData } from "./defi.reducer";
import {
  fetchDashboardBanners,
  fetchDashboard,
  fetchDashboardInfo,
} from "./auth.reducer";
import {
  fetchNFTContractInstance,
  fetchNetworkId,
  fetchWeb3Data,
} from "./web3.reducer";

const rootReducer = combineReducers({
  fetchAuthData,
  fetchNonce,
  fetchNFTContractInstance,
  fetchNetworkId,
  fetchDashboardBanners,
  fetchDashboardInfo,
  fetchDashboard,
  fetchWeb3Data,
});

export default rootReducer;
