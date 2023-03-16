import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

export async function createAccount(prefix = "sei") {
    const wallet = await DirectSecp256k1HdWallet.generate(12, {
        prefix: prefix,
    });
    return wallet;
}

export async function getAddress(wallet: DirectSecp256k1HdWallet) {
    const [account] = await wallet.getAccounts();
    return account;
}