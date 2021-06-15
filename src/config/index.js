import axios from "axios";
// staging server
export default axios.create({
  baseURL: "http://api.52.28.101.213.nip.io/api/v1",
});

// // Local
// export const server_url = "http://127.0.0.1:4000/";

// aws s3 bucket confiurations
export const awsRegion = "eu-central-1";
export const awsIdentityPoolId =
  "eu-central-1:949b9487-ed35-4eb3-a2d3-1866e6ad890b";
export const awsBucket = "avangrat-development";
