"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[4245],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"CLI Configuration"},i="CLI Configuration",l={unversionedId:"deweb/cli/config",id:"deweb/cli/config",title:"CLI Configuration",description:"The DeWeb CLI supports configuration via a JSON file, allowing users to manage essential settings like wallet credentials",source:"@site/docs/deweb/cli/config.mdx",sourceDirName:"deweb/cli",slug:"/deweb/cli/config",permalink:"/docs/deweb/cli/config",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/deweb/cli/config.mdx",tags:[],version:"current",lastUpdatedBy:"Peterjah",lastUpdatedAt:1733919726,formattedLastUpdatedAt:"Dec 11, 2024",frontMatter:{title:"CLI Configuration"},sidebar:"massaDeWebSidebar",previous:{title:"Uploading a Website",permalink:"/docs/deweb/cli/upload"}},s={},p=[{value:"Config File Structure",id:"config-file-structure",level:2},{value:"Setting Configurations Directly on the Command Line",id:"setting-configurations-directly-on-the-command-line",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cli-configuration"},"CLI Configuration"),(0,r.kt)("p",null,"The DeWeb CLI supports configuration via a JSON file, allowing users to manage essential settings like wallet credentials\nand node details for seamless website deployment on the Massa blockchain."),(0,r.kt)("h2",{id:"config-file-structure"},"Config File Structure"),(0,r.kt)("p",null,"Here\u2019s a sample ",(0,r.kt)("inlineCode",{parentName:"p"},"deweb_cli_config.json")," setup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "wallet_password": "your-wallet-password",\n  "wallet_path": "your-wallet.yaml",\n  "node_url": "https://mainnet.massa.net/api/v2",\n  "chunk_size": 64000\n}\n')),(0,r.kt)("p",null,"Here\u2019s a breakdown of each field:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"wallet_password")),": The password for your Massa wallet file, used when ",(0,r.kt)("inlineCode",{parentName:"li"},"wallet_path")," is specified."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"wallet_path")),": The file path to your Massa wallet in YAML format. Only YAML wallet files are supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"node_url")),": The URL of the Massa node where your website will be uploaded."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"chunk_size")),": Defines the size in bytes of each chunk for file upload.\nThe default is typically ",(0,r.kt)("inlineCode",{parentName:"li"},"64000"),", but it can be adjusted based on your needs and network conditions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"secret_key")),": The secret key for your Massa account. Use this as an alternative to ",(0,r.kt)("inlineCode",{parentName:"li"},"wallet_password")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"wallet_path"),".")),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_path")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_password")," ",(0,r.kt)("strong",{parentName:"p"},"and")," ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_key")," are used in the config file, ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_key")," will take precedence."),(0,r.kt)("p",{parentName:"admonition"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"SECRET_KEY")," environment variable is set, it will take precedence over the ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet")," fields in the config file.")),(0,r.kt)("h2",{id:"setting-configurations-directly-on-the-command-line"},"Setting Configurations Directly on the Command Line"),(0,r.kt)("p",null,"If you prefer, you can bypass the config file and specify values directly on the command line. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @massalabs/deweb-cli upload <website_path> --node_url <your_node_url> --wallet <path_to_wallet> --password <your_password>\n")),(0,r.kt)("p",null,"You can also set the ",(0,r.kt)("strong",{parentName:"p"},"secret key")," as an environment variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export SECRET_KEY=<your_secret_key>\n")),(0,r.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,r.kt)("p",null,"For instructions on obtaining a YAML wallet file or secret key,\nrefer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.massa.net/docs/massaStation/massa-wallet/account-backup"},"Massa Wallet Documentation"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you encounter issues, please visit our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/DeWeb/issues"},"GitHub Issues page")," for troubleshooting or to report problems.")))}d.isMDXComponent=!0}}]);