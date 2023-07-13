
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';

  export default function getAccountFromSecretKey() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="getAccountFromSecretKey"
          showLineNumbers
        >
          {"    const deployerAccount: IAccount =\n      await WalletClient.getAccountFromSecretKey(deployerSecretKey);\n    console.log(\"Deployer account address\", deployerAccount.address);"}
        </CodeBlock>
      </div>
    );
  }
  