
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function addAccountsToWallet() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="addAccountsToWallet"
          showLineNumbers
        >
        {walletCode.addAccountsToWallet}
        </CodeBlock>
      </div>
    );
  }
  