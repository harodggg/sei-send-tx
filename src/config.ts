import { calculateFee, GasPrice, StdFee } from "@cosmjs/stargate";

export const RPC_ENDPOINT = "https://rpc.atlantic-2.seinetwork.io/";
export const GAS_PRICE = GasPrice.fromString('0.1usei');
export const SEED_FEE: StdFee = calculateFee(100_000, GAS_PRICE);
export const MNEMONIC = "";
