"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[4473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),y=r,f=u["".concat(s,".").concat(y)]||u[y]||p[y]||l;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={id:"wallet",sidebar_label:"Creating a wallet"},o="Creating a Massa wallet",i={unversionedId:"node/wallet",id:"node/wallet",title:"Creating a Massa wallet",description:"In this tutorial you will learn how to create or import a Massa wallet.",source:"@site/docs/node/wallet.mdx",sourceDirName:"node",slug:"/node/wallet",permalink:"/docs/node/wallet",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/node/wallet.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1721232286,formattedLastUpdatedAt:"Jul 17, 2024",frontMatter:{id:"wallet",sidebar_label:"Creating a wallet"},sidebar:"nodeSidebar",previous:{title:"Running a node",permalink:"/docs/node/run"},next:{title:"Staking",permalink:"/docs/node/stake"}},s={},c=[{value:"From the command line interface",id:"from-the-command-line-interface",level:2},{value:"If your client is not running",id:"if-your-client-is-not-running",level:3},{value:"If your client is running",id:"if-your-client-is-running",level:3},{value:"If you have saved your secret/private key",id:"if-you-have-saved-your-secretprivate-key",level:2},{value:"If you have saved an encrypted wallet file",id:"if-you-have-saved-an-encrypted-wallet-file",level:2},{value:"What next ?",id:"what-next-",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-massa-wallet"},"Creating a Massa wallet"),(0,r.kt)("p",null,"In this tutorial you will learn how to create or import a Massa wallet."),(0,r.kt)("p",null,"A wallet is a file that contains a list of keypairs. Like other blockchains, Massa uses elliptic curve cryptography\n(specifically ed25519) to secure your coins. It means that your secret key is your password allowing you to spend coins\nthat were sent to your address."),(0,r.kt)("h2",{id:"from-the-command-line-interface"},"From the command line interface"),(0,r.kt)("h3",{id:"if-your-client-is-not-running"},"If your client is not running"),(0,r.kt)("p",null,"Go to the client folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd massa/massa-client/\n")),(0,r.kt)("p",null,"Start the interactive client and load a wallet file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cargo run\n")),(0,r.kt)("p",null,"It will ask your wallet password in order to load the ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.dat")," file. If the file does not exist, you will be asked\nto set a password and it will be created."),(0,r.kt)("h3",{id:"if-your-client-is-running"},"If your client is running"),(0,r.kt)("p",null,"Now you can either generate a new keypair (and associated address):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_generate_secret_key\n")),(0,r.kt)("p",null,"The list of addresses of your wallet can be accessed with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_info\n")),(0,r.kt)("p",null,"Access public key(s) of addresse(s):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_get_public_key <Address1> <Address2>\n")),(0,r.kt)("p",null,"Access secret key(s) of addresse(s):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_get_secret_key <Address1> <Address2>\n")),(0,r.kt)("h1",{id:"importing-your-wallet-in-the-client"},"Importing your wallet in the client"),(0,r.kt)("p",null,"In order to import a wallet into your client, the procedure depends on how you have saved your wallet in the first place."),(0,r.kt)("h2",{id:"if-you-have-saved-your-secretprivate-key"},"If you have saved your secret/private key"),(0,r.kt)("p",null,"Then you can import it in the client using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_add_secret_keys <your_secret_key>\n")),(0,r.kt)("h2",{id:"if-you-have-saved-an-encrypted-wallet-file"},"If you have saved an encrypted wallet file"),(0,r.kt)("p",null,"Then you can import it in the client by placing the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},".yaml")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"massa/massa-client/wallets")," folder.\nMake sure it is the only wallet in the folder."),(0,r.kt)("h2",{id:"what-next-"},"What next ?"),(0,r.kt)("p",null,"Congratulations, you are now running a node and have access to a wallet.\nBut your node is still not staking, so it is not producing blocks nor receiving rewards."),(0,r.kt)("p",null,"It is time to activate staking on your node. Follow the tutorial: ",(0,r.kt)("a",{parentName:"p",href:"/docs/node/stake"},"Staking with a node"),"."))}p.isMDXComponent=!0}}]);