"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[8190],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,y=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const a={title:"Overview"},i="Getting Started",l={unversionedId:"deweb/getting-started/overview",id:"deweb/getting-started/overview",title:"Overview",description:"Welcome to DeWeb! This guide will help you set up and start using DeWeb,",source:"@site/docs/deweb/getting-started/overview.mdx",sourceDirName:"deweb/getting-started",slug:"/deweb/getting-started/overview",permalink:"/docs/deweb/getting-started/overview",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/deweb/getting-started/overview.mdx",tags:[],version:"current",lastUpdatedBy:"BenRey",lastUpdatedAt:1723798300,formattedLastUpdatedAt:"Aug 16, 2024",frontMatter:{title:"Overview"},sidebar:"massaDeWebSidebar",previous:{title:"Home",permalink:"/docs/deweb/home"},next:{title:"Setting up a Local Server",permalink:"/docs/deweb/getting-started/setup-local-server"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Paths to Get Started",id:"paths-to-get-started",level:2},{value:"Local Server Setup",id:"local-server-setup",level:3},{value:"Becoming a Provider",id:"becoming-a-provider",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"getting-started"},"Getting Started"),(0,o.yg)("p",null,"Welcome to DeWeb! This guide will help you set up and start using DeWeb,\nwhether you want to run a local server for personal use or become a provider."),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"DeWeb provides a fully decentralized web experience by allowing websites to be stored on-chain.\nTo start using DeWeb, you can choose between two primary paths:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Setting up a Local Server"),":\nIdeal for those who want to browse decentralized websites without any intermediaries."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Becoming a Provider"),":\nSuitable for those who want to make decentralized websites accessible to anyone with a simple browser through their own domain.")),(0,o.yg)("h2",{id:"paths-to-get-started"},"Paths to Get Started"),(0,o.yg)("h3",{id:"local-server-setup"},"Local Server Setup"),(0,o.yg)("p",null,"Running a DeWeb server locally allows you to:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Browse decentralized websites directly from the blockchain."),(0,o.yg)("li",{parentName:"ul"},"Ensure complete privacy and autonomy in accessing on-chain data.")),(0,o.yg)("p",null,"For detailed instructions, see ",(0,o.yg)("a",{parentName:"p",href:"./setup-local-server"},"Setting up a Local Server"),"."),(0,o.yg)("h3",{id:"becoming-a-provider"},"Becoming a Provider"),(0,o.yg)("p",null,"Becoming a provider of DeWeb lets you:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Provide access to decentralized websites through your own domain."),(0,o.yg)("li",{parentName:"ul"},"Offer a gateway to the decentralized web for users on any platform (PC, mobile, tablet) without requiring them to install any software on their device."),(0,o.yg)("li",{parentName:"ul"},"Manage a public-facing service with custom configurations.")),(0,o.yg)("p",null,"For detailed instructions, see ",(0,o.yg)("a",{parentName:"p",href:"./setup-public-instance"},"Becoming a Provider"),"."))}p.isMDXComponent=!0}}]);