"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[8061],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,g=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5307:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={id:"transaction-management",title:"Transaction Management"},o=void 0,s={unversionedId:"massaStation/massa-wallet/transaction-management",id:"massaStation/massa-wallet/transaction-management",title:"Transaction Management",description:"Sending Funds",source:"@site/docs/massaStation/massa-wallet/transaction-management.mdx",sourceDirName:"massaStation/massa-wallet",slug:"/massaStation/massa-wallet/transaction-management",permalink:"/docs/massaStation/massa-wallet/transaction-management",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/massaStation/massa-wallet/transaction-management.mdx",tags:[],version:"current",lastUpdatedBy:"SlnPons",lastUpdatedAt:1742834554,formattedLastUpdatedAt:"Mar 24, 2025",frontMatter:{id:"transaction-management",title:"Transaction Management"},sidebar:"massaStationSidebar",previous:{title:"Account Creation",permalink:"/docs/massaStation/massa-wallet/account-creation"},next:{title:"Asset Monitoring and History",permalink:"/docs/massaStation/massa-wallet/asset-monitoring-and-history"}},l={},c=[{value:"Sending Funds",id:"sending-funds",level:2},{value:"Receiving Funds",id:"receiving-funds",level:2}],m={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sending-funds"},"Sending Funds"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("em",{parentName:"p"},"Massa Wallet")," module.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Access to your wallet.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Send")," button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Chose the asset you want to send."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Send",src:a(1002).Z,width:"3360",height:"1818"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the recipient's address and the amount to send."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Send",src:a(4006).Z,width:"3360",height:"1826"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm the transaction."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Confirm",src:a(6906).Z,width:"3360",height:"1826"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A popup will appear asking you to sign the transaction."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Confirm",src:a(316).Z,width:"880",height:"1502"})))),(0,r.kt)("h2",{id:"receiving-funds"},"Receiving Funds"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From your wallet dashboard, click on the \u2018",(0,r.kt)("strong",{parentName:"p"},"Receive"),"\u2019 button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the address or generate a link:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To copy the address, click on the button at the right of your account address."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Receive",src:a(594).Z,width:"2000",height:"992"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To generate a link, click on the \u2018",(0,r.kt)("strong",{parentName:"p"},"Generate link"),"\u2019 button and select the asset you want to receive."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Receive",src:a(917).Z,width:"3360",height:"1814"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the amount you want to receive. Once done, click on the \u2018",(0,r.kt)("strong",{parentName:"p"},"Generate link\u2019")," button and copy the link using the button on the right of the link."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Generate Link",src:a(9853).Z,width:"3360",height:"1826"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Share")," the address or the link with the person who wants to send you funds."))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The generated link only works if ",(0,r.kt)("em",{parentName:"p"},"Massa Station")," is installed and running on the computer of the person who wants to send you funds.")))}d.isMDXComponent=!0},917:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/transaction-management-link-select-57498bffc7f83743e3665009ddababb2.png"},1002:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/transaction-management-send-select-3b481e2775dbf77eacdd3a283d6cc0e5.png"},316:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/transaction-management-sign-85d80329cc389ba4c3942e2b6b823320.png"},594:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/transaction-management_receive-ec1b146a03c3d15197942c4ec44278a1.png"},9853:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/transaction-management_receive_to_pay-f08b6e79356a98c3050baa0807cbba31.png"},4006:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/transaction-management_send-529df8e183d9388494d0e5af7142ab35.png"},6906:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/transaction-management_send_confirm-5d39e735ba78bb99826ee69a35599f58.png"}}]);