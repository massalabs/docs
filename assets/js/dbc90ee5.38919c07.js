"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[8804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:l,i[1]=r;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const o={id:"install",sidebar_label:"Installing a node"},i="Installing a node",r={unversionedId:"node/install",id:"node/install",title:"Installing a node",description:"You need a computer with 8 cores, 16 GB RAM, 1TB disk and a decent internet connection.",source:"@site/docs/node/install.mdx",sourceDirName:"node",slug:"/node/install",permalink:"/docs/node/install",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/node/install.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1715866887,formattedLastUpdatedAt:"May 16, 2024",frontMatter:{id:"install",sidebar_label:"Installing a node"},sidebar:"nodeSidebar",previous:{title:"Home",permalink:"/docs/node/home"},next:{title:"Routability",permalink:"/docs/node/routability"}},s={},u=[{value:"From binaries (simple installation)",id:"from-binaries-simple-installation",level:2},{value:"From source code (advanced installation)",id:"from-source-code-advanced-installation",level:2},{value:"On Ubuntu / MacOS",id:"on-ubuntu--macos",level:3},{value:"On Windows",id:"on-windows",level:3},{value:"My node is installed. What next ?",id:"my-node-is-installed-what-next-",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installing-a-node"},"Installing a node"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"You need a computer with 8 cores, 16 GB RAM, 1TB disk and a decent internet connection.\nMore info in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/node/faq"},"FAQ"),".")),(0,l.kt)("h2",{id:"from-binaries-simple-installation"},"From binaries (simple installation)"),(0,l.kt)("p",null,"If you just wish to run a Massa node without compiling it yourself, you can simply download the latest binary below and\ngo to the next step: ",(0,l.kt)("a",{parentName:"p",href:"/docs/node/run"},"Running a node"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/massalabs/massa/releases/download/MAIN.2.1/massa_MAIN.2.1_release_windows.zip"},"Windows executable")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/massalabs/massa/releases/download/MAIN.2.1/massa_MAIN.2.1_release_linux.tar.gz"},"Linux binary")," -\nonly works with libc2.28 and higher (for example Ubuntu 20.04 and higher)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/massalabs/massa/releases/download/MAIN.2.1/massa_MAIN.2.1_release_macos_aarch64.tar.gz"},"MacOS binary")),(0,l.kt)("li",{parentName:"ul"},"Other binaries can be found on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/massalabs/massa/releases/tag/MAIN.2.1"},"https://github.com/massalabs/massa/releases/tag/MAIN.2.1"))),(0,l.kt)("h2",{id:"from-source-code-advanced-installation"},"From source code (advanced installation)"),(0,l.kt)("p",null,"Otherwise, if you wish to run a Massa node from source code, here are the steps to follow:"),(0,l.kt)("h3",{id:"on-ubuntu--macos"},"On Ubuntu / MacOS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"on Ubuntu, these libs must be installed: ",(0,l.kt)("inlineCode",{parentName:"li"},"sudo apt install pkg-config curl git build-essential libssl-dev libclang-dev cmake")),(0,l.kt)("li",{parentName:"ul"},"on MacOS: ",(0,l.kt)("inlineCode",{parentName:"li"},"brew install llvm cmake")),(0,l.kt)("li",{parentName:"ul"},"install ",(0,l.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"rustup"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh")),(0,l.kt)("li",{parentName:"ul"},"configure path: ",(0,l.kt)("inlineCode",{parentName:"li"},"source $HOME/.cargo/env")),(0,l.kt)("li",{parentName:"ul"},"check rust version: ",(0,l.kt)("inlineCode",{parentName:"li"},"rustc --version")),(0,l.kt)("li",{parentName:"ul"},"install rust stable version: ",(0,l.kt)("inlineCode",{parentName:"li"},"rustup toolchain install 1.74.1")),(0,l.kt)("li",{parentName:"ul"},"set it as default: ",(0,l.kt)("inlineCode",{parentName:"li"},"rustup default 1.74.1")),(0,l.kt)("li",{parentName:"ul"},"check rust version: ",(0,l.kt)("inlineCode",{parentName:"li"},"rustc --version")),(0,l.kt)("li",{parentName:"ul"},"clone this repo: ",(0,l.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/massalabs/massa.git")),(0,l.kt)("li",{parentName:"ul"},"go to the cloned repository: ",(0,l.kt)("inlineCode",{parentName:"li"},"cd massa")),(0,l.kt)("li",{parentName:"ul"},"checkout the latest tag: ",(0,l.kt)("inlineCode",{parentName:"li"},"git checkout MAIN.2.1"))),(0,l.kt)("h3",{id:"on-windows"},"On Windows"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Set up your Rust environment"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"On Windows, you should first follow the indications from Microsoft to be able to run on a Rust environment ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-gb/windows/dev-environment/rust/setup"},"here"),".",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Install Visual Studio (recommended) or the Microsoft C++ Build Tools."),(0,l.kt)("li",{parentName:"ul"},'Once Visual Studio is installed, click on C++ Build Tool. Select on the right column called "installation details" the following packages:',(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MSCV v142 -- VS 2019"),(0,l.kt)("li",{parentName:"ul"},"Windows 10 SDK"),(0,l.kt)("li",{parentName:"ul"},"C++ CMake tools for Windows"),(0,l.kt)("li",{parentName:"ul"},"Testing Tools Core Feature"))),(0,l.kt)("li",{parentName:"ul"},"Click install on the bottom right to download and install those packages"))),(0,l.kt)("li",{parentName:"ul"},"Install NASM: ",(0,l.kt)("a",{parentName:"li",href:"https://www.nasm.us/pub/nasm/releasebuilds/2.16.01/"},"https://www.nasm.us/pub/nasm/releasebuilds/2.16.01/")," choose win32 or win64 folder depending on your architecture and download then launch the installer."),(0,l.kt)("li",{parentName:"ul"},"Install Chocolatey and run: ",(0,l.kt)("inlineCode",{parentName:"li"},"choco install llvm cmake")),(0,l.kt)("li",{parentName:"ul"},"Install Rust, to be downloaded ",(0,l.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"here")),(0,l.kt)("li",{parentName:"ul"},"Install Git for windows, to be downloaded ",(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/download/win"},"here"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Clone the Massa Git Repository"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open Windows Power Shell",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Clone the latest distributed version: ",(0,l.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/massalabs/massa.git")),(0,l.kt)("li",{parentName:"ul"},"Go to the cloned repository: ",(0,l.kt)("inlineCode",{parentName:"li"},"cd massa")),(0,l.kt)("li",{parentName:"ul"},"Checkout the latest tag: ",(0,l.kt)("inlineCode",{parentName:"li"},"git checkout MAIN.2.1")),(0,l.kt)("li",{parentName:"ul"},"Change default Rust to the following stable version: ",(0,l.kt)("inlineCode",{parentName:"li"},"rustup default 1.74.1"))))),(0,l.kt)("h2",{id:"my-node-is-installed-what-next-"},"My node is installed. What next ?"),(0,l.kt)("p",null,"Once you have installed your node, you want to set it up for running and staking.\nBefore running the node, you should configure it to be routable as indicated ",(0,l.kt)("a",{parentName:"p",href:"routability#how-to-make-your-node-routable"},"here"),".\nWithout it, your node will be unstable through lack of connectivity."))}c.isMDXComponent=!0}}]);