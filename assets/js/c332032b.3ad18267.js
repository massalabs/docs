"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[3747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:l,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const o={id:"run",sidebar_label:"Running a node"},r="Running a node",s={unversionedId:"node/run",id:"node/run",title:"Running a node",description:"This document explains how to run a node.",source:"@site/docs/node/run.mdx",sourceDirName:"node",slug:"/node/run",permalink:"/docs/node/run",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/node/run.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin-Massa",lastUpdatedAt:1743676062,formattedLastUpdatedAt:"Apr 3, 2025",frontMatter:{id:"run",sidebar_label:"Running a node"},sidebar:"nodeSidebar",previous:{title:"Routability",permalink:"/docs/node/routability"},next:{title:"Creating a wallet",permalink:"/docs/node/wallet"}},i={},u=[{value:"If your node was installed from binaries (simple installation)",id:"if-your-node-was-installed-from-binaries-simple-installation",level:2},{value:"On Ubuntu / MacOS",id:"on-ubuntu--macos",level:3},{value:"If your node was installed from source code (advanced installation)",id:"if-your-node-was-installed-from-source-code-advanced-installation",level:2},{value:"On Ubuntu / MacOS",id:"on-ubuntu--macos-1",level:3},{value:"On Windows",id:"on-windows",level:3},{value:"What next ?",id:"what-next-",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"running-a-node"},"Running a node"),(0,l.kt)("p",null,"This document explains how to run a node."),(0,l.kt)("p",null,"This assumes that you have installed the node software.\nIf not, please follow the ",(0,l.kt)("a",{parentName:"p",href:"/docs/node/install"},"installation instructions"),"."),(0,l.kt)("h2",{id:"if-your-node-was-installed-from-binaries-simple-installation"},"If your node was installed from binaries (simple installation)"),(0,l.kt)("p",null,"Simply run the binaries you downloaded in the previous step:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open the massa-node folder and run the massa-node executable"),(0,l.kt)("li",{parentName:"ul"},"Open the massa-client folder and run the massa-client executable")),(0,l.kt)("h3",{id:"on-ubuntu--macos"},"On Ubuntu / MacOS"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Configure the node")),(0,l.kt)("p",null,"Default configuration is available ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa/blob/main/massa-node/base_config/config.toml"},"here"),"."),(0,l.kt)("p",null,"You can override the default configuration via massa-node/config/config.toml file."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Start the node")),(0,l.kt)("p",null,"In a first window:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd massa/massa-node/\n")),(0,l.kt)("p",null,"Launch the node, on Ubuntu:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./massa-node -p <PASSWORD> |& tee logs.txt\n")),(0,l.kt)("p",null,"Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password that you will need to keep to restart your node. You should leave the window open."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Start the client")),(0,l.kt)("p",null,"In a second window:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd massa/massa-client/\n")),(0,l.kt)("p",null,"Then:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./massa-client -p <PASSWORD>\n")),(0,l.kt)("p",null,"Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password that you will need to keep to restart your client"),(0,l.kt)("h2",{id:"if-your-node-was-installed-from-source-code-advanced-installation"},"If your node was installed from source code (advanced installation)"),(0,l.kt)("h3",{id:"on-ubuntu--macos-1"},"On Ubuntu / MacOS"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Start the node")),(0,l.kt)("p",null,"In a first window:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd massa/massa-node/\n")),(0,l.kt)("p",null,"Launch the node, on Ubuntu:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"RUST_BACKTRACE=full cargo run --release -- -p <PASSWORD> |& tee logs.txt\n")),(0,l.kt)("p",null,"Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password that you will need to keep to restart your node"),(0,l.kt)("p",null,"Or, on MacOS:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"RUST_BACKTRACE=full cargo run --release -- -p <PASSWORD> > logs.txt 2>&1\n")),(0,l.kt)("p",null,"Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password that you will need to keep to restart your node. You should leave the window open."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Start the client")),(0,l.kt)("p",null,"On a second window:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd massa/massa-client/\n")),(0,l.kt)("p",null,"Then:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cargo run --release -- -p <PASSWORD>\n")),(0,l.kt)("p",null,"Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password. You will need this password to restart your client. Please wait until the\ndirectories are built before moving to the next step."),(0,l.kt)("h3",{id:"on-windows"},"On Windows"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Start the Node")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open Windows Power Shell or Command Prompt on a first window",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"cd massa")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"cd massa-node")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"cargo run --release -- -p <PASSWORD>"))))),(0,l.kt)("p",null,"Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password. You will need this password to restart your node. You should leave the window\nopened."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Start the Client")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open Windows Power Shell or Command Prompt on a second window",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: cd massa"),(0,l.kt)("li",{parentName:"ul"},"Type: cd massa-client"),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"cargo run --release -- -p <PASSWORD>"))))),(0,l.kt)("p",null,"Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password. You will need this password to restart your client. Please wait until the\ndirectories are built before moving to the next step."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"In case of crash of the Rust compiler or at runtime, please do not report bugs to the rustlang/rust repository, but\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa/issues/new/choose"},"open an issue")," on the Massa repository instead. We will triage\nthe issues and open them on the Rust side if they are valid. This avoids polluting the main Rust repository with many\nreports of the same error.")),(0,l.kt)("h2",{id:"what-next-"},"What next ?"),(0,l.kt)("p",null,"Congratulations, you are now running a node. To interact with the network, to send transactions and call smart contracts,\nyou will need a wallet."),(0,l.kt)("p",null,"It is time to setup or import a wallet. Follow the tutorial: ",(0,l.kt)("a",{parentName:"p",href:"/docs/node/wallet"},"Creating a wallet"),"."))}c.isMDXComponent=!0}}]);