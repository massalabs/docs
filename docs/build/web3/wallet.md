---
id: wallet
sidebar_label: Wallet
---

# Wallet

The Wallet interface provides methods to interact with user wallets in the Massa blockchain ecosystem. It's part of the `@massalabs/wallet-provider` library and is crucial for building decentralized applications (dApps) that require interaction with user wallets.

:::warning

Not all functions defined in the Wallet interface are available in every wallet implementation. The availability of specific functions may vary depending on the wallet being used (e.g., MassaStation, Bearby). In the following sections, we will specify which functions are available for each supported wallet. Always check the compatibility of your target wallet before using a specific function in your application.
:::

## Usage Example

Here's a basic example of how to use the Wallet interface:

```typescript
import { getWallets } from "@massalabs/wallet-provider";

async function walletExample() {
  // Get list of available wallets
  const wallets = await getWallets();

  if (wallets.length === 0) {
    console.log("No wallets found");
    return;
  }

  // Use the first available wallet
  const wallet = wallets[0];

  // Connect to the wallet
  const connected = await wallet.connect();
  if (!connected) {
    console.log("Failed to connect to wallet");
    return;
  }

  // Get accounts
  const accounts = await wallet.accounts();
  console.log("Accounts:", accounts);

  // Listen for account changes
  wallet.listenAccountChanges((address) => {
    console.log("Account changed:", address);
  });

  // Get network info
  const networkInfo = await wallet.networkInfos();
  console.log("Network info:", networkInfo);

  // Disconnect when done
  await wallet.disconnect();
}

walletExample().catch(console.error);
```

This example demonstrates how to connect to a wallet, retrieve accounts, listen for account changes, and get network information.

Remember to handle errors appropriately in your actual implementation, as wallet operations can fail due to various reasons such as user rejection, network issues, or wallet-specific limitations.

## Wallet Methods

Here's a detailed explanation of each method in the Wallet interface, along with their availability in MassaStation and Bearby wallets:

```typescript
name(): WalletName
```

Returns the name of the wallet.

- **Availability:** MassaStation ✅ | Bearby ✅

```typescript
accounts(): Promise<Provider[]>
```

Retrieves the list of accounts (as Provider objects) associated with the wallet.

- **Availability:** MassaStation ✅ | Bearby ✅

```typescript
importAccount(publicKey: string, privateKey: string): Promise<void>
```

Imports an account into the wallet using the provided public and private keys.

- **Availability:** MassaStation ✅ | Bearby ❌ (Not implemented)

```typescript
deleteAccount(address: string): Promise<void>
```

Deletes an account from the wallet.

- **Availability:** MassaStation ✅ | Bearby ❌ (Not implemented)

```typescript
networkInfos(): Promise<Network>
```

Retrieves information about the current network the wallet is connected to.

- **Availability:** MassaStation ✅ | Bearby ✅

```typescript
generateNewAccount(name: string): Promise<Provider>
```

Generates a new account in the wallet.

- **Availability:** MassaStation ✅ | Bearby ❌ (Not implemented)

```typescript
connect(): Promise<boolean>
```

Initiates a connection to the wallet. Returns true if the connection is successful.

- **Availability:** MassaStation ❌ (Not implemented) | Bearby ✅

```typescript
disconnect(): Promise<boolean>
```

Disconnects from the wallet. Returns true if the disconnection is successful.

- **Availability:** MassaStation ❌ (Not implemented) | Bearby ✅

```typescript
connected(): boolean
```

Returns whether the wallet is currently connected.

- **Availability:** MassaStation ❌ (Not implemented) | Bearby ✅

```typescript
enabled(): boolean
```

Returns whether the wallet is enabled and available for use.

- **Availability:** MassaStation ❌ (Not implemented) | Bearby ✅

```typescript
listenAccountChanges(callback: (address: string) => void): ListenerCtrl | undefined
```

Sets up a listener for account changes in the wallet.

- **Availability:** MassaStation ❌ (Not implemented) | Bearby ✅

```typescript
listenNetworkChanges(callback: (network: string) => void): ListenerCtrl | undefined
```

Sets up a listener for network changes in the wallet.

- **Availability:** MassaStation ✅ | Bearby ✅

## Wallet-Specific Notes

### MassaStation

- Connection-related methods (`connect()`, `disconnect()`, `connected()`, `enabled()`) are not implemented.
- Account change listener (`listenAccountChanges()`) is not implemented.
<!-- TODO: Explain how to handle account changes in MassaStation. -->

### Bearby

- Account management methods (`importAccount()`, `deleteAccount()`, `generateNewAccount()`) are not implemented.
- Provides full support for connection-related methods and listeners.

When developing your application, ensure you handle cases where a method is not implemented for your target wallet. You may need to provide alternative workflows or inform users about limitations based on their wallet choice.
