// Load the SDK for JavaScript
import * as aws from "aws-sdk";
import { awsRegion, awsIdentityPoolId, awsBucket } from "./config";


export async function deleteToS3(fileName) {
  return new Promise(function (resolve, reject) {
    try {
      if (aws) {
          aws.config.region = awsRegion; // Region
          aws.config.credentials = new aws.CognitoIdentityCredentials({
            IdentityPoolId: awsIdentityPoolId,
          });

          const s3 = new aws.S3();
          const params = {
            Bucket: awsBucket,
            Key: `${fileName}`,
          };

          s3.deleteObject(params, (err, data) => {
              if (data) {
                console.log("File deleted successfully", data);
                resolve(data);
              }
                else {
                console.log("Check if you have sufficient permissions : "+err);
                reject(err);
              }
            }
          );
      }
    } catch (err) {
      console.log("error in uploading:", err);
      throw err;
    }
  });
}

export async function uploadToS3(fileName, file, key, type) {
  return new Promise(function (resolve, reject) {
    try {
      if (aws) {
        aws.config.region = awsRegion; // Region
        aws.config.credentials = new aws.CognitoIdentityCredentials({
          IdentityPoolId: awsIdentityPoolId,
        });

        const s3 = new aws.S3({
          apiVersion: "2006-03-01",
          params: { Bucket: awsBucket },
        });

        const params = {
          Key: `${key}/${fileName}.${type}`,
          Body: file,
          ACL: "public-read",
        };

        s3.upload(params, (err, data) => {
          if (err) {
            console.log("err is:", err);
            reject(err);
          } else {
            resolve(data);
          }
        }).on("httpUploadProgress", function (evt) {
          console.log(
            "Uploaded " +
              fileName +
              ": " +
              parseInt((evt.loaded * 100) / evt.total) +
              "%"
          );
        });
      }

      //    return updateStaus;
    } catch (err) {
      console.log("error in uploading:", err);
      throw err;
    }
  });
}
