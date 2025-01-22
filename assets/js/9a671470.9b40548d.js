"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[1052],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3249:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Becoming a Provider"},i="Becoming a Provider",l={unversionedId:"deweb/provider/setup-public-instance",id:"deweb/provider/setup-public-instance",title:"Becoming a Provider",description:"Setting up a DeWeb provider instance allows you to provide an access to decentralized websites through your own domain.",source:"@site/docs/deweb/provider/setup-public-instance.mdx",sourceDirName:"deweb/provider",slug:"/deweb/provider/setup-public-instance",permalink:"/docs/deweb/provider/setup-public-instance",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/deweb/provider/setup-public-instance.mdx",tags:[],version:"current",lastUpdatedBy:"Thomas S\xe9n\xe9chal",lastUpdatedAt:1737541315,formattedLastUpdatedAt:"Jan 22, 2025",frontMatter:{title:"Becoming a Provider"},sidebar:"massaDeWebSidebar",previous:{title:"Server Configuration",permalink:"/docs/deweb/local-server-config/server-config"},next:{title:"Overview",permalink:"/docs/deweb/upload/overview"}},s={},p=[{value:"Step 1: Download the Binary",id:"step-1-download-the-binary",level:2},{value:"Step 2: Extract the Binary",id:"step-2-extract-the-binary",level:2},{value:"Step 3: Configure the Server",id:"step-3-configure-the-server",level:2},{value:"Example Configuration",id:"example-configuration",level:3},{value:"Step 4: DNS Configuration",id:"step-4-dns-configuration",level:2},{value:"Step 5: Set Up HTTPS and Web Server",id:"step-5-set-up-https-and-web-server",level:2},{value:"General Steps",id:"general-steps",level:3},{value:"Step 6: Copy the Files to the Server",id:"step-6-copy-the-files-to-the-server",level:2},{value:"Step 7: Run the Server",id:"step-7-run-the-server",level:2},{value:"Step 8: Access the Server",id:"step-8-access-the-server",level:2},{value:"Optional: Step 9 - Register Your Provider",id:"optional-step-9---register-your-provider",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"becoming-a-provider"},"Becoming a Provider"),(0,a.kt)("p",null,"Setting up a DeWeb provider instance allows you to provide an access to decentralized websites through your own domain.\nFollow these steps to get started."),(0,a.kt)("admonition",{title:"Important Notice",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Depending on your country and jurisdiction, serving on-chain content publicly might have legal implications.\nWe strongly recommend you getting to know your local regulations to ensure proper compliance."),(0,a.kt)("p",{parentName:"admonition"},"Providers operate independently and can set their own content policies.\nEach provider can use the blocklist/whitelist system to comply with local regulations by selecting the websites they wish or not to serve.")),(0,a.kt)("h2",{id:"step-1-download-the-binary"},"Step 1: Download the Binary"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/massalabs/DeWeb/releases/latest"},"DeWeb Releases")," page on GitHub.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the binary file matching your operating system and architecture:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Linux"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"deweb-server-linux-{arch}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Windows"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"deweb-server-windows-{arch}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MacOS (Darwin)"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"deweb-server-darwin-{arch}")," For Apple Silicon (M1,M2,...), choose ",(0,a.kt)("inlineCode",{parentName:"li"},"arm64"),", and for Intel, choose ",(0,a.kt)("inlineCode",{parentName:"li"},"amd64"),".")),(0,a.kt)("p",{parentName:"li"},"If your target or architecture is missing, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/massalabs/DeWeb/issues"},"open an issue"),"\nto request it."))),(0,a.kt)("h2",{id:"step-2-extract-the-binary"},"Step 2: Extract the Binary"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Extract the downloaded file if it is in a zip format.")),(0,a.kt)("h2",{id:"step-3-configure-the-server"},"Step 3: Configure the Server"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a configuration file named ",(0,a.kt)("inlineCode",{parentName:"li"},"deweb_server_config.yaml")," in the same directory as the server binary."),(0,a.kt)("li",{parentName:"ol"},"At a minimum, set the ",(0,a.kt)("inlineCode",{parentName:"li"},"domain")," field in the configuration file. For example, if you own the domain ",(0,a.kt)("inlineCode",{parentName:"li"},"example.com"),"\nand will make your DeWeb instance available on it, set the ",(0,a.kt)("inlineCode",{parentName:"li"},"domain")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"example.com"),".")),(0,a.kt)("h3",{id:"example-configuration"},"Example Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'domain: "example.com"\nnetwork_node_url: "https://mainnet.massa.net/api/v2"\napi_port: 8080\nallow_list:\n  - "massaNameService"\n  - "AS1S...19b3"\nblock_list:\n  - "massaNameService"\n  - "AS1S...4x3o"\n')),(0,a.kt)("p",null,"The allow/block lists allow you to control which websites are accessible through your provider.\nIf there is any website in the allow list, all other websites are blocked.\nYou can use MNS domain names or smart contract addresses in these lists."),(0,a.kt)("p",null,"For more detailed settings and options, refer to the ",(0,a.kt)("a",{parentName:"p",href:"../local-server-config/server-config"},"Server Configuration")," page."),(0,a.kt)("admonition",{title:"Recommendation",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We recommend running your own node and using your node's URL as the ",(0,a.kt)("inlineCode",{parentName:"p"},"network_node_url"),".\nFor instructions on how to run a node, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/home"},"Run a Node")," documentation.")),(0,a.kt)("h2",{id:"step-4-dns-configuration"},"Step 4: DNS Configuration"),(0,a.kt)("p",null,"To serve DeWeb properly, you need to configure your DNS provider to handle subdomains for MNS domains.\nIn your domain provider panel, set the following DNS records:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A Record")," for IPv4: ",(0,a.kt)("inlineCode",{parentName:"li"},"*.example.com")," pointing to your server's IPv4 address."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"AAAA Record")," for IPv6: ",(0,a.kt)("inlineCode",{parentName:"li"},"*.example.com")," pointing to your server's IPv6 address.")),(0,a.kt)("h2",{id:"step-5-set-up-https-and-web-server"},"Step 5: Set Up HTTPS and Web Server"),(0,a.kt)("p",null,"DeWeb requires HTTPS to be properly served. You will need an HTTPS certificate for ",(0,a.kt)("inlineCode",{parentName:"p"},"*.example.com"),"\nand a web server (like Nginx, Apache, etc.) to handle the HTTPS and proxy the requests to your DeWeb server."),(0,a.kt)("h3",{id:"general-steps"},"General Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Obtain an HTTPS Certificate"),": Get an SSL certificate for ",(0,a.kt)("inlineCode",{parentName:"li"},"*.example.com"),".\nYou can use services like Let's Encrypt to get a free certificate."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Configure Your Web Server"),": Set up your web server to:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Listen on port 80 and redirect HTTP requests to HTTPS."),(0,a.kt)("li",{parentName:"ul"},"Listen on port 443 for HTTPS requests."),(0,a.kt)("li",{parentName:"ul"},"Proxy requests to your DeWeb server running on ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:8080"),".")))),(0,a.kt)("p",null,"For specific configurations, refer to the documentation of the web server you are using (e.g., Nginx, Apache)."),(0,a.kt)("h2",{id:"step-6-copy-the-files-to-the-server"},"Step 6: Copy the Files to the Server"),(0,a.kt)("p",null,"Copy the extracted binary and the configuration file (",(0,a.kt)("inlineCode",{parentName:"p"},"deweb_server_config.yaml"),") to your server.\nYou can use tools like ",(0,a.kt)("inlineCode",{parentName:"p"},"scp")," or any other method you prefer to transfer files to your server."),(0,a.kt)("h2",{id:"step-7-run-the-server"},"Step 7: Run the Server"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open your terminal.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the directory where the binary and configuration file are located.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the server with the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./deweb-server\n")),(0,a.kt)("p",{parentName:"li"},"(On Windows, use ",(0,a.kt)("inlineCode",{parentName:"p"},"deweb-server.exe"),"instead of",(0,a.kt)("inlineCode",{parentName:"p"},"./deweb-server"),")"))),(0,a.kt)("h2",{id:"step-8-access-the-server"},"Step 8: Access the Server"),(0,a.kt)("p",null,"Your DeWeb instance will be accessible from the domain you configured. For example, if you set the domain to ",(0,a.kt)("inlineCode",{parentName:"p"},"example.com"),",\nyou can access your DeWeb welcome page by visiting ",(0,a.kt)("inlineCode",{parentName:"p"},"http://deweb.example.com"),"."),(0,a.kt)("h2",{id:"optional-step-9---register-your-provider"},"Optional: Step 9 - Register Your Provider"),(0,a.kt)("p",null,"You can register your DeWeb provider in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/massalabs/DeWeb-Providers"},"Provider Registry"),".\nThis registry allows users to find DeWeb providers easily, offering a more decentralized solution as they can choose the provider they want.\nAdditionally, it facilitates communication on important updates to providers."),(0,a.kt)("admonition",{title:"Work in Progress",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"DeWeb is still a work in progress, and we are actively listening to feedback.\nIf you encounter any issues or have suggestions, please let us know through our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/massalabs/DeWeb/issues"},"issue tracker"),".")))}u.isMDXComponent=!0}}]);