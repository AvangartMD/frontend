import { services } from "../../services";
let networkId = 1;
async function fetchNetworkId() {
  networkId = await services.getNetworkId();
}
fetchNetworkId();

function getContractAddresses() {
  if (networkId === "0x4" || +networkId === 4)
    return {
      nftContractAddress: "0xCB736c25Bb362b22083cb8eb052874e2ED4b4617",
      escrowContractAddres: "0xdd40Dbfc80B60222C0d738Dea6122c826654Bb8F",
    };
  else if (+networkId === 1 || networkId === "0x1")
    return {
      nftContractAddress: "0xCB736c25Bb362b22083cb8eb052874e2ED4b4617",
      escrowContractAddres: "0xdd40Dbfc80B60222C0d738Dea6122c826654Bb8F",
    };
  else
    return {
      nftContractAddress: "0xCB736c25Bb362b22083cb8eb052874e2ED4b4617",
      escrowContractAddres: "0xdd40Dbfc80B60222C0d738Dea6122c826654Bb8F",
    };
}
export default getContractAddresses;
