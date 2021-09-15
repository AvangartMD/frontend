import { services } from "../../services";
let networkId = 1;
async function fetchNetworkId() {
  networkId = await services.getNetworkId();
}
fetchNetworkId();

function getContractAddresses() {
  if (networkId === "0x4" || +networkId === 4)
    return {
      nftContractAddress: "0xd47CeBcfDC3631112FaD6Eb2e9C64cD314fd1739",
      escrowContractAddres: "0x37b3804c5Dc6CF59Df7b1aB12F9C67A1977c2747",
    };
  else if (+networkId === 1 || networkId === "0x1")
    return {
      nftContractAddress: "0xd47CeBcfDC3631112FaD6Eb2e9C64cD314fd1739",
      escrowContractAddres: "0x37b3804c5Dc6CF59Df7b1aB12F9C67A1977c2747",
    };
  else
    return {
      nftContractAddress: "0xd47CeBcfDC3631112FaD6Eb2e9C64cD314fd1739",
      escrowContractAddres: "0x37b3804c5Dc6CF59Df7b1aB12F9C67A1977c2747",
    };
}
export default getContractAddresses;
