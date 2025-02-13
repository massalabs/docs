"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[6123],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=c(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(f,o(o({ref:e},p),{},{components:a})):n.createElement(f,o({ref:e},p))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[m]="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5515:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={id:"smart-contracts",sidebar_label:"Smart-contracts"},o="Smart Contract Interaction",l={unversionedId:"build/massa-web3/smart-contracts",id:"build/massa-web3/smart-contracts",title:"Smart Contract Interaction",description:"The @massalabs/massa-web3 library provides straightforward methods for interacting with smart contracts on the Massa blockchain. You can read data from smart contracts, execute functions, and handle smart contract function call parameters serialization using the Args class.",source:"@site/docs/build/massa-web3/smart-contracts.md",sourceDirName:"build/massa-web3",slug:"/build/massa-web3/smart-contracts",permalink:"/docs/build/massa-web3/smart-contracts",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/massa-web3/smart-contracts.md",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1739448618,formattedLastUpdatedAt:"Feb 13, 2025",frontMatter:{id:"smart-contracts",sidebar_label:"Smart-contracts"},sidebar:"buildSidebar",previous:{title:"Provider",permalink:"/docs/build/massa-web3/provider"},next:{title:"Operation",permalink:"/docs/build/massa-web3/operation"}},s={},c=[{value:"Read-Only call",id:"read-only-call",level:3},{value:"Example: Reading Data from a Smart Contract",id:"example-reading-data-from-a-smart-contract",level:3},{value:"Write call",id:"write-call",level:3},{value:"Deploy",id:"deploy",level:3}],p={toc:c},m="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-contract-interaction"},"Smart Contract Interaction"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@massalabs/massa-web3")," library provides straightforward methods for interacting with smart contracts on the Massa blockchain. You can read data from smart contracts, execute functions, and handle smart contract function call parameters serialization using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Args")," class."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Initialization of ",(0,r.kt)("inlineCode",{parentName:"strong"},"SmartContract")," class")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SmartContract } from '@massalabs/massa-web3'\n...\nconst contract = new SmartContract(provider, contractAddress);\n")),(0,r.kt)("h3",{id:"read-only-call"},"Read-Only call"),(0,r.kt)("p",null,"A read-only call allows you to interact with a smart contract function without modifying the blockchain\u2019s state. It does not require user signature. This type of call is useful in two main scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reading Data"),": Use it to call a smart contract function that only reads data and does not modify any state. This is similar to a view function in Solidity, where you can query data without incurring any cost or initiating a transaction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Simulating Write Operations"),": A read-only call can also simulate a write function, providing a \u201cdry run\u201d of the transaction. This allows you to predict the result of the transaction, estimate the gas cost, and identify any potential issues before executing the actual state-changing function on the blockchain.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"read(\n    func: string,\n    args: Args | Uint8Array = new Uint8Array(),\n    options?: ReadSCOptions\n): Promise<ReadSCData>\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"func"),": Name of the smart contract function to call.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"args"),": Function arguments though Args class or already serialized. Default to empty array (no args)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"options"),": available options:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"caller: set the caller address. default is the Provider address"),(0,r.kt)("li",{parentName:"ul"},"coins: MAS amount to sent with the call. But keep in mind its a read-only call, so its just for simulation purpose. default is 0"),(0,r.kt)("li",{parentName:"ul"},"fee: operation fee. default to 0.01 MAS"),(0,r.kt)("li",{parentName:"ul"},"maxGas: gas amount to execute operation. default to MAX_GAS_CALL")),(0,r.kt)("p",{parentName:"li"},"Return:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"ReadSCData = {\nvalue: Uint8Array // serialized data returned by the smart contract function\ninfo: {\n    error?: string\n    events: SCEvent[] // events triggered by the execution\n    gasCost: number // consumed gas amount\n    }\n}\n")),(0,r.kt)("h3",{id:"example-reading-data-from-a-smart-contract"},"Example: Reading Data from a Smart Contract"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SmartContract, Args, U256 } from '@massalabs/massa-web3';\n...\n// Initialize the SmartContract instance\nconst contractAddress = '<deployed_contract_address>';\nconst contract = new SmartContract(provider, contractAddress);\n\nasync function readUserBalance(userAddress: string): Promise<bigint> {\n    // Prepare arguments for the function call\n    const args = new Args().addString(userAddress);\n\n    // Call the smart contract's balanceOf function\n    const result = await contract.call('balanceOf', args);\n\n    // Deserialize the returned balance\n    const balance = U256.fromBytes(result);\n    console.log(`User balance: ${balance}`);\n    return balance;\n}\n\nreadUserBalance(\"user_address_here\");\n")),(0,r.kt)("h3",{id:"write-call"},"Write call"),(0,r.kt)("p",null,"To interact with a smart contract function that changes the state (e.g., transferring tokens or updating data), use the ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," method on the ",(0,r.kt)("inlineCode",{parentName:"p"},"SmartContract")," instance. This requires signing the operation, as it modifies the blockchain state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"call(\n    func: string,\n    args: Args | Uint8Array = new Uint8Array(),\n    options: CallSCOptions = {}\n): Promise<Operation>\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"func"),": Name of the smart contract function to call.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"args"),": Function arguments though Args class or already serialized. Default to empty array (no args)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"options"),": available options:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"periodToLive: Time to live ( operation expiration) in periods.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"coins: MAS amount to sent with the call. But keep in mind its a read-only call, so its just for simulation purpose. default is 0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fee: operation fee. default to 0.01 MAS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"maxGas: gas amount to execute operation. default to MAX_GAS_CALL"),(0,r.kt)("p",{parentName:"li"},"Return:\n",(0,r.kt)("a",{parentName:"p",href:"/docs/build/massa-web3/operation"},(0,r.kt)("inlineCode",{parentName:"a"},"Operation"))),(0,r.kt)("h3",{parentName:"li",id:"example-calling-a-state-changing-function"},"Example: Calling a State-Changing Function"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async function transferTokens(toAddress: string, amount: bigint): Promise<void> {\n    // Prepare arguments for the function call\n    const args = new Args().addString(toAddress).addU256(amount);\n\n    // Call the smart contract's transfer function\n    const operation = await contract.call('transfer', args);\n\n    await operation.waitFinalExecution()\n\n    console.log('Transfer operation is final';\n}\n\ntransferTokens(\"recipient_address_here\", 100n);\n")))),(0,r.kt)("h3",{id:"deploy"},"Deploy"),(0,r.kt)("p",null,"Deploy a smart contract bytecode. This function is static, an returns an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"SmartContract")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static async deploy(\n    provider: Provider,\n    byteCode: Uint8Array,\n    constructorArgs: Args | Uint8Array = new Uint8Array(),\n    options: DeploySCOptions = {}\n): Promise<SmartContract> {\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"provider"),": Provider instance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"byteCode"),": compiled SmartContract bytes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"constructorArgs"),": Contract constructor arguments though Args class or already serialized. Default to empty array (no args)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"options"),": available options:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"periodToLive: Time to live ( operation expiration) in periods.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"coins: MAS amount to sent with the call. But keep in mind its a read-only call, so its just for simulation purpose. default is 0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fee: operation fee. default to 0.01 MAS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"maxGas: gas amount to execute operation. default to MAX_GAS_CALL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"maxCoins: max MAS amount to spend (including bytecode storage fee and execution)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"waitFinalExecution: default to False"),(0,r.kt)("p",{parentName:"li"},"Return:\n",(0,r.kt)("inlineCode",{parentName:"p"},"SmartContract"),"instance"))))}u.isMDXComponent=!0}}]);