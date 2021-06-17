import { combineReducers } from 'redux';

import { fetchDashboardBanners, fetchDashboard } from './auth.reducer';
import { fetchNFTContractInstance, fetchNetworkId } from './web3.reducer';


const rootReducer = combineReducers({
  fetchNFTContractInstance, fetchNetworkId, fetchDashboardBanners,
  fetchDashboard,
});

export default rootReducer;
