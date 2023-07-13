
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function walletSignMessage() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="walletSignMessage"
          showLineNumbers
        >
        {walletCode.walletSignMessage}
        </CodeBlock>
      </div>
    );
  }
  