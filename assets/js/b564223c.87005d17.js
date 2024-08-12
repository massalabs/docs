"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[4839],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,s=t.originalType,o=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(a),d=r,g=m["".concat(o,".").concat(d)]||m[d]||u[d]||s;return a?n.createElement(g,i(i({ref:e},c),{},{components:a})):n.createElement(g,i({ref:e},c))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=a.length,i=new Array(s);i[0]=d;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[m]="string"==typeof t?t:r,i[1]=l;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7448:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={id:"getting-started",title:"Getting Started with Massa Wallet",sidebar_label:"Getting Started"},i=void 0,l={unversionedId:"massaStation/massa-wallet/getting-started",id:"massaStation/massa-wallet/getting-started",title:"Getting Started with Massa Wallet",description:"Massa Wallet",source:"@site/docs/massaStation/massa-wallet/getting-started.mdx",sourceDirName:"massaStation/massa-wallet",slug:"/massaStation/massa-wallet/getting-started",permalink:"/docs/massaStation/massa-wallet/getting-started",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/massaStation/massa-wallet/getting-started.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1723458370,formattedLastUpdatedAt:"Aug 12, 2024",frontMatter:{id:"getting-started",title:"Getting Started with Massa Wallet",sidebar_label:"Getting Started"},sidebar:"massaStationSidebar",previous:{title:"Modules",permalink:"/docs/massaStation/modules"},next:{title:"Account Creation",permalink:"/docs/massaStation/massa-wallet/account-creation"}},o={},p=[{value:"Massa Wallet",id:"massa-wallet",level:2},{value:"Installation",id:"installation",level:3}],c={toc:p},m="wrapper";function u(t){let{components:e,...s}=t;return(0,r.kt)(m,(0,n.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"massa-wallet"},"Massa Wallet"),(0,r.kt)("p",null,"The  ",(0,r.kt)("em",{parentName:"p"},"Massa Wallet")," module enhances ",(0,r.kt)("em",{parentName:"p"},"Massa Station")," by adding wallet-related functionalities, such as account management (creation, transfer, balance checking),\nand private key management (signing transactions, generating random messages)."),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To install the  ",(0,r.kt)("em",{parentName:"p"},"Massa Wallet")," module, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If ",(0,r.kt)("em",{parentName:"li"},"Massa Station")," is not running, start it:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On ",(0,r.kt)("strong",{parentName:"li"},"Windows"),", you can find ",(0,r.kt)("em",{parentName:"li"},"Massa Station")," in your ",(0,r.kt)("strong",{parentName:"li"},"Start Menu")," and on your ",(0,r.kt)("strong",{parentName:"li"},"Desktop"),"."),(0,r.kt)("li",{parentName:"ul"},"On ",(0,r.kt)("strong",{parentName:"li"},"MacOS"),", you can find ",(0,r.kt)("em",{parentName:"li"},"Massa Station")," in ",(0,r.kt)("strong",{parentName:"li"},"LaunchPad")," or in the \u2018",(0,r.kt)("strong",{parentName:"li"},"Applications"),"\u2019 directory in ",(0,r.kt)("strong",{parentName:"li"},"Finder"),"."),(0,r.kt)("li",{parentName:"ul"},"On ",(0,r.kt)("strong",{parentName:"li"},"Linux"),", you can find ",(0,r.kt)("em",{parentName:"li"},"Massa Station")," in your ",(0,r.kt)("strong",{parentName:"li"},"Applications")," menu.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("em",{parentName:"li"},"Massa Station")," in your web browser. You can do it either by:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clicking on the ",(0,r.kt)("em",{parentName:"li"},"Massa Station")," icon in the system tray and then clicking on ",(0,r.kt)("strong",{parentName:"li"},"Open Massa Station"),"."),(0,r.kt)("li",{parentName:"ul"},"Opening ",(0,r.kt)("a",{parentName:"li",href:"https://station.massa/"},"https://station.massa/")," in your web browser.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the  ",(0,r.kt)("em",{parentName:"p"},"Massa Wallet")," section, click on the \u2018",(0,r.kt)("strong",{parentName:"p"},"Install"),"\u2019 button."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Install Massa Wallet",src:a(1564).Z,width:"1910",height:"941"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the installation is complete, click on the \u2018",(0,r.kt)("strong",{parentName:"p"},"Launch"),"\u2019 button to access the  ",(0,r.kt)("em",{parentName:"p"},"Massa Wallet")," module."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Launch Massa Wallet",src:a(2735).Z,width:"2000",height:"983"})))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are unable or do not wish to install a thick client, you can always use one of our ",(0,r.kt)("a",{parentName:"p",href:"/docs/build/wallet/community-wallets"},"community browser extensions"),".\nHowever, by doing so, you will limit your access to the full potential of this super app.")))}u.isMDXComponent=!0},1564:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/getting-started_install-dd85c957c1546365e73dca8ae7b267cd.png"},2735:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/getting-started_launch-e06387e236e6ae4ebe48373f4e46aba6.png"}}]);