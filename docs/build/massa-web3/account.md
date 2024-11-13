---
id: account
sidebar_label: Account
---

# Account Management

In `@massalabs/massa-web3`, the Account class provides a straightforward way to sign transactions on the Massa blockchain. You can initialize an account using a private key, ensuring secure access while keeping sensitive information out of the codebase. Here, we’ll cover how to create a new account or load an existing one from its private key unsing an `.env` file.

## Create new account

```typescript
import { Account } from '@massalabs/massa-web3'

const account = await Account.generate()
console.log("address:", account.address.toString())
console.log("public key:", account.publicKey.toString())
console.log("private key:", account.privateKey.toString())

/* result example:
address: AU12TuXSXVr6ivBv4Y3QzVf9X1FeMo8SNtXheRJjEayNXyYYX5vSQ
public key: P12p6vgR4RKJCeNp7TH5wmhWNwkBBQJiByCnvahcRRvKnsmngXJa
private key: S1cSpLU7XpfYrgLPxuMk1V47T1z1SFcNzgi4Yb8oaYXxqXGX1mu
*/
```

## Import an existing account

### Setting Up the Private Key

1. **Install the dotenv package**: To securely load environment variables in Node.js, we’ll use the dotenv package, which allows you to access variables stored in an `.env` file.
   
  ```bash
  npm install dotenv
  ```

1. **Add the Private Key to an `.env` File**: Create an `.env` file in your project root directory (make sure to add this file to .gitignore to avoid sharing sensitive information). Add your private key as follows:
   
  ```
  PRIVATE_KEY=your_private_key_here
  ```

### Initializing the Account in massa-web3

Once the private key is set up in the .env file, you can use `@massalabs/massa-web3` to load the account and access it securely.

   ```typescript
   import 'dotenv/config'
   import { Account } from '@massalabs/massa-web3'

   const account = await Account.fromEnv()
   ```

   