
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';

  export default function getBaseAccount() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="getBaseAccount"
          showLineNumbers
        >
          {"    const baseAccount: IAccount | null = web3Client.wallet().getBaseAccount();\n    if (baseAccount === null) {\n      throw new Error(\"No base account found\");\n    }\n    console.log(`Base account of the wallet: ${baseAccount.address}`);"}
        </CodeBlock>
      </div>
    );
  }
  