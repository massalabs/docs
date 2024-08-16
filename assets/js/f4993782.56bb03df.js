"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[723],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1547:(e,t,r)=>{r.d(t,{X:()=>c,h:()=>l});var n=r(6540),o=r(53);const a={feature:"feature_yCMF"};function l(e){let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:"container features"},n.createElement("div",{className:"row"},t)))}const i=()=>n.createElement("svg",{width:"0.8rem",height:"0.8rem","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"},n.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}));function c(e){let{url:t,title:r,content:l,icon:c}=e;const s=t.startsWith("http"),u=s?"_blank":"_self",d=s?"noopener noreferrer":"";return n.createElement(n.Fragment,null,n.createElement("a",{className:(0,o.A)("col col--4",a.feature),href:t,target:u,rel:d},n.createElement("div",null,n.createElement("div",{className:"avatar__name"},c," ",r," ",s&&n.createElement(i,null)),n.createElement("small",null,l))))}},1534:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(8168),o=(r(6540),r(5680)),a=r(1547);const l={id:"home",sidebar_label:"Home"},i="Developer Documentation",c={unversionedId:"build/home",id:"build/home",title:"Developer Documentation",description:"Greetings! Here you'll discover documentation on how to develop decentralized applications (dApps) on Massa.",source:"@site/docs/build/home.mdx",sourceDirName:"build",slug:"/build/home",permalink:"/docs/build/home",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/home.mdx",tags:[],version:"current",lastUpdatedBy:"BenRey",lastUpdatedAt:1723798300,formattedLastUpdatedAt:"Aug 16, 2024",frontMatter:{id:"home",sidebar_label:"Home"},sidebar:"buildSidebar",next:{title:'"Hello, World!" dApp',permalink:"/docs/build/hello-world-dapp"}},s={},u=[],d={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"developer-documentation"},"Developer Documentation"),(0,o.yg)("p",null,"Greetings! Here you'll discover documentation on how to develop decentralized applications (dApps) on Massa."),(0,o.yg)("p",null,"Whether you're a novice or unfamiliar with smart contract technology, rest assured that we'll swiftly bring you up to date with all the essential knowledge."),(0,o.yg)(a.h,{mdxType:"FeatureList"},(0,o.yg)(a.X,{url:"./hello-world-dapp",title:"Quickstart",content:"Create your first dApp.",icon:"\u26a1",mdxType:"Feature"}),(0,o.yg)(a.X,{url:"./wallet/intro",title:"Wallets",content:"Store your assets.",icon:"\ud83d\udc5b",mdxType:"Feature"}),(0,o.yg)(a.X,{url:"./networks-faucets/public-networks",title:"Networks & Faucets",content:"Chose the right network.",icon:"\ud83c\udf10",mdxType:"Feature"})))}m.isMDXComponent=!0}}]);