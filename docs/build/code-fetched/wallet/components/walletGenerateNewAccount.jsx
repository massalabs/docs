
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function walletGenerateNewAccount() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="walletGenerateNewAccount"
          showLineNumbers
        >
        {walletCode.walletGenerateNewAccount}
        </CodeBlock>
      </div>
    );
  }
  