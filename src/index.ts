import { Coin, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { isAminoMsgCreateVestingAccount, SigningStargateClient, StargateClient } from "@cosmjs/stargate";
import { createWallet, getAddress, getBalance, importWallet } from "./account";
import { MNEMONIC } from "./config";
import { sendTx } from "./sendTx";


async function main() {
    //console.log("Starting send tx");
    const wallet = await createWallet();
    //console.log(wallet);
    const address = await getAddress(wallet);
    //console.log(address);
    const wallet1 = await importWallet(MNEMONIC);
    //console.log(wallet1);
    const balances = await getBalance(wallet1);
    console.log(balances);

    const amount = {
        denom: 'usei',
        amount: '100000'
    }


    await sendTx(wallet1, address, amount);
}

(async () => await main())();

