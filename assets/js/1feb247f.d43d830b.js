"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[8713],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),p=d(a),c=n,k=p["".concat(o,".").concat(c)]||p[c]||u[c]||l;return a?r.createElement(k,i(i({ref:e},m),{},{components:a})):r.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[p]="string"==typeof t?t:n,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},378:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={},i="Introduction",s={unversionedId:"massaBridge/home",id:"massaBridge/home",title:"Introduction",description:"Massa Bridge is the first cross-chain bridge that allows you to transfer ERC-20 tokens from EVM-based networks to Massa, and vice versa.",source:"@site/docs/massaBridge/home.mdx",sourceDirName:"massaBridge",slug:"/massaBridge/home",permalink:"/docs/massaBridge/home",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/massaBridge/home.mdx",tags:[],version:"current",lastUpdatedBy:"Peterjah",lastUpdatedAt:1730365623,formattedLastUpdatedAt:"Oct 31, 2024",frontMatter:{},sidebar:"massaBridgeSidebar",next:{title:"Instructions",permalink:"/docs/massaBridge/instructions"}},o={},d=[{value:"Token Addresses",id:"token-addresses",level:2},{value:"Supported Wallets",id:"supported-wallets",level:2},{value:"Bridge fees",id:"bridge-fees",level:3},{value:"Getting Started",id:"getting-started",level:2}],m={toc:d},p="wrapper";function u(t){let{components:e,...a}=t;return(0,n.kt)(p,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://bridge.massa.net/"},"Massa Bridge")," is the first cross-chain bridge that allows you to transfer ERC-20 tokens from EVM-based networks to Massa, and vice versa."),(0,n.kt)("p",null,"It comes with two modes:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Mainnet:")," enabling bridging from Ethereum or Binance Smart Chain (BSC) to Massa."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Testnet:")," enabling bridging from Sepolia Testnet or BSC Testnet to Massa Buildnet.")),(0,n.kt)("p",null,"Massa Bridge currently enables bridging Circle USD, DAI, and Wrapped Ether from Ethereum, and Bridged USDT and Ethereum Token from Binance Smart Chain.\nSynthetic assets received on Massa blockchain contain a suffix in the token name to identify the origin chain. For example, USDC bridged from Ethereum will become USDC.e on Massa. USDT from BSC chain becomes USDT.b on Massa."),(0,n.kt)("h2",{id:"token-addresses"},"Token Addresses"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Network"),(0,n.kt)("th",{parentName:"tr",align:null},"Token name"),(0,n.kt)("th",{parentName:"tr",align:null},"Address"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ethereum"),(0,n.kt)("td",{parentName:"tr",align:null},"USDC"),(0,n.kt)("td",{parentName:"tr",align:null},"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ethereum"),(0,n.kt)("td",{parentName:"tr",align:null},"WETH"),(0,n.kt)("td",{parentName:"tr",align:null},"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ethereum"),(0,n.kt)("td",{parentName:"tr",align:null},"DAI"),(0,n.kt)("td",{parentName:"tr",align:null},"0x6b175474e89094c44da98b954eedeac495271d0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Massa"),(0,n.kt)("td",{parentName:"tr",align:null},"USDC.e"),(0,n.kt)("td",{parentName:"tr",align:null},"AS1hCJXjndR4c9vekLWsXGnrdigp4AaZ7uYG3UKFzzKnWVsrNLPJ")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Massa"),(0,n.kt)("td",{parentName:"tr",align:null},"WETH.e"),(0,n.kt)("td",{parentName:"tr",align:null},"AS124vf3YfAJCSCQVYKczzuWWpXrximFpbTmX4rheLs5uNSftiiRY")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Massa"),(0,n.kt)("td",{parentName:"tr",align:null},"DAI.e"),(0,n.kt)("td",{parentName:"tr",align:null},"AS1ZGF1upwp9kPRvDKLxFAKRebgg7b3RWDnhgV7VvdZkZsUL7Nuv")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Massa"),(0,n.kt)("td",{parentName:"tr",align:null},"WETH.b"),(0,n.kt)("td",{parentName:"tr",align:null},"AS125oPLYRTtfVjpWisPZVTLjBhCFfQ1jDsi75XNtRm1NZux54eCj")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Massa"),(0,n.kt)("td",{parentName:"tr",align:null},"USDT.b"),(0,n.kt)("td",{parentName:"tr",align:null},"AS12LKs9txoSSy8JgFJgV96m8k5z9pgzjYMYSshwN67mFVuj3bdUV")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BNB Smart Chain"),(0,n.kt)("td",{parentName:"tr",align:null},"USDT"),(0,n.kt)("td",{parentName:"tr",align:null},"0x55d398326f99059fF775485246999027B3197955")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BNB Smart Chain"),(0,n.kt)("td",{parentName:"tr",align:null},"ETH"),(0,n.kt)("td",{parentName:"tr",align:null},"0x2170Ed0880ac9A755fd29B2688956BD959F933F8")))),(0,n.kt)("h2",{id:"supported-wallets"},"Supported Wallets"),(0,n.kt)("p",null,"For Ethereum:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://metamask.io/"},"Metamask")," wallet")),(0,n.kt)("p",null,"For Massa:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://station.massa.net/"},"Massa Station\u2019s Wallet module")," (recommended by Massa Labs)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://bearby.io/"},"Bearby wallet")," (community-made wallet)")),(0,n.kt)("p",null,"For more details, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://bridge.massa.net/faq"},"Massa Bridge FAQ"),"."),(0,n.kt)("h3",{id:"bridge-fees"},"Bridge fees"),(0,n.kt)("p",null,"Depending on the EVM network and the direction of the bridge operation, the system can charge a fee. As of today, all transfers from EVM networks to Massa are free of charge. Redeems on the Binance Smart chain are also free. However a 0.1% fee will be applied when transferring assets from Massa to the Ethereum network. The fee is charged at the smart contract level and is automatically deducted from the transferred amount."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Bridge direction"),(0,n.kt)("th",{parentName:"tr",align:null},"Bridge fee"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ethereum to Massa"),(0,n.kt)("td",{parentName:"tr",align:null},"0%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Massa to Ethereum"),(0,n.kt)("td",{parentName:"tr",align:null},"0.1%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BSC to Massa"),(0,n.kt)("td",{parentName:"tr",align:null},"0%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Massa to BSC"),(0,n.kt)("td",{parentName:"tr",align:null},"0%")))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For step-by-step instructions on how to use the bridge go to the ",(0,n.kt)("a",{parentName:"li",href:"/docs/massaBridge/instructions"},"Instructions section"),"."),(0,n.kt)("li",{parentName:"ul"},"For additional information about Massa Bridge, check out ",(0,n.kt)("a",{parentName:"li",href:"https://bridge.massa.net/faq/"},"Frequently Asked Questions"),".")))}u.isMDXComponent=!0}}]);