import Compressor from "compressorjs";
import nftABI from "../contractData/abis/nft.json";
import escrowABI from "../contractData/abis/escrow.json";
import getContractAddresses from "../contractData/contractAddress/addresses";
import { web3 } from "../web3";

export async function compressImage(image) {
  return new Promise((resolve, reject) => {
    try {
      new Compressor(image, {
        quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
        success: (compressedResult) => {
          resolve(compressedResult);
          // compressedResult has the compressed file.
          // Use the compressed file to upload the images to your server.
        },
      });
    } catch {
      reject(undefined);
    }
  });
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getContractInstance(isEscrow) {
  const { nftContractAddress, escrowContractAddres } = getContractAddresses();
  const currentaddress = isEscrow ? escrowContractAddres : nftContractAddress;
  const currentABI = isEscrow ? escrowABI : nftABI;
  try {
    if (web3) {
      const contractInstance = new web3.eth.Contract(
        currentABI,
        currentaddress
      );
      return contractInstance;
    }
  } catch (error) {
    // console.log(error);
  }
}
