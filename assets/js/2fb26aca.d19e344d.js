"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[2176],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,b=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(b,s(s({ref:t},p),{},{components:a})):n.createElement(b,s({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1048:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={id:"intro",sidebar_label:"Introduction",sidebar_position:1},s="Introduction to Massa Web3",o={unversionedId:"build/massa-web3/intro",id:"build/massa-web3/intro",title:"Introduction to Massa Web3",description:"@massalabs/massa-web3 is a TypeScript library designed to facilitate seamless interaction with the Massa blockchain, offering a set of tools and utilities similar to Ethereum\u2019s ethers.js, web3.js or Viem. With this library, developers can easily build decentralized applications (dApps) on Massa, leveraging all core functionalities of the blockchain, including smart contract interactions, token transfers, event handling, and account management.",source:"@site/docs/build/massa-web3/intro.md",sourceDirName:"build/massa-web3",slug:"/build/massa-web3/intro",permalink:"/docs/build/massa-web3/intro",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/massa-web3/intro.md",tags:[],version:"current",lastUpdatedBy:"Peterjah",lastUpdatedAt:1733919726,formattedLastUpdatedAt:"Dec 11, 2024",sidebarPosition:1,frontMatter:{id:"intro",sidebar_label:"Introduction",sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Events",permalink:"/docs/build/smart-contract/basic-concepts/events"},next:{title:"Account",permalink:"/docs/build/massa-web3/account"}},l={},c=[{value:"Key Features",id:"key-features",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-massa-web3"},"Introduction to Massa Web3"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@massalabs/massa-web3")," is a TypeScript library designed to facilitate seamless interaction with the Massa blockchain, offering a set of tools and utilities similar to Ethereum\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"ethers.js"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"web3.js")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Viem"),". With this library, developers can easily build decentralized applications (dApps) on Massa, leveraging all core functionalities of the blockchain, including smart contract interactions, token transfers, event handling, and account management."),(0,r.kt)("h2",{id:"key-features"},"Key Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Smart Contract Interaction"),": Call smart contract functions, send transactions with MAS tokens, and receive responses."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Account Management"),": Create, manage, and import Massa accounts directly within your application, and sign transactions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MAS Token Transfer"),": Send and receive MAS tokens, check balances, and manage transfers between accounts or contracts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Event Handling"),": Retrieve and monitor on-chain events emitted by smart contracts to build real-time applications."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Read Storage"),": Retrieve data from contracts datastore."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Utilities for Data Serialization"),": Seamlessly handle data serialization and deserialization with the Args utility, allowing for compatibility between TypeScript and AssemblyScript"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Smart Contract Wrapper for Standard Contracts"),": Interact easily with Massa\u2019s standard contracts (like the fungible token, NFT standards or Massa name system) using the built-in contract wrappers. These wrappers simplify function calls, making it easier to integrate with standard Massa protocols and speeding up development.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Building dApps frontend:")),(0,r.kt)("p",null,"To interact with the blockchain through user interface wallets like ",(0,r.kt)("inlineCode",{parentName:"p"},"MassaStation Wallet"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Bearby"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"Metamask Snap"),", it is recommended to use ",(0,r.kt)("a",{parentName:"p",href:"/docs/build/wallet-provider/wallet"},(0,r.kt)("inlineCode",{parentName:"a"},"@massalabs/wallet-provider"))," on top of ",(0,r.kt)("inlineCode",{parentName:"p"},"@massalabs/massa-web3"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet-provider")," allows these wallets to serve as providers, enhancing accessibility for dApps with user-friendly wallets."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Getting Started:")),(0,r.kt)("p",null,"To install ",(0,r.kt)("inlineCode",{parentName:"p"},"@massalabs/massa-web3"),", you can add it to your project via npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @massalabs/massa-web3\n")),(0,r.kt)("p",null,"After installing, you can import and use the library in your TypeScript project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Account, SmartContract, Web3Provider } from '@massalabs/massa-web3';\n")))}m.isMDXComponent=!0}}]);