import { web3 } from "../web3";

async function getNetworkId() {
  try {
    return await window.ethereum.request({ method: "eth_chainId" });
  } catch (error) {
    return 1;
  }
}
async function getWeb3(isAuthenticate) {
  if (web3) {
    let web3Data = {
      isLoggedIn: false,
      accounts: [],
    };
    try {
      const responseData = await web3.eth.getAccounts();

      if (responseData.length) {
        web3Data.accounts = responseData;
        if (isAuthenticate) {
          web3Data.isLoggedIn = true;
        }
        return web3Data;
      } else {
        return web3Data;
      }
    } catch {
      return web3Data;
    }
  }
}

async function enableMetamask() {
  // let ethereum = window.ethereum;
  try {
    await window.ethereum.send("eth_requestAccounts");
    const resp = await getWeb3();
    return resp;
  } catch (error) {
    if (error.code === -32002) {
      return {
        isLoggedIn: false,
        accounts: [],
      };
    }
    return {
      isLoggedIn: false,
      accounts: [],
    };
  }
}

async function getContractInstance(contractAbi, contractAddress) {
  try {
    if (web3) {
      const contractInstance = await new web3.eth.Contract(
        contractAbi,
        contractAddress
      );
      return contractInstance;
    }
  } catch (error) {
    // console.log(error);
  }
}

export const web3Services = {
  getNetworkId,
  enableMetamask,
  getContractInstance,
  getWeb3,
};
