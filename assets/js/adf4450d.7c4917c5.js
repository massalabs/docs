"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[9842],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),l=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,s(s({ref:e},p),{},{components:r})):a.createElement(h,s({ref:e},p))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[d]="string"==typeof t?t:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},436:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},s="Introduction",i={unversionedId:"build/smart-contract/intro",id:"build/smart-contract/intro",title:"Introduction",description:"Smart contracts are programs that interact with the blockchain, accessing and modifying the ledger's storage state. They enable developers to build decentralized applications (dApps) that enforce contractual terms autonomously, embodying the principle that code is law.",source:"@site/docs/build/smart-contract/intro.mdx",sourceDirName:"build/smart-contract",slug:"/build/smart-contract/intro",permalink:"/docs/build/smart-contract/intro",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/smart-contract/intro.mdx",tags:[],version:"current",lastUpdatedBy:"plouis01",lastUpdatedAt:1744201480,formattedLastUpdatedAt:"Apr 9, 2025",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Home",permalink:"/docs/build/home"},next:{title:"Prerequisites",permalink:"/docs/build/smart-contract/prerequisites"}},c={},l=[{value:"How smart contract works on Massa?",id:"how-smart-contract-works-on-massa",level:2},{value:"Execution constraints of a Smart Contracts",id:"execution-constraints-of-a-smart-contracts",level:2}],p={toc:l},d="wrapper";function u(t){let{components:e,...r}=t;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Smart contracts are programs that interact with the blockchain, accessing and modifying the ledger's storage state. They enable developers to build decentralized applications (dApps) that enforce contractual terms autonomously, embodying the principle that ",(0,n.kt)("strong",{parentName:"p"},"code is law"),"."),(0,n.kt)("h2",{id:"how-smart-contract-works-on-massa"},"How smart contract works on Massa?"),(0,n.kt)("p",null,"On Massa, smart contracts are written in ",(0,n.kt)("a",{parentName:"p",href:"https://assemblyscript.org/"},"AssemblyScript"),", which is compiled to ",(0,n.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly")," (or Wasm). Massa nodes then execute this binary code using a virtual machine."),(0,n.kt)("p",null,"While AssemblyScript resembles TypeScript, it differs in key ways. For instance, AssemblyScript provides direct access to all integer and floating-point types available in WebAssembly, whereas union types and optional arguments or properties are unsupported. Furthermore, all objects are statically typed, meaning properties cannot be dynamically altered. Notably, AssemblyScript currently does not support exception handling or closures."),(0,n.kt)("p",null,"In this framework, a smart contract can be viewed as a stored procedure that can modify the ledger, interact with other smart contracts, and be invoked by end users."),(0,n.kt)("p",null,"With ",(0,n.kt)("strong",{parentName:"p"},"asynchronous execution"),", smart contracts on Massa can automatically activate at a specified time or when certain conditions in the ledger are met, such as a specific data value within the contract."),(0,n.kt)("h2",{id:"execution-constraints-of-a-smart-contracts"},"Execution constraints of a Smart Contracts"),(0,n.kt)("p",null,"Smart contracts are executed directly by Massa nodes, with fees in place to prevent spam and network congestion:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The processing unit, or ",(0,n.kt)("a",{parentName:"li",href:"https://docs.massa.net/docs/learn/gas"},"gas"),", measures the complexity of contract execution. Each block has a gas limit, which constrains the amount of computation that can occur."),(0,n.kt)("li",{parentName:"ul"},"The caller must pay a fee in MAS based on the amount of gas required to execute the smart contract for the operation to be included in a block by the Massa validators."),(0,n.kt)("li",{parentName:"ul"},"If a smart contract requires ",(0,n.kt)("a",{parentName:"li",href:"https://docs.massa.net/docs/learn/storage-costs"},"storage"),", it incurs an additional cost.")),(0,n.kt)("p",null,"Finally, smart contracts on Massa are deterministic, meaning that their outcomes are predictable and consistent. Once deployed, their code and interface are publicly available and unchangeable."))}u.isMDXComponent=!0}}]);