import { services } from "../../services";
let networkId = 1;
async function fetchNetworkId() {
  networkId = await services.getNetworkId();
}
fetchNetworkId();

function getContractAddresses() {
  if (networkId === "0x4" || +networkId === 4)
    return {
      nftContractAddress: "0x97d4aBcdc33Ba30eB6340310Da857109Bfc89bCf",
      escrowContractAddres: "0x6fd0a0C98850FBD4a9F731Ba92c8E46a2c53A86c",
    };
  else if (+networkId === 1 || networkId === "0x1")
    return {
      nftContractAddress: "0x97d4aBcdc33Ba30eB6340310Da857109Bfc89bCf",
      escrowContractAddres: "0x6fd0a0C98850FBD4a9F731Ba92c8E46a2c53A86c",
    };
  else
    return {
      nftContractAddress: "0x97d4aBcdc33Ba30eB6340310Da857109Bfc89bCf",
      escrowContractAddres: "0x6fd0a0C98850FBD4a9F731Ba92c8E46a2c53A86c",
    };
}
export default getContractAddresses;
