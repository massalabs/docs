"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[4521],{5680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>y});var t=a(6540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=t.createContext({}),u=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},p=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),g=l,y=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return a?t.createElement(y,r(r({ref:n},p),{},{components:a})):t.createElement(y,r({ref:n},p))}));function y(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=a[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1674:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=a(8168),l=(a(6540),a(5680));const o={id:"run",sidebar_label:"Running a node"},r="Running a node",i={unversionedId:"node/run",id:"node/run",title:"Running a node",description:"This document explains how to run a node.",source:"@site/docs/node/run.mdx",sourceDirName:"node",slug:"/node/run",permalink:"/docs/node/run",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/node/run.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1723820343,formattedLastUpdatedAt:"Aug 16, 2024",frontMatter:{id:"run",sidebar_label:"Running a node"},sidebar:"nodeSidebar",previous:{title:"Routability",permalink:"/docs/node/routability"},next:{title:"Creating a wallet",permalink:"/docs/node/wallet"}},s={},u=[{value:"If your node was installed from binaries (simple installation)",id:"if-your-node-was-installed-from-binaries-simple-installation",level:2},{value:"On Ubuntu / MacOS",id:"on-ubuntu--macos",level:3},{value:"If your node was installed from source code (advanced installation)",id:"if-your-node-was-installed-from-source-code-advanced-installation",level:2},{value:"On Ubuntu / MacOS",id:"on-ubuntu--macos-1",level:3},{value:"On Windows",id:"on-windows",level:3},{value:"What next ?",id:"what-next-",level:2}],p={toc:u},d="wrapper";function c(e){let{components:n,...a}=e;return(0,l.yg)(d,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"running-a-node"},"Running a node"),(0,l.yg)("p",null,"This document explains how to run a node."),(0,l.yg)("p",null,"This assumes that you have installed the node software.\nIf not, please follow the ",(0,l.yg)("a",{parentName:"p",href:"/docs/node/install"},"installation instructions"),"."),(0,l.yg)("h2",{id:"if-your-node-was-installed-from-binaries-simple-installation"},"If your node was installed from binaries (simple installation)"),(0,l.yg)("p",null,"Simply run the binaries you downloaded in the previous step:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Open the massa-node folder and run the massa-node executable"),(0,l.yg)("li",{parentName:"ul"},"Open the massa-client folder and run the massa-client executable")),(0,l.yg)("h3",{id:"on-ubuntu--macos"},"On Ubuntu / MacOS"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Configure the node")),(0,l.yg)("p",null,"Default configuration is available ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/massalabs/massa/blob/main/massa-node/base_config/config.toml"},"here"),"."),(0,l.yg)("p",null,"You can override the default configuration via massa-node/config/config.toml file."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Start the node")),(0,l.yg)("p",null,"In a first window:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd massa/massa-node/\n")),(0,l.yg)("p",null,"Launch the node, on Ubuntu:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"./massa-node -p <PASSWORD> |& tee logs.txt\n")),(0,l.yg)("p",null,"Replace ",(0,l.yg)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password that you will need to keep to restart your node. You should leave the window open."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Start the client")),(0,l.yg)("p",null,"In a second window:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd massa/massa-client/\n")),(0,l.yg)("p",null,"Then:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"./massa-client -p <PASSWORD>\n")),(0,l.yg)("p",null,"Replace ",(0,l.yg)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password that you will need to keep to restart your client"),(0,l.yg)("h2",{id:"if-your-node-was-installed-from-source-code-advanced-installation"},"If your node was installed from source code (advanced installation)"),(0,l.yg)("h3",{id:"on-ubuntu--macos-1"},"On Ubuntu / MacOS"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Start the node")),(0,l.yg)("p",null,"In a first window:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd massa/massa-node/\n")),(0,l.yg)("p",null,"Launch the node, on Ubuntu:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"RUST_BACKTRACE=full cargo run --release -- -p <PASSWORD> |& tee logs.txt\n")),(0,l.yg)("p",null,"Replace ",(0,l.yg)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password that you will need to keep to restart your node"),(0,l.yg)("p",null,"Or, on MacOS:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"RUST_BACKTRACE=full cargo run --release -- -p <PASSWORD> > logs.txt 2>&1\n")),(0,l.yg)("p",null,"Replace ",(0,l.yg)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password that you will need to keep to restart your node. You should leave the window open."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Start the client")),(0,l.yg)("p",null,"On a second window:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd massa/massa-client/\n")),(0,l.yg)("p",null,"Then:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cargo run --release -- -p <PASSWORD>\n")),(0,l.yg)("p",null,"Replace ",(0,l.yg)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password. You will need this password to restart your client. Please wait until the\ndirectories are built before moving to the next step."),(0,l.yg)("h3",{id:"on-windows"},"On Windows"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Start the Node")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Open Windows Power Shell or Command Prompt on a first window",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Type: ",(0,l.yg)("inlineCode",{parentName:"li"},"cd massa")),(0,l.yg)("li",{parentName:"ul"},"Type: ",(0,l.yg)("inlineCode",{parentName:"li"},"cd massa-node")),(0,l.yg)("li",{parentName:"ul"},"Type: ",(0,l.yg)("inlineCode",{parentName:"li"},"cargo run --release -- -p <PASSWORD>"))))),(0,l.yg)("p",null,"Replace ",(0,l.yg)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password. You will need this password to restart your node. You should leave the window\nopened."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Start the Client")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Open Windows Power Shell or Command Prompt on a second window",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Type: cd massa"),(0,l.yg)("li",{parentName:"ul"},"Type: cd massa-client"),(0,l.yg)("li",{parentName:"ul"},"Type: ",(0,l.yg)("inlineCode",{parentName:"li"},"cargo run --release -- -p <PASSWORD>"))))),(0,l.yg)("p",null,"Replace ",(0,l.yg)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password. You will need this password to restart your client. Please wait until the\ndirectories are built before moving to the next step."),(0,l.yg)("admonition",{type:"caution"},(0,l.yg)("p",{parentName:"admonition"},"In case of crash of the Rust compiler or at runtime, please do not report bugs to the rustlang/rust repository, but\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/massalabs/massa/issues/new/choose"},"open an issue")," on the Massa repository instead. We will triage\nthe issues and open them on the Rust side if they are valid. This avoids polluting the main Rust repository with many\nreports of the same error.")),(0,l.yg)("h2",{id:"what-next-"},"What next ?"),(0,l.yg)("p",null,"Congratulations, you are now running a node. To interact with the network, to send transactions and call smart contracts,\nyou will need a wallet."),(0,l.yg)("p",null,"It is time to setup or import a wallet. Follow the tutorial: ",(0,l.yg)("a",{parentName:"p",href:"/docs/node/wallet"},"Creating a wallet"),"."))}c.isMDXComponent=!0}}]);