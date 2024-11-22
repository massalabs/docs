"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),f=o,m=c["".concat(s,".").concat(f)]||c[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={id:"update",sidebar_label:"Updating a node"},i="Updating a node",l={unversionedId:"node/update",id:"node/update",title:"Updating a node",description:"Update process",source:"@site/docs/node/update.mdx",sourceDirName:"node",slug:"/node/update",permalink:"/docs/node/update",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/node/update.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1732269624,formattedLastUpdatedAt:"Nov 22, 2024",frontMatter:{id:"update",sidebar_label:"Updating a node"},sidebar:"nodeSidebar",previous:{title:"Node and client configuration",permalink:"/docs/node/all-configs"},next:{title:"Frequently Asked Questions",permalink:"/docs/node/faq"}},s={},d=[{value:"Update process",id:"update-process",level:2},{value:"Updating the git repository (if installed from sources)",id:"updating-the-git-repository-if-installed-from-sources",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"updating-a-node"},"Updating a node"),(0,o.kt)("h2",{id:"update-process"},"Update process"),(0,o.kt)("p",null,"The exact update procedure depends on how you previously installed your node."),(0,o.kt)("p",null,"The basic process goes as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stop your previous node, as running 2 nodes with the same keys will lead to loss of coins"),(0,o.kt)("li",{parentName:"ul"},"Backup your node wallet folders (",(0,o.kt)("inlineCode",{parentName:"li"},"massa-node/staking_wallets")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"massa-client/wallets"),")"),(0,o.kt)("li",{parentName:"ul"},"If needed, backup you custom config files (",(0,o.kt)("inlineCode",{parentName:"li"},"massa-node/config/config.toml")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"massa-client/config/config.toml"),")"),(0,o.kt)("li",{parentName:"ul"},"Install your new node by following the ",(0,o.kt)("a",{parentName:"li",href:"/docs/node/install"},"documentation"),"."),(0,o.kt)("li",{parentName:"ul"},"Restore your wallet folders to their respective location"),(0,o.kt)("li",{parentName:"ul"},"If needed, restore your custom configuration")),(0,o.kt)("p",null,"If, during the process, you missed enough block production, your rolls may be automatically sold.\nIf that is the case, wait for the coins to get reimbursed automatically (taking ~3 hours), and buy your rolls again."),(0,o.kt)("h2",{id:"updating-the-git-repository-if-installed-from-sources"},"Updating the git repository (if installed from sources)"),(0,o.kt)("p",null,"If you installed from sources, you can either re-clone the repo, or you can update your existing repo to the latest release."),(0,o.kt)("p",null,"In order to update to the latest release, launch a terminal in your current repository, and then run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git fetch\ngit checkout MAIN.2.4\n")))}p.isMDXComponent=!0}}]);