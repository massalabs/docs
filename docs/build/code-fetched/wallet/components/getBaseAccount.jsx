
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function getBaseAccount() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="getBaseAccount"
          showLineNumbers
        >
        {walletCode.getBaseAccount}
        </CodeBlock>
      </div>
    );
  }
  