"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[9980],{5680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>y});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,y=c["".concat(o,".").concat(u)]||c[u]||g[u]||s;return a?n.createElement(y,i(i({ref:t},m),{},{components:a})):n.createElement(y,i({ref:t},m))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},40:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(8168),r=(a(6540),a(5680));const s={id:"getting-started",title:"Getting Started with Massa Wallet",sidebar_label:"Getting Started"},i=void 0,l={unversionedId:"massaStation/massa-wallet/getting-started",id:"massaStation/massa-wallet/getting-started",title:"Getting Started with Massa Wallet",description:"Massa Wallet",source:"@site/docs/massaStation/massa-wallet/getting-started.mdx",sourceDirName:"massaStation/massa-wallet",slug:"/massaStation/massa-wallet/getting-started",permalink:"/docs/massaStation/massa-wallet/getting-started",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/massaStation/massa-wallet/getting-started.mdx",tags:[],version:"current",lastUpdatedBy:"BenRey",lastUpdatedAt:1724067773,formattedLastUpdatedAt:"Aug 19, 2024",frontMatter:{id:"getting-started",title:"Getting Started with Massa Wallet",sidebar_label:"Getting Started"},sidebar:"massaStationSidebar",previous:{title:"Modules",permalink:"/docs/massaStation/modules"},next:{title:"Account Creation",permalink:"/docs/massaStation/massa-wallet/account-creation"}},o={},p=[{value:"Massa Wallet",id:"massa-wallet",level:2},{value:"Installation",id:"installation",level:3}],m={toc:p},c="wrapper";function g(e){let{components:t,...s}=e;return(0,r.yg)(c,(0,n.A)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"massa-wallet"},"Massa Wallet"),(0,r.yg)("p",null,"The  ",(0,r.yg)("em",{parentName:"p"},"Massa Wallet")," module enhances ",(0,r.yg)("em",{parentName:"p"},"Massa Station")," by adding wallet-related functionalities, such as account management (creation, transfer, balance checking),\nand private key management (signing transactions, generating random messages)."),(0,r.yg)("h3",{id:"installation"},"Installation"),(0,r.yg)("p",null,"To install the  ",(0,r.yg)("em",{parentName:"p"},"Massa Wallet")," module, follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"If ",(0,r.yg)("em",{parentName:"li"},"Massa Station")," is not running, start it:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"On ",(0,r.yg)("strong",{parentName:"li"},"Windows"),", you can find ",(0,r.yg)("em",{parentName:"li"},"Massa Station")," in your ",(0,r.yg)("strong",{parentName:"li"},"Start Menu")," and on your ",(0,r.yg)("strong",{parentName:"li"},"Desktop"),"."),(0,r.yg)("li",{parentName:"ul"},"On ",(0,r.yg)("strong",{parentName:"li"},"MacOS"),", you can find ",(0,r.yg)("em",{parentName:"li"},"Massa Station")," in ",(0,r.yg)("strong",{parentName:"li"},"LaunchPad")," or in the \u2018",(0,r.yg)("strong",{parentName:"li"},"Applications"),"\u2019 directory in ",(0,r.yg)("strong",{parentName:"li"},"Finder"),"."),(0,r.yg)("li",{parentName:"ul"},"On ",(0,r.yg)("strong",{parentName:"li"},"Linux"),", you can find ",(0,r.yg)("em",{parentName:"li"},"Massa Station")," in your ",(0,r.yg)("strong",{parentName:"li"},"Applications")," menu.")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Open ",(0,r.yg)("em",{parentName:"li"},"Massa Station")," in your web browser. You can do it either by:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Clicking on the ",(0,r.yg)("em",{parentName:"li"},"Massa Station")," icon in the system tray and then clicking on ",(0,r.yg)("strong",{parentName:"li"},"Open Massa Station"),"."),(0,r.yg)("li",{parentName:"ul"},"Opening ",(0,r.yg)("a",{parentName:"li",href:"https://station.massa/"},"https://station.massa/")," in your web browser.")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the  ",(0,r.yg)("em",{parentName:"p"},"Massa Wallet")," section, click on the \u2018",(0,r.yg)("strong",{parentName:"p"},"Install"),"\u2019 button."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"Install Massa Wallet",src:a(4896).A,width:"1910",height:"941"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Once the installation is complete, click on the \u2018",(0,r.yg)("strong",{parentName:"p"},"Launch"),"\u2019 button to access the  ",(0,r.yg)("em",{parentName:"p"},"Massa Wallet")," module."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"Launch Massa Wallet",src:a(212).A,width:"2000",height:"983"})))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If you are unable or do not wish to install a thick client, you can always use one of our ",(0,r.yg)("a",{parentName:"p",href:"/docs/build/wallet/community-wallets"},"community browser extensions"),".\nHowever, by doing so, you will limit your access to the full potential of this super app.")))}g.isMDXComponent=!0},4896:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/getting-started_install-dd85c957c1546365e73dca8ae7b267cd.png"},212:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/getting-started_launch-e06387e236e6ae4ebe48373f4e46aba6.png"}}]);