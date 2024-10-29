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
   npm install @massalabs/wallet-provider
   npm install @massalabs/massa-web3
   ```

This setup allows you to use the Massa Web3 library in a vanilla JavaScript project with proper bundling and module resolution.

:::note
Using a bundler like Vite not only resolves module dependencies but also provides features like hot module replacement and optimized builds for production, enhancing your development experience with the Massa Web3 library.
:::

# Vite Configuration and Polyfills for Massa Web3 Projects

To ensure compatibility with Vite and to provide necessary polyfills for the Massa Web3 library, follow these steps. These configurations are necessary because, at the moment, `massa-web3` uses `lodash` and `events`, which are not natively supported in the browser environment.

## 1. Install Required Dependencies

First, install the necessary dependencies by running the following commands in your project directory:

```bash
npm install lodash-es
npm install vite-plugin-node-polyfills
```

## 2. Create Vite Configuration File

Create a `vite.config.js` file in your project root with the following content:

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

## 3. Explanation of the Configuration

- `nodePolyfills()`: This plugin provides polyfills for Node.js built-in modules, which are required by `massa-web3` but not available in the browser environment.
- `resolve.alias`: This configuration resolves `lodash` to its ES module version (`lodash-es`), ensuring compatibility with the module system used by Vite.
- `build.rollupOptions.external`: This tells Vite to treat `lodash` as an external dependency, which can help prevent duplicated code and potential conflicts.

## Why This Configuration is Necessary

1. **Node.js Polyfills**: The `massa-web3` library uses some Node.js-specific modules (like `events`) that are not available in the browser environment. The `vite-plugin-node-polyfills` provides implementations of these modules for the browser.

2. **Lodash Compatibility**: `massa-web3` depends on `lodash`, which is traditionally a CommonJS module. Vite works best with ES modules. By using `lodash-es` and setting up the alias, we ensure that the ES module version of lodash is used, which is compatible with Vite's ESM-centric approach.

3. **Build Optimization**: By marking `lodash` as external, we prevent potential issues with multiple versions of lodash being bundled and allow for better tree-shaking and code splitting.

By following these steps and understanding the reasons behind them, you'll have a properly configured development environment ready for building dApps on the Massa blockchain using the Massa Web3 library with Vite as your build tool.

Remember to keep an eye on updates to `massa-web3`, as future versions may reduce or eliminate the need for some of these polyfills and configurations.
