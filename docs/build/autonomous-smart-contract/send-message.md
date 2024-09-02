---
id: send-message
sidebar_label: Send Message
---

# Autonomous Smart Contracts: Send Message

The `sendMessage` function is one of the core mechanism enabling Autonomous Smart Contracts (ASCs) in the Massa blockchain. This powerful feature allows contracts to schedule future executions, creating truly autonomous systems.

## Understanding `sendMessage`

### Function Signature

```typescript
function sendMessage(
  at: Address,
  functionName: string,
  validityStartPeriod: u64,
  validityStartThread: u8,
  validityEndPeriod: u64,
  validityEndThread: u8,
  maxGas: u64,
  rawFee: u64,
  coins: u64,
  functionParams: StaticArray<u8>,
  filterAddress: Address = new Address(),
  filterKey: StaticArray<u8> = new StaticArray<u8>(0)
): void;
```

### Key Parameters

- `at`: The target contract address
- `functionName`: The function to be called
- `validityStartPeriod` & `validityEndPeriod`: The time window for execution
- `maxGas`: Maximum gas allowed for execution
- `rawFee`: Fee for prioritizing the message
- `filterAddress` & `filterKey`: Optional conditions for execution

## Usage Patterns

### Self-Calling Functions

Create recursive processes:

```typescript
export function recursiveFunction(): void {
  if (shouldContinue()) {
    sendMessage(
      Context.callee(), // Current contract's address
      "recursiveFunction", // Function to call
      Context.currentPeriod(), // Start validity period
      Context.currentThread(), // Example start thread
      Context.currentPeriod() + 10, // Meaning 10 periods of validity
      Context.currentThread(), // Example end thread
      4_000_000_000, // Example maxGas
      100000, // Example rawFee
      0, // Example coins
      [] // Example functionParams
    );
  }
}
```

### Inter-Contract Communication

Schedule calls to other contracts:

```typescript
export function scheduleExternalCall(): void {
  sendMessage(
    new Address("AS..."), // Other contract's address
    "externalFunction",
    Context.currentPeriod(),
    Context.currentThread(),
    Context.currentPeriod() + 10,
    Context.currentThread(),
    4_000_000_000, // maxGas
    100000, // rawFee
    0, // coins
    new Args().add("my_param").serialize()
  );
}
```

## Important Considerations

### Execution Not Guaranteed

The execution of scheduled messages depends on network conditions and the provided fee. Higher network traffic and lower fees may result in failed executions.

### Best Practices

1. Provide adequate fees, especially for critical operations
2. Use appropriate validity periods to balance execution likelihood and timeliness
3. Carefully manage contract state and handle potential race conditions

## Conclusion

The `sendMessage` function is a powerful tool for creating autonomous systems on Massa. While it offers great flexibility, developers must carefully consider execution dynamics and implement appropriate safeguards to ensure reliable operation of their Autonomous Smart Contracts.
