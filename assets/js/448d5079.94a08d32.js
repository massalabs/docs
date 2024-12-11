"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[2948],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=l,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2464:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(7462),l=(a(7294),a(3905));const r={id:"wallet",sidebar_label:"Wallet"},i="Building dApps with wallet-provider",o={unversionedId:"build/wallet-provider/wallet",id:"build/wallet-provider/wallet",title:"Building dApps with wallet-provider",description:"@massalabs/wallet-provider provides methods to interact with the Massa blockchain though UI wallets. The @massalabs/wallet-provider library usage is highly recommanded for building decentralized applications (dApps) that require interaction with user wallets.",source:"@site/docs/build/wallet-provider/wallet.md",sourceDirName:"build/wallet-provider",slug:"/build/wallet-provider/wallet",permalink:"/docs/build/wallet-provider/wallet",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/wallet-provider/wallet.md",tags:[],version:"current",lastUpdatedBy:"Peterjah",lastUpdatedAt:1733919726,formattedLastUpdatedAt:"Dec 11, 2024",frontMatter:{id:"wallet",sidebar_label:"Wallet"},sidebar:"buildSidebar",previous:{title:"MRC20 Contract Wrapper",permalink:"/docs/build/massa-web3/contracts-wrappers/mrc20"},next:{title:"Introduction",permalink:"/docs/build/massa-web3-legacy/intro"}},s={},c=[{value:"Usage Example",id:"usage-example",level:2},{value:"Wallet Methods",id:"wallet-methods",level:2},{value:"Wallet-Specific Notes",id:"wallet-specific-notes",level:2},{value:"MassaStation",id:"massastation",level:3},{value:"Bearby",id:"bearby",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"building-dapps-with-wallet-provider"},"Building dApps with wallet-provider"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@massalabs/wallet-provider")," provides methods to interact with the Massa blockchain though UI wallets. The ",(0,l.kt)("inlineCode",{parentName:"p"},"@massalabs/wallet-provider")," library usage is highly recommanded for building decentralized applications (dApps) that require interaction with user wallets."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@massalabs/wallet-provider")," goal is to abtract all the UI controlled wallets into a generic ",(0,l.kt)("inlineCode",{parentName:"p"},"Provider")," object that can be used in ",(0,l.kt)("inlineCode",{parentName:"p"},"@massalabs/massa-web3")," library."),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"Not all functions defined in the Wallet interface are available in every wallet implementation. The availability of specific functions may vary depending on the wallet being used (e.g., MassaStation, Bearby, Metamask Snap). In the following sections, we will specify which functions are available for each supported wallet. Always check the compatibility of your target wallet before using a specific function in your application.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Getting Started:")),(0,l.kt)("p",null,"To install ",(0,l.kt)("inlineCode",{parentName:"p"},"@massalabs/wallet-provider"),", you can add it to your project via npm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @massalabs/wallet-provider\n")),(0,l.kt)("h1",{id:"wallet"},"Wallet"),(0,l.kt)("h2",{id:"usage-example"},"Usage Example"),(0,l.kt)("p",null,"Here's a basic example of how to use the Wallet interface:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'import { getWallets } from "@massalabs/wallet-provider";\n\nasync function walletExample() {\n  // Get list of available wallets\n  const wallets = await getWallets();\n\n  if (wallets.length === 0) {\n    console.log("No wallets found");\n    return;\n  }\n\n  // Use the first available wallet\n  const wallet = wallets[0];\n\n  // Connect to the wallet\n  const connected = await wallet.connect();\n  if (!connected) {\n    console.log("Failed to connect to wallet");\n    return;\n  }\n\n  // Get accounts\n  const accounts = await wallet.accounts();\n  console.log("Accounts:", accounts);\n\n  // Listen for account changes\n  wallet.listenAccountChanges((address) => {\n    console.log("Account changed:", address);\n  });\n\n  // Get network info\n  const networkInfo = await wallet.networkInfos();\n  console.log("Network info:", networkInfo);\n\n  // Disconnect when done\n  await wallet.disconnect();\n}\n\nwalletExample().catch(console.error);\n')),(0,l.kt)("p",null,"This example demonstrates how to connect to a wallet, retrieve accounts, listen for account changes, and get network information."),(0,l.kt)("p",null,"Remember to handle errors appropriately in your actual implementation, as wallet operations can fail due to various reasons such as user rejection, network issues, or wallet-specific limitations."),(0,l.kt)("h2",{id:"wallet-methods"},"Wallet Methods"),(0,l.kt)("p",null,"Here's a detailed explanation of each method in the Wallet interface, along with their availability in MassaStation and Bearby wallets:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"name(): WalletName\n")),(0,l.kt)("p",null,"Returns the name of the wallet."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Availability:")," MassaStation \u2705 | Bearby \u2705")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"accounts(): Promise<Provider[]>\n")),(0,l.kt)("p",null,"Retrieves the list of accounts (as Provider objects) associated with the wallet."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Availability:")," MassaStation \u2705 | Bearby \u2705")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"importAccount(publicKey: string, privateKey: string): Promise<void>\n")),(0,l.kt)("p",null,"Imports an account into the wallet using the provided public and private keys."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Availability:")," MassaStation \u2705 | Bearby \u274c (Not implemented)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"deleteAccount(address: string): Promise<void>\n")),(0,l.kt)("p",null,"Deletes an account from the wallet."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Availability:")," MassaStation \u2705 | Bearby \u274c (Not implemented)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"networkInfos(): Promise<Network>\n")),(0,l.kt)("p",null,"Retrieves information about the current network the wallet is connected to."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Availability:")," MassaStation \u2705 | Bearby \u2705")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"generateNewAccount(name: string): Promise<Provider>\n")),(0,l.kt)("p",null,"Generates a new account in the wallet."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Availability:")," MassaStation \u2705 | Bearby \u274c (Not implemented)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"connect(): Promise<boolean>\n")),(0,l.kt)("p",null,"Initiates a connection to the wallet. Returns true if the connection is successful."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Availability:")," MassaStation \u274c (Not implemented) | Bearby \u2705")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"disconnect(): Promise<boolean>\n")),(0,l.kt)("p",null,"Disconnects from the wallet. Returns true if the disconnection is successful."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Availability:")," MassaStation \u274c (Not implemented) | Bearby \u2705")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"connected(): boolean\n")),(0,l.kt)("p",null,"Returns whether the wallet is currently connected."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Availability:")," MassaStation \u274c (Not implemented) | Bearby \u2705")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"enabled(): boolean\n")),(0,l.kt)("p",null,"Returns whether the wallet is enabled and available for use."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Availability:")," MassaStation \u274c (Not implemented) | Bearby \u2705")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"listenAccountChanges(callback: (address: string) => void): ListenerCtrl | undefined\n")),(0,l.kt)("p",null,"Sets up a listener for account changes in the wallet."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Availability:")," MassaStation \u274c (Not implemented) | Bearby \u2705")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"listenNetworkChanges(callback: (network: string) => void): ListenerCtrl | undefined\n")),(0,l.kt)("p",null,"Sets up a listener for network changes in the wallet."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Availability:")," MassaStation \u2705 | Bearby \u2705")),(0,l.kt)("h2",{id:"wallet-specific-notes"},"Wallet-Specific Notes"),(0,l.kt)("h3",{id:"massastation"},"MassaStation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Connection-related methods (",(0,l.kt)("inlineCode",{parentName:"li"},"connect()"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"disconnect()"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"connected()"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"enabled()"),") are not implemented."),(0,l.kt)("li",{parentName:"ul"},"Account change listener (",(0,l.kt)("inlineCode",{parentName:"li"},"listenAccountChanges()"),") is not implemented.")),(0,l.kt)("h3",{id:"bearby"},"Bearby"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Account management methods (",(0,l.kt)("inlineCode",{parentName:"li"},"importAccount()"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"deleteAccount()"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"generateNewAccount()"),") are not implemented."),(0,l.kt)("li",{parentName:"ul"},"Provides full support for connection-related methods and listeners.")),(0,l.kt)("p",null,"When developing your application, ensure you handle cases where a method is not implemented for your target wallet. You may need to provide alternative workflows or inform users about limitations based on their wallet choice."))}d.isMDXComponent=!0}}]);