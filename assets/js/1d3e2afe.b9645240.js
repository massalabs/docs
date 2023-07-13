"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[2552],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),p=r,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||s;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1886:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const s={id:"standards",sidebar_label:"Standards"},o="Massa Standard",i={unversionedId:"build/standards",id:"build/standards",title:"Massa Standard",description:"The Massa Standard is your comprehensive starting point for blockchain projects on the Massa network. Offering reference implementations of the most common smart contracts, it's the toolkit you need for tokens, NFTs, or wallet creation.",source:"@site/docs/build/standards.md",sourceDirName:"build",slug:"/build/standards",permalink:"/docu-dev/docs/build/standards",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/build/standards.md",tags:[],version:"current",lastUpdatedBy:"Adrien Laversanne-Finot",lastUpdatedAt:1689264405,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{id:"standards",sidebar_label:"Standards"},sidebar:"buildSidebar",previous:{title:"gRPC",permalink:"/docu-dev/docs/build/api/grpc"}},l={},d=[{value:"Fungible Tokens (FT)",id:"fungible-tokens-ft",level:2},{value:"Non-Fungible Tokens (NFT)",id:"non-fungible-tokens-nft",level:2},{value:"Massa Domain Name Service (DNS)",id:"massa-domain-name-service-dns",level:2},{value:"Massa Units Standard",id:"massa-units-standard",level:2}],c={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"massa-standard"},"Massa Standard"),(0,r.kt)("p",null,"The Massa Standard is your comprehensive starting point for blockchain projects on the Massa network. Offering reference implementations of the most common smart contracts, it's the toolkit you need for tokens, NFTs, or wallet creation."),(0,r.kt)("p",null,"Adhering to a standard like this in the blockchain world is important. Standards ensure all participants in a blockchain network can interact seamlessly because they follow a unified structure and protocol. This compatibility fosters a more robust and inclusive blockchain ecosystem, encouraging mass adoption and facilitating growth."),(0,r.kt)("h2",{id:"fungible-tokens-ft"},"Fungible Tokens (FT)"),(0,r.kt)("p",null,"FT is a standard for creating fungible, tradable tokens on the Massa blockchain. It includes a set of functions that allow for seamless interaction with tokens within smart contracts and wallets."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-standards/tree/main/smart-contracts/assembly/contracts/FT"},"View on GitHub")),(0,r.kt)("h2",{id:"non-fungible-tokens-nft"},"Non-Fungible Tokens (NFT)"),(0,r.kt)("p",null,"NFT is a standard for creating unique, non-fungible tokens on the Massa blockchain. This allows the creation and management of tokens where each instance has a unique value or properties."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-standards/tree/main/smart-contracts/assembly/contracts/NFT"},"View on GitHub")),(0,r.kt)("h2",{id:"massa-domain-name-service-dns"},"Massa Domain Name Service (DNS)"),(0,r.kt)("p",null,"The DNS standard provides a foundational framework for managing Domain Name System (DNS) records within the Massa blockchain ecosystem. It streamlines the creation of a link between the hostname (website name), resolver address (where the smart contract and chunks of the website are located), and the DNS record owner."),(0,r.kt)("h2",{id:"massa-units-standard"},"Massa Units Standard"),(0,r.kt)("p",null,"The Massa Units standard defines common units of measurement for the Massa blockchain, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Massa coin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Gas")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rolls"))),(0,r.kt)("p",null,"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-standards/blob/main/units.md"},"Massa Units Standard")))}m.isMDXComponent=!0}}]);