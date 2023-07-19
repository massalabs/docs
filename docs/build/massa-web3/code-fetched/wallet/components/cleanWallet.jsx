
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function cleanWallet() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="cleanWallet"
          showLineNumbers
        >
        {walletCode.cleanWallet}
        </CodeBlock>
      </div>
    );
  }
  