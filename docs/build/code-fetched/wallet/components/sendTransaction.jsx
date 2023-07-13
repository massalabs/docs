
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';

  export default function sendTransaction() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="sendTransaction"
          showLineNumbers
        >
          {"    const transactionData: ITransactionData = {\n      fee: 0n,\n      amount: fromMAS(1),\n      recipientAddress: newAccount.address as string,\n    };\n    const sendTxId: Array<string> = await web3Client\n      .wallet()\n      .sendTransaction(transactionData);\n    const startBalance: IBalance | null = await web3Client\n      .wallet()\n      .getAccountBalance(newAccount.address as string);\n    console.log(`Transaction sent with id: ${sendTxId}`);\n    // Await finalization\n    await web3Client\n      .smartContracts()\n      .awaitRequiredOperationStatus(sendTxId[0], EOperationStatus.FINAL);\n    console.log(`Transaction ${sendTxId} finalized`);"}
        </CodeBlock>
      </div>
    );
  }
  