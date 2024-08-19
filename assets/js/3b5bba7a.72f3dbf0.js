"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[2806],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),y=o,g=c["".concat(s,".").concat(y)]||c[y]||p[y]||a;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(8168),o=(n(6540),n(5680));const a={id:"update",sidebar_label:"Updating a node"},l="Updating a node",i={unversionedId:"node/update",id:"node/update",title:"Updating a node",description:"Update process",source:"@site/docs/node/update.mdx",sourceDirName:"node",slug:"/node/update",permalink:"/docs/node/update",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/node/update.mdx",tags:[],version:"current",lastUpdatedBy:"BenRey",lastUpdatedAt:1724067773,formattedLastUpdatedAt:"Aug 19, 2024",frontMatter:{id:"update",sidebar_label:"Updating a node"},sidebar:"nodeSidebar",previous:{title:"Node and client configuration",permalink:"/docs/node/all-configs"},next:{title:"Frequently Asked Questions",permalink:"/docs/node/faq"}},s={},d=[{value:"Update process",id:"update-process",level:2},{value:"Updating the git repository (if installed from sources)",id:"updating-the-git-repository-if-installed-from-sources",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"updating-a-node"},"Updating a node"),(0,o.yg)("h2",{id:"update-process"},"Update process"),(0,o.yg)("p",null,"The exact update procedure depends on how you previously installed your node."),(0,o.yg)("p",null,"The basic process goes as follows:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Stop your previous node, as running 2 nodes with the same keys will lead to loss of coins"),(0,o.yg)("li",{parentName:"ul"},"Backup your node wallet folders (",(0,o.yg)("inlineCode",{parentName:"li"},"massa-node/staking_wallets")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"massa-client/wallets"),")"),(0,o.yg)("li",{parentName:"ul"},"If needed, backup you custom config files (",(0,o.yg)("inlineCode",{parentName:"li"},"massa-node/config/config.toml")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"massa-client/config/config.toml"),")"),(0,o.yg)("li",{parentName:"ul"},"Install your new node by following the ",(0,o.yg)("a",{parentName:"li",href:"/docs/node/install"},"documentation"),"."),(0,o.yg)("li",{parentName:"ul"},"Restore your wallet folders to their respective location"),(0,o.yg)("li",{parentName:"ul"},"If needed, restore your custom configuration")),(0,o.yg)("p",null,"If, during the process, you missed enough block production, your rolls may be automatically sold.\nIf that is the case, wait for the coins to get reimbursed automatically (taking ~3 hours), and buy your rolls again."),(0,o.yg)("h2",{id:"updating-the-git-repository-if-installed-from-sources"},"Updating the git repository (if installed from sources)"),(0,o.yg)("p",null,"If you installed from sources, you can either re-clone the repo, or you can update your existing repo to the latest release."),(0,o.yg)("p",null,"In order to update to the latest release, launch a terminal in your current repository, and then run the following commands:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"git fetch\ngit checkout MAIN.2.3\n")))}p.isMDXComponent=!0}}]);