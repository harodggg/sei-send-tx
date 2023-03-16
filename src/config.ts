import { calculateFee, GasPrice, StdFee } from "@cosmjs/stargate";

export const rpcEndpoint = "https://rpc.atlantic-2.seinetwork.io/";
export const gasPrice = GasPrice.fromString('0.1usei')
export const sendFee: StdFee = calculateFee(100_000, gasPrice)