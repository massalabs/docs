
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';

  export default function verifySignature() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="verifySignature"
          showLineNumbers
        >
          {"    const isSignatureValid: boolean = await web3Client\n      .wallet()\n      .verifySignature(\n        \"Hello world\",\n        signature,\n        baseAccount.publicKey as string\n      );\n    console.log(`isSignatureValid: ${isSignatureValid}`);"}
        </CodeBlock>
      </div>
    );
  }
  