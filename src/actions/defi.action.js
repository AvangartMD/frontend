import { services } from '../services';

function setData(data, type) {
  return {
    type: type,
    data: data,
  };
}

// get defi categories
// function getDefiCategories() {
//   return (dispatch) => {
//     const url = "/api/v1/project/categories";

//     const response = services.get(url);
//     response.then((promise) => {
//       if (promise.status === 200) {
//         dispatch(getDefiCategoriesList(promise.data.data));
//       } else {
//         //   handle the error
//         // errorHandler(promise);
//       }
//     });
//   };
// }

// function getProject(category, limit) {
//   return (dispatch) => {
//     let url = "api/v1/project/fetch";
//     if (category) url += `?category=${category}`;
//     if (limit) url += (category ? `&` : `?`) + `limit=${limit}`;
//     const response = services.get(url);
//     response.then((promise) => {
//       if (promise.status === 200) {
//         dispatch(getProjectList(promise.data.data));
//       } else {
//         // console.log("erroer");
//       }
//     });
//   };
// }

// function getPriceTrendGraph(projectId, days) {
//   return (dispatch) => {
//     let url = `/api/v1/project/fetchHistoricalData?projectId=${projectId}`;
//     if (days) url += `&days=${days}`;

//     const response = services.get(url);
//     response.then((promise) => {
//       if (promise.status === 200) {
//         dispatch(fetchPriceTrendGraph(promise.data.data));
//       } else {
//         console.log("erroer");
//       }
//     });
//   };
// }
// function getTweetAnalysis(projectId) {
//   return (dispatch) => {
//     const url = `/api/v1/tweets/fetchAnalysis?id=${projectId}`;

//     const response = services.get(url);
//     response.then((promise) => {
//       if (promise.status === 200) {
//         dispatch(fetchTweetAnalysis(promise.data.data));
//       } else {
//         console.log("erroer");
//       }
//     });
//   };
// }

// function getUserMetamaskTotalBalances(currency, address) {
//   // const address = "0xC8491952123912357FAc1bB54d78Fe20F4726bcd";
//   return (dispatch) => {
//     let tokenAddresses = [],
//       tokenBalances = null,
//       tokenPrices = null,
//       totalBalance = 0;
//     const tokenBalanceURL = `https://api.ethplorer.io/getAddressInfo/${address}?apiKey=EK-pMxce-diJxbdE-WjmEC`;
//     const tokenBalanceResponse = services.get(tokenBalanceURL);
//     tokenBalanceResponse.then((promise) => {
//       if (promise.status === 200) {
//         tokenBalances = promise.data;
//         tokenAddresses = promise.data.tokens?.map(
//           ({ tokenInfo }) => tokenInfo.address
//         );
//         let tokenPricesURL = `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${tokenAddresses?.join(
//           "%2C"
//         )}&vs_currencies=usd`;
//         let tokenPricesResponse = services.get(tokenPricesURL);
//         tokenPricesResponse.then((promise) => {
//           if (promise.status === 200) {
//             tokenPrices = promise.data;
//             tokenPrices = Object.entries(tokenPrices);

//             for (let i = 0; i < tokenPrices.length; i++) {
//               for (let j = 0; j < tokenAddresses.length; j++) {
//                 if (tokenPrices[i][0] == tokenAddresses[j]) {
//                   totalBalance +=
//                     (tokenBalances.tokens[j].balance /
//                       10 ** tokenBalances.tokens[j].tokenInfo.decimals) *
//                     tokenPrices[i][1].usd;
//                 }
//               }
//             }

//             totalBalance =
//               totalBalance +
//               tokenBalances.ETH.balance * tokenBalances.ETH.price.rate;
//             dispatch(fetchUserMetamaskTotalBalances(totalBalance));
//           } else {
//             console.log("erroer");
//           }
//         });
//       } else {
//         console.log("error");
//       }
//     });
//     // const tokens = data ?data.data.tokens:null;
//   };
// }

// function getSocialLinks(risk, limit) {
//   return (dispatch) => {
//     let url = `api/v1/social/list`;
//     const response = services.get(url);
//     response.then((promise) => {
//       if (promise.status === 200) {
//         dispatch(getSocialData(promise.data.data));
//       } else {
//         console.log("erroer");
//       }
//     });
//   };
// }

// function getAccessibility(value) {
//   return (dispatch) => {
//     // if (value) {
//     dispatch(setData(value, "USER_ACCESSIBLITY"));
//     // }
//   };
// }

function addNFT(data) {
  return (dispatch) => {
    const url = 'nft/addNft';
    let params = JSON.stringify({ data });
    const response = services.post(url, params);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(setData(promise.data.data, 'ADD_NFT'));
      } else {
        console.log('erroer');
      }
    });
  };
}
function logIn(nonce, signature) {
  console.log(nonce, signature);
  return (dispatch) => {
    const url = 'user/login';
    let params = JSON.stringify({
      nonce: nonce,
      signature: signature,
    });
    const response = services.post(url, params);
    response.then((promise) => {
      if (promise.status === 200) {
        console.log('token', promise.data.data);
        dispatch(setData(promise.data.data, 'ADD_NFT'));
      } else {
        console.log('erroer');
      }
    });
  };
}
function generateNaunce(address) {
  return async (dispatch) => {
    const url = `user/genrateNonce/${address}`;
    const response = await services.get(url);
    console.log(response);
    return response.data.data;
    // response.then((promise) => {
    //   if (promise.status === 200) {
    //     console.log('token', promise.data.data);
    //     return promise.data.data;
    //     dispatch(setData(promise.data.data, 'ADD_NFT'));
    //   } else {
    //     console.log('erroer');
    //   }
    // }
  };
}

export const defiActions = { addNFT, logIn, generateNaunce };
