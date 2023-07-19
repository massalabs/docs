
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function sendTransaction() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="sendTransaction"
          showLineNumbers
        >
        {walletCode.sendTransaction}
        </CodeBlock>
      </div>
    );
  }
  