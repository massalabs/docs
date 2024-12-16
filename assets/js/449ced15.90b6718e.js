"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[6538],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6306:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={id:"contract-wrappers-intro",sidebar_label:"Introduction",sidebar_position:1},i="Introduction to Contract Wrappers",p={unversionedId:"build/massa-web3/contracts-wrappers/contract-wrappers-intro",id:"build/massa-web3/contracts-wrappers/contract-wrappers-intro",title:"Introduction to Contract Wrappers",description:"Contract wrappers in the Massa Web3 JS Library provide an easy and type-safe way to interact with common smart contract standards on the Massa blockchain. These wrappers encapsulate the complexity of contract interactions, offering a streamlined interface for developers.",source:"@site/docs/build/massa-web3/contracts-wrappers/contract-wrappers-intro.md",sourceDirName:"build/massa-web3/contracts-wrappers",slug:"/build/massa-web3/contracts-wrappers/contract-wrappers-intro",permalink:"/docs/build/massa-web3/contracts-wrappers/contract-wrappers-intro",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/massa-web3/contracts-wrappers/contract-wrappers-intro.md",tags:[],version:"current",lastUpdatedBy:"BenRey",lastUpdatedAt:1734363757,formattedLastUpdatedAt:"Dec 16, 2024",sidebarPosition:1,frontMatter:{id:"contract-wrappers-intro",sidebar_label:"Introduction",sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Operation",permalink:"/docs/build/massa-web3/operation"},next:{title:"MRC20 Contract Wrapper",permalink:"/docs/build/massa-web3/contracts-wrappers/mrc20"}},s={},c=[{value:"Purpose of Contract Wrappers",id:"purpose-of-contract-wrappers",level:2},{value:"Available Contract Wrappers",id:"available-contract-wrappers",level:2},{value:"Future Developments",id:"future-developments",level:2},{value:"Getting Started",id:"getting-started",level:2}],l={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction-to-contract-wrappers"},"Introduction to Contract Wrappers"),(0,n.kt)("p",null,"Contract wrappers in the Massa Web3 JS Library provide an easy and type-safe way to interact with common smart contract standards on the Massa blockchain. These wrappers encapsulate the complexity of contract interactions, offering a streamlined interface for developers."),(0,n.kt)("h2",{id:"purpose-of-contract-wrappers"},"Purpose of Contract Wrappers"),(0,n.kt)("p",null,"Contract wrappers serve several important purposes:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Simplification"),": They abstract away the low-level details of interacting with smart contracts, making it easier for developers to work with standard contract types.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type Safety"),": By providing strongly-typed interfaces, contract wrappers help catch potential errors at compile-time rather than runtime.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Standardization"),": They encourage the use of standard interfaces, promoting interoperability and consistency across different projects.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Efficiency"),": Wrappers can include optimizations and best practices for interacting with specific contract types, improving the overall efficiency of your dApp."))),(0,n.kt)("h2",{id:"available-contract-wrappers"},"Available Contract Wrappers"),(0,n.kt)("p",null,"Currently, the following contract wrapper is available:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"MRC20")," - A wrapper for the MRC20 token standard, which is similar to ERC20 in Ethereum.")),(0,n.kt)("h2",{id:"future-developments"},"Future Developments"),(0,n.kt)("p",null,"The Massa team is actively working on expanding the range of contract wrappers available in the library. Future releases may include wrappers for additional token standards and other common contract types."),(0,n.kt)("p",null,"Some possible future additions might include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MRC721 (Non-Fungible Tokens)"),(0,n.kt)("li",{parentName:"ul"},"MRC1155 (Multi-Token Standard)")),(0,n.kt)("p",null,"Stay tuned for updates and new releases that will introduce additional contract wrappers to enhance your development experience on the Massa blockchain."),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"To use a contract wrapper, you typically need to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Import the wrapper class from the Massa Web3 JS Library."),(0,n.kt)("li",{parentName:"ol"},"Create an instance of the wrapper by providing a provider and the contract address."),(0,n.kt)("li",{parentName:"ol"},"Call methods on the wrapper instance to interact with the contract.")),(0,n.kt)("p",null,"For detailed information on using specific contract wrappers, please refer to their individual documentation pages."))}u.isMDXComponent=!0}}]);