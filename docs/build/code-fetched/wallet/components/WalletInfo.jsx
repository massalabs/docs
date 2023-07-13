
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function WalletInfo() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="WalletInfo"
          showLineNumbers
        >
        {walletCode.WalletInfo}
        </CodeBlock>
      </div>
    );
  }
  