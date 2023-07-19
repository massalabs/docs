
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function getAccountFromSecretKey() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="getAccountFromSecretKey"
          showLineNumbers
        >
        {walletCode.getAccountFromSecretKey}
        </CodeBlock>
      </div>
    );
  }
  