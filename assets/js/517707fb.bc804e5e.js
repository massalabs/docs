"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[9814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,k=d["".concat(i,".").concat(u)]||d[u]||m[u]||s;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={id:"mrc20",sidebar_label:"MRC20 Contract Wrapper"},o="MRC20 Contract Wrapper",l={unversionedId:"build/massa-web3/contracts-wrappers/mrc20",id:"build/massa-web3/contracts-wrappers/mrc20",title:"MRC20 Contract Wrapper",description:"The MRC20 class is a wrapper for interacting with MRC20 token contracts on the Massa blockchain. It extends the SmartContract class and provides methods to easily interact with standard MRC20 functions.",source:"@site/docs/build/massa-web3/contracts-wrappers/mrc20.md",sourceDirName:"build/massa-web3/contracts-wrappers",slug:"/build/massa-web3/contracts-wrappers/mrc20",permalink:"/docs/build/massa-web3/contracts-wrappers/mrc20",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/massa-web3/contracts-wrappers/mrc20.md",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1743088274,formattedLastUpdatedAt:"Mar 27, 2025",frontMatter:{id:"mrc20",sidebar_label:"MRC20 Contract Wrapper"},sidebar:"buildSidebar",previous:{title:"Introduction",permalink:"/docs/build/massa-web3/contracts-wrappers/contract-wrappers-intro"},next:{title:"Wallet",permalink:"/docs/build/wallet-provider/wallet"}},i={},c=[{value:"Basic usage:",id:"basic-usage",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"Read Methods",id:"read-methods",level:3},{value:"Write Methods",id:"write-methods",level:3},{value:"Usage Example",id:"usage-example",level:2},{value:"Note on BigInt Usage",id:"note-on-bigint-usage",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mrc20-contract-wrapper"},"MRC20 Contract Wrapper"),(0,r.kt)("p",null,"The MRC20 class is a wrapper for interacting with MRC20 token contracts on the Massa blockchain. It extends the SmartContract class and provides methods to easily interact with standard MRC20 functions."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," All official MRC20 tokens have their own specific implementations. Below is a list of official MRC20 wrappers:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Mainnet:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"WMAS (AS12U4TZfNK7qoLyEERBBRDMu8nm5MKoRzPXDXans4v9wdATZedz9)"),(0,r.kt)("li",{parentName:"ul"},"USDCe (AS1hCJXjndR4c9vekLWsXGnrdigp4AaZ7uYG3UKFzzKnWVsrNLPJ)"),(0,r.kt)("li",{parentName:"ul"},"DAIe (AS1ZGF1upwp9kPRvDKLxFAKRebgg7b3RWDnhgV7VvdZkZsUL7Nuv)"),(0,r.kt)("li",{parentName:"ul"},"WETHe (AS124vf3YfAJCSCQVYKczzuWWpXrximFpbTmX4rheLs5uNSftiiRY)"),(0,r.kt)("li",{parentName:"ul"},"WETHb (AS125oPLYRTtfVjpWisPZVTLjBhCFfQ1jDsi75XNtRm1NZux54eCj)"),(0,r.kt)("li",{parentName:"ul"},"USDTb (AS12LKs9txoSSy8JgFJgV96m8k5z9pgzjYMYSshwN67mFVuj3bdUV)"),(0,r.kt)("li",{parentName:"ul"},"PUR (AS133eqPPaPttJ6hJnk3sfoG5cjFFqBDi1VGxdo2wzWkq8AfZnan)"))),(0,r.kt)("li",{parentName:"ul"},"Buildnet:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DAIs (AS12LpYyAjYRJfYhyu7fkrS224gMdvFHVEeVWoeHZzMdhis7UZ3Eb)"),(0,r.kt)("li",{parentName:"ul"},"WETHs (AS1gt69gqYD92dqPyE6DBRJ7KjpnQHqFzFs2YCkBcSnuxX5bGhBC)"),(0,r.kt)("li",{parentName:"ul"},"USDCs (AS12k8viVmqPtRuXzCm6rKXjLgpQWqbuMjc37YHhB452KSUUb9FgL)"),(0,r.kt)("li",{parentName:"ul"},"USDTbt (AS12ix1Qfpue7BB8q6mWVtjNdNE9UV3x4MaUo7WhdUubov8sJ3CuP)"),(0,r.kt)("li",{parentName:"ul"},"WETHbt (AS12RmCXTA9NZaTBUBnRJuH66AGNmtEfEoqXKxLdmrTybS6GFJPFs)"),(0,r.kt)("li",{parentName:"ul"},"WMAS (AS12FW5Rs5YN2zdpEnqwj4iHUUPt9R4Eqjq2qtpJFNKW3mn33RuLU)"))))),(0,r.kt)("h2",{id:"basic-usage"},"Basic usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { WETHe } from '@massalabs/massa-web3'\n...\nconst wethContract = new WETHe(provider)\nconst accountETHBalance = await wethContract.balanceOf(provider.address)\n")),(0,r.kt)("h1",{id:"generic-mrc20-methods"},"Generic MRC20 methods"),(0,r.kt)("h2",{id:"constructor"},"Constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"constructor(provider: Provider, address: string)\n")),(0,r.kt)("p",null,"Creates a new MRC20 object."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"provider"),": The Provider object used to interact with the blockchain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address"),": The address of the MRC20 token contract.")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"read-methods"},"Read Methods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async version(options?: ReadSCOptions): Promise<string>\n")),(0,r.kt)("p",null,"Retrieves the version of the MRC20 contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async name(options?: ReadSCOptions): Promise<string>\n")),(0,r.kt)("p",null,"Retrieves the name of the token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async symbol(options?: ReadSCOptions): Promise<string>\n")),(0,r.kt)("p",null,"Retrieves the symbol of the token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async decimals(options?: ReadSCOptions): Promise<number>\n")),(0,r.kt)("p",null,"Retrieves the number of decimals used by the token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async totalSupply(options?: ReadSCOptions): Promise<bigint>\n")),(0,r.kt)("p",null,"Retrieves the total supply of the token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async balanceOf(address: string, options?: ReadSCOptions): Promise<bigint>\n")),(0,r.kt)("p",null,"Retrieves the balance of the specified address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async allowance(ownerAddress: string, spenderAddress: string, options?: ReadSCOptions): Promise<bigint>\n")),(0,r.kt)("p",null,"Retrieves the amount of tokens that the spender is allowed to spend on behalf of the owner."),(0,r.kt)("h3",{id:"write-methods"},"Write Methods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async transfer(to: string, amount: bigint, options?: CallSCOptions): Promise<Operation>\n")),(0,r.kt)("p",null,"Transfers tokens to the specified address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async increaseAllowance(spenderAddress: string, amount: bigint, options?: CallSCOptions): Promise<Operation>\n")),(0,r.kt)("p",null,"Increases the allowance granted to the spender."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async decreaseAllowance(spenderAddress: string, amount: bigint, options?: CallSCOptions): Promise<Operation>\n")),(0,r.kt)("p",null,"Decreases the allowance granted to the spender."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async transferFrom(spenderAddress: string, recipientAddress: string, amount: bigint, options?: CallSCOptions): Promise<Operation>\n")),(0,r.kt)("p",null,"Transfers tokens from one address to another using the allowance mechanism."),(0,r.kt)("h2",{id:"usage-example"},"Usage Example"),(0,r.kt)("p",null,"Here's an example of how to use the MRC20 wrapper:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { MRC20 } from "@massalabs/massa-web3";\nimport { Provider } from "@massalabs/massa-web3";\n\nasync function mrc20Example(provider: Provider) {\n  const WMAS_ADDRESS = "AS12k8viVmqPtRuXzCm6rKXjLgpQWqbuMjc37YHhB452KSUUb9FgL";\n  const wmasContract = new MRC20(provider, WMAS_ADDRESS);\n\n  // Read token information\n  const name = await wmasContract.name();\n  const symbol = await wmasContract.symbol();\n  const decimals = await wmasContract.decimals();\n  const totalSupply = await wmasContract.totalSupply();\n\n  console.log(`Token: ${name} (${symbol})`);\n  console.log(`Decimals: ${decimals}`);\n  console.log(`Total Supply: ${totalSupply}`);\n\n  // Check balance\n  const balance = await wmasContract.balanceOf(provider.address);\n  console.log(`Your balance: ${balance}`);\n\n  // Perform a transfer\n  const recipient = "AU1wN8rn4SkwYSTDF3dHFY4U28KtsqKL1NnEjDZhHnHEy6cEQm53";\n  const amount = 1000n; // Transfer 1000 tokens (adjust based on decimals)\n  const transferOperation = await wmasContract.transfer(recipient, amount);\n  await transferOperation.waitSpeculativeExecution();\n  console.log("Transfer completed");\n\n  // Check new balance\n  const newBalance = await wmasContract.balanceOf(provider.address);\n  console.log(`Your new balance: ${newBalance}`);\n\n  // Increase allowance\n  const spender = "AU1wN8rn4SkwYSTDF3dHFY4U28KtsqKL1NnEjDZhHnHEy6cEQm53";\n  const allowanceAmount = 5000n;\n  const increaseAllowanceOperation = await wmasContract.increaseAllowance(\n    spender,\n    allowanceAmount\n  );\n  await increaseAllowanceOperation.waitSpeculativeExecution();\n  console.log("Allowance increased");\n\n  // Check allowance\n  const allowance = await wmasContract.allowance(provider.address, spender);\n  console.log(`Allowance for spender: ${allowance}`);\n}\n')),(0,r.kt)("p",null,"This example demonstrates how to create an MRC20 object, read token information, check balances, perform transfers, and manage allowances."),(0,r.kt)("p",null,"Remember to handle errors appropriately in your actual implementation, as blockchain operations can fail due to various reasons such as insufficient balance, network issues, or contract errors."),(0,r.kt)("h2",{id:"note-on-bigint-usage"},"Note on BigInt Usage"),(0,r.kt)("p",null,"The MRC20 wrapper uses ",(0,r.kt)("inlineCode",{parentName:"p"},"bigint")," for amount values to handle large numbers accurately. When working with token amounts, remember to consider the token's decimals. For example, if a token has 6 decimals, an amount of 1 token would be represented as ",(0,r.kt)("inlineCode",{parentName:"p"},"1_000_000n"),"."))}m.isMDXComponent=!0}}]);