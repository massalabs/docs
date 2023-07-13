
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function sellRolls() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="sellRolls"
          showLineNumbers
        >
        {walletCode.sellRolls}
        </CodeBlock>
      </div>
    );
  }
  