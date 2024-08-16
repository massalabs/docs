"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[1125],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>h});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=i(r),y=o,h=d["".concat(u,".").concat(y)]||d[y]||p[y]||a;return r?n.createElement(h,c(c({ref:t},l),{},{components:r})):n.createElement(h,c({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=y;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(8168),o=(r(6540),r(5680));const a={id:"check_status",sidebar_label:"Check your node's status"},c="Check your node's status",s={unversionedId:"node/check_status",id:"node/check_status",title:"Check your node's status",description:"Check your routability status",source:"@site/docs/node/check_status.mdx",sourceDirName:"node",slug:"/node/check_status",permalink:"/docs/node/check_status",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/node/check_status.mdx",tags:[],version:"current",lastUpdatedBy:"BenRey",lastUpdatedAt:1723798300,formattedLastUpdatedAt:"Aug 16, 2024",frontMatter:{id:"check_status",sidebar_label:"Check your node's status"},sidebar:"nodeSidebar",previous:{title:"Staking",permalink:"/docs/node/stake"},next:{title:"Node and client configuration",permalink:"/docs/node/all-configs"}},u={},i=[{value:"Check your routability status",id:"check-your-routability-status",level:2},{value:"Make sure you are connected to peers",id:"make-sure-you-are-connected-to-peers",level:2}],l={toc:i},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"check-your-nodes-status"},"Check your node's status"),(0,o.yg)("h2",{id:"check-your-routability-status"},"Check your routability status"),(0,o.yg)("p",null,"You can use a service such as ",(0,o.yg)("a",{parentName:"p",href:"https://portchecker.co"},"https://portchecker.co")," to check that the ports 31244 and 31245 are both opened for your public IP address."),(0,o.yg)("p",null,"Additionally, in your massa-client, you can check that the ",(0,o.yg)("inlineCode",{parentName:"p"},"get_status")," command shows your ",(0,o.yg)("inlineCode",{parentName:"p"},"Node's IP: <your_public_ip_address>"),".\nIf it shows ",(0,o.yg)("inlineCode",{parentName:"p"},"No routable IP set")," instead, please check again your configuration."),(0,o.yg)("h2",{id:"make-sure-you-are-connected-to-peers"},"Make sure you are connected to peers"),(0,o.yg)("p",null,"In order for your node to be running properly, you have to make sure you are connected to other peers on the network."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"get_status")," command will show you which nodes you are connected too.\nYou need to have both IN and OUT connections."))}p.isMDXComponent=!0}}]);