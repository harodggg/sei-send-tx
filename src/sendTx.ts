import { Coin, OfflineSigner } from "@cosmjs/proto-signing";
import { assertIsDeliverTxSuccess, SigningStargateClient } from "@cosmjs/stargate";
import { rpcEndpoint, sendFee } from "./config";

async function sendTx(wallet: OfflineSigner, recipient: string, amount: Coin[]) {
    const client = await SigningStargateClient.connectWithSigner(
        rpcEndpoint,
        wallet,
    );
    const [myAccount] = await wallet.getAccounts()

    const transaction = await client.sendTokens(
        myAccount.address,
        recipient,
        amount,
        sendFee,
        'Transaction',
    );
    
    assertIsDeliverTxSuccess(transaction);
    console.log('Successfully broadcasted:', transaction)
}
