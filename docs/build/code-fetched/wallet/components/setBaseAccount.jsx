
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';

  export default function setBaseAccount() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="setBaseAccount"
          showLineNumbers
        >
          {"    await web3Client.wallet().setBaseAccount(deployerAccount);\n    console.log(`Base account of the wallet: ${deployerAccount.address}`);"}
        </CodeBlock>
      </div>
    );
  }
  