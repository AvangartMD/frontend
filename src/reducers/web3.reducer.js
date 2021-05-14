export function fetchRookieContractInstance(state = null, action) {
  switch (action.type) {
    case "FETCH_ROOKIE_CONTRACT_INSTANCE":
      return action.data;
    default:
      return state;
  }
}

export function fetchTokenContractInstance(state = null, action) {
  switch (action.type) {
    case "FETCH_TOKEN_CONTRACT_INSTANCE":
      return action.data;
    default:
      return state;
  }
}
export function fetchProfessionalContractInstance(state = null, action) {
  switch (action.type) {
    case "FETCH_PROFESSIONAL_CONTRACT_INSTANCE":
      return action.data;
    default:
      return state;
  }
}
export function fetchLegendaryContractInstance(state = null, action) {
  switch (action.type) {
    case "FETCH_LEGENDARY_CONTRACT_INSTANCE":
      return action.data;
    default:
      return state;
  }
}

export function fetchUserMetamaskTotalBalances(state = null, action) {
  switch (action.type) {
    case "FETCH_USER_METAMASK_TOTAL_BALANCES":
      return action.data;
    default:
      return state;
  }
}

export function riskType(state = false, action) {
  switch (action.type) {
    case "RISK_TYPE":
      return action.data;
    default:
      return state;
  }
}

export function fetchLiquidityContractInstance(state = null, action) {
  switch (action.type) {
    case "FETCH_LIQUIDITY_CONTRACT_INSTANCE":
      return action.data;
    default:
      return state;
  }
}
export function fetchLiquidityTokenContractInstance(state = null, action) {
  switch (action.type) {
    case "FETCH_LIQUIDITY_TOKEN_CONTRACT_INSTANCE":
      return action.data;
    default:
      return state;
  }
}

export function defaultProvider(state = "metamask", action) {
  switch (action.type) {
    case "DEFAULT_PROVIDER":
      return action.data;
    default:
      return state;
  }
}

export function providers(state = null, action) {
  switch (action.type) {
    case "DEAFULT_PROVIDER_DATA":
      return action.data;
    default:
      return state;
  }
}
export function fetchNetworkId(state = null, action) {
  switch (action.type) {
    case "FETCH_NETWORK_ID":
      return action.data;
    default:
      return state;
  }
}
export function fetchNabox(state = null, action) {
  switch (action.type) {
    case "FETCH_NABOX":
      return action.data;
    default:
      return state;
  }
}
