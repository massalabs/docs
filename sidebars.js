/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  massaStationSidebar: [
    {
      type: "doc",
      id: "massaStation/home",
    },
    {
      type: "category",
      label: "Setup",
      items: [
        {
          type: "doc",
          id: "massaStation/install",
        },
        {
          type: "doc",
          id: "massaStation/manual-install",
        },
        {
          type: "doc",
          id: "massaStation/uninstall",
        },
      ],
    },
    {
      type: "doc",
      id: "massaStation/modules",
    },
    {
      type: "category",
      label: "Massa Wallet",
      items: [
        {
          type: "doc",
          id: "massaStation/massa-wallet/getting-started",
        },
        {
          type: "doc",
          id: "massaStation/massa-wallet/account-creation",
        },
        {
          type: "doc",
          id: "massaStation/massa-wallet/transaction-management",
        },
        {
          type: "doc",
          id: "massaStation/massa-wallet/asset-monitoring-and-history",
        },
        {
          type: "doc",
          id: "massaStation/massa-wallet/account-backup",
        },
        {
          type: "doc",
          id: "massaStation/massa-wallet/account-restore",
        },
      ],
    },
    {
      type: "doc",
      id: "massaStation/browse-decentralized-application",
    },
    {
      type: "doc",
      id: "massaStation/faq",
    },
    {
      type: "doc",
      id: "massaStation/troubleshooting",
    },
    {
      type: "html",
      value: "<hr/>",
    },
    {
      type: "html",
      value:
        "<span class='menu__link'><b><small> Create a Plugin </small></b></span>",
    },
    {
      type: "doc",
      id: "massaStation/guidelines",
    },
    {
      type: "doc",
      id: "massaStation/hello-world-plugin",
    },
  ],
  learnSidebar: [
    {
      type: "doc",
      id: "learn/home",
    },
    {
      type: "html",
      value: "<hr/>",
    },
    {
      type: "html",
      value:
        "<span class='menu__link'><b><small> Massa Blockchain </small></b></span>",
    },
    {
      type: "doc",
      id: "learn/introduction",
    },
    {
      type: "doc",
      id: "learn/architecture/basic-concepts",
    },
    {
      type: "category",
      label: "Node Architecture",
      items: [
        {
          type: "doc",
          id: "learn/architecture/node-architecture",
        },
        {
          type: "doc",
          id: "learn/architecture/operation-lifecycle",
        },
        {
          type: "doc",
          id: "learn/architecture/consensus-quality",
        },
      ],
    },
    {
      type: "doc",
      id: "learn/bootstrap",
    },
    {
      type: "doc",
      id: "learn/storage-costs",
    },
    {
      type: "doc",
      id: "learn/gas",
    },
    {
      type: "doc",
      id: "learn/operation-format-execution",
    },
    {
      type: "html",
      value: "<hr/>",
    },
    {
      type: "html",
      value:
        "<span class='menu__link'><b><small>Autonomous Smart Contract</small></b></span>",
    },
    {
      type: "doc",
      id: "learn/asc/intro",
    },
    {
      type: "doc",
      id: "learn/asc/massa-asc",
    },
    {
      type: "doc",
      id: "learn/asc/use-cases",
    },
    {
      type: "html",
      value: "<hr/>",
    },
    {
      type: "html",
      value:
        "<span class='menu__link'><b><small>Decentralized Web</small></b></span>",
    },
    {
      type: "doc",
      id: "learn/decentralized-web",
    },
  ],
  tutorialSidebar: [
    {
      type: "doc",
      id: "tutorial/home",
    },
    {
      type: "html",
      value: "<hr/>",
    },
    {
      type: "html",
      value:
        "<span class='menu__link'><b><small> Tutorials </small></b></span>",
    },
    {
      type: "doc",
      id: "tutorial/trading-bot",
    },
  ],
  buildSidebar: [
    {
      type: "doc",
      id: "build/home",
    },
    {
      type: "html",
      value: "<hr/>",
    },
    {
      type: "html",
      value:
        "<span class='menu__link'><b><small> Build a dApp </small></b></span>",
    },
    {
      type: "doc",
      id: "build/hello-world-dapp",
    },
    {
      type: "category",
      label: "Smart Contract",
      items: [
        {
          type: "doc",
          id: "build/smart-contract/intro",
          label: "Introduction",
        },
        {
          type: "category",
          collapsible: false,
          label: "Develop",
          items: [
            {
              type: "doc",
              id: "build/smart-contract/prerequisites",
            },
            {
              type: "doc",
              id: "build/smart-contract/webassembly-module",
              label: "WebAssembly Module",
            },
            {
              type: "doc",
              id: "build/smart-contract/sdk",
              label: "WebAssembly Module",
            },
          ],
        },
      ],
    },
    {
      type: "html",
      value: "<hr/>",
    },
    {
      type: "html",
      value:
        "<span class='menu__link'><b><small> Developer Tools </small></b></span>",
    },
    {
      type: "category",
      label: "Wallets",
      items: [
        {
          type: "doc",
          id: "build/wallet/intro",
        },
        {
          type: "doc",
          id: "build/wallet/massa-wallet",
        },
        {
          type: "doc",
          id: "build/wallet/wallet-provider",
        },
        {
          type: "doc",
          id: "build/wallet/community-wallets",
        },
      ],
    },
    {
      type: "category",
      label: "Massa-Web3",
      items: [
        {
          type: "doc",
          id: "build/massa-web3/massa-web3-main",
        },
        {
          type: "doc",
          id: "build/massa-web3/dapp-usage-massa-web3",
        },
        {
          type: "doc",
          id: "build/massa-web3/backend-usage-massa-web3",
        },
        {
          type: "doc",
          id: "build/massa-web3/massa-web3-utils",
        },
      ],
    },
    {
      type: "category",
      label: "Networks & Faucets",
      items: [
        {
          type: "doc",
          id: "build/networks-faucets/public-networks",
        },
        {
          type: "doc",
          id: "build/networks-faucets/local-network",
        },
      ],
    },
    {
      type: "doc",
      id: "build/tooling-versions",
    },
    {
      type: "category",
      label: "API",
      items: [
        {
          type: "doc",
          id: "build/api/providers",
        },
        {
          type: "doc",
          id: "build/api/jsonrpc",
        },
        {
          type: "doc",
          id: "build/api/grpc",
        },
      ],
    },
    {
      type: "doc",
      id: "build/standards",
    },
  ],
  nodeSidebar: [
    {
      type: "doc",
      id: "node/home",
      label: "Home",
    },
    {
      type: "html",
      value: "<hr/>",
    },
    {
      type: "html",
      value:
        "<span class='menu__link'><b><small> Running a Node </small></b></span>",
    },
    {
      type: "doc",
      id: "node/install",
      label: "Installing a node",
    },
    {
      type: "doc",
      id: "node/run",
      label: "Running a node",
    },
    {
      type: "doc",
      id: "node/wallet",
      label: "Creating a wallet",
    },
    {
      type: "doc",
      id: "node/stake",
      label: "Staking",
    },
    {
      type: "doc",
      id: "node/routability",
      label: "Routability",
    },
    {
      type: "doc",
      id: "node/all-configs",
      label: "Node and client configuration",
    },
    {
      type: "doc",
      id: "node/initial",
      label: "Initial node runners",
    },
    {
      type: "html",
      value: "<hr/>",
    },
    {
      type: "html",
      value:
        "<span class='menu__link'><b><small> FAQ and Community </small></b></span>",
    },
    {
      type: "doc",
      id: "node/faq",
      label: "Frequently Asked Questions",
    },
    {
      type: "doc",
      id: "node/community-resources",
      label: "Tutorials and community resources",
    },
  ],
};

module.exports = sidebars;
