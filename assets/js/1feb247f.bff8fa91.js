"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[8713],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),c=n,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||s;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<s;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},378:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const s={},l="Introduction",i={unversionedId:"massaBridge/home",id:"massaBridge/home",title:"Introduction",description:"Massa Bridge is the first cross-chain bridge that allows you to transfer ERC-20 tokens from EVM networks to Massa, and vice versa.",source:"@site/docs/massaBridge/home.mdx",sourceDirName:"massaBridge",slug:"/massaBridge/home",permalink:"/docs/massaBridge/home",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/massaBridge/home.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1715866887,formattedLastUpdatedAt:"May 16, 2024",frontMatter:{},sidebar:"massaBridgeSidebar",next:{title:"Instructions",permalink:"/docs/massaBridge/instructions"}},o={},d=[{value:"Token Addresses",id:"token-addresses",level:2},{value:"Supported Wallets",id:"supported-wallets",level:2},{value:"Getting Started",id:"getting-started",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://bridge.massa.net/"},"Massa Bridge")," is the first cross-chain bridge that allows you to transfer ERC-20 tokens from EVM networks to Massa, and vice versa."),(0,n.kt)("p",null,"It comes with two modes: ",(0,n.kt)("strong",{parentName:"p"},"Mainnet")," (starting with Ethereum and Massa) and ",(0,n.kt)("strong",{parentName:"p"},"Testnet")," (using Sepolia Testnet and Massa Buildnet)."),(0,n.kt)("p",null,"Massa Bridge initially enables the bridging of USDC, DAI, and WETH, originating from the Ethereum blockchain. Synthetic assets received on the Massa blockchain contain a suffix in the token names to identify the origin chain. For example, USDC bridged from Ethereum will become USDC.e on Massa."),(0,n.kt)("h2",{id:"token-addresses"},"Token Addresses"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Network"),(0,n.kt)("th",{parentName:"tr",align:null},"Token name"),(0,n.kt)("th",{parentName:"tr",align:null},"Address"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ethereum"),(0,n.kt)("td",{parentName:"tr",align:null},"USDC"),(0,n.kt)("td",{parentName:"tr",align:null},"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ethereum"),(0,n.kt)("td",{parentName:"tr",align:null},"WETH"),(0,n.kt)("td",{parentName:"tr",align:null},"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ethereum"),(0,n.kt)("td",{parentName:"tr",align:null},"DAI"),(0,n.kt)("td",{parentName:"tr",align:null},"0x6b175474e89094c44da98b954eedeac495271d0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Massa"),(0,n.kt)("td",{parentName:"tr",align:null},"USDC.e"),(0,n.kt)("td",{parentName:"tr",align:null},"AS1hCJXjndR4c9vekLWsXGnrdigp4AaZ7uYG3UKFzzKnWVsrNLPJ")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Massa"),(0,n.kt)("td",{parentName:"tr",align:null},"WETH.e"),(0,n.kt)("td",{parentName:"tr",align:null},"AS124vf3YfAJCSCQVYKczzuWWpXrximFpbTmX4rheLs5uNSftiiRY")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Massa"),(0,n.kt)("td",{parentName:"tr",align:null},"DAI.e"),(0,n.kt)("td",{parentName:"tr",align:null},"AS1ZGF1upwp9kPRvDKLxFAKRebgg7b3RWDnhgV7VvdZkZsUL7Nuv")))),(0,n.kt)("h2",{id:"supported-wallets"},"Supported Wallets"),(0,n.kt)("p",null,"For Ethereum:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://metamask.io/"},"Metamask")," wallet")),(0,n.kt)("p",null,"For Massa:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://station.massa.net/"},"Massa Station\u2019s Wallet module")," (recommended by Massa Labs)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://bearby.io/"},"Bearby wallet")," (community-made wallet)")),(0,n.kt)("p",null,"For more details, please refer to the Massa Bridge FAQ: ",(0,n.kt)("a",{parentName:"p",href:"https://bridge.massa.net/"},"https://bridge.massa.net/"),"."),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For step-by-step instructions on how to use the bridge go to the ",(0,n.kt)("a",{parentName:"li",href:"/docs/massaBridge/instructions"},"Instructions section"),"."),(0,n.kt)("li",{parentName:"ul"},"For additional information about Massa Bridge, check out ",(0,n.kt)("a",{parentName:"li",href:"https://bridge.massa.net/faq/"},"Frequently Asked Questions"),".")))}m.isMDXComponent=!0}}]);