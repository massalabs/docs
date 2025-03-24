"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[3126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Server Configuration"},i="Server Configuration",l={unversionedId:"deweb/local-server-config/server-config",id:"deweb/local-server-config/server-config",title:"Server Configuration",description:"To configure your DeWeb server, create a YAML configuration file named dewebserverconfig.yaml",source:"@site/docs/deweb/local-server-config/server-config.mdx",sourceDirName:"deweb/local-server-config",slug:"/deweb/local-server-config/server-config",permalink:"/docs/deweb/local-server-config/server-config",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/deweb/local-server-config/server-config.mdx",tags:[],version:"current",lastUpdatedBy:"SlnPons",lastUpdatedAt:1742834554,formattedLastUpdatedAt:"Mar 24, 2025",frontMatter:{title:"Server Configuration"},sidebar:"massaDeWebSidebar",previous:{title:"Setting up a local server",permalink:"/docs/deweb/local-server-config/setup-local-server"},next:{title:"Becoming a Provider",permalink:"/docs/deweb/provider/setup-public-instance"}},s={},c=[{value:"Example Configuration",id:"example-configuration",level:2},{value:"Default Configuration",id:"default-configuration",level:2},{value:"Configuration Fields",id:"configuration-fields",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"server-configuration"},"Server Configuration"),(0,a.kt)("p",null,"To configure your DeWeb server, create a YAML configuration file named ",(0,a.kt)("inlineCode",{parentName:"p"},"deweb_server_config.yaml"),"\nand store it alongside the server binary. Below is an example configuration file:"),(0,a.kt)("h2",{id:"example-configuration"},"Example Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'domain: "massa.network"\nnetwork_node_url: "https://mainnet.massa.net/api/v2"\napi_port: 8080\nallow_list:\n  - "massaNameService"\n  - "AS1S...19b3"\nblock_list:\n  - "massaNameService"\n  - "AS1S...4x3o"\n')),(0,a.kt)("h2",{id:"default-configuration"},"Default Configuration"),(0,a.kt)("p",null,"If no configuration file is provided, the server will use the following default settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'domain: "localhost"\nnetwork_node_url: "https://mainnet.massa.net/api/v2"\napi_port: 8080\n')),(0,a.kt)("h2",{id:"configuration-fields"},"Configuration Fields"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Domain"),": The domain the website is running on.\nFor example, set this to ",(0,a.kt)("inlineCode",{parentName:"p"},"massa.network")," if your server is running on ",(0,a.kt)("inlineCode",{parentName:"p"},"massa.network"),".\nThe default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"NetworkNodeURL"),": The node DeWeb server will connect to. By default, this is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://mainnet.massa.net/api/v2"),".\nYou can use any node address for the JSON public API,\nsuch as those listed in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.massa.net/docs/build/api/jsonrpc"},"Massa API Documentation")," (Default port: 33035)."),(0,a.kt)("admonition",{parentName:"li",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To access a website that has been deployed on buildnet,\nset the node address to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://buildnet.massa.net/api/v2"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"APIPort"),": The port the server will run on. The default value is 8080.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"AllowList"),": A list of domains or smart contract addresses that are explicitly allowed.\nBy default, this list is empty. If specified, only the websites in this list will be accessible.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"BlockList"),": A list of domains or smart contract addresses that are explicitly blocked.\nBy default, this list is empty. Websites in this list will be inaccessible."))))}d.isMDXComponent=!0}}]);