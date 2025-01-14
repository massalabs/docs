"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[7948],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>v});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,v=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return a?r.createElement(v,l(l({ref:t},d),{},{components:a})):r.createElement(v,l({ref:t},d))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},240:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={id:"wallet-provider",title:"Wallet Provider"},l="Wallet Provider Integration Guide",s={unversionedId:"build/massa-web3-legacy/wallet-provider",id:"build/massa-web3-legacy/wallet-provider",title:"Wallet Provider",description:"Overview of wallet-provider",source:"@site/docs/build/massa-web3-legacy/wallet-provider.mdx",sourceDirName:"build/massa-web3-legacy",slug:"/build/massa-web3-legacy/wallet-provider",permalink:"/docs/build/massa-web3-legacy/wallet-provider",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/massa-web3-legacy/wallet-provider.mdx",tags:[],version:"current",lastUpdatedBy:"Peterjah",lastUpdatedAt:1736847649,formattedLastUpdatedAt:"Jan 14, 2025",frontMatter:{id:"wallet-provider",title:"Wallet Provider"},sidebar:"buildSidebar",previous:{title:"Backend Usage",permalink:"/docs/build/massa-web3-legacy/backend-usage-massa-web3"},next:{title:"Utils",permalink:"/docs/build/massa-web3-legacy/massa-web3-utils"}},o={},c=[{value:"Overview of <code>wallet-provider</code>",id:"overview-of-wallet-provider",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Installation",id:"installation",level:3},{value:"Basic Usage Examples",id:"basic-usage-examples",level:3},{value:"Listing Available Providers",id:"listing-available-providers",level:4},{value:"Selecting a Wallet Provider",id:"selecting-a-wallet-provider",level:4},{value:"Accessing Wallet Accounts",id:"accessing-wallet-accounts",level:4},{value:"Retrieving network",id:"retrieving-network",level:4},{value:"Retrieving Chain id",id:"retrieving-chain-id",level:4},{value:"Account Functions",id:"account-functions",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wallet-provider-integration-guide"},"Wallet Provider Integration Guide"),(0,n.kt)("h2",{id:"overview-of-wallet-provider"},"Overview of ",(0,n.kt)("inlineCode",{parentName:"h2"},"wallet-provider")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"wallet-provider")," is a versatile library designed to connect dApps with user wallets, adhering to the Massa wallet standards. It supports seamless integration with the Massa blockchain, either as a standalone utility or in conjunction with ",(0,n.kt)("inlineCode",{parentName:"p"},"massa-web3"),", facilitating a secure and efficient dApp-to-wallet communication channel."),(0,n.kt)("h2",{id:"key-features"},"Key Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Wallet Discovery"),": Automatically identifies and connects to compatible wallets present on the user's device."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Account Management"),": Offers functionalities to import, retrieve, and handle wallet accounts with ease."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Transaction Signing"),": Enables the signing of transactions and messages directly from the dApp interface."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Balance Inquiry"),": Allows for real-time balance checks of connected wallet accounts.")),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Ensure you have ",(0,n.kt)("inlineCode",{parentName:"p"},"wallet-provider")," installed in your project. If not, you can add it using npm or yarn:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @massalabs/wallet-provider\n# or\nyarn add @massalabs/wallet-provider\n")),(0,n.kt)("h3",{id:"basic-usage-examples"},"Basic Usage Examples"),(0,n.kt)("h4",{id:"listing-available-providers"},"Listing Available Providers"),(0,n.kt)("p",null,"Retrieve a list of all wallet providers that adhere to the Massa wallet standard:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'import { providers } from "@massalabs/wallet-provider";\nconst providerList = providers();\n')),(0,n.kt)("h4",{id:"selecting-a-wallet-provider"},"Selecting a Wallet Provider"),(0,n.kt)("p",null,"Choose a specific wallet provider from the available list, for example, ",(0,n.kt)("inlineCode",{parentName:"p"},"MASSASTATION"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'import { providers } from "@massalabs/wallet-provider";\n\nconst providerList = providers();\nconst massaStationProvider = providerList.find(\n  (provider) => provider.name() === "MASSASTATION"\n);\n')),(0,n.kt)("h4",{id:"accessing-wallet-accounts"},"Accessing Wallet Accounts"),(0,n.kt)("p",null,"After selecting a provider, you can retrieve the accounts associated with it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'reference title="Example"',reference:!0,title:'"Example"'},"https://github.com/massalabs/wallet-provider/blob/main/code-snippets/provider-get-accounts.ts\n")),(0,n.kt)("h4",{id:"retrieving-network"},"Retrieving network"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'reference title="Example"',reference:!0,title:'"Example"'},"https://github.com/massalabs/wallet-provider/blob/main/code-snippets/provider-get-nework.ts\n")),(0,n.kt)("h4",{id:"retrieving-chain-id"},"Retrieving Chain id"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'reference title="Example"',reference:!0,title:'"Example"'},"https://github.com/massalabs/wallet-provider/blob/main/code-snippets/provider-get-chainId.ts\n")),(0,n.kt)("h3",{id:"account-functions"},"Account Functions"),(0,n.kt)("p",null,"For a comprehensive list of account-related functionalities, such as sending transactions, signing messages, and querying account balances, refer to the ",(0,n.kt)("inlineCode",{parentName:"p"},"IAccount")," interface documentation available ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/massalabs/wallet-provider/blob/main/src/account/IAccount.ts"},"here"),"."),(0,n.kt)("hr",null),(0,n.kt)("p",null,"This guide serves as an introductory resource for integrating the ",(0,n.kt)("inlineCode",{parentName:"p"},"wallet-provider")," with your dApp. For detailed documentation, including advanced features and integration scenarios, visit the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-standards/blob/main/wallet/dapps-communication.md"},"Massa standards repository")," and the ",(0,n.kt)("inlineCode",{parentName:"p"},"wallet-provider")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/massalabs/wallet-provider"},"GitHub page"),"."))}u.isMDXComponent=!0}}]);