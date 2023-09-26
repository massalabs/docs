"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[6676],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=n.createContext({}),c=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,m=p["".concat(r,".").concat(h)]||p[h]||d[h]||l;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=h;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3305:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const l={id:"massa-wallet",title:"Massa Wallet"},i="Massa Wallet",s={unversionedId:"build/wallet/massa-wallet",id:"build/wallet/massa-wallet",title:"Massa Wallet",description:"Massa Wallet is a plugin for Massa Station that allows you to",source:"@site/docs/build/wallet/massa-station.mdx",sourceDirName:"build/wallet",slug:"/build/wallet/massa-wallet",permalink:"/docs/build/wallet/massa-wallet",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/build/wallet/massa-station.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1695716113,formattedLastUpdatedAt:"Sep 26, 2023",frontMatter:{id:"massa-wallet",title:"Massa Wallet"},sidebar:"buildSidebar",previous:{title:"Introduction",permalink:"/docs/build/wallet/intro"},next:{title:"Wallet Provider",permalink:"/docs/build/wallet/wallet-provider"}},r={},c=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Installing Massa Wallet",id:"installing-massa-wallet",level:2},{value:"Using Massa Wallet",id:"using-massa-wallet",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"massa-wallet"},"Massa Wallet"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/massalabs/station-massa-wallet"},"Massa Wallet")," is a plugin for Massa Station that allows you to\nstore your assets and interact with decentralized applications."),(0,o.kt)("p",null,"Massa wallet can be installed from the Massa Station plugin store."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"One feature of the Massa blockchain the Decentralized Web. Web applications can be hosted directly on the Massa blockchain. Massa Station is a the gateway to these applications. Once installed, Massa station will allow your browser to resolve ",(0,o.kt)("inlineCode",{parentName:"p"},".massa")," urls and interact with these on-chain apps. When using Massa Station, the ",(0,o.kt)("inlineCode",{parentName:"p"},".massa")," extension indicates that you are visiting a website that is hosted on the Massa blockchain, and directly served to you without intermediaries. You can learn more about the Decentralized Web and Massa Station ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/decentralized-web"},"here"),". ")),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"In order to install Massa Wallet, you will need to have Massa Station installed on your machine. To do so, go to the ",(0,o.kt)("a",{parentName:"p",href:"https://station.massa.net/"},"official Massa Station website")," and download the latest version of the Massa Station installer for your operating system. Once you have downloaded the installer, just click on it and let it guide you through the installation process. Once the installation is complete, you can proceed to the next step."),(0,o.kt)("h2",{id:"installing-massa-wallet"},"Installing Massa Wallet"),(0,o.kt)("p",null,"Once you have Massa Station installed on your machine, you can install Massa Wallet by following these steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Launch Massa Station, either from your desktop, system launchpad, or applications menu."),(0,o.kt)("li",{parentName:"ol"},"In the icon tray, select Massa Station and click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Open Massa Station")," button. This will open Massa Station in your default browser."),(0,o.kt)("li",{parentName:"ol"},"On the landing page, you should see a panel that says that Massa Station is not installed in your station and suggests you install it. Click on this ",(0,o.kt)("inlineCode",{parentName:"li"},"Install")," button. Alternatively, if you don't see this panel, you can click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Explore module store")," button. Once on the store, search for Massa Wallet and click on the download icon. Navigate back to the landing page and you should see the Massa Wallet panel."),(0,o.kt)("li",{parentName:"ol"},"Once it is installed, click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Launch")," button, this should open Massa Wallet welcome page. "),(0,o.kt)("li",{parentName:"ol"},"Once you are on Massa Wallet welcome page, you can either create a new wallet or import an existing one. If you are new to Massa, you can create a new wallet by clicking on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Create an account")," button. If you already have a wallet, you can import it by clicking on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Import an existing account")," button. ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"If you are creating a new wallet"),", click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"create an account")," button. You will need to provide a name for your account. Once this is done you'll be prompted to create a password to encrypt your wallet. Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Define a password")," button and set up your password. Once you have done so, you will be prompted to back up your wallet. This step is optional but is highly recommended in case your machine is damaged or lost. This can be done either by downloading a ",(0,o.kt)("inlineCode",{parentName:"p"},".yml")," file or by writing down your private key pair. Whatever method you chose keep in mind that anyone that can access this ",(0,o.kt)("inlineCode",{parentName:"p"},".yml")," or private key can take control of your wallet, so these must be safely stored.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"If you are importing a wallet"),", you can either do it by providing your ",(0,o.kt)("inlineCode",{parentName:"p"},".yml")," wallet file or by providing your private key. Whatever method you chose, you will then have to provide a name for your account and a password to encrypt your wallet. "))),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Congrats, you are now ready to use Massa Wallet !!!")),(0,o.kt)("h2",{id:"using-massa-wallet"},"Using Massa Wallet"),(0,o.kt)("p",null,"Once you have installed Massa Wallet, you can use it to store your assets and interact with decentralized applications. To do so, you can either use the Massa Wallet web interface or the Massa Wallet API.\nOn the select account page, you should see the account that you have created and your current balance. You can click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Send")," button to send Massa to another account or click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Receive")," button to receive Massa from another account."))}d.isMDXComponent=!0}}]);