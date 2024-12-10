---
id: standards
sidebar_label: Standards
---

# Massa Standard

The Massa Standard is your comprehensive starting point for blockchain projects on the Massa network. Offering reference implementations of the most common smart contracts, it's the toolkit you need for tokens, NFTs, or wallet creation.

Adhering to a standard like this in the blockchain world is important. Standards ensure all participants in a blockchain network can interact seamlessly because they follow a unified structure and protocol. This compatibility fosters a more robust and inclusive blockchain ecosystem, encouraging mass adoption and facilitating growth.

## Fungible Tokens (MRC20)

FT is a standard for creating fungible, tradable tokens on the Massa blockchain. It includes a set of functions that allow for seamless interaction with tokens within smart contracts and wallets.

[View on GitHub](https://github.com/massalabs/massa-standards/tree/main/smart-contracts/assembly/contracts/MRC20)

### Available extensions:
    - mintable
    - burnable


## Non-Fungible Tokens (NFT)

NFT is a standard for creating unique, non-fungible tokens on the Massa blockchain. This allows the creation and management of tokens where each instance has a unique value or properties.

[View on GitHub](https://github.com/massalabs/massa-standards/tree/main/smart-contracts/assembly/contracts/MRC721)

### Available extensions:
    - enumerable
    - metadata

## Multi Token Standard (MRC1155)

Set of smart contracts to implement the ERC1155 specification on the Massa blockchain.
see [ERC1155 documentation](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC1155)

[View on GitHub](https://github.com/massalabs/massa-standards/tree/main/smart-contracts/assembly/contracts/MRC1155)

## Massa Domain Name Service (DNS)

The DNS standard provides a foundational framework for managing Domain Name System (DNS) records within the Massa blockchain ecosystem. It streamlines the creation of a link between the hostname (website name), resolver address (where the smart contract and chunks of the website are located), and the DNS record owner.

## Massa Units Standard
The Massa Units standard defines common units of measurement for the Massa blockchain, including:

- Massa coin

- Gas

- Rolls

Learn more about [Massa Units Standard](https://github.com/massalabs/massa-standards/blob/main/units.md)
