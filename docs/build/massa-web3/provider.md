---
id: provider
sidebar_label: Provider
---

# Provider

In `@massalabs/massa-web3`, a Provider is a core component that encapsulates an account and provides access to the Massa blockchain. Providers manage the connection between the application and the blockchain, making it easy to execute transactions, query data, and interact with smart contracts.

A Provider can be created from a KeyPair or accessed from a Wallet account. It can be used to sign transactions and interact with the blockchain.

## Types of Providers

1. Web3Provider:

- The `Web3Provider` class is the primary provider type in `@massalabs/massa-web3`. It combines a Massa-web3 `Account` with an RPC client that connects to the Massa blockchain through a specified URL.
- This URL can point to Massa’s public nodes, custom nodes, or a private node, allowing for flexibility in how you connect to the blockchain.

  The following example show how to create a provider using the mainnet public RPC:

   ```typescript
   import 'dotenv/config'
   import { Account, Web3Provider } from '@massalabs/massa-web3'

   const account = await Account.fromEnv()
   const provider = Web3Provider.mainnet(account)
   ```

2. Integrated Wallet Providers:

- For applications that interface with external wallets, `@massalabs/wallet-provider` implements providers designed to connect with popular Massa wallets like `MassaStation Wallet`, `Bearby` and `Metamask snap`.
- These providers enable users to manage their own accounts, sign transactions, and interact with smart contracts directly from their wallets without exposing private keys to the application. It is mostly usefull to build decentralized frontend applications (dApps).


## Provider Methods

A Provider offers several methods to interact with the Massa blockchain. Here are the available methods:

```typescript
get address(): string
```

Returns the address associated with the Provider.

```typescript
get accountName(): string
```

Returns the name of the account associated with the Provider.

```typescript
get providerName(): string
```

Returns the name of the Provider.

```typescript
balance(final: boolean): Promise<bigint>
```

Retrieves the balance of the account.

- `final`: If true, returns the final (confirmed) balance. If false, returns the speculative (possibly unconfirmed) balance. default to True

```typescript
networkInfos(): Promise<Network>
```

Retrieves information about the Massa network.

```typescript
sign(data: Buffer | Uint8Array | string): Promise<SignedData>
```

Signs the provided data.

- `data`: The data to be signed.

```typescript
buyRolls(amount: Mas, opts?: OperationOptions): Promise<Operation>
```

Buys rolls (staking units) on the Massa blockchain.

- `amount`: The amount of MAS to spend on buying rolls.
- `opts`: Optional operation parameters.

```typescript
sellRolls(amount: Mas, opts?: OperationOptions): Promise<Operation>
```

Sells rolls (staking units) on the Massa blockchain.

- `amount`: The number of rolls to sell.
- `opts`: Optional operation parameters.

```typescript
transfer(to: Address | string, amount: Mas, opts?: OperationOptions): Promise<Operation>
```

Transfers MAS tokens to another address.

- `to`: The recipient's address.
- `amount`: The amount of MAS to transfer.
- `opts`: Optional operation parameters.

```typescript
callSC(params: CallSCParams): Promise<Operation>
```

Calls a smart contract function.

- `params`: Parameters for the smart contract call.

```typescript
readSC(params: ReadSCParams): Promise<ReadSCData>
```

Reads data from a smart contract without modifying its state.

- `params`: Parameters for reading from the smart contract.

```typescript
deploySC(params: DeploySCParams): Promise<SmartContract>
```

Deploys a smart contract to the Massa blockchain.

- `params`: Parameters for deploying the smart contract.

```typescript
getOperationStatus(opId: string): Promise<OperationStatus>
```

Retrieves the status of an operation.

- `opId`: The ID of the operation to check.

```typescript
getEvents(filter: EventFilter): Promise<SCEvent[]>
```

Retrieves events based on the provided filter.

- `filter`: Criteria for filtering events.

```typescript
getNodeStatus(): Promise<NodeStatusInfo>
```

Retrieves status and infos of current RPC

```typescript
getStorageKeys(
    address: string,
    filter: Uint8Array | string,
    final?: boolean
    ): Promise<Uint8Array[]>
```

Retrieves all storage keys registered at a given address
- `address`: Smart contract or EOA address.
- `filter`: Prefix key filter
- `final`: Default to True

```typescript
readStorage(
    address: string,
    keys: Uint8Array[] | string[],
    final?: boolean
    ): Promise<Uint8Array[]>
```

Retrieves data associated to given storage keys of a given address
- `address`: Smart contract or EOA address.
- `keys`: array of storage keys
- `final`: Default to True
