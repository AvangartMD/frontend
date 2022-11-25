import { services } from "../../services";
let networkId = 1;
async function fetchNetworkId() {
  networkId = await services.getNetworkId();
}
fetchNetworkId();

function getContractAddresses() {
  if (networkId === "0x4" || +networkId === 4)
    return {
      nftContractAddress: "0xF1c5F3925044B5180041321585754aA543aEC63d",
      escrowContractAddres: "0xE4Faf7e82a59BB4a2858b848ee8707d557F934C4",
    };
  else if (+networkId === 1 || networkId === "0x1")
    return {
      nftContractAddress: "0xF1c5F3925044B5180041321585754aA543aEC63d",
      escrowContractAddres: "0xE4Faf7e82a59BB4a2858b848ee8707d557F934C4",
    };
  else
    return {
      nftContractAddress: "0xF1c5F3925044B5180041321585754aA543aEC63d",
      escrowContractAddres: "0xE4Faf7e82a59BB4a2858b848ee8707d557F934C4",
    };
}
export default getContractAddresses;
