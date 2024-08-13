---
id: prerequisites
sidebar_label: Prerequisites
sidebar_position: 2
---

# Prerequisites

Before you can begin developing dapp on Massa, you'll need to ensure that your development environment meets the following requirements:

- [Node.js](https://nodejs.org/en/) installed on your system.

:::tip
We recommend updating Node.js and npm to the latest version for best performance and security.

To update npm, run the following commands:

```shell
npm install -g npm
```

To update Node.js, the recommended way is to use `n`, the Node.js version manager.
If you do not already have `n` installed, you can install it with the following command:

```shell
npm install -g n
```

Once `n` is installed, you can update to the latest version of Node.js with the following command:

```shell
n latest
```

:::

Once you have an up-to-date Node.js, you're ready to start developing smart contracts on the Massa blockchain.

## Using a Bundler for Vanilla JavaScript Projects

As the Massa Web3 library doesn't provide a pre-bundled version, it's recommended to use a bundler when working with vanilla JavaScript projects. This approach ensures proper module resolution and allows you to take full advantage of the library's features.

We recommend using [Vite](https://vitejs.dev/) as a fast and efficient bundler for your projects. Here's how you can set up a new project with Vite:

1. Create a new project directory and navigate into it:

   ```shell
    npm create vite@latest
   ```

2. Choose the `vanilla` template when prompted.

3. Install the Massa Web3 library:
   ```shell
   npm install @massalabs/wallet-provider@next
   ```
   and/or
   ```shell
   npm install @massalabs/massa-web3@next
   ```

This setup allows you to use the Massa Web3 library in a vanilla JavaScript project with proper bundling and module resolution.

:::note
Using a bundler like Vite not only resolves module dependencies but also provides features like hot module replacement and optimized builds for production, enhancing your development experience with the Massa Web3 library.
:::
