import { services } from "../../services";
let networkId = 1;
async function fetchNetworkId() {
  networkId = await services.getNetworkId();
}
fetchNetworkId();

function getContractAddresses() {
  if (networkId === "0x4" || +networkId === 4)
    return {
      nftContractAddress: "0xbC2ba7f24737df9eCf4c26FF0FB2Dbf1F95d361e",
    };
  else if (+networkId === 1 || networkId === "0x1")
    return {
      nftContractAddress: "0xbC2ba7f24737df9eCf4c26FF0FB2Dbf1F95d361e",
    };
  else
    return {
      nftContractAddress: "0xbC2ba7f24737df9eCf4c26FF0FB2Dbf1F95d361e",
    };
}
export default getContractAddresses;
