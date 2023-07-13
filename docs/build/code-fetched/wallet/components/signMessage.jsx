
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';

  export default function signMessage() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="signMessage"
          showLineNumbers
        >
          {"    const signedMessage = await web3Client\n      .wallet()\n      .signMessage(\"hello\", baseAccount.address as string);\n    console.log(`Signed message: ${signedMessage.base58Encoded}`);"}
        </CodeBlock>
      </div>
    );
  }
  