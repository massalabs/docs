---
id: web3-libraries-intro
sidebar_label: Web3 Libraries Introduction
sidebar_position: 1
---

# Introduction to Massa Web3 Libraries

The Massa blockchain ecosystem provides two main libraries for developers to interact with the blockchain. Understanding these libraries and their purposes is crucial for efficient development of applications on the Massa network.

## 1. @massalabs/massa-web3

This is the core library for interacting with the Massa blockchain. It provides all the necessary tools for creating accounts, managing keys, sending transactions, and interacting with smart contracts.

**Use cases:**

- Building backend applications
- Creating scripts for blockchain interaction
- Developing applications that don't require direct interaction with user wallets

**Installation:**

```bash
npm install @massalabs/massa-web3
```

## 2. @massalabs/wallet-provider

This library is built on top of `massa-web3` and provides additional functionality for interacting with wallet extensions (like MassaStation or Bearby).

**Use cases:**

- Building decentralized applications (dApps) that need to interact with user wallets in a browser environment
- Creating front-end applications that require user authentication via blockchain wallets

**Installation:**

```bash
npm install @massalabs/wallet-provider
```

<!-- **Important note:** If you're using `wallet-provider`, you don't need to separately install `massa-web3`, as it's included as a dependency. -->

## Choosing the Right Library

1. If you're building a dApp or any application that needs to interact with user wallets:

   - Use `@massalabs/wallet-provider`

2. If you're building backend services, scripts, or applications that don't require wallet interaction:
   - Use `@massalabs/massa-web3` directly
