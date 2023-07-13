
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';

  export default function getWalletAccounts() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="getWalletAccounts"
          showLineNumbers
        >
          {"    const allWalletAccounts: IAccount[] = await web3Client\n      .wallet()\n      .getWalletAccounts();\n    console.log(\n      `All wallet accounts: ${allWalletAccounts.map(\n        (account: IAccount) => account.address\n      )}`\n    );"}
        </CodeBlock>
      </div>
    );
  }
  