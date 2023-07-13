
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function signMessage() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="signMessage"
          showLineNumbers
        >
        {walletCode.signMessage}
        </CodeBlock>
      </div>
    );
  }
  