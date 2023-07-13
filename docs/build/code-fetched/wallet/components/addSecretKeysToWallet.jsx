
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function addSecretKeysToWallet() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="addSecretKeysToWallet"
          showLineNumbers
        >
        {walletCode.addSecretKeysToWallet}
        </CodeBlock>
      </div>
    );
  }
  