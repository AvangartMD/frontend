
export function fetchCategory(state = null, action) {
    switch (action.type) {
      case 'FETCHED_CATEGORIES':
        return action.data;
      default:
        return state;
    }
}