export function fetchNonce(state = null, action) {
  switch (action.type) {
    case "GENERATE_NONCE":
      return action.data;
    default:
      return state;
  }
}

export function fetchAuthData(state = null, action) {
  switch (action.type) {
    case "AUTH_LOGIN":
      return action.data;
    default:
      return state;
  }
}
