import { services } from "../../services";
let networkId = 1;
async function fetchNetworkId() {
  networkId = await services.getNetworkId();
}
fetchNetworkId();

function getContractAddresses() {
  if (networkId === "0x4" || +networkId === 4)
    return {
      nftContractAddress: "0xB40Ffc38bc4BEa67D7dbC3a5A7A0E21EdFE0d9Ee",
    };
  else if (+networkId === 1 || networkId === "0x1")
    return {
      nftContractAddress: "0xB40Ffc38bc4BEa67D7dbC3a5A7A0E21EdFE0d9Ee",
    };
  else
    return {
      nftContractAddress: "0xB40Ffc38bc4BEa67D7dbC3a5A7A0E21EdFE0d9Ee",
    };
}
export default getContractAddresses;
