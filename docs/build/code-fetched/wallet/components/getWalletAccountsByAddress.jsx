
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';

  export default function getWalletAccountsByAddress() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="getWalletAccountsByAddress"
          showLineNumbers
        >
          {"    const retrievedAccount = await web3Client\n      .wallet()\n      .getWalletAccountByAddress(deployerAccount.address as string);\n    if (!retrievedAccount) {\n      throw new Error(\n        `Account with address ${deployerAccount.address} not found.`\n      );\n    }\n    const deployerAccountRetrieved: IAccount = retrievedAccount;\n    console.log(\n      `Retrieved account address: ${deployerAccountRetrieved.address}`\n    );"}
        </CodeBlock>
      </div>
    );
  }
  