import { Coin, OfflineSigner } from "@cosmjs/proto-signing";
import { assertIsDeliverTxSuccess, calculateFee, GasPrice, SigningStargateClient } from "@cosmjs/stargate";
import { RPC_ENDPOINT, SEED_FEE } from "./config";

export async function sendTx(wallet: OfflineSigner, recipient: string, amount: any) {
    const client = await SigningStargateClient.connectWithSigner(
        RPC_ENDPOINT,
        wallet,
    );
    const [myAccount] = await wallet.getAccounts()

    const transaction = await client.sendTokens(
        myAccount.address,
        recipient,
        [amount],
        SEED_FEE,
        'Transaction Memo',
    );

    assertIsDeliverTxSuccess(transaction);
    console.log('Successfully broadcasted:', transaction)
}
