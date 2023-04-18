---
id: prerequisites
sidebar_label: Prerequisites
---

# Prerequisites

Before you can begin developing smart contracts on the Massa blockchain, you'll need to ensure that your development environment meets the following requirements:

- [Node.js](https://nodejs.org/en/) installed on your system.

  - On macOS, you can use [Homebrew](https://brew.sh/) to install Node.js with the following command:

    ```
    brew install node
    ```

  - On Linux, you can use the APT package manager to install Node.js with the following command:

    ```
    sudo apt install nodejs
    ```

  - On Windows, you can use the [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to run Linux commands like the ones shown above.

  If none of the above options are suitable for your environment, you can also download Node.js directly from the [official website](https://nodejs.org/en/download/) and install it manually.

:::tip
We recommend updating Node.js and npm to the latest version for best performance and security. To update Node.js and npm, run the following commands:
```shell
npm install -g npm
```
If you do not already have `n` installed, you can install it with the following command:
```shell
npm install -g n
```
Once `n` is installed, you can update to the latest version of Node.js with the following command:
```shell
n latest
```
:::


Once you've installed Node.js, you're ready to start developing smart contracts on the Massa blockchain. 
