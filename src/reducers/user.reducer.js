
export function fetchCategory(state = null, action) {
    switch (action.type) {
      case 'FETCHED_CATEGORIES':
        return action.data;
      default:
        return state;
    }
}

export function fetchProfile(state = null, action) {
  switch (action.type) {
    case "FETCHED_PROFILE":
      return action.data;
    default:
      return state;
  }
}

export function updateProfile(state = null, action) {
  switch (action.type) {
    case "PROFILE_UPDATED":
      return action.data;
    default:
      return state;
  }
}

export function fetchUserNFT(state = null, action) {
  switch (action.type) {
    case "FETCHED_USER_NFT":
      return action.data;
    default:
      return state;
  }
}

export function fetchCreators(state = null, action) {
  switch (action.type) {
    case "FETCHED_CREATORS":
      return action.data;
    case "CLEAR_CREATORS":
      return action.data;
    default:
      return state;
  }
}

export function fetchPagination(state = null, action) {
  switch (action.type) {
    case "FETCHED_PAGINATION":
      return action.data;
    case "CLEAR_PAGINATION":
      return action.data;
    default:
      return state;
  }
}

export function fetchMoreCreators(state = null, action) {
  switch (action.type) {
    case "FETCHED_MORE_CREATORS":
      return action.data;
    case "CLEAR_MORE_CREATORS":
      return action.data;
    default:
      return state;
  }
}