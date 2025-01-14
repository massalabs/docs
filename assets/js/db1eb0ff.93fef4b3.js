"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[3562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={title:"Uploading a Website"},r="Uploading a Website",s={unversionedId:"deweb/cli/upload",id:"deweb/cli/upload",title:"Uploading a Website",description:"Follow these steps to upload a website to the Massa blockchain using the DeWeb CLI.",source:"@site/docs/deweb/cli/upload.mdx",sourceDirName:"deweb/cli",slug:"/deweb/cli/upload",permalink:"/docs/deweb/cli/upload",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/deweb/cli/upload.mdx",tags:[],version:"current",lastUpdatedBy:"Peterjah",lastUpdatedAt:1736847649,formattedLastUpdatedAt:"Jan 14, 2025",frontMatter:{title:"Uploading a Website"},sidebar:"massaDeWebSidebar",previous:{title:"DeWeb CLI Overview",permalink:"/docs/deweb/cli/overview"},next:{title:"CLI Configuration",permalink:"/docs/deweb/cli/config"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Website Requirements",id:"website-requirements",level:3},{value:"Supported Technologies",id:"supported-technologies",level:4},{value:"Frameworks Requiring Configuration",id:"frameworks-requiring-configuration",level:4},{value:"Unsupported Configurations",id:"unsupported-configurations",level:4},{value:"Step 1: Configure Access",id:"step-1-configure-access",level:2},{value:"Option A: Using a Config File",id:"option-a-using-a-config-file",level:3},{value:"Option B: Using Command-Line Options",id:"option-b-using-command-line-options",level:3},{value:"Step 2: Run the Upload Command",id:"step-2-run-the-upload-command",level:2},{value:"Step 3: Confirm the Upload",id:"step-3-confirm-the-upload",level:2},{value:"Step 4: Follow the Progress",id:"step-4-follow-the-progress",level:2},{value:"Step 5: Access Your Website",id:"step-5-access-your-website",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"uploading-a-website"},"Uploading a Website"),(0,i.kt)("p",null,"Follow these steps to upload a website to the Massa blockchain using the DeWeb CLI.\nYou can configure settings using either a config file or command-line options."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before you start, make sure you have the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Massa Wallet"),": A wallet file in YAML format or a secret key.\nRefer to ",(0,i.kt)("a",{parentName:"li",href:"/docs/massaStation/massa-wallet/account-backup"},"Massa wallet documentation")," for guidance on obtaining these."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Node URL"),": The URL for the Massa node you plan to use."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website Files"),": Ensure your website files are in a directory on your local machine and\nmeet the requirements outlined below.")),(0,i.kt)("h3",{id:"website-requirements"},"Website Requirements"),(0,i.kt)("p",null,"DeWeb only supports websites that are pre-built. This means the files are generated in advance and\nready to serve directly from storage. Your website bundle must include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"An ",(0,i.kt)("inlineCode",{parentName:"strong"},"index.html")," file")," at the root of the directory, which serves as the entry point for your website."),(0,i.kt)("li",{parentName:"ul"},"Any supporting files (e.g., CSS, JavaScript, images) within the same directory.")),(0,i.kt)("p",null,"This format allows the website to be served directly from the blockchain without the need for server-side processing\nbut supports technologies like Client-Side Rendering (CSR), Client-Side Routing, Single Page Applications (SPAs),\nand communication with external APIs."),(0,i.kt)("h4",{id:"supported-technologies"},"Supported Technologies"),(0,i.kt)("p",null,"Any tools, frameworks, or build systems that generate pre-built files as described above should work with DeWeb.\nThis includes projects that output an ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file along with all necessary assets for client-side rendering.\nExamples of supported technologies include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://reactjs.org/"},"React"))," applications built with tools like ",(0,i.kt)("a",{parentName:"li",href:"https://create-react-app.dev/"},"Create React App")," or ",(0,i.kt)("a",{parentName:"li",href:"https://vitejs.dev/"},"Vite"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://vuejs.org/"},"Vue.js"))),(0,i.kt)("li",{parentName:"ul"},"Projects built using build tools like ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://vitejs.dev/"},"Vite")))),(0,i.kt)("p",null,"These technologies produce client-side applications that are bundled into static files and can be served as-is.\nThey support client-side routing, API calls, and other interactive features, provided all necessary files are included in the build output."),(0,i.kt)("h4",{id:"frameworks-requiring-configuration"},"Frameworks Requiring Configuration"),(0,i.kt)("p",null,"Frameworks such as ",(0,i.kt)("strong",{parentName:"p"},"Next.js"),", ",(0,i.kt)("strong",{parentName:"p"},"Nuxt.js"),", or ",(0,i.kt)("strong",{parentName:"p"},"SvelteKit")," can be used with DeWeb ",(0,i.kt)("strong",{parentName:"p"},"if they are explicitly configured to output fully static files"),".\nBy default, these frameworks may rely on features like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Server-Side Rendering (SSR):")," Pages are generated dynamically on the server at runtime."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dynamic Content Generation:")," Content depends on backend processing or API routes provided by the framework.")),(0,i.kt)("p",null,"To make these frameworks compatible with DeWeb, you need to configure them to generate a static build.\nPlease consult your framework's documentation for detailed instructions on generating a static build compatible with DeWeb."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"While we aim to support a wide range of frameworks, compatibility may vary.\nPlease ensure your setup works as expected.\nIf you encounter any issues or need assistance, feel free to report them at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/massalabs/DeWeb/issues"},"https://github.com/massalabs/DeWeb/issues"),".\nA static bundle, as described, should work seamlessly with DeWeb.")),(0,i.kt)("h4",{id:"unsupported-configurations"},"Unsupported Configurations"),(0,i.kt)("p",null,"Websites or applications that require server-side rendering, depend on backend servers to generate pages,\nor rely on dynamic content generation at runtime are ",(0,i.kt)("strong",{parentName:"p"},"not supported")," unless they can be configured to output static files as described above."),(0,i.kt)("p",null,"Examples of unsupported setups include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Default configurations of Next.js, Nuxt.js, or SvelteKit")," that use server-side rendering or dynamic routes."),(0,i.kt)("li",{parentName:"ul"},"Applications that depend on server-side code or databases to serve content."),(0,i.kt)("li",{parentName:"ul"},"Projects that cannot produce a self-contained bundle with an ",(0,i.kt)("inlineCode",{parentName:"li"},"index.html")," file and all necessary assets.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We are continuously working to expand compatibility with a wider range of frameworks and setups.\nStay tuned for updates and improvements to DeWeb's capabilities.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Summary:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Supported:")," Any client-side applications that build to a static bundle containing an ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," and assets. This includes SPAs with client-side routing and API calls, as long as all necessary files are included in the build output.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Conditionally Supported:")," Frameworks like Next.js, Nuxt.js, and SvelteKit, ",(0,i.kt)("strong",{parentName:"p"},"if")," they are configured to output static files (no SSR or dynamic server-side features).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Unsupported:")," Applications requiring server-side rendering, dynamic server-side features, or backend processing at runtime."))),(0,i.kt)("h2",{id:"step-1-configure-access"},"Step 1: Configure Access"),(0,i.kt)("p",null,"You have two ways to configure access for ",(0,i.kt)("inlineCode",{parentName:"p"},"deweb-cli"),": by using a configuration file or by providing options directly on the command line."),(0,i.kt)("h3",{id:"option-a-using-a-config-file"},"Option A: Using a Config File"),(0,i.kt)("p",null,"For persistent settings, create a config file as described in the ",(0,i.kt)("a",{parentName:"p",href:"./config"},"CLI Configuration")," page. This file can store values for ",(0,i.kt)("inlineCode",{parentName:"p"},"node_url"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet_path"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet_password"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"chunk_size"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"secret_key"),"."),(0,i.kt)("h3",{id:"option-b-using-command-line-options"},"Option B: Using Command-Line Options"),(0,i.kt)("p",null,"Alternatively, specify configurations directly in the command line for a one-time setup."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use the following command to upload a website with command-line options:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx @massalabs/deweb-cli upload <website_path> --node_url <your_node_url> --wallet <path_to_wallet> --password <your_password>\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Using a Secret Key"),": If you prefer to use a secret key instead of a wallet file, set it as an environment variable:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export SECRET_KEY=<your_secret_key>\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"deweb-cli")," will detect the ",(0,i.kt)("inlineCode",{parentName:"p"},"SECRET_KEY")," variable automatically."))),(0,i.kt)("h2",{id:"step-2-run-the-upload-command"},"Step 2: Run the Upload Command"),(0,i.kt)("p",null,"With your configuration in place, run the ",(0,i.kt)("inlineCode",{parentName:"p"},"upload")," command to deploy your website:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx @massalabs/deweb-cli upload /path/to/website-build-directory\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you need to edit an existing website,\nyou can simply use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--address")," flag to specify the smart contract address of the website you want to edit.")),(0,i.kt)("p",null,"This command will begin the upload process."),(0,i.kt)("h2",{id:"step-3-confirm-the-upload"},"Step 3: Confirm the Upload"),(0,i.kt)("p",null,"While the command is running, you will see estimated costs and be prompted to confirm the upload. Select ",(0,i.kt)("inlineCode",{parentName:"p"},"yes")," to proceed."),(0,i.kt)("h2",{id:"step-4-follow-the-progress"},"Step 4: Follow the Progress"),(0,i.kt)("p",null,"The CLI will display the progress of the upload, including the number of chunks uploaded."),(0,i.kt)("p",null,"Once your website has been successfully uploaded, you will see a success message with the address where your website is hosted:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Website deployed at AS12v...2UgLS\n")),(0,i.kt)("p",null,"This message confirms that your website has been successfully deployed on the Massa blockchain.\nThe output address (",(0,i.kt)("inlineCode",{parentName:"p"},"AS12v...2UgLS")," in this example) represents the address where your website is hosted."),(0,i.kt)("h2",{id:"step-5-access-your-website"},"Step 5: Access Your Website"),(0,i.kt)("p",null,"To be able to access your website, you need to associate it with a Massa domain. Follow the instructions in ",(0,i.kt)("a",{parentName:"p",href:"../upload/mns"},"Assigning a MNS to your website")," to link your deployed website address to a custom Massa domain."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you encounter any issues or have suggestions, please let us know through our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/massalabs/DeWeb/issues"},"issue tracker"),".")))}c.isMDXComponent=!0}}]);