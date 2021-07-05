export function fetchCategory(state = null, action) {
  switch (action.type) {
    case "FETCHED_CATEGORIES":
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
export function fetchNewCollection(state = null, action) {
  switch (action.type) {
    case "CREATE_COLLECTION":
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
export function fetchUserDraftNFT(state = null, action) {
  switch (action.type) {
    case "FETCHED_USER_DRAFT_NFT":
      return action.data;
    default:
      return state;
  }
}
export function fetchSingleNFTDetails(state = null, action) {
  switch (action.type) {
    case "FETCHED_SINGLE_NFT_DETAILS":
      return action.data;
    default:
      return state;
  }
}
