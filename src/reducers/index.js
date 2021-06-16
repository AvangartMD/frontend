import { combineReducers } from 'redux';

import { fetchDashboardBanners } from './auth.reducer';
import { fetchNFTContractInstance, fetchNetworkId } from './web3.reducer';


const rootReducer = combineReducers({
  fetchNFTContractInstance, fetchNetworkId, fetchDashboardBanners,
});

export default rootReducer;
