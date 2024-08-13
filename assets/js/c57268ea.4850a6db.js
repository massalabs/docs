"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[8532],{1589:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var a=t(4848),s=t(8453);const n={id:"wallet-provider",title:"Wallet Provider"},r="Wallet Provider Integration Guide",l={id:"build/massa-web3/wallet-provider",title:"Wallet Provider",description:"Overview of wallet-provider",source:"@site/docs/build/massa-web3/wallet-provider.mdx",sourceDirName:"build/massa-web3",slug:"/build/massa-web3/wallet-provider",permalink:"/docs/build/massa-web3/wallet-provider",draft:!1,unlisted:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/massa-web3/wallet-provider.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1723580599e3,frontMatter:{id:"wallet-provider",title:"Wallet Provider"},sidebar:"buildSidebar",previous:{title:"Backend Usage",permalink:"/docs/build/massa-web3/backend-usage-massa-web3"},next:{title:"Utils",permalink:"/docs/build/massa-web3/massa-web3-utils"}},d={},o=[{value:"Overview of <code>wallet-provider</code>",id:"overview-of-wallet-provider",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Installation",id:"installation",level:3},{value:"Basic Usage Examples",id:"basic-usage-examples",level:3},{value:"Listing Available Providers",id:"listing-available-providers",level:4},{value:"Selecting a Wallet Provider",id:"selecting-a-wallet-provider",level:4},{value:"Accessing Wallet Accounts",id:"accessing-wallet-accounts",level:4},{value:"Retrieving network",id:"retrieving-network",level:4},{value:"Retrieving Chain id",id:"retrieving-chain-id",level:4},{value:"Account Functions",id:"account-functions",level:3}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"wallet-provider-integration-guide",children:"Wallet Provider Integration Guide"})}),"\n",(0,a.jsxs)(i.h2,{id:"overview-of-wallet-provider",children:["Overview of ",(0,a.jsx)(i.code,{children:"wallet-provider"})]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"wallet-provider"})," is a versatile library designed to connect dApps with user wallets, adhering to the Massa wallet standards. It supports seamless integration with the Massa blockchain, either as a standalone utility or in conjunction with ",(0,a.jsx)(i.code,{children:"massa-web3"}),", facilitating a secure and efficient dApp-to-wallet communication channel."]}),"\n",(0,a.jsx)(i.h2,{id:"key-features",children:"Key Features"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Wallet Discovery"}),": Automatically identifies and connects to compatible wallets present on the user's device."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Account Management"}),": Offers functionalities to import, retrieve, and handle wallet accounts with ease."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Transaction Signing"}),": Enables the signing of transactions and messages directly from the dApp interface."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Balance Inquiry"}),": Allows for real-time balance checks of connected wallet accounts."]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,a.jsx)(i.h3,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(i.p,{children:["Ensure you have ",(0,a.jsx)(i.code,{children:"wallet-provider"})," installed in your project. If not, you can add it using npm or yarn:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"npm install @massalabs/wallet-provider\n# or\nyarn add @massalabs/wallet-provider\n"})}),"\n",(0,a.jsx)(i.h3,{id:"basic-usage-examples",children:"Basic Usage Examples"}),"\n",(0,a.jsx)(i.h4,{id:"listing-available-providers",children:"Listing Available Providers"}),"\n",(0,a.jsx)(i.p,{children:"Retrieve a list of all wallet providers that adhere to the Massa wallet standard:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-typescript",children:'import { providers } from "@massalabs/wallet-provider";\nconst providerList = providers();\n'})}),"\n",(0,a.jsx)(i.h4,{id:"selecting-a-wallet-provider",children:"Selecting a Wallet Provider"}),"\n",(0,a.jsxs)(i.p,{children:["Choose a specific wallet provider from the available list, for example, ",(0,a.jsx)(i.code,{children:"MASSASTATION"}),":"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-typescript",children:'import { providers } from "@massalabs/wallet-provider";\n\nconst providerList = providers();\nconst massaStationProvider = providerList.find(\n  (provider) => provider.name() === "MASSASTATION"\n);\n'})}),"\n",(0,a.jsx)(i.h4,{id:"accessing-wallet-accounts",children:"Accessing Wallet Accounts"}),"\n",(0,a.jsx)(i.p,{children:"After selecting a provider, you can retrieve the accounts associated with it:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-typescript",metastring:'reference title="Example"',children:"https://github.com/massalabs/wallet-provider/blob/main/code-snippets/provider-get-accounts.ts\n"})}),"\n",(0,a.jsx)(i.h4,{id:"retrieving-network",children:"Retrieving network"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-typescript",metastring:'reference title="Example"',children:"https://github.com/massalabs/wallet-provider/blob/main/code-snippets/provider-get-nework.ts\n"})}),"\n",(0,a.jsx)(i.h4,{id:"retrieving-chain-id",children:"Retrieving Chain id"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-typescript",metastring:'reference title="Example"',children:"https://github.com/massalabs/wallet-provider/blob/main/code-snippets/provider-get-chainId.ts\n"})}),"\n",(0,a.jsx)(i.h3,{id:"account-functions",children:"Account Functions"}),"\n",(0,a.jsxs)(i.p,{children:["For a comprehensive list of account-related functionalities, such as sending transactions, signing messages, and querying account balances, refer to the ",(0,a.jsx)(i.code,{children:"IAccount"})," interface documentation available ",(0,a.jsx)(i.a,{href:"https://github.com/massalabs/wallet-provider/blob/main/src/account/IAccount.ts",children:"here"}),"."]}),"\n",(0,a.jsx)(i.hr,{}),"\n",(0,a.jsxs)(i.p,{children:["This guide serves as an introductory resource for integrating the ",(0,a.jsx)(i.code,{children:"wallet-provider"})," with your dApp. For detailed documentation, including advanced features and integration scenarios, visit the ",(0,a.jsx)(i.a,{href:"https://github.com/massalabs/massa-standards/blob/main/wallet/dapps-communication.md",children:"Massa standards repository"})," and the ",(0,a.jsx)(i.code,{children:"wallet-provider"})," ",(0,a.jsx)(i.a,{href:"https://github.com/massalabs/wallet-provider",children:"GitHub page"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>l});var a=t(6540);const s={},n=a.createContext(s);function r(e){const i=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(n.Provider,{value:i},e.children)}}}]);