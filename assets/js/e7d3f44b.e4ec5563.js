"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[1067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,h=d["".concat(c,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={id:"intro",sidebar_label:"Introduction"},i="Autonomous Smart Contracts",s={unversionedId:"learn/asc/intro",id:"learn/asc/intro",title:"Autonomous Smart Contracts",description:"Introduction",source:"@site/docs/learn/asc/intro.mdx",sourceDirName:"learn/asc",slug:"/learn/asc/intro",permalink:"/docs/learn/asc/intro",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/learn/asc/intro.mdx",tags:[],version:"current",lastUpdatedBy:"Nathan Seva",lastUpdatedAt:1721144230,formattedLastUpdatedAt:"Jul 16, 2024",frontMatter:{id:"intro",sidebar_label:"Introduction"},sidebar:"learnSidebar",previous:{title:"Detailed operation format and execution sequence",permalink:"/docs/learn/operation-format-execution"},next:{title:"Autonomous Smart Contracts",permalink:"/docs/learn/asc/massa-asc"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Challenges with Existing Smart Contracts",id:"challenges-with-existing-smart-contracts",level:2},{value:"The Need for a Reliable Automation Mechanism",id:"the-need-for-a-reliable-automation-mechanism",level:2}],u={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"autonomous-smart-contracts"},"Autonomous Smart Contracts"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Massa Blockchain introduces a groundbreaking feature known as Autonomous Smart Contracts.\nThese smart contracts possess a unique capability: they can independently determine their own activation without any external actors.\nBy the end of this section, you will gain a fundamental understanding of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The limitations of current smart contracts on existing blockchains"),(0,o.kt)("li",{parentName:"ul"},"How Massa Blockchain overcomes these limitations by empowering pre-programmed execution"),(0,o.kt)("li",{parentName:"ul"},"The inner workings and mechanisms behind autonomous smart contracts"),(0,o.kt)("li",{parentName:"ul"},"The use cases enables by autonomous smart contracts")),(0,o.kt)("h2",{id:"challenges-with-existing-smart-contracts"},"Challenges with Existing Smart Contracts"),(0,o.kt)("p",null,"In today's blockchain landscape, smart contracts face limitations when it comes to automating operations without external triggers.\nWhile automation lies at the heart of numerous industries, particularly in the realm of modern finance, only\ncertain actions within decentralized finance (DeFi) protocols, such as lending and arbitration, are automated.\nHowever, even these actions are typically executed by off-chain bots. The absence of external calls prevents smart contracts,\nas they exist in current public blockchains, from performing automated operations."),(0,o.kt)("p",null,"Many decentralized protocols rely on recurrent triggers to ensure their smooth operation.\nFor example, in decentralized lending protocols, borrowers lock crypto assets as collateral when obtaining loans.\nIf the value of the collateralized asset drops below a specified threshold, the borrower's position becomes under-collateralized\nand requires immediate action. To maintain the integrity of the protocol, such positions must be liquidated. Currently,\nthese liquidations are executed by organizations or individuals who run bots, often on centralized cloud services."),(0,o.kt)("h2",{id:"the-need-for-a-reliable-automation-mechanism"},"The Need for a Reliable Automation Mechanism"),(0,o.kt)("p",null,"The reliance on recurrent triggers is a prevalent requirement across numerous applications.\nConsequently, significant time and effort have been invested in developing more dependable networks of bots to ensure\nthe timely execution of transactions.\nHowever, since these solutions operate off-chain, there is no guarantee that the execution will be triggered effectively.\nIn cases where bots fail to execute transactions, decentralized protocols face risks, as do the applications built on top of them."))}m.isMDXComponent=!0}}]);