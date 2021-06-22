import { combineReducers } from "redux";
import { fetchNonce, fetchAuth } from "./defi.reducer";
import { fetchDashboardBanners, fetchDashboard } from "./auth.reducer";
import {
  fetchNFTContractInstance,
  fetchNetworkId,
  fetchWeb3Data,
} from "./web3.reducer";

const rootReducer = combineReducers({
  fetchAuth,
  fetchNonce,
  fetchNFTContractInstance,
  fetchNetworkId,
  fetchDashboardBanners,
  fetchDashboard,
  fetchWeb3Data,
});

export default rootReducer;
