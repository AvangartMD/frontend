import { services } from "../../services";
let networkId = 1;
async function fetchNetworkId() {
  networkId = await services.getNetworkId();
}
fetchNetworkId();

function getContractAddresses() {
  if (networkId === "0x4" || +networkId === 4)
    return {
      nftContractAddress: "0x159c57baD61f16BD70c344694a932454539Ce7F3",
      escrowContractAddres: "0xa47D11eb746a55f0C9c787cB45420318fea549b0",
    };
  else if (+networkId === 1 || networkId === "0x1")
    return {
      nftContractAddress: "0x159c57baD61f16BD70c344694a932454539Ce7F3",
      escrowContractAddres: "0xa47D11eb746a55f0C9c787cB45420318fea549b0",
    };
  else
    return {
      nftContractAddress: "0x159c57baD61f16BD70c344694a932454539Ce7F3",
      escrowContractAddres: "0xa47D11eb746a55f0C9c787cB45420318fea549b0",
    };
}
export default getContractAddresses;
