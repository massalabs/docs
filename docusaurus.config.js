// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Massa Documentation",
  tagline: "Developer Documentation for Massa",
  favicon: "img/logo.svg",

  // Set the production url of your site here
  url: "https://docs.massa.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "massalabs", // Usually your GitHub org/user name.
  projectName: "docu-dev", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/massalabs/docu-dev/tree/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {},
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card
      navbar: {
        title: "Docs",
        logo: {
          alt: "My Site Logo",
          src: "img/massa_logo.svg",
          srcDark: "img/massa_logo_white.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "learnSidebar",
            position: "left",
            label: "🎓 Learn",
          },
          {
            type: "docSidebar",
            sidebarId: "buildSidebar",
            position: "left",
            label: "🛠️ Build",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "📖 Tutorial",
          },
          {
            type: "docSidebar",
            sidebarId: "nodeSidebar",
            position: "left",
            label: "🖥 Testnet",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/massa",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/massalabs",
              },
              {
                label: "Telegram",
                href: "https://t.me/massanetwork",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/massalabs",
              },
              {
                label: "massa.net",
                href: "https://massa.net",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Massa Labs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
