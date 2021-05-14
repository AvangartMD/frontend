// import Web3 from "web3";
// import web3 from '../web3';
import { services } from "../services";
// import professionalContractABI from "../contracts/professional.json";
// import legendaryContractABI from "../contracts/legendary.json";
// import contractAddresses from "../contracts/contractAddresses";
// import rookieContractABI from "../contracts/rookie.json";
// import liquidityContractABI from "../contracts/liquidity.json";
// import tokenContractABI from "../contracts/token.json";
// import liquidityTokenContractABI from "../contracts/liquidityTokenContract.json";

function getWeb3Data(data) {
  return {
    type: "FETCH_WEB3_DATA", // dispatch user login event
    data: data,
  };
}
function fetchMetamask(data) {
  return {
    type: "FETCH_METAMASK", // dispatch user login event
    data: data,
  };
}

function fetchUserBalances(data) {
  return {
    type: "FETCH_USER_BALANCES", // dispatch user login event
    data: data,
  };
}
function fetchRookieContractInstance(data) {
  return {
    type: "FETCH_ROOKIE_CONTRACT_INSTANCE", // dispatch user login event
    data: data,
  };
}
function fetchTokenContractInstance(data) {
  return {
    type: "FETCH_TOKEN_CONTRACT_INSTANCE", // dispatch user login event
    data: data,
  };
}
function fetchProfessionalContractInstance(data) {
  return {
    type: "FETCH_PROFESSIONAL_CONTRACT_INSTANCE",
    data: data,
  };
}
function fetchLegendaryContractInstance(data) {
  return {
    type: "FETCH_LEGENDARY_CONTRACT_INSTANCE",
    data: data,
  };
}

function setProvider(data) {
  return {
    type: "DEFAULT_PROVIDER",
    data: data,
  };
}

function setProviderData(data) {
  return {
    type: "DEAFULT_PROVIDER_DATA",
    data: data,
  };
}

function fetchLiquidityContractInstance(data) {
  return {
    type: "FETCH_LIQUIDITY_CONTRACT_INSTANCE",
    data: data,
  };
}
function fetchLiquidityTokenContractInstance(data) {
  return {
    type: "FETCH_LIQUIDITY_TOKEN_CONTRACT_INSTANCE",
    data: data,
  };
}

function setRiskType(type) {
  return {
    type: "RISK_TYPE", // dispatch user risk
    data: type,
  };
}
function setNetworkId(data) {
  return { type: "FETCH_NETWORK_ID", data: data };
}

function fetchNabox(data) {
  return { type: "FETCH_NABOX", data: data };
}

// get defi categories
function getNetworkId() {
  return (dispatch) => {
    const response = services.getNetworkId();
    response.then((promise) => {
      dispatch(setNetworkId(promise));
    });
  };
}

function getWeb3(val) {
  if (val) {
    return (dispatch) => {
      dispatch(getWeb3Data(null));
    };
  } else
    return (dispatch) => {
      const response = services.getWeb3();
      response.then((promise) => {
        if (promise && promise.isLoggedIn) {
          dispatch(getWeb3Data(promise));
          // if (promise.isLoggedIn) {
          if (
            localStorage.getItem("address") &&
            localStorage.getItem("address").toLocaleLowerCase() ===
              promise.accounts[0].toLocaleLowerCase() &&
            localStorage.getItem("risk")
          ) {
            const riskType =
              localStorage.getItem("risk") === "false" ? false : true;
            dispatch(setRiskType(riskType));
          } else {
            localStorage.setItem("risk", "false");
            localStorage.setItem(
              "address",
              promise.accounts[0].toLocaleLowerCase()
            );
            dispatch(setRiskType(false));
          }
          // }
        } else {
          console.log("errorrrr in actions");
        }
      });
    };
}

function enableMetamask() {
  return (dispatch) => {
    const response = services.enableMetamask();
    response.then((promise) => {
      if (promise) {
        dispatch(fetchMetamask(promise));
      } else {
        console.log("error in actions");
      }
    });
  };
}
function enableNabox() {
  return (dispatch) => {
    const response = services.enableNabox();
    response.then((promise) => {
      if (promise) {
        dispatch(fetchNabox(promise));
      } else {
        console.log("error in actions");
      }
    });
  };
}
function getUserBalances(userAddress) {
  return (dispatch) => {
    const response = services.getUserBalances(userAddress);
    response.then((promise) => {
      if (promise) {
        dispatch(fetchUserBalances(promise));
      } else {
        console.log("error in actions");
      }
    });
  };
}

// function getRookieContractInstance() {
//   const { rookie } = contractAddresses();
//   return (dispatch) => {
//     const response = services.getContractInstance(rookieContractABI, rookie);
//     response.then((promise) => {
//       if (promise) {
//         dispatch(fetchRookieContractInstance(promise));
//       } else {
//         console.log("error in actions");
//       }
//     });
//   };
// }

// function getProfessionalContractInstance() {
//   const { professional } = contractAddresses();
//   return (dispatch) => {
//     const response = services.getContractInstance(
//       professionalContractABI,
//       professional
//     );
//     response.then((promise) => {
//       if (promise) {
//         dispatch(fetchProfessionalContractInstance(promise));
//       } else {
//         console.log("error in actions");
//       }
//     });
//   };
// }
// function getLegendaryContractInstance() {
//   const { legendary } = contractAddresses();
//   return (dispatch) => {
//     const response = services.getContractInstance(
//       legendaryContractABI,
//       legendary
//     );
//     response.then((promise) => {
//       if (promise) {
//         dispatch(fetchLegendaryContractInstance(promise));
//       } else {
//         console.log("error in actions");
//       }
//     });
//   };
// }

// function getTokenContractInstance() {
//   const { tokenContract } = contractAddresses();
//   return (dispatch) => {
//     const response = services.getContractInstance(
//       tokenContractABI,
//       tokenContract
//     );
//     // const response = services.getTokenContractInstance();
//     response.then((promise) => {
//       if (promise) {
//         dispatch(fetchTokenContractInstance(promise));
//       } else {
//         console.log("error in actions");
//       }
//     });
//   };
// }
// function getLiquidityContractInstance() {
//   let { liquidity } = contractAddresses();
//   return (dispatch) => {
//     const response = services.getContractInstance(
//       liquidityContractABI,
//       liquidity
//     );
//     response.then((promise) => {
//       if (promise) {
//         dispatch(fetchLiquidityContractInstance(promise));
//       } else {
//         console.log("error in actions");
//       }
//     });
//   };
// }
// function getLiquidityTokenContractInstance() {
//   let { liquidityTokenContract } = contractAddresses();
//   return (dispatch) => {
//     const response = services.getContractInstance(
//       liquidityTokenContractABI,
//       liquidityTokenContract
//     );
//     response.then((promise) => {
//       if (promise) {
//         dispatch(fetchLiquidityTokenContractInstance(promise));
//       } else {
//         console.log("error in actions");
//       }
//     });
//   };
// }

function setRiskForUser(risk) {
  return (dispatch) => {
    localStorage.setItem("risk", risk.toString());
    dispatch(setRiskType(risk));
  };
}

function setProviders(provider) {
  return (dispatch) => {
    dispatch(setProvider(provider));
  };
}

function setProvidersData(data) {
  return (dispatch) => {
    dispatch(setProviderData(data));
  };
}

export const web3Actions = {
  getNetworkId,
  getWeb3,
  enableMetamask,
  getUserBalances,
  // getRookieContractInstance,
  // getTokenContractInstance,
  // getProfessionalContractInstance,
  // getLegendaryContractInstance,
  // getLiquidityTokenContractInstance,
  // getLiquidityContractInstance,
  setRiskForUser,
  setProviders,
  setProvidersData,
  enableNabox,
};
