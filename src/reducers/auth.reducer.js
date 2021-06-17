
export function fetchDashboardBanners(state = null, action) {
    switch (action.type) {
      case 'FETCHED_NFT_BANNERS':
        return action.data;
      default:
        return state;
    }
}

export function fetchDashboard(state = null, action) {
  switch (action.type) {
    case 'FETCHED_DASHBOARD':
      return action.data;
    default:
      return state;
  }
}