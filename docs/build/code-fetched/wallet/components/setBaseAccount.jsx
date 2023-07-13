
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function setBaseAccount() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="setBaseAccount"
          showLineNumbers
        >
        {walletCode.setBaseAccount}
        </CodeBlock>
      </div>
    );
  }
  