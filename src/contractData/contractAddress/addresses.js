import { services } from "../../services";
let networkId = 1;
async function fetchNetworkId() {
  networkId = await services.getNetworkId();
}
fetchNetworkId();

function getContractAddresses() {
  if (networkId === "0x4" || +networkId === 4)
    return {
      nftContractAddress: "0x0777397025EdBC8f5A21bC6815b0cE6c2E8EbdCA",
      escrowContractAddres: "0xdaf444545613b5F9e892fc8ECdDabB38ca06bDfB",
    };
  else if (+networkId === 1 || networkId === "0x1")
    return {
      nftContractAddress: "0x0777397025EdBC8f5A21bC6815b0cE6c2E8EbdCA",
      escrowContractAddres: "0xdaf444545613b5F9e892fc8ECdDabB38ca06bDfB",
    };
  else
    return {
      nftContractAddress: "0x0777397025EdBC8f5A21bC6815b0cE6c2E8EbdCA",
      escrowContractAddres: "0xdaf444545613b5F9e892fc8ECdDabB38ca06bDfB",
    };
}
export default getContractAddresses;
