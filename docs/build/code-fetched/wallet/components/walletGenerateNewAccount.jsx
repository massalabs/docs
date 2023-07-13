
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';

  export default function walletGenerateNewAccount() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="walletGenerateNewAccount"
          showLineNumbers
        >
          {"    const newAccount: IAccount = await WalletClient.walletGenerateNewAccount();\n    console.log(\"New account address:\", newAccount.address);"}
        </CodeBlock>
      </div>
    );
  }
  