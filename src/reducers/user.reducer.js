
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

export function getUserNFT(state = null, action) {
  switch (action.type) {
    case "FETCHED_USER_NFT":
      return action.data;
    default:
      return state;
  }
}

export function getCreators(state = null, action) {
  switch (action.type) {
    case "FETCHED_CREATORS":
      return action.data;
    default:
      return state;
  }
}

export function searchCreators(state = null, action) {
  switch (action.type) {
    case "FETCHED_SEARCH_CREATORS":
      return action.data;
    default:
      return state;
  }
}

export function rankCreators(state = null, action) {
  switch (action.type) {
    case "FETCHED_RANKE_CREATORS":
      return action.data;
    default:
      return state;
  }
}

export function getPagination(state = null, action) {
  switch (action.type) {
    case "FETCHED_PAGINATION":
      return action.data;
    default:
      return state;
  }
}