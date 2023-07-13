
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';

  export default function sellRolls() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="sellRolls"
          showLineNumbers
        >
          {"    const sellRollsTxId: Array<string> = await web3Client\n      .wallet()\n      .sellRolls(transactionDataRolls, baseAccount as IAccount);\n    // Await finalization\n    await web3Client\n      .smartContracts()\n      .awaitRequiredOperationStatus(sellRollsTxId[0], EOperationStatus.FINAL);\n    console.log(`Transaction ${sellRollsTxId} finalized`);"}
        </CodeBlock>
      </div>
    );
  }
  