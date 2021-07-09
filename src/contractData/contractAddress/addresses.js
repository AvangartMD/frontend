import { services } from "../../services";
let networkId = 1;
async function fetchNetworkId() {
  networkId = await services.getNetworkId();
}
fetchNetworkId();

function getContractAddresses() {
  if (networkId === "0x4" || +networkId === 4)
    return {
      nftContractAddress: "0xbfEb472FC9Fd29d5876711d8bD74A6e3768d421b",
      escrowContractAddres: "0x3b1BA953462D2732b28DD87B1d1ec6e6f432b708",
    };
  else if (+networkId === 1 || networkId === "0x1")
    return {
      nftContractAddress: "0xbfEb472FC9Fd29d5876711d8bD74A6e3768d421b",
      escrowContractAddres: "0x3b1BA953462D2732b28DD87B1d1ec6e6f432b708",
    };
  else
    return {
      nftContractAddress: "0xbfEb472FC9Fd29d5876711d8bD74A6e3768d421b",
      escrowContractAddres: "0x3b1BA953462D2732b28DD87B1d1ec6e6f432b708",
    };
}
export default getContractAddresses;
