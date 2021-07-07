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
      escrowContractAddres: "0xFa01B801e8A5a3D269b6BCE0808A90e9402e427B",
    };
  else if (+networkId === 1 || networkId === "0x1")
    return {
      nftContractAddress: "0xB40Ffc38bc4BEa67D7dbC3a5A7A0E21EdFE0d9Ee",
      escrowContractAddres: "0xFa01B801e8A5a3D269b6BCE0808A90e9402e427B",
    };
  else
    return {
      nftContractAddress: "0xB40Ffc38bc4BEa67D7dbC3a5A7A0E21EdFE0d9Ee",
      escrowContractAddres: "0xFa01B801e8A5a3D269b6BCE0808A90e9402e427B",
    };
}
export default getContractAddresses;
