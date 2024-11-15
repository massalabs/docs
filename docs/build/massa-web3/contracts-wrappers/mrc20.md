---
id: mrc20
sidebar_label: MRC20 Contract Wrapper
---

# MRC20 Contract Wrapper

The MRC20 class is a wrapper for interacting with MRC20 token contracts on the Massa blockchain. It extends the SmartContract class and provides methods to easily interact with standard MRC20 functions.

> **Note:** All official MRC20 tokens have their own specific implementations. Below is a list of official MRC20 wrappers:
> - Mainnet:
>   - WMAS (AS12U4TZfNK7qoLyEERBBRDMu8nm5MKoRzPXDXans4v9wdATZedz9)
>   - USDCe (AS1hCJXjndR4c9vekLWsXGnrdigp4AaZ7uYG3UKFzzKnWVsrNLPJ)
>   - DAIe (AS1ZGF1upwp9kPRvDKLxFAKRebgg7b3RWDnhgV7VvdZkZsUL7Nuv)
>   - WETHe (AS124vf3YfAJCSCQVYKczzuWWpXrximFpbTmX4rheLs5uNSftiiRY)
>   - WETHb (AS125oPLYRTtfVjpWisPZVTLjBhCFfQ1jDsi75XNtRm1NZux54eCj)
>   - USDTb (AS12LKs9txoSSy8JgFJgV96m8k5z9pgzjYMYSshwN67mFVuj3bdUV)
>   - PUR (AS133eqPPaPttJ6hJnk3sfoG5cjFFqBDi1VGxdo2wzWkq8AfZnan)
> - Buildnet:
>   - DAIs (AS12LpYyAjYRJfYhyu7fkrS224gMdvFHVEeVWoeHZzMdhis7UZ3Eb)
>   - WETHs (AS1gt69gqYD92dqPyE6DBRJ7KjpnQHqFzFs2YCkBcSnuxX5bGhBC)
>   - USDCs (AS12k8viVmqPtRuXzCm6rKXjLgpQWqbuMjc37YHhB452KSUUb9FgL)
>   - USDTbt (AS12ix1Qfpue7BB8q6mWVtjNdNE9UV3x4MaUo7WhdUubov8sJ3CuP)
>   - WETHbt (AS12RmCXTA9NZaTBUBnRJuH66AGNmtEfEoqXKxLdmrTybS6GFJPFs)
>   - WMAS (AS12FW5Rs5YN2zdpEnqwj4iHUUPt9R4Eqjq2qtpJFNKW3mn33RuLU)

## Basic usage:

```typescript
import { WETHe } from '@massalabs/massa-web3'
...
const wethContract = new WETHe(provider)
const accountETHBalance = await wethContract.balanceOf(provider.address)
```

# Generic MRC20 methods

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
