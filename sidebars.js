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
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Massa Architecture </small></b></span>"
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
      id: "smart-contract/code/quick-start",
    },
    {
      type: "category",
      label: "Smart Contract",
      items: [
        {
          type: "doc",
          id: "smart-contract/intro",
          label: "Introduction",
        },
        {
          type: "category",
          label: "Develop",
          items: [
            {
              type: "doc",
              id: "smart-contract/code/prerequisites",
            },
            {
              type: "doc",
              id: "smart-contract/code/webassembly-module",
              label: "WebAssembly Module",
            },
            {
              type: "doc",
              id: "smart-contract/code/sdk",
              label: "WebAssembly Module",
            },
          ],
        },
      ],
    },
  ],
  nodeSidebar: [
    {
      type: "doc",
      id: "node/home",
      label: "Home",
    },
    {
      "type": "html",
      "value": "<hr/>"
    },
    {
      "type": "html",
      "value": "<span class='menu__link'><b><small> Running a Node </small></b></span>"
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
      "type": "html",
      "value": "<hr/>"
    },
    {
      "type": "html",
      "value": "<span class='menu__link'><b><small> FAQ and Community </small></b></span>"
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
  rpcSidebar: [
    {
      type: "doc",
      id: "rpc/home",
      label: "Home",
    },
    {
      type: "doc",
      id: "rpc/providers",
      label: "RPC Providers",
    },
  ],
};

module.exports = sidebars;
