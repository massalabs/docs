
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function removeAddressesFromWallet() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="removeAddressesFromWallet"
          showLineNumbers
        >
        {walletCode.removeAddressesFromWallet}
        </CodeBlock>
      </div>
    );
  }
  