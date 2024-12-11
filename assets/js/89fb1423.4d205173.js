"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[4030],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),l=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,i(i({ref:e},d),{},{components:n})):a.createElement(h,i({ref:e},d))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[u]="string"==typeof t?t:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9561:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="Contract inheritance",c={unversionedId:"build/smart-contract/basic-concepts/inheritance",id:"build/smart-contract/basic-concepts/inheritance",title:"Contract inheritance",description:"In Massa smart contracts, you can leverage AssemblyScript's standard import/export structure to inherit functions and properties from other contracts or modules. This enables the creation of modular and reusable code by defining common functionalities in base contracts, which can be extended by specialized contracts.",source:"@site/docs/build/smart-contract/basic-concepts/inheritance.mdx",sourceDirName:"build/smart-contract/basic-concepts",slug:"/build/smart-contract/basic-concepts/inheritance",permalink:"/docs/build/smart-contract/basic-concepts/inheritance",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/smart-contract/basic-concepts/inheritance.mdx",tags:[],version:"current",lastUpdatedBy:"BenRey",lastUpdatedAt:1733909275,formattedLastUpdatedAt:"Dec 11, 2024",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Constructor function",permalink:"/docs/build/smart-contract/basic-concepts/constructor"},next:{title:"Interacting with MAS Tokens in Massa smart contracts",permalink:"/docs/build/smart-contract/basic-concepts/coins"}},s={},l=[{value:"Example: Token contract with inheritance",id:"example-token-contract-with-inheritance",level:2},{value:"Why use inheritance with the FT standard?",id:"why-use-inheritance-with-the-ft-standard",level:2},{value:"Customization with Inheritance",id:"customization-with-inheritance",level:2}],d={toc:l},u="wrapper";function p(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contract-inheritance"},"Contract inheritance"),(0,r.kt)("p",null,"In Massa smart contracts, you can leverage AssemblyScript's standard import/export structure to inherit functions and properties from other contracts or modules. This enables the creation of modular and reusable code by defining common functionalities in base contracts, which can be extended by specialized contracts."),(0,r.kt)("p",null,"By importing functions and classes from other files, you can easily reuse code across different contracts. This approach is especially useful for building complex contracts that share similar logic or features, such as tokens, where common functionalities can be inherited and extended."),(0,r.kt)("h2",{id:"example-token-contract-with-inheritance"},"Example: Token contract with inheritance"),(0,r.kt)("p",null,"This example showcases a token contract that follows the Massa Fungible Token (FT) standard, leveraging the base functionalities provided by the FT standard library. The full FT standard implementation is available in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-standards/blob/main/smart-contracts/assembly/contracts/FT/token.ts"},"Massa Standards Repository")),(0,r.kt)("p",null,"By using inheritance, you can easily create a new token with customized properties while reusing the FT standard functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Args } from "@massalabs/as-types";\nimport { u256 } from "as-bignum/assembly";\nimport { constructor as ftConstructor } from "@massalabs/sc-standards/assembly/contracts/FT/token";\nexport * from "@massalabs/sc-standards/assembly/contracts/FT/token";\n\nexport function constructor(_: StaticArray<u8>): void {\n  const tokenName = "My Token";\n  const tokenSymbol = "MTK";\n  const decimals: u8 = 18;\n  const totalSupply = u256.fromU64(123456);\n\n  ftConstructor(\n    new Args()\n      .add(tokenName)\n      .add(tokenSymbol)\n      .add(decimals)\n      .add(totalSupply)\n      .serialize()\n  );\n}\n')),(0,r.kt)("h2",{id:"why-use-inheritance-with-the-ft-standard"},"Why use inheritance with the FT standard?"),(0,r.kt)("p",null,"Using the FT standard as a base allows you to inherit its well-defined functionalities without needing to reimplement core token mechanics. This approach ensures that your token will be compatible with existing Massa applications and services that follow the FT standard, facilitating interoperability and reliability."),(0,r.kt)("h2",{id:"customization-with-inheritance"},"Customization with Inheritance"),(0,r.kt)("p",null,"Extending the FT standard allows you to add new functions or modify existing ones, tailoring the token contract to your specific needs. For example, you could implement custom transfer logic, introduce new events, or include access control mechanisms for minting and burning tokens."))}p.isMDXComponent=!0}}]);