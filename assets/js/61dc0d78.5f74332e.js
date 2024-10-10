"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[9984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[c]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={title:"Upload with the CLI"},o="DeWeb CLI",r={unversionedId:"deweb/upload/cli",id:"deweb/upload/cli",title:"Upload with the CLI",description:"The DeWeb CLI is a command-line tool designed for deploying, editing, and deleting decentralized websites on the DeWeb platform.",source:"@site/docs/deweb/upload/cli.mdx",sourceDirName:"deweb/upload",slug:"/deweb/upload/cli",permalink:"/docs/deweb/upload/cli",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/deweb/upload/cli.mdx",tags:[],version:"current",lastUpdatedBy:"Pierre Seznec",lastUpdatedAt:1728550477,formattedLastUpdatedAt:"Oct 10, 2024",frontMatter:{title:"Upload with the CLI"},sidebar:"massaDeWebSidebar",previous:{title:"Becoming a Provider",permalink:"/docs/deweb/provider/setup-public-instance"},next:{title:"Assigning a MNS to your website",permalink:"/docs/deweb/upload/mns"}},d={},p=[{value:"Downloading the CLI tool",id:"downloading-the-cli-tool",level:2},{value:"Usage",id:"usage",level:2},{value:"Global Options",id:"global-options",level:3},{value:"Commands",id:"commands",level:2},{value:"upload",id:"upload",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Example",id:"example",level:4},{value:"edit",id:"edit",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"Example",id:"example-1",level:4},{value:"delete",id:"delete",level:3},{value:"Arguments",id:"arguments-2",level:4},{value:"Example",id:"example-2",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Sample Configuration (<code>deweb_cli_config.yaml</code>)",id:"sample-configuration-deweb_cli_configyaml",level:3},{value:"Logging",id:"logging",level:2}],s={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deweb-cli"},"DeWeb CLI"),(0,i.kt)("p",null,"The DeWeb CLI is a command-line tool designed for deploying, editing, and deleting decentralized websites on the DeWeb platform."),(0,i.kt)("h2",{id:"downloading-the-cli-tool"},"Downloading the CLI tool"),(0,i.kt)("p",null,"You can download the DeWeb CLI tool from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/massalabs/DeWeb/releases"},"DeWeb Releases Page"),". "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"On macOS or Linux run ",(0,i.kt)("inlineCode",{parentName:"p"},"chmod +x deweb-cli_{targetOS}")," command before ",(0,i.kt)("inlineCode",{parentName:"p"},"./deweb-cli_{targetOS}")," to allow execution."),(0,i.kt)("p",{parentName:"admonition"},"On Windows, use ",(0,i.kt)("inlineCode",{parentName:"p"},"deweb-cli_{targetOS}.exe")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"./deweb-cli_{targetOS}"))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"deweb-cli")," command to interact with the DeWeb. Below is the basic usage syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deweb-cli [global options] command [command options] [arguments...]\n")),(0,i.kt)("h3",{id:"global-options"},"Global Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--wallet_nickname, -w"),": Specify the wallet nickname to use."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--node_url, -n"),": Specify the node URL."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--config, -c"),": Load configuration from a specified file path (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"./deweb_cli_config.yaml"),").")),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("h3",{id:"upload"},"upload"),(0,i.kt)("p",null,"Uploads a new website to the DeWeb."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deweb-cli upload [global options] <website_zip_file_path>\n")),(0,i.kt)("h4",{id:"arguments"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<website_zip_file_path>"),": Path to the zip file containing the website to be uploaded.")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deweb-cli upload -w myWallet -n https://mainnet.massa.net/api/v2 ./website.zip\n")),(0,i.kt)("p",null,"The zip file should contain an ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," at its root. For example, if you build an app and the output is in a directory (usually ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"dist"),"), you can zip it using the following command from the output directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"zip {name}.zip -r ./*\n")),(0,i.kt)("p",null,"This should result in a zip file with all the files from the output directory, with the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," at its root."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Server Side Rendering (SSR) is not supported at this time. Ensure your website is fully client-side rendered.")),(0,i.kt)("h3",{id:"edit"},"edit"),(0,i.kt)("p",null,"Edits an existing website on the DeWeb."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deweb-cli edit [global options] <website_sc_address> <website_zip_file_path>\n")),(0,i.kt)("h4",{id:"arguments-1"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<website_sc_address>"),": Smart contract address of the website to be edited."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<website_zip_file_path>"),": Path to the zip file containing the updated website.")),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deweb-cli edit -w myWallet -n http://node-url.com <website_sc_address> ./updated_website.zip\n")),(0,i.kt)("h3",{id:"delete"},"delete"),(0,i.kt)("p",null,"Deletes an existing website from the DeWeb."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deweb-cli delete [global options] <website_sc_address>\n")),(0,i.kt)("h4",{id:"arguments-2"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<website_sc_address>"),": Smart contract address of the website to be deleted.")),(0,i.kt)("h4",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deweb-cli delete -w myWallet -n http://node-url.com <website_sc_address>\n")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The CLI can be configured using a YAML file. By default, it looks for ",(0,i.kt)("inlineCode",{parentName:"p"},"deweb_cli_config.yaml")," in the current directory. You can specify a different configuration file using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--config")," flag."),(0,i.kt)("h3",{id:"sample-configuration-deweb_cli_configyaml"},"Sample Configuration (",(0,i.kt)("inlineCode",{parentName:"h3"},"deweb_cli_config.yaml"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'wallet_config:\n  wallet_nickname: "alice"\n\nnode_url: "https://buildnet.massa.net/api/v2"\n\nsc_config:\n  minimal_fees: 0\n  max_gas: 0\n  max_coins: 0\n  expiry: 0\n')),(0,i.kt)("h2",{id:"logging"},"Logging"),(0,i.kt)("p",null,"The CLI logs its output to ",(0,i.kt)("inlineCode",{parentName:"p"},"./deweb-cli.log"),". Logging is initialized automatically when the application starts."),(0,i.kt)("admonition",{title:"Disclaimer",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The CLI section of the documentation is a work in progress. A complete documentation is coming soon. We appreciate your patience and feedback.")))}u.isMDXComponent=!0}}]);