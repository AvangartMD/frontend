
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