import { services } from "../../services";
let networkId = 1;
async function fetchNetworkId() {
  networkId = await services.getNetworkId();
}
fetchNetworkId();

function getContractAddresses() {
  if (networkId === "0x4" || +networkId === 4)
    return {
      nftContractAddress: "0x29b895ED36670D5E87632F5B041C4Dd7b087DB61",
    };
  else if (+networkId === 1 || networkId === "0x1")
    return {
      nftContractAddress: "0x29b895ED36670D5E87632F5B041C4Dd7b087DB61",
    };
  else
    return {
      nftContractAddress: "0x29b895ED36670D5E87632F5B041C4Dd7b087DB61",
    };
}
export default getContractAddresses;
