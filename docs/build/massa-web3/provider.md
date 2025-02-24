---
id: provider
sidebar_label: Provider
---

# Provider

In `@massalabs/massa-web3`, a Provider is a core component that encapsulates an account and provides access to the Massa blockchain. Providers manage the connection between the application and the blockchain, making it easy to execute transactions, query data, and interact with smart contracts.

A Provider can be created from a KeyPair or accessed from a Wallet account. It can be used to sign transactions and interact with the blockchain.

## Types of Providers

1. **JsonRpcProvider**:

- The `JsonRpcProvider` class is the primary provider type in `@massalabs/massa-web3`. It combines a Massa-web3 `Account` with an RPC client that connects to the Massa blockchain through a specified URL.
- This URL can point to Massa’s public nodes, custom nodes, or a private node, allowing for flexibility in how you connect to the blockchain.

  The following example show how to create a provider using the mainnet public RPC:

  ```typescript
  import 'dotenv/config';
  import { Account, JsonRpcProvider } from '@massalabs/massa-web3';

  const account = await Account.fromEnv();
  const provider = JsonRpcProvider.mainnet(account);
  ```

2. **JsonRpcPublicProvider**:

- The `JsonRpcPublicProvider` class is a provider that can be initialized without an account. It is useful for read-only operations that do not require signing transactions.

  The following example shows how to create a public provider using the mainnet public RPC:

  ```typescript
  import { JsonRpcPublicProvider } from '@massalabs/massa-web3';

  const provider = JsonRpcPublicProvider.mainnet();
  // OR
  const provider = JsonRpcProvider.mainnet(); // JsonRpcProvider will return a JsonRpcPublicProvider if no account is provided
  ```

3. **Integrated Wallet Providers**:

- For applications that interface with external wallets, `@massalabs/wallet-provider` implements providers designed to connect with popular Massa wallets like `MassaStation Wallet`, `Bearby` and `Metamask snap`.
- These providers enable users to manage their own accounts, sign transactions, and interact with smart contracts directly from their wallets without exposing private keys to the application. It is mostly useful to build decentralized frontend applications (dApps).

## Provider Methods

### Public Methods

A Provider offers several public methods to interact with the Massa blockchain. Here are the available public methods:

```typescript
balanceOf(addresses: string[], final?: boolean): Promise<{ address: string; balance: bigint }[]>
```

Retrieves the balance of multiple accounts.

- `addresses`: An array of addresses to check.
- `final`: If true, returns the final (confirmed) balance. If false, returns the speculative (possibly unconfirmed) balance. Defaults to true.

```typescript
networkInfos(): Promise<Network>
```

Retrieves information about the Massa network.

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

Retrieves status and information of the current RPC.

```typescript
readSC(params: ReadSCParams): Promise<ReadSCData>
```

Reads data from a smart contract without modifying its state.

- `params`: Parameters for reading from the smart contract.

```typescript
getStorageKeys(address: string, filter?: Uint8Array | string, final?: boolean): Promise<Uint8Array[]>
```

Retrieves all storage keys registered at a given address.

- `address`: Smart contract or EOA address.
- `filter`: Prefix key filter.
- `final`: Defaults to true.

```typescript
readStorage(address: string, keys: Uint8Array[] | string[], final?: boolean): Promise<(Uint8Array | null)[]>
```

Retrieves data associated with given storage keys of a given address.

- `address`: Smart contract or EOA address.
- `keys`: Array of storage keys.
- `final`: Defaults to true.

### Account-Specific Methods

In addition to public methods, a Provider includes account-specific methods for interacting with the Massa blockchain:

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
deploySC(params: DeploySCParams): Promise<SmartContract>
```

Deploys a smart contract to the Massa blockchain.

- `params`: Parameters for deploying the smart contract.
