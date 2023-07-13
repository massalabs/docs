
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';

  export default function cleanWallet() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="cleanWallet"
          showLineNumbers
        >
          {"    await web3Client.wallet().cleanWallet();\n    console.log(\"All wallet accounts removed\");"}
        </CodeBlock>
      </div>
    );
  }
  