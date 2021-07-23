import { services } from "../../services";
let networkId = 1;
async function fetchNetworkId() {
  networkId = await services.getNetworkId();
}
fetchNetworkId();

function getContractAddresses() {
  if (networkId === "0x4" || +networkId === 4)
    return {
      nftContractAddress: "0x6E4FF15F1927C0cfEA9aDe785d79205541719e31",
      escrowContractAddres: "0x004A00794807374234A2791d93f32e31598B9d54",
    };
  else if (+networkId === 1 || networkId === "0x1")
    return {
      nftContractAddress: "0x6E4FF15F1927C0cfEA9aDe785d79205541719e31",
      escrowContractAddres: "0x004A00794807374234A2791d93f32e31598B9d54",
    };
  else
    return {
      nftContractAddress: "0x6E4FF15F1927C0cfEA9aDe785d79205541719e31",
      escrowContractAddres: "0x004A00794807374234A2791d93f32e31598B9d54",
    };
}
export default getContractAddresses;
