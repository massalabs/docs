
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';

  export default function addAccountsToWallet() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="addAccountsToWallet"
          showLineNumbers
        >
          {"    await web3Client\n      .wallet()\n      .addAccountsToWallet([deployerAccount, newAccount]);\n"}
        </CodeBlock>
      </div>
    );
  }
  