"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[8154],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:e},p),{},{components:n})):a.createElement(f,o({ref:e},p))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8896:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="File structure and function visibility",s={unversionedId:"build/smart-contract/basic-concepts/file-structure",id:"build/smart-contract/basic-concepts/file-structure",title:"File structure and function visibility",description:"The entry point of your smart contract is the file that will be deployed on the blockchain. In the boilerplate project, this file is located at assembly/contracts/main.ts.",source:"@site/docs/build/smart-contract/basic-concepts/file-structure.mdx",sourceDirName:"build/smart-contract/basic-concepts",slug:"/build/smart-contract/basic-concepts/file-structure",permalink:"/docs/build/smart-contract/basic-concepts/file-structure",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/smart-contract/basic-concepts/file-structure.mdx",tags:[],version:"current",lastUpdatedBy:"SlnPons",lastUpdatedAt:1742834554,formattedLastUpdatedAt:"Mar 24, 2025",frontMatter:{},sidebar:"buildSidebar",previous:{title:"AS SDK",permalink:"/docs/build/smart-contract/sdk"},next:{title:"Smart Contract Data Types",permalink:"/docs/build/smart-contract/basic-concepts/data-types"}},l={},c=[{value:"Example import statement",id:"example-import-statement",level:3},{value:"Example of local import statement",id:"example-of-local-import-statement",level:3}],p={toc:c},u="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"file-structure-and-function-visibility"},"File structure and function visibility"),(0,r.kt)("p",null,"The entry point of your smart contract is the file that will be deployed on the blockchain. In the boilerplate project, this file is located at assembly/contracts/main.ts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"assembly/\n\u251c\u2500\u2500 contracts/\n\u2502   \u2514\u2500\u2500 main.ts           # Entry point of the contract\n")),(0,r.kt)("p",null,"Massa smart contracts are written in AssemblyScript, a variant of TypeScript, so they use .ts as the file extension. This allows contracts to utilize all the features of AssemblyScript, including type-checking and familiar syntax for JavaScript/TypeScript developers."),(0,r.kt)("p",null,"Contracts consist of a named collection of exported functions. These functions have access to their execution context through the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-as-sdk"},"@massalabs/massa-as-sdk"),", which provides essential blockchain-specific services, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Execution Context"),": Access to details like sender, receiver, and block height."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Storage Services"),": Tools for reading and writing persistent data to the blockchain ledger."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Logging Services"),": Functions to generate logs and events for monitoring contract execution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Utility Functions"),": Additional helpers to simplify common tasks within smart contracts.")),(0,r.kt)("h1",{id:"imports"},"Imports"),(0,r.kt)("p",null,"Similar to TypeScript, smart contracts on Massa can import external code to enhance their functionality. This can include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Local Project Files"),": Importing functions or classes from other .ts files within the same project."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"External Packages"),": Leveraging dependencies hosted on npm for reusable code and libraries.")),(0,r.kt)("p",null,"For blockchain-specific functionality, smart contracts typically import modules from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-as-sdk"},"@massalabs/massa-as-sdk"),". This SDK provides essential tools tailored for Massa smart contract development, including access to blockchain-specific data and operations."),(0,r.kt)("h3",{id:"example-import-statement"},"Example import statement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Context } from "@massalabs/massa-as-sdk"\n')),(0,r.kt)("p",null,"This import statement allows the contract to use the Context module, which provides access to crucial execution context details like the caller's address and the current block height."),(0,r.kt)("h1",{id:"function-visibility"},"Function visibility"),(0,r.kt)("p",null,"For a smart contract function to be callable by an end user or another smart contract, it must meet two conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The function must be defined in the contract's entry point file."),(0,r.kt)("li",{parentName:"ul"},"The function must be marked with an export statement.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"}," The export statement serves two purposes:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"It allows the function to be callable from other files within the project."),(0,r.kt)("li",{parentName:"ul"},"It makes the function publicly available if located in the contract's entry point file (main.ts)."))),(0,r.kt)("p",null,"While exporting functions can be useful for internal purposes, such as testing, it's advisable to avoid exporting functions from the entry point file if they aren't intended for public use. Instead, you can organize such internal functions in a separate file (e.g., utils.ts). This way, these functions can still be imported into other files or tests within the project without becoming publicly accessible after the contract is deployed."),(0,r.kt)("h3",{id:"example-of-local-import-statement"},"Example of local import statement"),(0,r.kt)("p",null,"In the following example, a function is moved to an internal file to prevent it from being publicly accessible after deployment. The function can still be used within the project through a local import:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// main.ts \nimport { myFunction } from "../utils/utils.ts"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"assembly/\n\u251c\u2500\u2500 contracts/\n\u2502   \u2514\u2500\u2500 main.ts           # Entry point of the contract\n\u2514\u2500\u2500 utils/\n    \u2514\u2500\u2500 utils.ts          # Internal functions for local use and testing\n")),(0,r.kt)("p",null,"By structuring your contract this way, you ensure that only intended functions are exposed publicly, enhancing the security and maintainability of your smart contract."))}m.isMDXComponent=!0}}]);