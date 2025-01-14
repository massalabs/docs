"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[3649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,h=u["".concat(i,".").concat(p)]||u[p]||m[p]||s;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const s={},o="Interacting with MAS Tokens in Massa smart contracts",c={unversionedId:"build/smart-contract/basic-concepts/coins",id:"build/smart-contract/basic-concepts/coins",title:"Interacting with MAS Tokens in Massa smart contracts",description:"In Massa smart contracts, you can interact with the MAS token to perform various financial operations, such as sending and receiving MAS tokens, checking balances, and transferring tokens between addresses.",source:"@site/docs/build/smart-contract/basic-concepts/coins.mdx",sourceDirName:"build/smart-contract/basic-concepts",slug:"/build/smart-contract/basic-concepts/coins",permalink:"/docs/build/smart-contract/basic-concepts/coins",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/smart-contract/basic-concepts/coins.mdx",tags:[],version:"current",lastUpdatedBy:"Peterjah",lastUpdatedAt:1736847649,formattedLastUpdatedAt:"Jan 14, 2025",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Contract inheritance",permalink:"/docs/build/smart-contract/basic-concepts/inheritance"},next:{title:"Storage",permalink:"/docs/build/smart-contract/basic-concepts/storage"}},i={},l=[{value:"Including MAS Tokens when calling a smart contract",id:"including-mas-tokens-when-calling-a-smart-contract",level:2},{value:"Retrieving the sent value in the contract",id:"retrieving-the-sent-value-in-the-contract",level:2},{value:"Checking the contract balance and the balance of another address",id:"checking-the-contract-balance-and-the-balance-of-another-address",level:2},{value:"Sending MAS tokens to another address",id:"sending-mas-tokens-to-another-address",level:2}],d={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interacting-with-mas-tokens-in-massa-smart-contracts"},"Interacting with MAS Tokens in Massa smart contracts"),(0,r.kt)("p",null,"In Massa smart contracts, you can interact with the MAS token to perform various financial operations, such as sending and receiving MAS tokens, checking balances, and transferring tokens between addresses.\nThe Mas token is represented as a u64 value.\nAll Mas token related functions in AssemblyScript are available in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-as-sdk"},"@massalabs/massa-as-sdk")," package.\nHere\u2019s a guide on how to handle these interactions within a contract."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In Massa, all contract exported functions are payable par default. This means that all functions can receive MAS tokens even if the called function does not write anything onchain.")),(0,r.kt)("h2",{id:"including-mas-tokens-when-calling-a-smart-contract"},"Including MAS Tokens when calling a smart contract"),(0,r.kt)("p",null,"When calling a smart contract, you can specify an amount of MAS tokens to send along with the call. This is done by setting the amount in the operation from the calling account to the contract."),(0,r.kt)("p",null,"For example, if you are calling a function on a deployed smart contract from your client application, you would include the MAS amount in the operation parameters.\nUsing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-web3"},"massa-web3"),", the SmartContract class allows you to specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"coins")," parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { SmartContract, Mas } from '@massalabs/massa-web3';\n\nconst contract = new SmartContract(provider, \"<deployed_contract_address>\");\nconst amount = Mas.fromString('10'); // 10 MAS\n\n// Call the smart contract with 10 MAS\nawait contract.call(\n  'receiveTokens',\n  // here the parameters of the function can be left undefined if the function does not require any\n  undefined,\n  { coins: amount }\n);\n")),(0,r.kt)("h2",{id:"retrieving-the-sent-value-in-the-contract"},"Retrieving the sent value in the contract"),(0,r.kt)("p",null,"Inside the contract, you can retrieve the amount of MAS tokens sent with the call by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"transferredCoins()")," function. This returns the amount of MAS as a ",(0,r.kt)("inlineCode",{parentName:"p"},"u64")," value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { transferredCoins } from '@massalabs/massa-as-sdk';\n\nexport function receiveTokens(): void {\n  const receivedAmount = transferredCoins();\n  assert(receivedAmount > 0, 'No MAS tokens were sent.');\n  // Further logic for handling the received amount\n}\n")),(0,r.kt)("h2",{id:"checking-the-contract-balance-and-the-balance-of-another-address"},"Checking the contract balance and the balance of another address"),(0,r.kt)("p",null,"You can check the MAS token balance of the current contract or any other address using the ",(0,r.kt)("inlineCode",{parentName:"p"},"balance()")," function or the ",(0,r.kt)("inlineCode",{parentName:"p"},"balanceOf(address: string)")," function."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Getting the Contract's balance:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { balance } from '@massalabs/massa-as-sdk';\n\nexport function getContractBalance(): u64 {\n  return Context.balance();\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Getting the Balance of Another Address:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { balanceOf } from '@massalabs/massa-as-sdk';\n\nexport function getAddressBalance(address: string): u64 {\n  return balanceOf(address);\n}\n")),(0,r.kt)("h2",{id:"sending-mas-tokens-to-another-address"},"Sending MAS tokens to another address"),(0,r.kt)("p",null,"To send MAS tokens from the contract to another address, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"transferCoins()")," function. This function takes the recipient address and the amount of MAS tokens to send.\nEnsure that the contract has sufficient balance to cover the transfer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { transferCoins, balance, Address } from '@massalabs/massa-as-sdk';\nexport function sendTokens(toAddress: Address, amount: u64): void {\n  const contractBalance = balance();\n  assert(contractBalance >= amount, 'Insufficient balance to send MAS tokens');\n\n  transferCoins(toAddress, amount);\n}\n")))}m.isMDXComponent=!0}}]);