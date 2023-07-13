
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function getWalletAccountsByAddress() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="getWalletAccountsByAddress"
          showLineNumbers
        >
        {walletCode.getWalletAccountsByAddress}
        </CodeBlock>
      </div>
    );
  }
  