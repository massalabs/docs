"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[3562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={title:"Uploading a Website"},r="Uploading a Website",s={unversionedId:"deweb/cli/upload",id:"deweb/cli/upload",title:"Uploading a Website",description:"Follow these steps to upload a website to the Massa blockchain using the DeWeb CLI.",source:"@site/docs/deweb/cli/upload.mdx",sourceDirName:"deweb/cli",slug:"/deweb/cli/upload",permalink:"/docs/deweb/cli/upload",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/deweb/cli/upload.mdx",tags:[],version:"current",lastUpdatedBy:"Peterjah",lastUpdatedAt:1730365623,formattedLastUpdatedAt:"Oct 31, 2024",frontMatter:{title:"Uploading a Website"},sidebar:"massaDeWebSidebar",previous:{title:"DeWeb CLI Overview",permalink:"/docs/deweb/cli/overview"},next:{title:"CLI Configuration",permalink:"/docs/deweb/cli/config"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Configure Access",id:"step-1-configure-access",level:2},{value:"Option A: Using a Config File",id:"option-a-using-a-config-file",level:3},{value:"Option B: Using Command-Line Options",id:"option-b-using-command-line-options",level:3},{value:"Step 2: Run the Upload Command",id:"step-2-run-the-upload-command",level:2},{value:"Step 3: Confirm the Upload",id:"step-3-confirm-the-upload",level:2},{value:"Step 4: Follow the Progress",id:"step-4-follow-the-progress",level:2},{value:"Step 5: Access Your Website",id:"step-5-access-your-website",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uploading-a-website"},"Uploading a Website"),(0,o.kt)("p",null,"Follow these steps to upload a website to the Massa blockchain using the DeWeb CLI.\nYou can configure settings using either a config file or command-line options."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you start, make sure you have the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Massa Wallet"),": A wallet file in YAML format or a secret key.\nRefer to ",(0,o.kt)("a",{parentName:"li",href:"/docs/massaStation/massa-wallet/account-backup"},"Massa wallet documentation")," for guidance on obtaining these."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Node URL"),": The URL for the Massa node you plan to use."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Website Files"),": Build your website files in a directory on your local machine.")),(0,o.kt)("h2",{id:"step-1-configure-access"},"Step 1: Configure Access"),(0,o.kt)("p",null,"You have two ways to configure access for ",(0,o.kt)("inlineCode",{parentName:"p"},"deweb-cli"),": by using a configuration file or by providing options directly on the command line."),(0,o.kt)("h3",{id:"option-a-using-a-config-file"},"Option A: Using a Config File"),(0,o.kt)("p",null,"For persistent settings, create a config file as described in the ",(0,o.kt)("a",{parentName:"p",href:"./config"},"CLI Configuration")," page. This file can store values for ",(0,o.kt)("inlineCode",{parentName:"p"},"node_url"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet_path"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet_password"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"chunk_size"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"secret_key"),"."),(0,o.kt)("h3",{id:"option-b-using-command-line-options"},"Option B: Using Command-Line Options"),(0,o.kt)("p",null,"Alternatively, specify configurations directly in the command line for a one-time setup."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use the following command to upload a website with command-line options:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @massalabs/deweb-cli upload <website_path> --node_url <your_node_url> --wallet <path_to_wallet> --password <your_password>\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Using a Secret Key"),": If you prefer to use a secret key instead of a wallet file, set it as an environment variable:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export SECRET_KEY=<your_secret_key>\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"deweb-cli")," will detect the ",(0,o.kt)("inlineCode",{parentName:"p"},"SECRET_KEY")," variable automatically."))),(0,o.kt)("h2",{id:"step-2-run-the-upload-command"},"Step 2: Run the Upload Command"),(0,o.kt)("p",null,"With your configuration in place, run the ",(0,o.kt)("inlineCode",{parentName:"p"},"upload")," command to deploy your website:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @massalabs/deweb-cli upload /path/to/website-build-directory\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you need to edit an existing website,\nyou can simply use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--address")," flag to specify the smart contract address of the website you want to edit.")),(0,o.kt)("p",null,"This command will begin the upload process."),(0,o.kt)("h2",{id:"step-3-confirm-the-upload"},"Step 3: Confirm the Upload"),(0,o.kt)("p",null,"While the command is running, you will see estimated costs and be prompted to confirm the upload. Select ",(0,o.kt)("inlineCode",{parentName:"p"},"yes")," to proceed."),(0,o.kt)("h2",{id:"step-4-follow-the-progress"},"Step 4: Follow the Progress"),(0,o.kt)("p",null,"The CLI will display the progress of the upload, including the number of chunks uploaded."),(0,o.kt)("p",null,"Once your website has been successfully uploaded, you will see a success message with the address where your website is hosted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Website deployed at AS12v...2UgLS\n")),(0,o.kt)("p",null,"This message confirms that your website has been successfully deployed on the Massa blockchain.\nThe output address (",(0,o.kt)("inlineCode",{parentName:"p"},"AS12v...2UgLS")," in this example) represents the address where your website is hosted."),(0,o.kt)("h2",{id:"step-5-access-your-website"},"Step 5: Access Your Website"),(0,o.kt)("p",null,"To be able to access your website, you need to associate it with a Massa domain. Follow the instructions in ",(0,o.kt)("a",{parentName:"p",href:"../upload/mns"},"Assigning a MNS to your website")," to link your deployed website address to a custom Massa domain."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you encounter any issues or have suggestions, please let us know through our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/massalabs/DeWeb/issues"},"issue tracker"),".")))}d.isMDXComponent=!0}}]);