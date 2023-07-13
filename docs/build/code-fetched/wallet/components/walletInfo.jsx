
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';

  export default function WalletInfo() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="WalletInfo"
          showLineNumbers
        >
          {"    const walletInfo: IFullAddressInfo[] = await web3Client\n      .wallet()\n      .walletInfo();\n    console.log(\n      \"Wallet info addresses: \",\n      walletInfo.map((info) => info.address)\n    );"}
        </CodeBlock>
      </div>
    );
  }
  