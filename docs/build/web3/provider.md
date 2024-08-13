---
id: provider
sidebar_label: Provider
sidebar_position: 3
---

# Provider

A Provider is a fundamental object used to interact with the Massa blockchain. It provides methods for various blockchain operations, including balance retrieval, network information, signing data, and executing smart contract operations.

A Provider can be created from a KeyPair or accessed from a Wallet account. It can be used to sign transactions and interact with the blockchain.

## Creating a Provider

There are multiple ways to create a Provider, depending on your use case. Here are two common methods:

### 1. From a Wallet

In a browser environment, you can create a Provider from a Wallet. This is useful for dApps that interact with user wallets.

To use the Provider from a wallet you need two things:

- **A wallet installed**: It can be MassaStation, bearby or any other wallet that supports the Massa blockchain. See [wallet section](/docs/build/wallet/intro).

- **The wallet-provider package installed**:

```typescript
npm install @massalabs/wallet-provider
```

```typescript
import { getWallets } from "@massalabs/wallet-provider";

// First we get the list of wallets installed
let walletList = await getWallets();

// Then we find the wallet we want to use
const wallet = walletList.find(
  (provider) => provider.name() === "MASSASTATION"
);

if (!wallet) {
  console.log("No wallet found");
  return;
}

// We get the accounts from the wallet
let accounts = await wallet?.accounts();

if (accounts.length === 0) {
  console.log("No accounts found");
  return;
}

// We use the first account as the provider
const provider = accounts[0];
```

### 2. From a KeyPair or Environment Variable

For backend applications or when you have direct access to private keys, you can create a Provider from a KeyPair. This method is also useful when working with environment variables for increased security.

First you will need to install the `@massalabs/massa-web3` package:

```typescript
npm install @massalabs/massa-web3
```

Then you can create a Provider from a KeyPair in two ways:

- **From a environment variable:**

```typescript
import { Account as KeyPair, Web3Provider } from "@massalabs/massa-web3";
// Will use the environment variables at `PRIVATE_KEY` to create a KeyPair
// but you can also pass the name of the env variable as a string
const keyPair = await KeyPair.fromEnv();
// Will use the KeyPair to create a Provider
const provider = Web3Provider.buildnet(keyPair);
```

- **From a generated KeyPair:**

```typescript
import { Account as KeyPair, Web3Provider } from "@massalabs/massa-web3";

// Will create a new KeyPair
const keyPair = await KeyPair.generate();
// Will use the KeyPair to create a Provider
const provider = Web3Provider.buildnet(keyPair);
```

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

- `final`: If true, returns the final (confirmed) balance. If false, returns the speculative (possibly unconfirmed) balance.

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
