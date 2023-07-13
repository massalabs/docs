
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';

  export default function buyRolls() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="buyRolls"
          showLineNumbers
        >
          {"    const transactionDataRolls: IRollsData = {\n      fee: 0n,\n      amount: 1n,\n    };\n    const buyRollsTxId: Array<string> = await web3Client\n      .wallet()\n      .buyRolls(transactionDataRolls, deployerAccount as IAccount);\n    // Await finalization\n    console.log(`Transaction sent with id: ${buyRollsTxId}`);\n    await web3Client\n      .smartContracts()\n      .awaitRequiredOperationStatus(buyRollsTxId[0], EOperationStatus.FINAL);\n    console.log(`Transaction ${buyRollsTxId} finalized`);"}
        </CodeBlock>
      </div>
    );
  }
  