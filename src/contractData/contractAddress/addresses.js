import { services } from "../../services";
let networkId = 1;
async function fetchNetworkId() {
  networkId = await services.getNetworkId();
}
fetchNetworkId();

function getContractAddresses() {
  if (networkId === "0x4" || +networkId === 4)
    return {
      nftContractAddress: "0x015079EE40BaE345124E7de19BCD0eeF8748C351",
      escrowContractAddres: "0xf1E2fFCCF438fdEC02F078029DD08036208Cd044",
    };
  else if (+networkId === 1 || networkId === "0x1")
    return {
      nftContractAddress: "0x015079EE40BaE345124E7de19BCD0eeF8748C351",
      escrowContractAddres: "0xf1E2fFCCF438fdEC02F078029DD08036208Cd044",
    };
  else
    return {
      nftContractAddress: "0x015079EE40BaE345124E7de19BCD0eeF8748C351",
      escrowContractAddres: "0xf1E2fFCCF438fdEC02F078029DD08036208Cd044",
    };
}
export default getContractAddresses;
