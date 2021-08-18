import Compressor from "compressorjs";
import FileExtension from 'file-extension';
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

export function getFileType(url) {
  const ext = FileExtension(url).toLocaleLowerCase() // get file extension from url
  if (ext === `mp4` || ext === `mkv` || ext === `webm` || ext === `mov` ||
    ext === `avi` || ext === `flv` || ext === `mts`)
    return `video`
  if (ext === `avi` || ext === `mp1` || ext === `mp2` || ext === `mp3` || ext === `ogg` ||
    ext === `ogv` || ext === `ogm` || ext === `spx` || ext === `ogx` || ext === `opus` ||
    ext === `flac` || ext === `wav` || ext === `amr` || ext === `aif` || ext === `ape` ||
    ext === `ac3` || ext === `m4p` || ext === `m4a` || ext === `m4b`)
    return `audio`
  if (ext === `png` || ext === `jpeg` || ext === `jpg` || ext === `dmg`)
    return `image`
  return `image`
}