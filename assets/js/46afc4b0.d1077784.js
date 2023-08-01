"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[4473],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7792:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={id:"wallet",sidebar_label:"Creating a wallet"},o="Creating a Massa wallet",s={unversionedId:"node/wallet",id:"node/wallet",title:"Creating a Massa wallet",description:"In this tutorial you will learn how to create a Massa wallet.",source:"@site/docs/node/wallet.mdx",sourceDirName:"node",slug:"/node/wallet",permalink:"/docs/node/wallet",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/node/wallet.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1690889756,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{id:"wallet",sidebar_label:"Creating a wallet"},sidebar:"nodeSidebar",previous:{title:"Updating a node",permalink:"/docs/node/update"},next:{title:"Staking",permalink:"/docs/node/stake"}},i={},c=[{value:"From the command line interface",id:"from-the-command-line-interface",level:2},{value:"If your client is not running",id:"if-your-client-is-not-running",level:3},{value:"If your client is running",id:"if-your-client-is-running",level:3},{value:"From the graphical interface",id:"from-the-graphical-interface",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-massa-wallet"},"Creating a Massa wallet"),(0,r.kt)("p",null,"In this tutorial you will learn how to create a Massa wallet."),(0,r.kt)("p",null,"A wallet is a file that contains a list of keypairs. Like other blockchains, Massa uses elliptic curve cryptography\n(specifically ed25519) to secure your coins. It means that your secret key is your password allowing you to spend coins\nthat were sent to your address."),(0,r.kt)("h2",{id:"from-the-command-line-interface"},"From the command line interface"),(0,r.kt)("h3",{id:"if-your-client-is-not-running"},"If your client is not running"),(0,r.kt)("p",null,"Go to the client folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd massa/massa-client/\n")),(0,r.kt)("p",null,"Start the interactive client and load a wallet file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cargo run\n")),(0,r.kt)("p",null,"It will ask your wallet password in order to load the ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.dat")," file. If the file does not exist, you will be asked\nto set a password and it will be created."),(0,r.kt)("h3",{id:"if-your-client-is-running"},"If your client is running"),(0,r.kt)("p",null,"Now you can either generate a new keypair (and associated address):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_generate_secret_key\n")),(0,r.kt)("p",null,"Or, if you already have one from a previous wallet, you can add manually an existing keypair:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_add_secret_keys <SecretKey>\n")),(0,r.kt)("p",null,"The list of addresses of your wallet can be accessed with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_info\n")),(0,r.kt)("p",null,"Access public key(s) of addresse(s):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_get_public_key <Address1> <Address2>\n")),(0,r.kt)("p",null,"Access secret key(s) of addresse(s):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_get_secret_key <Address1> <Address2>\n")),(0,r.kt)("h2",{id:"from-the-graphical-interface"},"From the graphical interface"),(0,r.kt)("p",null,"If you don't plan to stake or use the command-line client, you can also create a wallet on the web interface: head to\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://test.massa.net/"},"explorer"),", in the wallet tab."),(0,r.kt)("p",null,"Click ",(0,r.kt)("em",{parentName:"p"},"Generate secret key")," then ",(0,r.kt)("em",{parentName:"p"},"Add"),"."),(0,r.kt)("p",null,"This generates a new random keypair from your computer randomness which stays on your side, and is never transferred\noutside of your computer."),(0,r.kt)("p",null,"Now you can add more addresses or see the list of your addresses with their associated thread and balance."))}p.isMDXComponent=!0}}]);