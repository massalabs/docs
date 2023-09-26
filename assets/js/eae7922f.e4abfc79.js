"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[8061],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,g=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={id:"transaction-management",title:"Transaction Management"},i=void 0,s={unversionedId:"massaStation/massa-wallet/transaction-management",id:"massaStation/massa-wallet/transaction-management",title:"Transaction Management",description:"Sending Funds",source:"@site/docs/massaStation/massa-wallet/transaction-management.mdx",sourceDirName:"massaStation/massa-wallet",slug:"/massaStation/massa-wallet/transaction-management",permalink:"/docs/massaStation/massa-wallet/transaction-management",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/massaStation/massa-wallet/transaction-management.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1695716113,formattedLastUpdatedAt:"Sep 26, 2023",frontMatter:{id:"transaction-management",title:"Transaction Management"},sidebar:"massaStationSidebar",previous:{title:"Account Creation",permalink:"/docs/massaStation/massa-wallet/account-creation"},next:{title:"Asset Monitoring and History",permalink:"/docs/massaStation/massa-wallet/asset-monitoring-and-history"}},l={},c=[{value:"Sending Funds",id:"sending-funds",level:2},{value:"Receiving Funds",id:"receiving-funds",level:2}],m={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sending-funds"},"Sending Funds"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("em",{parentName:"p"},"Massa Wallet")," module.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Access to your wallet.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Send")," button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the recipient's address and the amount to send."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Send",src:n(4006).Z,width:"2000",height:"985"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm the transaction."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Confirm",src:n(6906).Z,width:"2000",height:"989"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A popup will appear asking you to sign the transaction."))),(0,r.kt)("h2",{id:"receiving-funds"},"Receiving Funds"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From your wallet dashboard, click on the \u2018",(0,r.kt)("strong",{parentName:"li"},"Receive"),"\u2019 button."),(0,r.kt)("li",{parentName:"ol"},"Copy the address or generate a link:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To copy the address, click on the button at the right of your account address."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Receive",src:n(594).Z,width:"2000",height:"992"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To generate a link, click on the \u2018",(0,r.kt)("strong",{parentName:"p"},"Generate link"),"\u2019 button and select the amount you want to receive. Once done, click on the \u2018",(0,r.kt)("strong",{parentName:"p"},"Generate link\u2019")," button and copy the link using the button on the right of the link."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Generate Link",src:n(9853).Z,width:"2000",height:"1327"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Share")," the address or the link with the person who wants to send you funds.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The generated link only works if ",(0,r.kt)("em",{parentName:"p"},"Massa Station")," is installed and running on the computer of the person who wants to send you funds.")))}d.isMDXComponent=!0},594:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transaction-management_receive-ec1b146a03c3d15197942c4ec44278a1.png"},9853:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transaction-management_receive_to_pay-1b416cad01bbefdde7e3d70390f3b0cd.png"},4006:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transaction-management_send-d14e09f2db2f63d114bc00d33800714b.png"},6906:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transaction-management_send_confirm-d9b6bcee32548cd007d1a42e147c15f7.png"}}]);