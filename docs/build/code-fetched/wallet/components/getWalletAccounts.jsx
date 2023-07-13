
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function getWalletAccounts() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="getWalletAccounts"
          showLineNumbers
        >
        {walletCode.getWalletAccounts}
        </CodeBlock>
      </div>
    );
  }
  