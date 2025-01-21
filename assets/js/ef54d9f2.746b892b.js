"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[743],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={title:"Setting up a local server"},o="Setting up a Local Server",l={unversionedId:"deweb/local-server-config/setup-local-server",id:"deweb/local-server-config/setup-local-server",title:"Setting up a local server",description:"Setting up a DeWeb server locally allows you to browse and manage decentralized websites without any intermediaries.",source:"@site/docs/deweb/local-server-config/setup-local-server.mdx",sourceDirName:"deweb/local-server-config",slug:"/deweb/local-server-config/setup-local-server",permalink:"/docs/deweb/local-server-config/setup-local-server",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/deweb/local-server-config/setup-local-server.mdx",tags:[],version:"current",lastUpdatedBy:"Leo-Besancon",lastUpdatedAt:1737480666,formattedLastUpdatedAt:"Jan 21, 2025",frontMatter:{title:"Setting up a local server"},sidebar:"massaDeWebSidebar",previous:{title:"Registries",permalink:"/docs/deweb/getting-started/registries"},next:{title:"Server Configuration",permalink:"/docs/deweb/local-server-config/server-config"}},s={},p=[{value:"Step 1: Download the Binary",id:"step-1-download-the-binary",level:2},{value:"Step 2: Extract the Binary",id:"step-2-extract-the-binary",level:2},{value:"Step 3: Run the Server",id:"step-3-run-the-server",level:2},{value:"Option 1: Using GUI",id:"option-1-using-gui",level:3},{value:"Windows",id:"windows",level:4},{value:"MacOS",id:"macos",level:4},{value:"Linux",id:"linux",level:4},{value:"Option 2: Using Terminal",id:"option-2-using-terminal",level:3},{value:"Step 4: Access the Server",id:"step-4-access-the-server",level:2},{value:"Configuration",id:"configuration",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-a-local-server"},"Setting up a Local Server"),(0,a.kt)("p",null,"Setting up a DeWeb server locally allows you to browse and manage decentralized websites without any intermediaries.\nFollow these steps to get started."),(0,a.kt)("h2",{id:"step-1-download-the-binary"},"Step 1: Download the Binary"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/massalabs/DeWeb/releases/latest"},"DeWeb Releases")," page on GitHub.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the binary file matching your operating system and architecture:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Linux"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"deweb-server-linux-{arch}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Windows"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"deweb-server-windows-{arch}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MacOS (Darwin)"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"deweb-server-darwin-{arch}")," (For Apple Silicon, choose ",(0,a.kt)("inlineCode",{parentName:"li"},"arm64"),")")),(0,a.kt)("p",{parentName:"li"},"If your target or architecture is missing, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/massalabs/DeWeb/issues"},"open an issue"),"\nto request it."))),(0,a.kt)("h2",{id:"step-2-extract-the-binary"},"Step 2: Extract the Binary"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Extract the downloaded file if it is in a zip format.")),(0,a.kt)("h2",{id:"step-3-run-the-server"},"Step 3: Run the Server"),(0,a.kt)("h3",{id:"option-1-using-gui"},"Option 1: Using GUI"),(0,a.kt)("h4",{id:"windows"},"Windows"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to the directory where the binary is located."),(0,a.kt)("li",{parentName:"ol"},"Double-click the ",(0,a.kt)("inlineCode",{parentName:"li"},"deweb-server.exe")," file.")),(0,a.kt)("h4",{id:"macos"},"MacOS"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to the directory where the binary is located."),(0,a.kt)("li",{parentName:"ol"},"Right-click the ",(0,a.kt)("inlineCode",{parentName:"li"},"deweb-server"),' file and select "Open".'),(0,a.kt)("li",{parentName:"ol"},'A warning dialog will appear. Click "Open" to run the binary.'),(0,a.kt)("li",{parentName:"ol"},"After the first run, you can double-click the binary to open it.")),(0,a.kt)("h4",{id:"linux"},"Linux"),(0,a.kt)("p",null,"For Linux users, running binaries via GUI can vary greatly depending on the desktop environment. Generally:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to the directory where the binary is located."),(0,a.kt)("li",{parentName:"ol"},'Right-click the binary and select "Properties".'),(0,a.kt)("li",{parentName:"ol"},'Ensure the "Execute" permission is checked.'),(0,a.kt)("li",{parentName:"ol"},"Double-click the binary to run it.")),(0,a.kt)("h3",{id:"option-2-using-terminal"},"Option 2: Using Terminal"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open your terminal (command prompt on Windows).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the directory where the binary is located.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the server with the following command:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./deweb-server\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"On macOS or Linux run ",(0,a.kt)("inlineCode",{parentName:"p"},"chmod +x deweb-server")," command before ",(0,a.kt)("inlineCode",{parentName:"p"},"./deweb-server")," to allow execution."),(0,a.kt)("p",{parentName:"admonition"},"On Windows, use ",(0,a.kt)("inlineCode",{parentName:"p"},"deweb-server.exe")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"./deweb-server"))),(0,a.kt)("h2",{id:"step-4-access-the-server"},"Step 4: Access the Server"),(0,a.kt)("p",null,"By default, the DeWeb server runs on ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:8080"),". You can access it using a web browser:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Visit ",(0,a.kt)("inlineCode",{parentName:"li"},"http://deweb.localhost:8080")," to see the welcome page.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"To customize your server settings, refer to the ",(0,a.kt)("a",{parentName:"p",href:"./server-config"},"Server Configuration")," page."),(0,a.kt)("admonition",{title:"Work in Progress",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"DeWeb is still a work in progress, and we are actively listening to feedback.\nIf you encounter any issues or have suggestions, please let us know through our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/massalabs/DeWeb/issues"},"issue tracker"),".")))}d.isMDXComponent=!0}}]);