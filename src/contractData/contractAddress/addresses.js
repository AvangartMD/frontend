import { services } from "../../services";
let networkId = 1;
async function fetchNetworkId() {
  networkId = await services.getNetworkId();
}
fetchNetworkId();

function getContractAddresses() {
  if (networkId === "0x4" || +networkId === 4)
    return {
      nftContractAddress: "0xe2Cc8Bb5ce2a35a9f2490654fD828Aa1F975A025",
      escrowContractAddres: "0x5B5D33fC590A3cdFa11daA438db3D3C00dcd5514",
    };
  else if (+networkId === 1 || networkId === "0x1")
    return {
      nftContractAddress: "0xe2Cc8Bb5ce2a35a9f2490654fD828Aa1F975A025",
      escrowContractAddres: "0x5B5D33fC590A3cdFa11daA438db3D3C00dcd5514",
    };
  else
    return {
      nftContractAddress: "0xe2Cc8Bb5ce2a35a9f2490654fD828Aa1F975A025",
      escrowContractAddres: "0x5B5D33fC590A3cdFa11daA438db3D3C00dcd5514",
    };
}
export default getContractAddresses;
