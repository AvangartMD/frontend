import Compressor from 'compressorjs';
import { resolveConfig } from 'prettier';

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
