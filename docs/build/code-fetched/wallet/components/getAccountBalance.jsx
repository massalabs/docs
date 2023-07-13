
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function getAccountBalance() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="getAccountBalance"
          showLineNumbers
        >
        {walletCode.getAccountBalance}
        </CodeBlock>
      </div>
    );
  }
  