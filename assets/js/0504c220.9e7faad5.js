"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[3586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"DeWeb CLI Overview"},o="DeWeb CLI Overview",l={unversionedId:"deweb/cli/overview",id:"deweb/cli/overview",title:"DeWeb CLI Overview",description:"DeWeb CLI is a command-line tool designed for developers to manage website deployments on the Massa blockchain.",source:"@site/docs/deweb/cli/overview.mdx",sourceDirName:"deweb/cli",slug:"/deweb/cli/overview",permalink:"/docs/deweb/cli/overview",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/deweb/cli/overview.mdx",tags:[],version:"current",lastUpdatedBy:"Leo-Besancon",lastUpdatedAt:1737480666,formattedLastUpdatedAt:"Jan 21, 2025",frontMatter:{title:"DeWeb CLI Overview"},sidebar:"massaDeWebSidebar",previous:{title:"Register your website",permalink:"/docs/deweb/upload/website-registry"},next:{title:"Uploading a Website",permalink:"/docs/deweb/cli/upload"}},s={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Capabilities",id:"capabilities",level:2},{value:"Quick Start",id:"quick-start",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deweb-cli-overview"},"DeWeb CLI Overview"),(0,r.kt)("p",null,"DeWeb CLI is a command-line tool designed for developers to manage website deployments on the Massa blockchain.\nIt provides commands for uploading, managing, and debugging website files directly on the blockchain, simplifying the deployment process."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"Before running the CLI, ensure you have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Node.js")," (version 18.0 or higher) and ",(0,r.kt)("strong",{parentName:"p"},"npm")," installed. You can check your versions with:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nnpm -v\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"A Massa Wallet"),": Either as a YAML wallet file or its secret key.\nRefer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/massaStation/massa-wallet/account-backup"},"Massa Wallet Documentation")," for instructions on creating or obtaining these."))),(0,r.kt)("h2",{id:"capabilities"},"Capabilities"),(0,r.kt)("p",null,"DeWeb CLI offers a range of capabilities for working with website stored on the Massa blockchain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Upload"),": Uploads and edits your website to the blockchain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delete"),": Removes your website and its associated files from the blockchain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"List Files"),": Lists all files associated with a specific website, useful for verifying deployed content."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"View File Content"),": Allows you to view the content of a specific file,\nproviding a way to debug or inspect individual files directly on the blockchain.")),(0,r.kt)("p",null,"To explore these commands further, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @massalabs/deweb-cli --help\n")),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"Run DeWeb CLI with ",(0,r.kt)("inlineCode",{parentName:"p"},"npx")," for instant access:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @massalabs/deweb-cli --help\n")),(0,r.kt)("p",null,"This command will display available options and commands, allowing you to dive into using the DeWeb CLI right away."))}u.isMDXComponent=!0}}]);