import { Coin, OfflineSigner } from "@cosmjs/proto-signing";
import { assertIsDeliverTxSuccess, SigningStargateClient } from "@cosmjs/stargate";
import { RPC_ENDPOINT, SEED_FEE } from "./config";

async function sendTx(wallet: OfflineSigner, recipient: string, amount: Coin[]) {
    const client = await SigningStargateClient.connectWithSigner(
        RPC_ENDPOINT,
        wallet,
    );
    const [myAccount] = await wallet.getAccounts()

    const transaction = await client.sendTokens(
        myAccount.address,
        recipient,
        amount,
        SEED_FEE,
        'Transaction',
    );

    assertIsDeliverTxSuccess(transaction);
    console.log('Successfully broadcasted:', transaction)
}
