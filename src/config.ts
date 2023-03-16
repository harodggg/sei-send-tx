import { calculateFee, GasPrice, StdFee } from "@cosmjs/stargate";

export const rpcEndpoint = "";
export const gasPrice = GasPrice.fromString('0.025uatom')
export const sendFee: StdFee = calculateFee(80_000, gasPrice)