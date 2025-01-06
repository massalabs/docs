"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[2122],{3905:(t,a,e)=>{e.d(a,{Zo:()=>u,kt:()=>m});var n=e(7294);function o(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function s(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?s(Object(e),!0).forEach((function(a){o(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function l(t,a){if(null==t)return{};var e,n,o=function(t,a){if(null==t)return{};var e,n,o={},s=Object.keys(t);for(n=0;n<s.length;n++)e=s[n],a.indexOf(e)>=0||(o[e]=t[e]);return o}(t,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)e=s[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var r=n.createContext({}),p=function(t){var a=n.useContext(r),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},u=function(t){var a=p(t.components);return n.createElement(r.Provider,{value:a},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(t,a){var e=t.components,o=t.mdxType,s=t.originalType,r=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=p(e),h=o,m=d["".concat(r,".").concat(h)]||d[h]||c[h]||s;return e?n.createElement(m,i(i({ref:a},u),{},{components:e})):n.createElement(m,i({ref:a},u))}));function m(t,a){var e=arguments,o=a&&a.mdxType;if("string"==typeof t||o){var s=e.length,i=new Array(s);i[0]=h;var l={};for(var r in a)hasOwnProperty.call(a,r)&&(l[r]=a[r]);l.originalType=t,l[d]="string"==typeof t?t:o,i[1]=l;for(var p=2;p<s;p++)i[p]=e[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}h.displayName="MDXCreateElement"},61:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=e(7462),o=(e(7294),e(3905));const s={id:"faq",title:"FAQ"},i=void 0,l={unversionedId:"massaStation/faq",id:"massaStation/faq",title:"FAQ",description:"Massa Station Installation",source:"@site/docs/massaStation/faq.mdx",sourceDirName:"massaStation",slug:"/massaStation/faq",permalink:"/docs/massaStation/faq",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/massaStation/faq.mdx",tags:[],version:"current",lastUpdatedBy:"BenRey",lastUpdatedAt:1736169714,formattedLastUpdatedAt:"Jan 6, 2025",frontMatter:{id:"faq",title:"FAQ"},sidebar:"massaStationSidebar",previous:{title:"Browse Decentralized Application",permalink:"/docs/massaStation/browse-decentralized-application"},next:{title:"Troubleshooting",permalink:"/docs/massaStation/troubleshooting"}},r={},p=[{value:"Massa Station Installation",id:"massa-station-installation",level:2},{value:"How do I install Massa Station?",id:"how-do-i-install-massa-station",level:3},{value:"How do I update Massa Station?",id:"how-do-i-update-massa-station",level:3},{value:"How do I uninstall Massa Station?",id:"how-do-i-uninstall-massa-station",level:3},{value:"Installation failed, what do I do?",id:"installation-failed-what-do-i-do",level:3},{value:"Installation fails because of unsupported OS version. What to do?",id:"installation-fails-because-of-unsupported-os-version-what-to-do",level:3},{value:"Antivirus blocked installation of Massa Station. What to do?",id:"antivirus-blocked-installation-of-massa-station-what-to-do",level:3},{value:"Massa Station Usage",id:"massa-station-usage",level:2},{value:"How do I use Massa Station?",id:"how-do-i-use-massa-station",level:3},{value:"Why can&#39;t I use Massa Station on mobile?",id:"why-cant-i-use-massa-station-on-mobile",level:3},{value:"How to connect Massa Station to my own node",id:"how-to-connect-massa-station-to-my-own-node",level:3},{value:"Why can&#39;t I access Massa Station from my browser?",id:"why-cant-i-access-massa-station-from-my-browser",level:3},{value:"&quot;Install&quot; module button doesn&#39;t work. What to do?",id:"install-module-button-doesnt-work-what-to-do",level:3},{value:"Why isn&#39;t Massa Station working on Safari?",id:"why-isnt-massa-station-working-on-safari",level:3},{value:"How to enable HTTPS on unsupported browsers?",id:"how-to-enable-https-on-unsupported-browsers",level:3},{value:"Massa Wallet installation",id:"massa-wallet-installation",level:2},{value:"How to solve a <code>Wallet can&#39;t be opened</code> issue?",id:"how-to-solve-a-wallet-cant-be-opened-issue",level:3},{value:"Massa Station Usage",id:"massa-station-usage-1",level:2},{value:"How to update my MassaWallet module?",id:"how-to-update-my-massawallet-module",level:3}],u={toc:p},d="wrapper";function c(t){let{components:a,...s}=t;return(0,o.kt)(d,(0,n.Z)({},u,s,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"massa-station-installation"},"Massa Station Installation"),(0,o.kt)("h3",{id:"how-do-i-install-massa-station"},"How do I install Massa Station?"),(0,o.kt)("p",null,"You can install Massa Station by following the instructions on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/massaStation/install"},"installation page"),"."),(0,o.kt)("h3",{id:"how-do-i-update-massa-station"},"How do I update Massa Station?"),(0,o.kt)("p",null,"You can update Massa Station by following the same instructions as the installation process. You can find the instructions on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/massaStation/install"},"installation page"),"."),(0,o.kt)("h3",{id:"how-do-i-uninstall-massa-station"},"How do I uninstall Massa Station?"),(0,o.kt)("p",null,"You can uninstall Massa Station by following the instructions on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/massaStation/uninstall"},"uninstallation page"),"."),(0,o.kt)("h3",{id:"installation-failed-what-do-i-do"},"Installation failed, what do I do?"),(0,o.kt)("p",null,"If you are having trouble installing Massa Station, please check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/massaStation/troubleshooting"},"installation troubleshooting page")," for help."),(0,o.kt)("h3",{id:"installation-fails-because-of-unsupported-os-version-what-to-do"},"Installation fails because of unsupported OS version. What to do?"),(0,o.kt)("p",null,"For now, Massa Station is only supported on Windows 10 and 11, MacOS 13 and later, and Debian based Linux distributions."),(0,o.kt)("p",null,"If you are using an unsupported operating system, you can still try to install Massa Station manually by following the instructions on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/massaStation/manual-install"},"manual installation page"),"."),(0,o.kt)("h3",{id:"antivirus-blocked-installation-of-massa-station-what-to-do"},"Antivirus blocked installation of Massa Station. What to do?"),(0,o.kt)("p",null,"We want to assure you that Massa Station is free from viruses, and the antivirus warning is a false positive. We're in the process of obtaining necessary certificates (such as from Apple for MacOS versions), which can trigger such warnings.\nBeing a blockchain app, Massa Station interacts with distant servers and performs cryptographic operations. Antivirus warnings for new apps in this category are common but are mostly not indicative of any threat. If you are using an antivirus that blocks Massa Station, you can try to add Massa Station to the whitelist."),(0,o.kt)("p",null,"Massa Station\u2019s code is publicly accessible and auditable on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/massalabs/station"},"GitHub"),", which means that anybody can check what\u2019s happening. It\u2019s part of our commitment to transparency and security."),(0,o.kt)("h2",{id:"massa-station-usage"},"Massa Station Usage"),(0,o.kt)("h3",{id:"how-do-i-use-massa-station"},"How do I use Massa Station?"),(0,o.kt)("p",null,"We have detailed instructions on how to use Massa Station such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/massaStation/browse-decentralized-application"},"Browse Decentralized Apps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/massaStation/massa-wallet/getting-started"},"Install Massa Wallet"))),(0,o.kt)("h3",{id:"why-cant-i-use-massa-station-on-mobile"},"Why can't I use Massa Station on mobile?"),(0,o.kt)("p",null,"Massa Station is a desktop super-app that, once opened, operates within your web browser. A mobile version is not available at this time."),(0,o.kt)("h3",{id:"how-to-connect-massa-station-to-my-own-node"},"How to connect Massa Station to my own node"),(0,o.kt)("p",null,"For users operating on Debian, Ubuntu, navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.config/massa-station"),".\nFor macOS systems, navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"~/Library/Application Support/massa-station"),".\nIf you are using Windows, the corresponding directory is ",(0,o.kt)("inlineCode",{parentName:"p"},"%APPDATA%\\massa-station"),".\nOnce there, locate and modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"config_network.yaml"),".\nYou'll want to append the following lines to the bottom of the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"NodeName:\n  URLs:\n    - https://my-node-url\n  ChainID: <Your node's corresponding chain ID>\n  Default: false # or true if you want to set this node as the default\n")),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeName")," with a name of your choosing for the node, this will appear in the dropdown menu."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"URLs")," section, put the URL that Massa Station will use to communicate with your node. It is usually the IP address of your node, followed by the port used by the ",(0,o.kt)("a",{parentName:"p",href:"/docs/build/api/jsonrpc"},"Node Public API"),", which is ",(0,o.kt)("inlineCode",{parentName:"p"},"33035")," by default."),(0,o.kt)("p",null,"For example: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://37.167.156.118:33035"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"For Massa Station to be able to connect to your node, the ",(0,o.kt)("strong",{parentName:"p"},"Public API port must be open")," on the node server.")),(0,o.kt)("p",null,"Additionally, suppose you frequently access a particular node and prefer Massa Station to automatically select this node on start-up.\nIn that case, you can make it the default node by changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Default")," field to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),",\nand change the default field for the mainnet node to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,"After these lines are added, close and reopen Massa Station. Your newly named node will now be a part of the network selection dropdown menu.\nSelecting it will connect Massa Station and its plugins, such as Massa Wallet, to your specified node."),(0,o.kt)("p",null,"For those whose nodes are on the MainNet, it's essential that the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChainID")," accurately reflects the MainNet's chain ID,\nBy ensuring the correct ",(0,o.kt)("inlineCode",{parentName:"p"},"ChainID")," is set, your Massa Station will be in sync with the intended network."),(0,o.kt)("h3",{id:"why-cant-i-access-massa-station-from-my-browser"},"Why can't I access Massa Station from my browser?"),(0,o.kt)("p",null,"Massa Station must be installed and running on your computer to be able to access it from your browser. If you have installed Massa Station, please make sure it is running."),(0,o.kt)("p",null,"If Massa Station is running, please check that you are using the correct URL. The URL should be ",(0,o.kt)("inlineCode",{parentName:"p"},"https://station.massa/"),"."),(0,o.kt)("p",null,"If you are still having trouble accessing Massa Station, please check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/massaStation/troubleshooting"},"troubleshooting page")," for help."),(0,o.kt)("h3",{id:"install-module-button-doesnt-work-what-to-do"},'"Install" module button doesn\'t work. What to do?'),(0,o.kt)("p",null,"This is a known issue that happens when a module is stored on GitHub. We are investigating the issue."),(0,o.kt)("p",null,"In the meantime, you can install the module manually by following the instructions on the right panel of the module store."),(0,o.kt)("p",null,"For example with the Massa Wallet module:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/massalabs/station-massa-wallet/releases/latest"},"latest Massa Wallet release page"),"."),(0,o.kt)("li",{parentName:"ol"},"Copy the URL of the ",(0,o.kt)("inlineCode",{parentName:"li"},".zip")," file corresponding to your operating system."),(0,o.kt)("li",{parentName:"ol"},'Paste the URL in the right panel of the module store and click on "Install".')),(0,o.kt)("h3",{id:"why-isnt-massa-station-working-on-safari"},"Why isn't Massa Station working on Safari?"),(0,o.kt)("p",null,"Massa Station is only available in HTTP on Safari. Supporting HTTPS on Safari is on our roadmap but we don't have an ETA yet."),(0,o.kt)("p",null,"To use Massa Station in HTTP on Safari, simply modify the URL to ",(0,o.kt)("a",{parentName:"p",href:"http://station.massa/"},"http://station.massa/")," (or click on the link)."),(0,o.kt)("h3",{id:"how-to-enable-https-on-unsupported-browsers"},"How to enable HTTPS on unsupported browsers?"),(0,o.kt)("p",null,"To enable HTTPS on unsupported browsers, you need to install the Massa Station certificate authority."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Locate the certificate authority file at the following path:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"On Windows, follow those steps:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Copy this path: ",(0,o.kt)("inlineCode",{parentName:"li"},"C:\\Program Files (x86)\\MassaStation\\certs\\"),(0,o.kt)("admonition",{parentName:"li",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The path might be different if you changed Massa Station location"))),(0,o.kt)("li",{parentName:"ol"},"Open the File Explorer"),(0,o.kt)("li",{parentName:"ol"},"Paste the path you copied previously in the address bar"),(0,o.kt)("li",{parentName:"ol"},"Press enter"))),(0,o.kt)("li",{parentName:"ul"},"On Macos, follow those steps:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Copy this path: ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/massastation/certs/")),(0,o.kt)("li",{parentName:"ol"},"Open finder"),(0,o.kt)("li",{parentName:"ol"},'Click on the "Go" button at the top left of your screen'),(0,o.kt)("li",{parentName:"ol"},'Click on the "Go to folder..." button at the bottom of the menu'),(0,o.kt)("li",{parentName:"ol"},"Paste the path you copied previously"),(0,o.kt)("li",{parentName:"ol"},"Press enter"))),(0,o.kt)("li",{parentName:"ul"},"On Linux, the file is located in ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/massastation/certs/")))),(0,o.kt)("li",{parentName:"ol"},"In this folder, you will find a file named ",(0,o.kt)("inlineCode",{parentName:"li"},"rootCA.pem"),". Keep this folder open, you will need it in the next steps."),(0,o.kt)("li",{parentName:"ol"},"Open your browser's settings or preferences."),(0,o.kt)("li",{parentName:"ol"},'Search for the "Security" or "Privacy" section, and look for an option related to certificates.'),(0,o.kt)("li",{parentName:"ol"},"Find the option to import or add a certificate authority."),(0,o.kt)("li",{parentName:"ol"},"Choose the ",(0,o.kt)("inlineCode",{parentName:"li"},"rootCA.pem")," file from the specified path.")),(0,o.kt)("h2",{id:"massa-wallet-installation"},"Massa Wallet installation"),(0,o.kt)("h3",{id:"how-to-solve-a-wallet-cant-be-opened-issue"},"How to solve a ",(0,o.kt)("inlineCode",{parentName:"h3"},"Wallet can't be opened")," issue?"),(0,o.kt)("p",null,"It depends on your OS and its configuration, please check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/massaStation/troubleshooting#linux-3"},"troubleshooting page")),(0,o.kt)("h2",{id:"massa-station-usage-1"},"Massa Station Usage"),(0,o.kt)("h3",{id:"how-to-update-my-massawallet-module"},"How to update my MassaWallet module?"),(0,o.kt)("p",null,"MassaWallet is Massa Station module which means that you can manage it through Massa Station's interface."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open Massa Station (see ",(0,o.kt)("a",{parentName:"li",href:"https://docs.massa.net/docs/massaStation/install"},"here"),")"),(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("a",{parentName:"li",href:"https://station.massa/web/store"},"module store page")),(0,o.kt)("li",{parentName:"ol"},"Click on the update icon (see example in screenshot below)\n",(0,o.kt)("img",{alt:"Update",src:e(8282).Z,width:"3024",height:"1644"})),(0,o.kt)("li",{parentName:"ol"},"Your wallet is now updated!")))}c.isMDXComponent=!0},8282:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/WalletUpdate_Icon-3dedfe46ccad947caafc0766d06e60ea.png"}}]);