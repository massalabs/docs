"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[1067],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},583:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={id:"intro",sidebar_label:"Introduction"},i="Autonomous Smart Contracts",s={unversionedId:"learn/asc/intro",id:"learn/asc/intro",title:"Autonomous Smart Contracts",description:"The current state of automation in blockchains",source:"@site/docs/learn/asc/intro.mdx",sourceDirName:"learn/asc",slug:"/learn/asc/intro",permalink:"/docs/learn/asc/intro",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/learn/asc/intro.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1744108433,formattedLastUpdatedAt:"Apr 8, 2025",frontMatter:{id:"intro",sidebar_label:"Introduction"},sidebar:"learnSidebar",previous:{title:"Detailed operation format and execution sequence",permalink:"/docs/learn/operation-format-execution"},next:{title:"Autonomous Smart Contracts",permalink:"/docs/learn/asc/massa-asc"}},l={},c=[{value:"The current state of automation in blockchains",id:"the-current-state-of-automation-in-blockchains",level:2},{value:"Massa&#39;s Autonomous Smart Contracts",id:"massas-autonomous-smart-contracts",level:2},{value:"Overview",id:"overview",level:3},{value:"A simple example to illustrate the concept",id:"a-simple-example-to-illustrate-the-concept",level:3},{value:"Without Massa",id:"without-massa",level:4},{value:"With Massa",id:"with-massa",level:4},{value:"Going further",id:"going-further",level:3}],h={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"autonomous-smart-contracts"},"Autonomous Smart Contracts"),(0,o.kt)("h2",{id:"the-current-state-of-automation-in-blockchains"},"The current state of automation in blockchains"),(0,o.kt)("p",null,"In classical blockchain systems, smart contracts are only executed when triggered by transactions sent from the outside world by users or computers who own a private key.\nSee the picture below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A normal blockchain",src:a(2199).Z,width:"1389",height:"710"})),(0,o.kt)("p",null,"This means that dapps are typically ",(0,o.kt)("strong",{parentName:"p"},"unable")," to operate autonomously and do any of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"decide to execute something at some time in the future (examples: closing an open position when it expires, scheduling a future action to happen even if the user is offline)"),(0,o.kt)("li",{parentName:"ul"},"wake up at regular intervals to refresh data (examples: send payments to an address every month, make NPCs evolve over time in a decentralized game)"),(0,o.kt)("li",{parentName:"ul"},"perform an action when something happens elsewhere on the blockchain (examples: trigger a liquidation whenever a position becomes under-collateralized, make a fully on-chain trading bot)")),(0,o.kt)("p",null,"In other terms, dapp smart contracts are just sitting there, doing nothing and waiting for someone with a private key to call them from the outside.\nBut many use cases require smart contracts to be able to act autonomously, without any external trigger.\nTo respond to this common need, dapps typically rely on external services (keeper bots) that hold a private key and call their smart contracts at the right time,\nwhich is a centralizing factor, an expense, and a potential point of failure."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Keeper bots",src:a(4424).Z,width:"1321",height:"405"})),(0,o.kt)("p",null,"When using keeper bots, the dapp is at risk:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if the keeper bot is down when the execution is meant to happen, it won't happen,"),(0,o.kt)("li",{parentName:"ul"},"if the poke transactions are delayed or not included because of network congestion, the execution might be delayed or not happen at all,"),(0,o.kt)("li",{parentName:"ul"},"if the keeper bot is hacked and/or its private key stolen, the hacker can call the smart contract with malicious intent,"),(0,o.kt)("li",{parentName:"ul"},"if the keeper bot is delegated to a third party automation provider, the dapp is at the mercy of the practices and policy changes of the provider.")),(0,o.kt)("p",null,"Also note that third party automation providers charge fees for their services, which can be a significant expense for dapps with a high volume of scheduled transactions."),(0,o.kt)("h2",{id:"massas-autonomous-smart-contracts"},"Massa's Autonomous Smart Contracts"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In Massa we strive for the only reason blockchain makes sense in the first place: decentralization.\nFollowing that philosophy, we had to find a way to allow all smart contracts to function autonomously on-chain, without relying on external services."),(0,o.kt)("p",null,"This is why we have been the first to deploy the Autonomous Smart Contracts.\nThe Massa blockchain contains a scheduling system that allows smart contracts to schedule a future call to themselves or to other smart contracts.\nThe scheduling can be based on time, or on the occurrence of a specific on-chain event."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Global schematic of ASCs",src:a(4471).Z,width:"1655",height:"515"})),(0,o.kt)("p",null,"This means that Massa's smart contracts can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"decide to execute something at some time in the future without relying on external services,"),(0,o.kt)("li",{parentName:"ul"},"wake up at regular intervals to refresh data autonomously,"),(0,o.kt)("li",{parentName:"ul"},"perform actions based on on-chain events without external triggers.")),(0,o.kt)("h3",{id:"a-simple-example-to-illustrate-the-concept"},"A simple example to illustrate the concept"),(0,o.kt)("p",null,"To illustrate the concept, let's consider a simple example: an arbitrage bot between two decentralized on-chain exchanges (DEXes).\nLet's say the bot wakes up every 5 seconds, observes the same value pair on two DEXs and executes trades when the price difference between the two exchanges is high enough to make a profit."),(0,o.kt)("h4",{id:"without-massa"},"Without Massa"),(0,o.kt)("p",null,"Here is how it would be build in any other blockchain without autonomous smart contracts:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A classical arbitrage bot",src:a(4297).Z,width:"1788",height:"612"})),(0,o.kt)("p",null,"Basically, everything runs on a centralized server that owns a secret key to access liquidity on the DEXs,\nand an internal timer of the server wakes up the bot at regular intervals to read the blockchain for price comparison and execute trades if needed by signing and emitting transactions."),(0,o.kt)("p",null,"Many things can go wrong with this approach (and many have gone wrong in the past):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if the dapp creators are running the server themselves, it incurs an operational cost and a potential point of failure,"),(0,o.kt)("li",{parentName:"ul"},"if the team delegates automation to an external service, they need to give them the private keys and trust them with their liquidity,"),(0,o.kt)("li",{parentName:"ul"},"the server can be down when the bot is meant to wake up, missing opportunities,"),(0,o.kt)("li",{parentName:"ul"},"the network can be congested and the transactions can be delayed, which could cause the bot to miss the arbitrage opportunity or even act on outdated data and lose money,"),(0,o.kt)("li",{parentName:"ul"},"the transactions emitted by the server can be seen and front-run by other bots, which can make the bot lose money,"),(0,o.kt)("li",{parentName:"ul"},"the server can be hacked and the hacker can steal all the funds owned by its secret key on both DEXs.")),(0,o.kt)("h4",{id:"with-massa"},"With Massa"),(0,o.kt)("p",null,"Here is how it would look like in Massa with Autonomous Smart Contracts:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"An arbitrage bot on Massa",src:a(6685).Z,width:"1275",height:"748"})),(0,o.kt)("p",null,"Let's break it down:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the arbitrage bot itself is a smart contract hosted on the Massa blockchain,"),(0,o.kt)("li",{parentName:"ul"},"when executed, the arbitrage bot smart contract does the following:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"it registers itself in the on-chain scheduler to be called again in 5 seconds,"),(0,o.kt)("li",{parentName:"ol"},"it reads the price of the same value pair on the two on-chain DEXs,"),(0,o.kt)("li",{parentName:"ol"},"if the price difference is high enough, it executes the orders on both DEXs,")))),(0,o.kt)("p",null,"The advantages of this approach are numerous:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the bot does not rely on external services or servers:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"no need to trust and pay for a third party automation provider,"),(0,o.kt)("li",{parentName:"ul"},"the bot cannot be hacked, taken down and does not experience downtime,"),(0,o.kt)("li",{parentName:"ul"},"no need to handle a private key to access the DEXs,"))),(0,o.kt)("li",{parentName:"ul"},"the observation of both DEXs and the execution of both orders all happen ",(0,o.kt)("strong",{parentName:"li"},"atomically"),". This means that:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"There is no slippage nor delays. Nothing else can execute or change between the observation of prices and the execution of the trades by the bot. In other words, the trades are executed with the exact prices observed."),(0,o.kt)("li",{parentName:"ul"},"No front-running is possible.")))),(0,o.kt)("h3",{id:"going-further"},"Going further"),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"./massa-asc"},"detailed description")," of Autonomous Smart Contracts to better understand how they work."))}p.isMDXComponent=!0},4471:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/asc_general-ba4322e08e7c399e05ca9254c1e7ce64.png"},4297:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dexbot_classical-c79dfb219a194d04cf9e5893c3e8f6d5.png"},6685:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dexbot_massa-97b4f079a5895d74efa7a1182d98b95d.png"},4424:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keeper_bot-655d42619a3eaafda0c9eb36b6abe85c.png"},2199:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/normal_blockchain-04963997e835d0523935b42cd2feb259.png"}}]);