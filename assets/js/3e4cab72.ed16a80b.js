"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[6278],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(a),u=i,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2280:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(7462),i=(a(7294),a(3905));const r={id:"manual-install",title:"Manual Install"},o=void 0,l={unversionedId:"massaStation/manual-install",id:"massaStation/manual-install",title:"Manual Install",description:"Disclaimer",source:"@site/docs/massaStation/manual-install.mdx",sourceDirName:"massaStation",slug:"/massaStation/manual-install",permalink:"/docs/massaStation/manual-install",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/massaStation/manual-install.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1704819556,formattedLastUpdatedAt:"Jan 9, 2024",frontMatter:{id:"manual-install",title:"Manual Install"},sidebar:"massaStationSidebar",previous:{title:"Install",permalink:"/docs/massaStation/install"},next:{title:"Uninstall",permalink:"/docs/massaStation/uninstall"}},s={},m=[{value:"Installation",id:"installation",level:2},{value:"Handle <code>station.massa</code> redirection",id:"handle-stationmassa-redirection",level:3},{value:"Handle <code>*.massa</code> redirection",id:"handle-massa-redirection",level:3},{value:"Add HTTPS support",id:"add-https-support",level:3},{value:"Windows",id:"windows",level:4},{value:"MacOS",id:"macos",level:4},{value:"Linux",id:"linux",level:4}],p={toc:m},d="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("h2",{parentName:"admonition",id:"disclaimer"},"Disclaimer"),(0,i.kt)("p",{parentName:"admonition"},"This guide is intended for advanced users who are familiar with the command line and system administration.")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"If you are unable to install ",(0,i.kt)("em",{parentName:"p"},"Massa Station")," using the methods described in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/massaStation/install"},"Installation")," section,\nor simply prefer to install it manually, you can follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the latest version of the ",(0,i.kt)("em",{parentName:"li"},"Massa Station")," binary for your operating system from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/massalabs/station/releases/latest"},"here"),".",(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Make sure to download the binary for your operating system and architecture.",(0,i.kt)("br",null),"\nFor example, if you are using Windows 10 on a 64-bit machine, you should download the ",(0,i.kt)("inlineCode",{parentName:"p"},"massastation_windows_amd64")," file.",(0,i.kt)("br",null),"\nOn Apple Silicon (M1, M2...) Macs, you should download the ",(0,i.kt)("inlineCode",{parentName:"p"},"massastation_darwin_arm64")," file, while Intel Macs should download the ",(0,i.kt)("inlineCode",{parentName:"p"},"massastation_darwin_amd64")," file."))),(0,i.kt)("li",{parentName:"ol"},"Put the downloaded binary in a directory of your choice."),(0,i.kt)("li",{parentName:"ol"},"On MacOS and Linux:",(0,i.kt)("br",null),"\n3.1. create the ",(0,i.kt)("em",{parentName:"li"},"Massa Station")," data directory:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -m 777 -p /usr/local/share/massastation\n")),"3.2. Add executable permissions to the binary:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"chmod +x massastation_$OS_$ARCH\n")),"3.3. Move the binary to ",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/local/bin"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"mv massastation_$OS_$ARCH /usr/local/bin/massastation\n"))),(0,i.kt)("li",{parentName:"ol"},"Run the binary to start ",(0,i.kt)("em",{parentName:"li"},"Massa Station"),"."),(0,i.kt)("li",{parentName:"ol"},"Open your browser and navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost/")," to access ",(0,i.kt)("em",{parentName:"li"},"Massa Station"),".")),(0,i.kt)("p",null,"This method of installation will not install the necessary dependencies for ",(0,i.kt)("em",{parentName:"p"},"Massa Station")," to function correctly and so,\nfeatures such as HTTPS support and accessing ",(0,i.kt)("inlineCode",{parentName:"p"},".massa")," domains will not work."),(0,i.kt)("h3",{id:"handle-stationmassa-redirection"},"Handle ",(0,i.kt)("inlineCode",{parentName:"h3"},"station.massa")," redirection"),(0,i.kt)("p",null,"If you want to access ",(0,i.kt)("em",{parentName:"p"},"Massa Station")," by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"station.massa")," in your browser's address bar, you will need to configure your system to redirect\nrequests to ",(0,i.kt)("inlineCode",{parentName:"p"},"station.massa")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),".\nYou can make this change by editing the 'hosts' file on your computer, regardless of whether you're using Windows, MacOS, or Linux:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the 'hosts' file, which is located at:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Windows"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Windows\\System32\\drivers\\etc\\hosts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MacOS")," and ",(0,i.kt)("strong",{parentName:"li"},"Linux"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/hosts")))),(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"127.0.0.1 station.massa")," at the end of the file."),(0,i.kt)("li",{parentName:"ol"},"Save and close the file.")),(0,i.kt)("h3",{id:"handle-massa-redirection"},"Handle ",(0,i.kt)("inlineCode",{parentName:"h3"},"*.massa")," redirection"),(0,i.kt)("p",null,"If you want to access ",(0,i.kt)("inlineCode",{parentName:"p"},".massa")," domains in your web browser, you will need to install and configure a local DNS server on your system."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Windows"),": ",(0,i.kt)("a",{parentName:"li",href:"https://sourceforge.net/projects/acrylic/"},"Acrylic DNS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MacOS"),": Install ",(0,i.kt)("a",{parentName:"li",href:"https://formulae.brew.sh/formula/dnsmasq#default"},"DNSMasq")," using ",(0,i.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Linux"),": DNSMasq might be enablable using Network Manager or be available through your package manager.")),(0,i.kt)("p",null,"Once installed, you will need to configure the DNS server to redirect all requests to ",(0,i.kt)("inlineCode",{parentName:"p"},".massa")," domains to ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),")."),(0,i.kt)("h3",{id:"add-https-support"},"Add HTTPS support"),(0,i.kt)("p",null,"Massa Station will automatically generate a self-signed certificate for HTTPS support when it is first run, but to do it,\nit requires some dependencies to be installed on your system."),(0,i.kt)("h4",{id:"windows"},"Windows"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download a Windows version of the Mar Tools"),(0,i.kt)("li",{parentName:"ol"},"Extract the contents of the archive to a directory named ",(0,i.kt)("inlineCode",{parentName:"li"},"mar-tools")," in the same directory as the ",(0,i.kt)("inlineCode",{parentName:"li"},"massastation.exe")," binary."),(0,i.kt)("li",{parentName:"ol"},"Run the ",(0,i.kt)("inlineCode",{parentName:"li"},"massastation.exe")," binary to start ",(0,i.kt)("em",{parentName:"li"},"Massa Station"),".")),(0,i.kt)("h4",{id:"macos"},"MacOS"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew"),"."),(0,i.kt)("li",{parentName:"ol"},"Install the ",(0,i.kt)("inlineCode",{parentName:"li"},"nss")," package using Homebrew: ",(0,i.kt)("inlineCode",{parentName:"li"},"brew install nss")),(0,i.kt)("li",{parentName:"ol"},"Create the certificate directory:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -m 777 -p /etc/massastation/certs\n"))),(0,i.kt)("li",{parentName:"ol"},"Run the ",(0,i.kt)("inlineCode",{parentName:"li"},"massastation")," binary in repair mode with ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ./massastation --repair\n"))),(0,i.kt)("li",{parentName:"ol"},"Run the ",(0,i.kt)("inlineCode",{parentName:"li"},"massastation")," binary to start ",(0,i.kt)("em",{parentName:"li"},"Massa Station"),".")),(0,i.kt)("h4",{id:"linux"},"Linux"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the ",(0,i.kt)("inlineCode",{parentName:"li"},"nss")," package using your package manager."),(0,i.kt)("li",{parentName:"ol"},"Create the certificate directory:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -m 777 -p /etc/massastation/certs\n"))),(0,i.kt)("li",{parentName:"ol"},"Run the ",(0,i.kt)("inlineCode",{parentName:"li"},"massastation")," binary to start ",(0,i.kt)("em",{parentName:"li"},"Massa Station"),".")))}c.isMDXComponent=!0}}]);