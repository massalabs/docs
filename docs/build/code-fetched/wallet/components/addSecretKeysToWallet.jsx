
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';

  export default function addSecretKeysToWallet() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="addSecretKeysToWallet"
          showLineNumbers
        >
          {"    const addedAccounts: IAccount[] = await web3Client\n      .wallet()\n      .addSecretKeysToWallet([secondAccSecretKey]);\n    console.log(`Added accounts to the wallet: ${addedAccounts.length}`);"}
        </CodeBlock>
      </div>
    );
  }
  