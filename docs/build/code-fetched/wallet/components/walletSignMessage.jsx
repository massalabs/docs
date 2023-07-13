
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';

  export default function walletSignMessage() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="walletSignMessage"
          showLineNumbers
        >
          {"    const signature: ISignature = await WalletClient.walletSignMessage(\n      \"Hello world\",\n      baseAccount\n    );\n    console.log(`Signature created: ${signature.base58Encoded}`);"}
        </CodeBlock>
      </div>
    );
  }
  