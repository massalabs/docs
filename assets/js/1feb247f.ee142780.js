"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[6430],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),g=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=g(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=g(a),u=n,y=m["".concat(o,".").concat(u)]||m[u]||p[u]||l;return a?r.createElement(y,i(i({ref:t},d),{},{components:a})):r.createElement(y,i({ref:t},d))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var g=2;g<l;g++)i[g]=a[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4268:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var r=a(8168),n=(a(6540),a(5680));const l={},i="Introduction",s={unversionedId:"massaBridge/home",id:"massaBridge/home",title:"Introduction",description:"Massa Bridge is the first cross-chain bridge that allows you to transfer ERC-20 tokens from EVM-based networks to Massa, and vice versa.",source:"@site/docs/massaBridge/home.mdx",sourceDirName:"massaBridge",slug:"/massaBridge/home",permalink:"/docs/massaBridge/home",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/massaBridge/home.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1723820343,formattedLastUpdatedAt:"Aug 16, 2024",frontMatter:{},sidebar:"massaBridgeSidebar",next:{title:"Instructions",permalink:"/docs/massaBridge/instructions"}},o={},g=[{value:"Token Addresses",id:"token-addresses",level:2},{value:"Supported Wallets",id:"supported-wallets",level:2},{value:"Bridge fees",id:"bridge-fees",level:3},{value:"Getting Started",id:"getting-started",level:2}],d={toc:g},m="wrapper";function p(e){let{components:t,...a}=e;return(0,n.yg)(m,(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://bridge.massa.net/"},"Massa Bridge")," is the first cross-chain bridge that allows you to transfer ERC-20 tokens from EVM-based networks to Massa, and vice versa."),(0,n.yg)("p",null,"It comes with two modes:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Mainnet:")," enabling bridging from Ethereum or Binance Smart Chain (BSC) to Massa."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Testnet:")," enabling bridging from Sepolia Testnet or BSC Testnet to Massa Buildnet.")),(0,n.yg)("p",null,"Massa Bridge currently enables bridging Circle USD, DAI, and Wrapped Ether from Ethereum, and Bridged USDT and Ethereum Token from Binance Smart Chain.\nSynthetic assets received on Massa blockchain contain a suffix in the token name to identify the origin chain. For example, USDC bridged from Ethereum will become USDC.e on Massa. USDT from BSC chain becomes USDT.b on Massa."),(0,n.yg)("h2",{id:"token-addresses"},"Token Addresses"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Network"),(0,n.yg)("th",{parentName:"tr",align:null},"Token name"),(0,n.yg)("th",{parentName:"tr",align:null},"Address"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Ethereum"),(0,n.yg)("td",{parentName:"tr",align:null},"USDC"),(0,n.yg)("td",{parentName:"tr",align:null},"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Ethereum"),(0,n.yg)("td",{parentName:"tr",align:null},"WETH"),(0,n.yg)("td",{parentName:"tr",align:null},"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Ethereum"),(0,n.yg)("td",{parentName:"tr",align:null},"DAI"),(0,n.yg)("td",{parentName:"tr",align:null},"0x6b175474e89094c44da98b954eedeac495271d0f")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Massa"),(0,n.yg)("td",{parentName:"tr",align:null},"USDC.e"),(0,n.yg)("td",{parentName:"tr",align:null},"AS1hCJXjndR4c9vekLWsXGnrdigp4AaZ7uYG3UKFzzKnWVsrNLPJ")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Massa"),(0,n.yg)("td",{parentName:"tr",align:null},"WETH.e"),(0,n.yg)("td",{parentName:"tr",align:null},"AS124vf3YfAJCSCQVYKczzuWWpXrximFpbTmX4rheLs5uNSftiiRY")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Massa"),(0,n.yg)("td",{parentName:"tr",align:null},"DAI.e"),(0,n.yg)("td",{parentName:"tr",align:null},"AS1ZGF1upwp9kPRvDKLxFAKRebgg7b3RWDnhgV7VvdZkZsUL7Nuv")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Massa"),(0,n.yg)("td",{parentName:"tr",align:null},"WETH.b"),(0,n.yg)("td",{parentName:"tr",align:null},"AS125oPLYRTtfVjpWisPZVTLjBhCFfQ1jDsi75XNtRm1NZux54eCj")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Massa"),(0,n.yg)("td",{parentName:"tr",align:null},"USDT.b"),(0,n.yg)("td",{parentName:"tr",align:null},"AS12LKs9txoSSy8JgFJgV96m8k5z9pgzjYMYSshwN67mFVuj3bdUV")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"BNB Smart Chain"),(0,n.yg)("td",{parentName:"tr",align:null},"USDT"),(0,n.yg)("td",{parentName:"tr",align:null},"0x55d398326f99059fF775485246999027B3197955")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"BNB Smart Chain"),(0,n.yg)("td",{parentName:"tr",align:null},"ETH"),(0,n.yg)("td",{parentName:"tr",align:null},"0x2170Ed0880ac9A755fd29B2688956BD959F933F8")))),(0,n.yg)("h2",{id:"supported-wallets"},"Supported Wallets"),(0,n.yg)("p",null,"For Ethereum:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://metamask.io/"},"Metamask")," wallet")),(0,n.yg)("p",null,"For Massa:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://station.massa.net/"},"Massa Station\u2019s Wallet module")," (recommended by Massa Labs)"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://bearby.io/"},"Bearby wallet")," (community-made wallet)")),(0,n.yg)("p",null,"For more details, please refer to the ",(0,n.yg)("a",{parentName:"p",href:"https://bridge.massa.net/faq"},"Massa Bridge FAQ"),"."),(0,n.yg)("h3",{id:"bridge-fees"},"Bridge fees"),(0,n.yg)("p",null,"Depending on the EVM network and the direction of the bridge operation, the system can charge a fee. As of today, all transfers from EVM networks to Massa are free of charge. Redeems on the Binance Smart chain are also free. However a 0.1% fee will be applied when transferring assets from Massa to the Ethereum network. The fee is charged at the smart contract level and is automatically deducted from the transferred amount."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Bridge direction"),(0,n.yg)("th",{parentName:"tr",align:null},"Bridge fee"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Ethereum to Massa"),(0,n.yg)("td",{parentName:"tr",align:null},"0%")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Massa to Ethereum"),(0,n.yg)("td",{parentName:"tr",align:null},"0.1%")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"BSC to Massa"),(0,n.yg)("td",{parentName:"tr",align:null},"0%")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Massa to BSC"),(0,n.yg)("td",{parentName:"tr",align:null},"0%")))),(0,n.yg)("h2",{id:"getting-started"},"Getting Started"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"For step-by-step instructions on how to use the bridge go to the ",(0,n.yg)("a",{parentName:"li",href:"/docs/massaBridge/instructions"},"Instructions section"),"."),(0,n.yg)("li",{parentName:"ul"},"For additional information about Massa Bridge, check out ",(0,n.yg)("a",{parentName:"li",href:"https://bridge.massa.net/faq/"},"Frequently Asked Questions"),".")))}p.isMDXComponent=!0}}]);