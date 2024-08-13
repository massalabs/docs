"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[881],{5895:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=r(4848),i=r(8453);const s={title:"Becoming a Provider"},o="Becoming a Provider",l={id:"deweb/getting-started/setup-public-instance",title:"Becoming a Provider",description:"Setting up a DeWeb provider allows you to provide access to decentralized websites through your own domain.",source:"@site/docs/deweb/getting-started/setup-public-instance.mdx",sourceDirName:"deweb/getting-started",slug:"/deweb/getting-started/setup-public-instance",permalink:"/docs/deweb/getting-started/setup-public-instance",draft:!1,unlisted:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/deweb/getting-started/setup-public-instance.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1723551924e3,frontMatter:{title:"Becoming a Provider"},sidebar:"massaDeWebSidebar",previous:{title:"Setting up a Local Server",permalink:"/docs/deweb/getting-started/setup-local-server"},next:{title:"Server Configuration",permalink:"/docs/deweb/configuration/server-config"}},c={},d=[{value:"Step 1: Download the Binary",id:"step-1-download-the-binary",level:2},{value:"Step 2: Extract the Binary",id:"step-2-extract-the-binary",level:2},{value:"Step 3: Configure the Server",id:"step-3-configure-the-server",level:2},{value:"Example Configuration",id:"example-configuration",level:3},{value:"Step 4: DNS Configuration",id:"step-4-dns-configuration",level:2},{value:"Step 5: Set Up HTTPS and Web Server",id:"step-5-set-up-https-and-web-server",level:2},{value:"General Steps:",id:"general-steps",level:3},{value:"Step 6: Copy the Files to the Server",id:"step-6-copy-the-files-to-the-server",level:2},{value:"Step 7: Run the Server",id:"step-7-run-the-server",level:2},{value:"Step 8: Access the Server",id:"step-8-access-the-server",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"becoming-a-provider",children:"Becoming a Provider"})}),"\n",(0,t.jsx)(n.p,{children:"Setting up a DeWeb provider allows you to provide access to decentralized websites through your own domain.\nFollow these steps to get started."}),"\n",(0,t.jsxs)(n.admonition,{title:"Important Notice",type:"caution",children:[(0,t.jsx)(n.p,{children:"Depending on your country and jurisdiction, serving on-chain content publicly might have legal implications.\nWe strongly recommend you getting to know your local regulations to ensure proper compliance."}),(0,t.jsx)(n.p,{children:"Providers operate independently and can set their own content policies.\nEach provider can use the blocklist/whitelist system to comply with local regulations by selecting the websites they wish or not to serve."})]}),"\n",(0,t.jsx)(n.h2,{id:"step-1-download-the-binary",children:"Step 1: Download the Binary"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Visit the ",(0,t.jsx)(n.a,{href:"https://github.com/massalabs/DeWeb/releases/latest",children:"DeWeb Releases"})," page on GitHub."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Download the binary file matching your operating system and architecture:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Linux"}),": ",(0,t.jsx)(n.code,{children:"deweb-server-linux-{arch}"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Windows"}),": ",(0,t.jsx)(n.code,{children:"deweb-server-windows-{arch}"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"MacOS (Darwin)"}),": ",(0,t.jsx)(n.code,{children:"deweb-server-darwin-{arch}"})," For Apple Silicon (M1,M2,...), choose ",(0,t.jsx)(n.code,{children:"arm64"}),", and for Intel, choose ",(0,t.jsx)(n.code,{children:"amd64"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If your target or architecture is missing, please ",(0,t.jsx)(n.a,{href:"https://github.com/massalabs/DeWeb/issues",children:"open an issue"}),"\nto request it."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-2-extract-the-binary",children:"Step 2: Extract the Binary"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Extract the downloaded file if it is in a zip format."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-3-configure-the-server",children:"Step 3: Configure the Server"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a configuration file named ",(0,t.jsx)(n.code,{children:"deweb_server_config.yaml"})," in the same directory as the server binary."]}),"\n",(0,t.jsxs)(n.li,{children:["At a minimum, set the ",(0,t.jsx)(n.code,{children:"domain"})," field in the configuration file. For example, if you own the domain ",(0,t.jsx)(n.code,{children:"example.com"}),"\nand will make your DeWeb instance available on it, set the ",(0,t.jsx)(n.code,{children:"domain"})," to ",(0,t.jsx)(n.code,{children:"example.com"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-configuration",children:"Example Configuration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'domain: "example.com"\nnetwork_node_url: "https://buildnet.massa.net/api/v2"\napi_port: 8080\nallow_list:\n  - "allowed-domain"\n  - "AS1Seo2..."\nblock_list:\n  - "blocked-domain"\n  - "AS1REo4..."\n'})}),"\n",(0,t.jsx)(n.p,{children:"The allow/block lists allow you to control which websites are accessible through your provider.\nIf there is any website in the allow list, all other websites are blocked.\nYou can use MNS domain names or smart contract addresses in these lists."}),"\n",(0,t.jsxs)(n.p,{children:["For more detailed settings and options, refer to the ",(0,t.jsx)(n.a,{href:"../configuration/server-config",children:"Server Configuration"})," page."]}),"\n",(0,t.jsx)(n.admonition,{title:"Recommendation",type:"info",children:(0,t.jsxs)(n.p,{children:["We recommend running your own node and using your node's URL as the ",(0,t.jsx)(n.code,{children:"network_node_url"}),".\nFor instructions on how to run a node, refer to the ",(0,t.jsx)(n.a,{href:"/docs/node/home",children:"Run a Node"})," documentation."]})}),"\n",(0,t.jsx)(n.h2,{id:"step-4-dns-configuration",children:"Step 4: DNS Configuration"}),"\n",(0,t.jsx)(n.p,{children:"To serve DeWeb properly, you need to configure your DNS provider to handle subdomains for MNS domains.\nIn your domain provider panel, set the following DNS records:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"A Record"})," for IPv4: ",(0,t.jsx)(n.code,{children:"*.example.com"})," pointing to your server's IPv4 address."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AAAA Record"})," for IPv6: ",(0,t.jsx)(n.code,{children:"*.example.com"})," pointing to your server's IPv6 address."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-5-set-up-https-and-web-server",children:"Step 5: Set Up HTTPS and Web Server"}),"\n",(0,t.jsxs)(n.p,{children:["DeWeb requires HTTPS to be properly served. You will need an HTTPS certificate for ",(0,t.jsx)(n.code,{children:"*.example.com"}),"\nand a web server (like Nginx, Apache, etc.) to handle the HTTPS and proxy the requests to your DeWeb server."]}),"\n",(0,t.jsx)(n.h3,{id:"general-steps",children:"General Steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Obtain an HTTPS Certificate"}),": Get an SSL certificate for ",(0,t.jsx)(n.code,{children:"*.example.com"}),".\nYou can use services like Let's Encrypt to get a free certificate."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Configure Your Web Server"}),": Set up your web server to:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Listen on port 80 and redirect HTTP requests to HTTPS."}),"\n",(0,t.jsx)(n.li,{children:"Listen on port 443 for HTTPS requests."}),"\n",(0,t.jsxs)(n.li,{children:["Proxy requests to your DeWeb server running on ",(0,t.jsx)(n.code,{children:"localhost:8080"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For specific configurations, refer to the documentation of the web server you are using (e.g., Nginx, Apache)."}),"\n",(0,t.jsx)(n.h2,{id:"step-6-copy-the-files-to-the-server",children:"Step 6: Copy the Files to the Server"}),"\n",(0,t.jsxs)(n.p,{children:["Copy the extracted binary and the configuration file (",(0,t.jsx)(n.code,{children:"deweb_server_config.yaml"}),") to your server.\nYou can use tools like ",(0,t.jsx)(n.code,{children:"scp"})," or any other method you prefer to transfer files to your server."]}),"\n",(0,t.jsx)(n.h2,{id:"step-7-run-the-server",children:"Step 7: Run the Server"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open your terminal."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Navigate to the directory where the binary and configuration file are located."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the server with the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./deweb-server\n"})}),"\n",(0,t.jsxs)(n.p,{children:["(On Windows, use ",(0,t.jsx)(n.code,{children:"deweb-server.exe"}),"instead of",(0,t.jsx)(n.code,{children:"./deweb-server"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-8-access-the-server",children:"Step 8: Access the Server"}),"\n",(0,t.jsxs)(n.p,{children:["Your DeWeb instance will be accessible from the domain you configured. For example, if you set the domain to ",(0,t.jsx)(n.code,{children:"example.com"}),",\nyou can access your DeWeb welcome page by visiting ",(0,t.jsx)(n.code,{children:"http://deweb.example.com"}),"."]}),"\n",(0,t.jsx)(n.admonition,{title:"Work in Progress",type:"info",children:(0,t.jsxs)(n.p,{children:["DeWeb is still a work in progress, and we are actively listening to feedback.\nIf you encounter any issues or have suggestions, please let us know through our ",(0,t.jsx)(n.a,{href:"https://github.com/massalabs/DeWeb/issues",children:"issue tracker"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(6540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);