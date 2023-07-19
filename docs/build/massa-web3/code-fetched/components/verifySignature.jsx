
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function verifySignature() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="verifySignature"
          showLineNumbers
        >
        {walletCode.verifySignature}
        </CodeBlock>
      </div>
    );
  }
  