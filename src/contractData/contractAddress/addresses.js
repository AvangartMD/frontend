import { services } from "../../services";
let networkId = 1;
async function fetchNetworkId() {
  networkId = await services.getNetworkId();
}
fetchNetworkId();

function getContractAddresses() {
  if (networkId === "0x4" || +networkId === 4)
    return {
      nftContractAddress: "0x425d449BaA0eb4725a7284e622a61E5f43CDeb42",
      escrowContractAddres: "0xD47F060e34870Ff767Bf1f7E50b05e9220682E0b",
    };
  else if (+networkId === 1 || networkId === "0x1")
    return {
      nftContractAddress: "0x425d449BaA0eb4725a7284e622a61E5f43CDeb42",
      escrowContractAddres: "0xD47F060e34870Ff767Bf1f7E50b05e9220682E0b",
    };
  else
    return {
      nftContractAddress: "0x425d449BaA0eb4725a7284e622a61E5f43CDeb42",
      escrowContractAddres: "0xD47F060e34870Ff767Bf1f7E50b05e9220682E0b",
    };
}
export default getContractAddresses;
