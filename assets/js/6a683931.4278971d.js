"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[6050],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>b});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(b,o(o({ref:t},p),{},{components:a})):r.createElement(b,o({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2043:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(8168),n=(a(6540),a(5680));const i={id:"intro",sidebar_label:"Introduction",sidebar_position:1},o="Introduction to Massa Web3 Libraries",s={unversionedId:"build/web3/intro",id:"build/web3/intro",title:"Introduction to Massa Web3 Libraries",description:"The Massa blockchain ecosystem provides two main libraries for developers to interact with the blockchain. Understanding these libraries and their purposes is crucial for efficient development of applications on the Massa network.",source:"@site/docs/build/web3/intro.md",sourceDirName:"build/web3",slug:"/build/web3/intro",permalink:"/docs/build/web3/intro",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/web3/intro.md",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1723820343,formattedLastUpdatedAt:"Aug 16, 2024",sidebarPosition:1,frontMatter:{id:"intro",sidebar_label:"Introduction",sidebar_position:1},sidebar:"buildSidebar",previous:{title:"AS SDK",permalink:"/docs/build/smart-contract/sdk"},next:{title:"Prerequisites",permalink:"/docs/build/web3/prerequisites"}},l={},c=[{value:"1. @massalabs/massa-web3",id:"1-massalabsmassa-web3",level:2},{value:"2. @massalabs/wallet-provider",id:"2-massalabswallet-provider",level:2},{value:"Choosing the Right Library",id:"choosing-the-right-library",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"introduction-to-massa-web3-libraries"},"Introduction to Massa Web3 Libraries"),(0,n.yg)("p",null,"The Massa blockchain ecosystem provides two main libraries for developers to interact with the blockchain. Understanding these libraries and their purposes is crucial for efficient development of applications on the Massa network."),(0,n.yg)("admonition",{title:"Important",type:"warning"},(0,n.yg)("p",{parentName:"admonition"},"Welcome to the documentation for the next version of the Massa Web3 JS Library. This new version introduces significant improvements and new features that enhance your development experience with the Massa blockchain.\nWhile this represents the most current and advanced state of the library, please be aware that it may undergo some changes as we continue to refine and optimize based on user feedback and ecosystem developments.\nWe strongly encourage you to use this new version in your projects. It offers better performance, additional capabilities, and improved developer ergonomics compared to previous versions.\nWe're committed to keeping this documentation up-to-date. Any future changes or updates will be reflected here promptly.\nThank you for choosing to work with the latest Massa Web3 JS Library. Your feedback and experiences are valuable to us as we continue to evolve and improve the library.")),(0,n.yg)("h2",{id:"1-massalabsmassa-web3"},"1. @massalabs/massa-web3"),(0,n.yg)("p",null,"This is the core library for interacting with the Massa blockchain. It provides all the necessary tools for creating accounts, managing keys, sending transactions, and interacting with smart contracts."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Use cases:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Building backend applications"),(0,n.yg)("li",{parentName:"ul"},"Creating scripts for blockchain interaction"),(0,n.yg)("li",{parentName:"ul"},"Developing applications that don't require direct interaction with user wallets")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Installation:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npm install @massalabs/massa-web3@next\n")),(0,n.yg)("h2",{id:"2-massalabswallet-provider"},"2. @massalabs/wallet-provider"),(0,n.yg)("p",null,"This library is built on top of ",(0,n.yg)("inlineCode",{parentName:"p"},"massa-web3")," and provides additional functionality for interacting with wallet extensions (like MassaStation or Bearby)."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Use cases:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Building decentralized applications (dApps) that need to interact with user wallets in a browser environment"),(0,n.yg)("li",{parentName:"ul"},"Creating front-end applications that require user authentication via blockchain wallets")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Installation:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npm install @massalabs/wallet-provider@next\n")),(0,n.yg)("h2",{id:"choosing-the-right-library"},"Choosing the Right Library"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"If you're building a dApp or any application that needs to interact with user wallets:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Use ",(0,n.yg)("inlineCode",{parentName:"li"},"@massalabs/wallet-provider")))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"If you're building backend services, scripts, or applications that don't require wallet interaction:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Use ",(0,n.yg)("inlineCode",{parentName:"li"},"@massalabs/massa-web3")," directly")))),(0,n.yg)("h2",{id:"examples"},"Examples"),(0,n.yg)("p",null,"You can find examples in the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/massalabs/massa-sc-examples"},"Massa example repository")," that demonstrate how to use these libraries in various scenarios."))}u.isMDXComponent=!0}}]);