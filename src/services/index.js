import { backendServices } from "./backendServices";
import { web3Services } from "./web3Services";

export const services = { ...backendServices, ...web3Services };
