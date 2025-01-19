---
id: smart-contracts
sidebar_label: Smart-contracts
---

# Smart Contract Interaction
The `@massalabs/massa-web3` library provides straightforward methods for interacting with smart contracts on the Massa blockchain. You can read data from smart contracts, execute functions, and handle smart contract function call parameters serialization using the `Args` class.

**Initialization of `SmartContract` class**

```typescript
import { SmartContract } from '@massalabs/massa-web3'
...
const contract = new SmartContract(provider, contractAddress);
```

### Read-Only call

A read-only call allows you to interact with a smart contract function without modifying the blockchain’s state. It does not require user signature. This type of call is useful in two main scenarios:
 - **Reading Data**: Use it to call a smart contract function that only reads data and does not modify any state. This is similar to a view function in Solidity, where you can query data without incurring any cost or initiating a transaction.
 - **Simulating Write Operations**: A read-only call can also simulate a write function, providing a “dry run” of the transaction. This allows you to predict the result of the transaction, estimate the gas cost, and identify any potential issues before executing the actual state-changing function on the blockchain.

```typescript
read(
    func: string,
    args: Args | Uint8Array = new Uint8Array(),
    options?: ReadSCOptions
): Promise<ReadSCData>
```

Parameters:
   - `func`: Name of the smart contract function to call.
   - `args`: Function arguments though Args class or already serialized. Default to empty array (no args)
   - `options`: available options:
     - caller: set the caller address. default is the Provider address
     - coins: MAS amount to sent with the call. But keep in mind its a read-only call, so its just for simulation purpose. default is 0
     - fee: operation fee. default to 0.01 MAS
     - maxGas: gas amount to execute operation. default to MAX_GAS_CALL
   
   Return:
```typescript
ReadSCData = {
value: Uint8Array // serialized data returned by the smart contract function
info: {
    error?: string
    events: SCEvent[] // events triggered by the execution
    gasCost: number // consumed gas amount
    }
}
```

###  Example: Reading Data from a Smart Contract

```typescript
import { SmartContract, Args, U256 } from '@massalabs/massa-web3';
...
// Initialize the SmartContract instance
const contractAddress = '<deployed_contract_address>';
const contract = new SmartContract(provider, contractAddress);

async function readUserBalance(userAddress: string): Promise<bigint> {
    // Prepare arguments for the function call
    const args = new Args().addString(userAddress);

    // Call the smart contract's balanceOf function
    const result = await contract.call('balanceOf', args);

    // Deserialize the returned balance
    const balance = U256.fromBytes(result);
    console.log(`User balance: ${balance}`);
    return balance;
}

readUserBalance("user_address_here");
```

### Write call

To interact with a smart contract function that changes the state (e.g., transferring tokens or updating data), use the `call` method on the `SmartContract` instance. This requires signing the operation, as it modifies the blockchain state.

```typescript
call(
    func: string,
    args: Args | Uint8Array = new Uint8Array(),
    options: CallSCOptions = {}
): Promise<Operation>
```

Parameters:
   - `func`: Name of the smart contract function to call.
   - `args`: Function arguments though Args class or already serialized. Default to empty array (no args)
   - `options`: available options:
    - periodToLive: Time to live ( operation expiration) in periods.
    - coins: MAS amount to sent with the call. But keep in mind its a read-only call, so its just for simulation purpose. default is 0
    - fee: operation fee. default to 0.01 MAS
    - maxGas: gas amount to execute operation. default to MAX_GAS_CALL

   Return:
   [`Operation`](./operation.md)

    ### Example: Calling a State-Changing Function
    ```typescript
    async function transferTokens(toAddress: string, amount: bigint): Promise<void> {
        // Prepare arguments for the function call
        const args = new Args().addString(toAddress).addU256(amount);

        // Call the smart contract's transfer function
        const operation = await contract.call('transfer', args);

        await operation.waitFinalExecution()

        console.log('Transfer operation is final';
    }

    transferTokens("recipient_address_here", 100n);
    ```

### Deploy

Deploy a smart contract bytecode. This function is static, an returns an instance of `SmartContract`

```typescript
static async deploy(
    provider: Provider,
    byteCode: Uint8Array,
    constructorArgs: Args | Uint8Array = new Uint8Array(),
    options: DeploySCOptions = {}
): Promise<SmartContract> {
```

Parameters:
   - `provider`: Provider instance
   - `byteCode`: compiled SmartContract bytes
   -  `constructorArgs`: Contract constructor arguments though Args class or already serialized. Default to empty array (no args)
   - `options`: available options:
    - periodToLive: Time to live ( operation expiration) in periods.
    - coins: MAS amount to sent with the call. But keep in mind its a read-only call, so its just for simulation purpose. default is 0
    - fee: operation fee. default to 0.01 MAS
    - maxGas: gas amount to execute operation. default to MAX_GAS_CALL
    - maxCoins: max MAS amount to spend (including bytecode storage fee and execution)
    - waitFinalExecution: default to False

   Return:
   `SmartContract`instance

