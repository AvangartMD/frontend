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

export function fetchProfile(state = null, action) {
  switch (action.type) {
    case "FETCHED_PROFILE":
      return action.data;
    default:
      return state;
  }
}
export function fetchLikesCount(state = { count: 0 }, action) {
  switch (action.type) {
    case "FETCHED_LIKES_COUNT":
      return action.data;
    default:
      return state;
  }
}
export function fetchLikeToggled(state = null, action) {
  switch (action.type) {
    case "FETCHED_LIKE_TOGGLED":
      return action.data;
    default:
      return state;
  }
}
export function fetchIsLiked(state = { isFollowed: false }, action) {
  switch (action.type) {
    case "FETCHED_IS_LIKED":
      return action.data;
    default:
      return state;
  }
}
