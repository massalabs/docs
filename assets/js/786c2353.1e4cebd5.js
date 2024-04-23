"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[7892],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>b});var a=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=a.createContext({}),s=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(r),m=o,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(b,i(i({ref:e},u),{},{components:r})):a.createElement(b,i({ref:e},u))}));function b(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[d]="string"==typeof t?t:o,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7354:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=r(7462),o=(r(7294),r(3905));const n={id:"trading-bot",sidebar_label:"Trading bot"},i="Autonomous Trading Bot",l={unversionedId:"tutorial/trading-bot",id:"tutorial/trading-bot",title:"Autonomous Trading Bot",description:"This video is a great example of how to use Massa's autonomous smart contracts to build a trading bot that will automatically buy and sell tokens on the Dusa decentralized exchange (DEX).",source:"@site/docs/tutorial/trading-bot.mdx",sourceDirName:"tutorial",slug:"/tutorial/trading-bot",permalink:"/docs/tutorial/trading-bot",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/tutorial/trading-bot.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1713882196,formattedLastUpdatedAt:"Apr 23, 2024",frontMatter:{id:"trading-bot",sidebar_label:"Trading bot"},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/docs/tutorial/home"}},c={},s=[],u={toc:s},d="wrapper";function p(t){let{components:e,...r}=t;return(0,o.kt)(d,(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"autonomous-trading-bot"},"Autonomous Trading Bot"),(0,o.kt)("p",null,"This video is a great example of how to use Massa's ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/asc/intro"},"autonomous smart contracts")," to build a trading bot that will automatically buy and sell tokens on the ",(0,o.kt)("a",{parentName:"p",href:"https://dusa.io"},"Dusa")," decentralized exchange (DEX)."),(0,o.kt)("p",null,"This tutorial covers all the tooling required to build a decentralized application on the Massa blockchain, from the smart contract to the front-end interface, making it a great way to get started with Massa."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/gliOv6ICWRg",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),(0,o.kt)("p",null,"Or you can have a look at the GitHub repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/massalabs/demoyard"},"here"),"."))}p.isMDXComponent=!0}}]);