"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[6303],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2586:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={id:"provider",sidebar_label:"Provider"},l="Provider",o={unversionedId:"build/massa-web3/provider",id:"build/massa-web3/provider",title:"Provider",description:"In @massalabs/massa-web3, a Provider is a core component that encapsulates an account and provides access to the Massa blockchain. Providers manage the connection between the application and the blockchain, making it easy to execute transactions, query data, and interact with smart contracts.",source:"@site/docs/build/massa-web3/provider.md",sourceDirName:"build/massa-web3",slug:"/build/massa-web3/provider",permalink:"/docs/build/massa-web3/provider",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/massa-web3/provider.md",tags:[],version:"current",lastUpdatedBy:"plouis01",lastUpdatedAt:1744201480,formattedLastUpdatedAt:"Apr 9, 2025",frontMatter:{id:"provider",sidebar_label:"Provider"},sidebar:"buildSidebar",previous:{title:"Account",permalink:"/docs/build/massa-web3/account"},next:{title:"Smart-contracts",permalink:"/docs/build/massa-web3/smart-contracts"}},s={},p=[{value:"Types of Providers",id:"types-of-providers",level:2},{value:"Provider Methods",id:"provider-methods",level:2},{value:"Public Methods",id:"public-methods",level:3},{value:"Account-Specific Methods",id:"account-specific-methods",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"provider"},"Provider"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"@massalabs/massa-web3"),", a Provider is a core component that encapsulates an account and provides access to the Massa blockchain. Providers manage the connection between the application and the blockchain, making it easy to execute transactions, query data, and interact with smart contracts."),(0,r.kt)("p",null,"A Provider can be created from a KeyPair or accessed from a Wallet account. It can be used to sign transactions and interact with the blockchain."),(0,r.kt)("h2",{id:"types-of-providers"},"Types of Providers"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"JsonRpcProvider"),":")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonRpcProvider")," class is the primary provider type in ",(0,r.kt)("inlineCode",{parentName:"p"},"@massalabs/massa-web3"),". It combines a Massa-web3 ",(0,r.kt)("inlineCode",{parentName:"p"},"Account")," with an RPC client that connects to the Massa blockchain through a specified URL.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This URL can point to Massa\u2019s public nodes, custom nodes, or a private node, allowing for flexibility in how you connect to the blockchain."),(0,r.kt)("p",{parentName:"li"},"The following example show how to create a provider using the mainnet public RPC:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import 'dotenv/config';\nimport { Account, JsonRpcProvider } from '@massalabs/massa-web3';\n\nconst account = await Account.fromEnv();\nconst provider = JsonRpcProvider.mainnet(account);\n")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"JsonRpcPublicProvider"),":")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonRpcPublicProvider")," class is a provider that can be initialized without an account. It is useful for read-only operations that do not require signing transactions."),(0,r.kt)("p",{parentName:"li"},"The following example shows how to create a public provider using the mainnet public RPC:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { JsonRpcPublicProvider } from '@massalabs/massa-web3';\n\nconst provider = JsonRpcPublicProvider.mainnet();\n// OR\nconst provider = JsonRpcProvider.mainnet(); // JsonRpcProvider will return a JsonRpcPublicProvider if no account is provided\n")))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Integrated Wallet Providers"),":")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For applications that interface with external wallets, ",(0,r.kt)("inlineCode",{parentName:"li"},"@massalabs/wallet-provider")," implements providers designed to connect with popular Massa wallets like ",(0,r.kt)("inlineCode",{parentName:"li"},"MassaStation Wallet"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Bearby")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Metamask snap"),"."),(0,r.kt)("li",{parentName:"ul"},"These providers enable users to manage their own accounts, sign transactions, and interact with smart contracts directly from their wallets without exposing private keys to the application. It is mostly useful to build decentralized frontend applications (dApps).")),(0,r.kt)("h2",{id:"provider-methods"},"Provider Methods"),(0,r.kt)("h3",{id:"public-methods"},"Public Methods"),(0,r.kt)("p",null,"A Provider offers several public methods to interact with the Massa blockchain. Here are the available public methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"balanceOf(addresses: string[], final?: boolean): Promise<{ address: string; balance: bigint }[]>\n")),(0,r.kt)("p",null,"Retrieves the balance of multiple accounts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addresses"),": An array of addresses to check."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"final"),": If true, returns the final (confirmed) balance. If false, returns the speculative (possibly unconfirmed) balance. Defaults to true.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"networkInfos(): Promise<Network>\n")),(0,r.kt)("p",null,"Retrieves information about the Massa network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getOperationStatus(opId: string): Promise<OperationStatus>\n")),(0,r.kt)("p",null,"Retrieves the status of an operation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"opId"),": The ID of the operation to check.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getEvents(filter: EventFilter): Promise<SCEvent[]>\n")),(0,r.kt)("p",null,"Retrieves events based on the provided filter."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filter"),": Criteria for filtering events.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getNodeStatus(): Promise<NodeStatusInfo>\n")),(0,r.kt)("p",null,"Retrieves status and information of the current RPC."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"readSC(params: ReadSCParams): Promise<ReadSCData>\n")),(0,r.kt)("p",null,"Reads data from a smart contract without modifying its state."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params"),": Parameters for reading from the smart contract.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getStorageKeys(address: string, filter?: Uint8Array | string, final?: boolean): Promise<Uint8Array[]>\n")),(0,r.kt)("p",null,"Retrieves all storage keys registered at a given address."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address"),": Smart contract or EOA address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filter"),": Prefix key filter."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"final"),": Defaults to true.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"readStorage(address: string, keys: Uint8Array[] | string[], final?: boolean): Promise<Uint8Array[]>\n")),(0,r.kt)("p",null,"Retrieves data associated with given storage keys of a given address."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address"),": Smart contract or EOA address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keys"),": Array of storage keys."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"final"),": Defaults to true.")),(0,r.kt)("h3",{id:"account-specific-methods"},"Account-Specific Methods"),(0,r.kt)("p",null,"In addition to public methods, a Provider includes account-specific methods for interacting with the Massa blockchain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"get address(): string\n")),(0,r.kt)("p",null,"Returns the address associated with the Provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"get accountName(): string\n")),(0,r.kt)("p",null,"Returns the name of the account associated with the Provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"get providerName(): string\n")),(0,r.kt)("p",null,"Returns the name of the Provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"balance(final: boolean): Promise<bigint>\n")),(0,r.kt)("p",null,"Retrieves the balance of the account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"sign(data: Buffer | Uint8Array | string): Promise<SignedData>\n")),(0,r.kt)("p",null,"Signs the provided data."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data"),": The data to be signed.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"buyRolls(amount: Mas, opts?: OperationOptions): Promise<Operation>\n")),(0,r.kt)("p",null,"Buys rolls (staking units) on the Massa blockchain."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amount"),": The amount of MAS to spend on buying rolls."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"opts"),": Optional operation parameters.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"sellRolls(amount: Mas, opts?: OperationOptions): Promise<Operation>\n")),(0,r.kt)("p",null,"Sells rolls (staking units) on the Massa blockchain."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amount"),": The number of rolls to sell."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"opts"),": Optional operation parameters.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"transfer(to: Address | string, amount: Mas, opts?: OperationOptions): Promise<Operation>\n")),(0,r.kt)("p",null,"Transfers MAS tokens to another address."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to"),": The recipient's address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amount"),": The amount of MAS to transfer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"opts"),": Optional operation parameters.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"callSC(params: CallSCParams): Promise<Operation>\n")),(0,r.kt)("p",null,"Calls a smart contract function."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params"),": Parameters for the smart contract call.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"deploySC(params: DeploySCParams): Promise<SmartContract>\n")),(0,r.kt)("p",null,"Deploys a smart contract to the Massa blockchain."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params"),": Parameters for deploying the smart contract.")))}u.isMDXComponent=!0}}]);