---
id: operation
sidebar_label: Operation
---

# Operation

The Operation object is returned when sending an operation to the Massa blockchain. It contains a variety of helper methods to check the status of the operation, wait for its execution, and retrieve associated events.

## Usage Example

Here's a basic example of how to use the Operation object:

```typescript
import { Provider, Operation, OperationStatus } from "@massalabs/massa-web3";

// Here we assume that 'provider' is an instance of Provider
const operation = await provider.callSC({
  func: targetFunction,
  target: targetAddress,
  caller: callerAddress,
  parameter,
  coins,
  fee,
});

const speculativeStatus = await operation.waitSpeculativeExecution();
console.log("Speculative status:", speculativeStatus);

if (status === OperationStatus.SpeculativeSuccess) {
  console.log("Operation Success");
}

const speculativeEvents = await operation.getSpeculativeEvents();
console.log("Speculative events:", speculativeEvents);

const finalStatus = await operation.waitFinalExecution();
console.log("Final status:", finalStatus);

const finalEvents = await operation.getFinalEvents();
console.log("Final events:", finalEvents);
```

This example demonstrates how to create an Operation object, wait for its execution (both speculative and final) and retrieve events.

Remember to handle errors appropriately in your actual implementation, as blockchain operations can fail due to various reasons such as network issues or execution errors.

## Methods

```typescript
async getStatus(): Promise<OperationStatus>
```

Gets the current status of the operation.

- Returns: A Promise that resolves to the OperationStatus of the operation.

```typescript
async waitSpeculativeExecution(timeout?: number, period?: number): Promise<OperationStatus>
```

Waits for the operation to be included in a block (speculative execution).

- `timeout` (optional): The maximum time to wait (default: 60000ms).
- `period` (optional): The time interval to check the status (default: 500ms).
- Returns: A Promise that resolves to the OperationStatus or NotFound if the timeout is reached.

```typescript
async waitFinalExecution(timeout?: number, period?: number): Promise<OperationStatus>
```

Waits for the block containing the operation to be final.

- `timeout` (optional): The maximum time to wait (default: 60000ms).
- `period` (optional): The time interval to check the status (default: 500ms).
- Returns: A Promise that resolves to the OperationStatus or NotFound if the timeout is reached.

```typescript
async getFinalEvents(): Promise<SCEvent[]>
```

Gets the events of the operation once the block reaches the final state.

- Returns: A Promise that resolves to an array of SCEvent objects.
- Throws an error if the operation is not found.

```typescript
async getSpeculativeEvents(): Promise<SCEvent[]>
```

Gets the events of the speculative execution of the operation.

- Returns: A Promise that resolves to an array of SCEvent objects.
- Throws an error if the operation is not found.

```typescript
async getDeployedAddress(waitFinal = false): Promise<string>
```

Gets the deployed address of a smart contract operation.

- `waitFinal` (optional): If true, waits for final execution; otherwise, uses speculative execution (default: false).
- Returns: A Promise that resolves to the deployed contract address.
- Throws an error if no events are received or if there's an execution error.
