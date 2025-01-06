---
id: intro
sidebar_label: Introduction
sidebar_position: 1
---

# Introduction to Massa Web3

`@massalabs/massa-web3` is a TypeScript library designed to facilitate seamless interaction with the Massa blockchain, offering a set of tools and utilities similar to Ethereum’s `ethers.js`, `web3.js` or `Viem`. With this library, developers can easily build decentralized applications (dApps) on Massa, leveraging all core functionalities of the blockchain, including smart contract interactions, token transfers, event handling, and account management.

## Key Features

- **Smart Contract Interaction**: Call smart contract functions, send transactions with MAS tokens, and receive responses.
- **Account Management**: Create, manage, and import Massa accounts directly within your application, and sign transactions.
- **MAS Token Transfer**: Send and receive MAS tokens, check balances, and manage transfers between accounts or contracts.
- **Event Handling**: Retrieve and monitor on-chain events emitted by smart contracts to build real-time applications.
- **Read Storage**: Retrieve data from contracts datastore.
- **Utilities for Data Serialization**: Seamlessly handle data serialization and deserialization with the Args utility, allowing for compatibility between TypeScript and AssemblyScript
- **Smart Contract Wrapper for Standard Contracts**: Interact easily with Massa’s standard contracts (like the fungible token, NFT standards or Massa name system) using the built-in contract wrappers. These wrappers simplify function calls, making it easier to integrate with standard Massa protocols and speeding up development.

**Building dApps frontend:**

To interact with the blockchain through user interface wallets like `MassaStation Wallet`, `Bearby`, or `Metamask Snap`, it is recommended to use [`@massalabs/wallet-provider`](/docs/build/wallet-provider/wallet) on top of `@massalabs/massa-web3`. `wallet-provider` allows these wallets to serve as providers, enhancing accessibility for dApps with user-friendly wallets.

**Getting Started:**

To install `@massalabs/massa-web3`, you can add it to your project via npm:

```bash
npm install @massalabs/massa-web3
```

After installing, you can import and use the library in your TypeScript project:

```typescript
import { Account, SmartContract, JsonRpcProvider } from "@massalabs/massa-web3";
```
