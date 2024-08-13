---
id: prerequisites
sidebar_label: Prerequisites
sidebar_position: 2
---

# Prerequisites

Before you can begin developing dapps on Massa, you'll need to ensure that your development environment meets the following requirements:

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
   npm install @massalabs/massa-web3@next
   ```

This setup allows you to use the Massa Web3 library in a vanilla JavaScript project with proper bundling and module resolution.

:::note
Using a bundler like Vite not only resolves module dependencies but also provides features like hot module replacement and optimized builds for production, enhancing your development experience with the Massa Web3 library.
:::

### Vite Configuration and Polyfills

To ensure compatibility with Vite and to provide necessary polyfills for the Massa Web3 library, follow these steps:

1. Install required dependencies:

   ```shell
   npm install lodash-es
   npm install vite-plugin-node-polyfills
   ```

2. Create a `vite.config.js` file in your project root with the following content:

   ```javascript
   import { defineConfig } from "vite";
   import { nodePolyfills } from "vite-plugin-node-polyfills";

   export default defineConfig({
     plugins: [nodePolyfills()],
     resolve: {
       alias: {
         lodash: "lodash-es",
       },
     },
     build: {
       rollupOptions: {
         external: ["lodash"],
       },
     },
   });
   ```

   This configuration adds the necessary Node.js polyfills and resolves lodash to its ES module version, ensuring compatibility with the Massa Web3 library.

:::tip
Use this configuration in your own Vite projects to ensure compatibility with the Massa Web3 library. It provides the required polyfills and resolves potential issues with dependencies like lodash.
:::

By following these steps, you'll have a properly configured development environment ready for building dapps on the Massa blockchain using the Massa Web3 library.
