---
id: contract-wrappers-intro
sidebar_label: Introduction
sidebar_position: 1
---

# Introduction to Contract Wrappers

Contract wrappers in the Massa Web3 JS Library provide an easy and type-safe way to interact with common smart contract standards on the Massa blockchain. These wrappers encapsulate the complexity of contract interactions, offering a streamlined interface for developers.

## Purpose of Contract Wrappers

Contract wrappers serve several important purposes:

1. **Simplification**: They abstract away the low-level details of interacting with smart contracts, making it easier for developers to work with standard contract types.

2. **Type Safety**: By providing strongly-typed interfaces, contract wrappers help catch potential errors at compile-time rather than runtime.

3. **Standardization**: They encourage the use of standard interfaces, promoting interoperability and consistency across different projects.

4. **Efficiency**: Wrappers can include optimizations and best practices for interacting with specific contract types, improving the overall efficiency of your dApp.

## Available Contract Wrappers

Currently, the following contract wrapper is available:

1. **MRC20** - A wrapper for the MRC20 token standard, which is similar to ERC20 in Ethereum.

## Future Developments

The Massa team is actively working on expanding the range of contract wrappers available in the library. Future releases may include wrappers for additional token standards and other common contract types.

Some possible future additions might include:

- MRC721 (Non-Fungible Tokens)
- MRC1155 (Multi-Token Standard)

Stay tuned for updates and new releases that will introduce additional contract wrappers to enhance your development experience on the Massa blockchain.

## Getting Started

To use a contract wrapper, you typically need to:

1. Import the wrapper class from the Massa Web3 JS Library.
2. Create an instance of the wrapper by providing a provider and the contract address.
3. Call methods on the wrapper instance to interact with the contract.

For detailed information on using specific contract wrappers, please refer to their individual documentation pages.
