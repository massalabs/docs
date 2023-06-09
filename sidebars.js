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
        "<span class='menu__link'><b><small> Massa Architecture </small></b></span>",
    },
    {
      type: "doc",
      id: "learn/architecture/basic-concepts",
    },
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
  tutorialSidebar: [
    {
      type: "doc",
      id: "tutorial/home",
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
      id: "build/quickstart",
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
            {
              type: "doc",
              id: "build/smart-contract/project-layout",
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
          id: "build/wallet/wallet-provider",
        },
        {
          type: "doc",
          id: "build/wallet/massa-station",
        },
        {
          type: "doc",
          id: "build/wallet/community-wallets",
        },
      ],
    },
    {
      type: "doc",
      id: "build/networks-faucets",
      label: "Networks & Faucets",
    },
    {
      type: "doc",
      id: "build/sdk",
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
      id: "node/update",
      label: "Updating a node",
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
      id: "node/reward",
      label: "Testnet Staking Rewards Program",
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
      id: "node/tutorials",
      label: "Tutorials and community resources",
    },
  ],
};

module.exports = sidebars;
