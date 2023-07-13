
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';

  export default function getAccountBalance() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="getAccountBalance"
          showLineNumbers
        >
          {"    const balance: IBalance | null = await web3Client\n      .wallet()\n      .getAccountBalance(newAccount.address as string);\n    if (balance === null) {\n      throw new Error(\"No balance found for newAccount\");\n    }\n    console.log(\n      `Balance of newAccount ${newAccount.address}: ${balance.final} MASSA`\n    );"}
        </CodeBlock>
      </div>
    );
  }
  