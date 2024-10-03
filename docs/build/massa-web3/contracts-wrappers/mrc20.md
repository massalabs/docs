---
id: mrc20
sidebar_label: MRC20 Contract Wrapper
---

# MRC20 Contract Wrapper

The MRC20 class is a wrapper for interacting with MRC20 token contracts on the Massa blockchain. It extends the SmartContract class and provides methods to easily interact with standard MRC20 functions.

## Constructor

```typescript
constructor(provider: Provider, address: string)
```

Creates a new MRC20 object.

- `provider`: The Provider object used to interact with the blockchain.
- `address`: The address of the MRC20 token contract.

## Methods

### Read Methods

```typescript
async version(options?: ReadSCOptions): Promise<string>
```

Retrieves the version of the MRC20 contract.

```typescript
async name(options?: ReadSCOptions): Promise<string>
```

Retrieves the name of the token.

```typescript
async symbol(options?: ReadSCOptions): Promise<string>
```

Retrieves the symbol of the token.

```typescript
async decimals(options?: ReadSCOptions): Promise<number>
```

Retrieves the number of decimals used by the token.

```typescript
async totalSupply(options?: ReadSCOptions): Promise<bigint>
```

Retrieves the total supply of the token.

```typescript
async balanceOf(address: string, options?: ReadSCOptions): Promise<bigint>
```

Retrieves the balance of the specified address.

```typescript
async allowance(ownerAddress: string, spenderAddress: string, options?: ReadSCOptions): Promise<bigint>
```

Retrieves the amount of tokens that the spender is allowed to spend on behalf of the owner.

### Write Methods

```typescript
async transfer(to: string, amount: bigint, options?: CallSCOptions): Promise<Operation>
```

Transfers tokens to the specified address.

```typescript
async increaseAllowance(spenderAddress: string, amount: bigint, options?: CallSCOptions): Promise<Operation>
```

Increases the allowance granted to the spender.

```typescript
async decreaseAllowance(spenderAddress: string, amount: bigint, options?: CallSCOptions): Promise<Operation>
```

Decreases the allowance granted to the spender.

```typescript
async transferFrom(spenderAddress: string, recipientAddress: string, amount: bigint, options?: CallSCOptions): Promise<Operation>
```

Transfers tokens from one address to another using the allowance mechanism.

## Usage Example

Here's an example of how to use the MRC20 wrapper:

```typescript
import { MRC20 } from "@massalabs/massa-web3";
import { Provider } from "@massalabs/massa-web3";

async function mrc20Example(provider: Provider) {
  const WMAS_ADDRESS = "AS12k8viVmqPtRuXzCm6rKXjLgpQWqbuMjc37YHhB452KSUUb9FgL";
  const wmasContract = new MRC20(provider, WMAS_ADDRESS);

  // Read token information
  const name = await wmasContract.name();
  const symbol = await wmasContract.symbol();
  const decimals = await wmasContract.decimals();
  const totalSupply = await wmasContract.totalSupply();

  console.log(`Token: ${name} (${symbol})`);
  console.log(`Decimals: ${decimals}`);
  console.log(`Total Supply: ${totalSupply}`);

  // Check balance
  const balance = await wmasContract.balanceOf(provider.address);
  console.log(`Your balance: ${balance}`);

  // Perform a transfer
  const recipient = "AU1wN8rn4SkwYSTDF3dHFY4U28KtsqKL1NnEjDZhHnHEy6cEQm53";
  const amount = 1000n; // Transfer 1000 tokens (adjust based on decimals)
  const transferOperation = await wmasContract.transfer(recipient, amount);
  await transferOperation.waitSpeculativeExecution();
  console.log("Transfer completed");

  // Check new balance
  const newBalance = await wmasContract.balanceOf(provider.address);
  console.log(`Your new balance: ${newBalance}`);

  // Increase allowance
  const spender = "AU1wN8rn4SkwYSTDF3dHFY4U28KtsqKL1NnEjDZhHnHEy6cEQm53";
  const allowanceAmount = 5000n;
  const increaseAllowanceOperation = await wmasContract.increaseAllowance(
    spender,
    allowanceAmount
  );
  await increaseAllowanceOperation.waitSpeculativeExecution();
  console.log("Allowance increased");

  // Check allowance
  const allowance = await wmasContract.allowance(provider.address, spender);
  console.log(`Allowance for spender: ${allowance}`);
}
```

This example demonstrates how to create an MRC20 object, read token information, check balances, perform transfers, and manage allowances.

Remember to handle errors appropriately in your actual implementation, as blockchain operations can fail due to various reasons such as insufficient balance, network issues, or contract errors.

## Note on BigInt Usage

The MRC20 wrapper uses `bigint` for amount values to handle large numbers accurately. When working with token amounts, remember to consider the token's decimals. For example, if a token has 6 decimals, an amount of 1 token would be represented as `1_000_000n`.
