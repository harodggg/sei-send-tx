import { calculateFee, GasPrice, StdFee } from "@cosmjs/stargate";

export const RPC_ENDPOINT = "https://rpc.atlantic-2.seinetwork.io/";
export const GAS_PRICE = GasPrice.fromString('0.1usei');
export const SEED_FEE: StdFee = calculateFee(150000, GAS_PRICE);
export const MNEMONIC = "acquire price raccoon december urge chat setup hat flavor venture stadium barrel";
export const ADDRESS = "sei1qh7u2jgm04ztdem9y5qxslngx5spl39kpy99ga";
export const CONTRACT_ADDR = "";
