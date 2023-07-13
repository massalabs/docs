
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function buyRolls() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="buyRolls"
          showLineNumbers
        >
        {walletCode.buyRolls}
        </CodeBlock>
      </div>
    );
  }
  