
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';

  export default function removeAddressesFromWallet() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="removeAddressesFromWallet"
          showLineNumbers
        >
          {"    await web3Client\n      .wallet()\n      .removeAddressesFromWallet([newAccount.address as string]);\n    console.log(`Removed account ${newAccount.address} from the wallet`);"}
        </CodeBlock>
      </div>
    );
  }
  