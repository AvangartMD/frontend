// export * from './defi.action';
// export * from './web3.action';
// export * from './auth.action';
// export * from './user.action';


import { authActions } from "./auth.action";
import { defiActions } from "./defi.action";
import { web3Actions } from "./web3.action";

export const actions = { ...authActions, ...defiActions, ...web3Actions };