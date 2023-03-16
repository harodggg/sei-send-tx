import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";
import { RPC_ENDPOINT } from "./config";

export async function createWallet(prefix = "sei") {
    const wallet = await DirectSecp256k1HdWallet.generate(12, {
        prefix: prefix,
    });
    return wallet;
}

export async function importWallet(mnemonic: string) {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'sei' });
    return wallet
}

export async function getAddress(wallet: DirectSecp256k1HdWallet) {
    const [account] = await wallet.getAccounts();
    return account.address;
}

export async function getBalance(wallet: DirectSecp256k1HdWallet) {
    const client = await SigningStargateClient.connectWithSigner(RPC_ENDPOINT, wallet);
    const address = await getAddress(wallet);

    // Getting all balances for this account 
    const balances = client.getAllBalances(address);
    return balances
}