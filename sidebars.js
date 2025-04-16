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
      id: "learn/tokenomics",
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
        "<span class='menu__link'><b><small>Autonomous Smart Contracts</small></b></span>",
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
      type: "category",
      label: "Smart Contract",
      items: [
        {
          type: "doc",
          id: "build/smart-contract/intro",
          label: "Introduction",
        },
        {
          type: "doc",
          id: "build/smart-contract/prerequisites",
          label: "Project setup",
        },
        {
          type: "doc",
          id: "build/smart-contract/sdk",
          label: "Massa AS SDK",
        },
        {
          type: "category",
          collapsible: true,
          label: "Basic concepts",
          items: [
            {
              type: "doc",
              id: "build/smart-contract/basic-concepts/file-structure",
              label: "File structure",
            },
            {
              type: "doc",
              id: "build/smart-contract/basic-concepts/data-types",
              label: "Data types",
            },
            {
              type: "doc",
              id: "build/smart-contract/basic-concepts/functions-parameters",
              label: "Functions parameters",
            },
            {
              type: "doc",
              id: "build/smart-contract/basic-concepts/constructor",
              label: "Constructor",
            },
            {
              type: "doc",
              id: "build/smart-contract/basic-concepts/inheritance",
              label: "Inheritance",
            },
            {
              type: "doc",
              id: "build/smart-contract/basic-concepts/coins",
              label: "MAS token",
            },
            {
              type: "doc",
              id: "build/smart-contract/basic-concepts/storage",
              label: "Storage",
            },
            {
              type: "doc",
              id: "build/smart-contract/basic-concepts/serializable",
              label: "Serializable class",
            },
            {
              type: "doc",
              id: "build/smart-contract/basic-concepts/events",
              label: "Events",
            },
          ],
        },
        {
          type: "doc",
          id: "build/smart-contract/async",
          label: "Autonomous smart contracts",
        },
      ],
    },
    {
      type: "category",
      label: "Massa-Web3",
      items: [
        {
          type: "doc",
          id: "build/massa-web3/intro",
          label: "Web3 Libraries Introduction",
        },
        {
          type: "doc",
          label: "Account",
          id: "build/massa-web3/account",
        },
        {
          type: "doc",
          id: "build/massa-web3/provider",
          label: "Provider",
        },
        {
          type: "doc",
          id: "build/massa-web3/smart-contracts",
          label: "Smart contracts",
        },
        {
          type: "doc",
          id: "build/massa-web3/operation",
          label: "Operation",
        },
        {
          type: "category",
          collapsible: false,
          label: "Contracts-wrappers",
          items: [
            {
              type: "doc",
              id: "build/massa-web3/contracts-wrappers/contract-wrappers-intro",
              label: "Introduction",
            },
            {
              type: "doc",
              id: "build/massa-web3/contracts-wrappers/mrc20",
              label: "MRC20",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Wallet Provider",
      items: [
        {
          type: "doc",
          id: "build/wallet-provider/wallet",
          label: "Wallet Provider",
        },
      ],
    },
    {
      type: "category",
      label: "Massa-Web3 (legacy)",
      items: [
        {
          type: "doc",
          id: "build/massa-web3-legacy/intro",
        },
        {
          type: "doc",
          id: "build/massa-web3-legacy/dapp-usage-massa-web3",
        },
        {
          type: "doc",
          id: "build/massa-web3-legacy/backend-usage-massa-web3",
        },
        {
          type: "doc",
          id: "build/massa-web3-legacy/wallet-provider",
        },
        {
          type: "doc",
          id: "build/massa-web3-legacy/massa-web3-utils",
        },
      ],
    },
    {
      type: "doc",
      id: "build/hello-world-dapp",
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
          id: "build/wallet/community-wallets",
        },
        {
          type: "doc",
          id: "build/wallet/metamask-snap",
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
    {
      type: "doc",
      id: "build/oracle",
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
      id: "node/routability",
      label: "Routability",
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
      id: "node/check_status",
      label: "Checking the node's status",
    },
    {
      type: "doc",
      id: "node/all-configs",
      label: "Node and client configuration",
    },
    {
      type: "doc",
      id: "node/constants",
      label: "Network constants",
    },
    {
      type: "doc",
      id: "node/update",
      label: "Updating a node",
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
  massaBridgeSidebar: [
    {
      type: "doc",
      id: "massaBridge/home",
    },
    {
      type: "doc",
      id: "massaBridge/instructions",
    },
    {
      type: "doc",
      id: "massaBridge/architecture-security",
    },
  ],
  massaDeWebSidebar: [
    {
      type: "doc",
      id: "deweb/home",
      label: "Home",
    },
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "deweb/getting-started/overview",
        "deweb/getting-started/registries",
        "deweb/getting-started/privacy",
      ],
    },
    {
      type: "category",
      label: "Accessing the DeWeb locally",
      collapsed: false,
      items: [
        "deweb/local-server-config/setup-local-server",
        "deweb/local-server-config/server-config",
      ],
    },
    {
      type: "doc",
      id: "deweb/provider/setup-public-instance",
    },
    {
      type: "category",
      label: "Uploading to the DeWeb",
      collapsed: false,
      items: [
        "deweb/upload/overview",
        "deweb/upload/mns",
        "deweb/upload/website-registry",
      ],
    },
    {
      type: "category",
      label: "DeWeb CLI (Command Line Interface)",
      collapsed: false,
      items: ["deweb/cli/overview", "deweb/cli/upload", "deweb/cli/config", "deweb/cli/metadatas"],
    },
    {
      type: "category",
      label: "DeWeb CI",
      collapsed: false,
      items: ["deweb/ci/ci",],
    },
  ],
};

module.exports = sidebars;
