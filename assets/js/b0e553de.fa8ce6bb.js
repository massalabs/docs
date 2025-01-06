"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[872],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var r=n.createContext({}),p=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(r.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(a),m=s,c=h["".concat(r,".").concat(m)]||h[m]||d[m]||o;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[h]="string"==typeof e?e:s,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},320:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),s=(a(7294),a(3905));const o={id:"troubleshooting",title:"Troubleshooting"},i=void 0,l={unversionedId:"massaStation/troubleshooting",id:"massaStation/troubleshooting",title:"Troubleshooting",description:"This page will help you solve some common issues you might encounter while using Massa Station.",source:"@site/docs/massaStation/troubleshooting.mdx",sourceDirName:"massaStation",slug:"/massaStation/troubleshooting",permalink:"/docs/massaStation/troubleshooting",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/massaStation/troubleshooting.mdx",tags:[],version:"current",lastUpdatedBy:"BenRey",lastUpdatedAt:1736169714,formattedLastUpdatedAt:"Jan 6, 2025",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"massaStationSidebar",previous:{title:"FAQ",permalink:"/docs/massaStation/faq"},next:{title:"Plugin Creation Guidelines",permalink:"/docs/massaStation/guidelines"}},r={},p=[{value:"Installation",id:"installation",level:2},{value:"On Windows, after installation, my computer lost internet connection",id:"on-windows-after-installation-my-computer-lost-internet-connection",level:3},{value:"Get installer logs",id:"get-installer-logs",level:3},{value:"Windows",id:"windows",level:4},{value:"MacOS",id:"macos",level:4},{value:"Linux",id:"linux",level:4},{value:"Massa Station",id:"massa-station",level:2},{value:"Massa Station isn&#39;t starting",id:"massa-station-isnt-starting",level:3},{value:"I get a page with the error &quot;DNS_PROBE_FINISHED_NXDOMAIN&quot;",id:"i-get-a-page-with-the-error-dns_probe_finished_nxdomain",level:3},{value:"The DNS server isn&#39;t installed",id:"the-dns-server-isnt-installed",level:4},{value:"The DNS server isn&#39;t running",id:"the-dns-server-isnt-running",level:4},{value:"Your web browser is using another DNS server",id:"your-web-browser-is-using-another-dns-server",level:4},{value:"I get a page with the error &quot;ERR_CONNECTION_REFUSED&quot;",id:"i-get-a-page-with-the-error-err_connection_refused",level:3},{value:"Get Massa Station logs",id:"get-massa-station-logs",level:3},{value:"Windows",id:"windows-1",level:4},{value:"MacOS",id:"macos-1",level:4},{value:"Linux",id:"linux-1",level:4},{value:"Massa Wallet",id:"massa-wallet",level:2},{value:"Get Massa Wallet logs",id:"get-massa-wallet-logs",level:3},{value:"Windows",id:"windows-2",level:4},{value:"MacOS",id:"macos-2",level:4},{value:"Linux",id:"linux-2",level:4},{value:"<code>Massa Wallet can&#39;t be opened</code> error",id:"massa-wallet-cant-be-opened-error",level:2},{value:"Linux",id:"linux-3",level:4}],u={toc:p},h="wrapper";function d(e){let{components:t,...o}=e;return(0,s.kt)(h,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This page will help you solve some common issues you might encounter while using Massa Station."),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("h3",{id:"on-windows-after-installation-my-computer-lost-internet-connection"},"On Windows, after installation, my computer lost internet connection"),(0,s.kt)("p",null,"Some computers will lose internet connection after the installation. This is a known issue."),(0,s.kt)("p",null,"To fix this issue, simply ",(0,s.kt)("strong",{parentName:"p"},"restart your computer"),".\nIf the issue persists, please follow the instructions to ",(0,s.kt)("a",{parentName:"p",href:"#get-installer-logs"},"get the installer logs")," and open a new issue on the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/massalabs/station/issues/new?assignees=&labels=issue%3Abug&projects=&template=bug.md&title="},"Massa Station repository"),"\nso we can help you."),(0,s.kt)("h3",{id:"get-installer-logs"},"Get installer logs"),(0,s.kt)("p",null,"This section will help you get the logs of the installation process, please follow the instructions for your operating system."),(0,s.kt)("p",null,"Once you have the logs, please open a new issue on the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/massalabs/station/issues/new?assignees=&labels=issue%3Abug&projects=&template=bug.md&title="},"Massa Station repository"),"\nand attach the logs to your issue so we can help you."),(0,s.kt)("h4",{id:"windows"},"Windows"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Press ",(0,s.kt)("strong",{parentName:"li"},"Win + R"),", a small window with a text box should open."),(0,s.kt)("li",{parentName:"ol"},"In this window, type ",(0,s.kt)("inlineCode",{parentName:"li"},"%TEMP%")," and press ",(0,s.kt)("strong",{parentName:"li"},"Enter"),"."),(0,s.kt)("li",{parentName:"ol"},"A File Explorer window should appear in a ",(0,s.kt)("strong",{parentName:"li"},"Temp")," directory."),(0,s.kt)("li",{parentName:"ol"},"In this directory, search for the file named ",(0,s.kt)("inlineCode",{parentName:"li"},"MASSASTATION_INSTALLER_{VERSION}.log"),"\n( With ","{","VERSION} being the version of Massa Station you are trying to install).")),(0,s.kt)("h4",{id:"macos"},"MacOS"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Do not close")," the installer window, if you already did, please restart the installation process until\nit fails and ",(0,s.kt)("strong",{parentName:"li"},"do not close")," the installer window."),(0,s.kt)("li",{parentName:"ol"},"Press ",(0,s.kt)("strong",{parentName:"li"},"CMD + L"),"."),(0,s.kt)("li",{parentName:"ol"},'A small window named "Installer Log" should appear at the bottom of your screen.'),(0,s.kt)("li",{parentName:"ol"},'On the top right of the window, you should see a "Save" button, click on it and save the file in an easy\naccess location, for example your ',(0,s.kt)("strong",{parentName:"li"},"Download")," directory.")),(0,s.kt)("h4",{id:"linux"},"Linux"),(0,s.kt)("p",null,"If you used the GUI installation method, please try to install Massa Station using the ",(0,s.kt)("a",{parentName:"p",href:"/docs/massaStation/install#terminal-installation-using-apt"},"Terminal method"),"."),(0,s.kt)("p",null,"If you used the Terminal installation method, please send us the output of the command you used to install Massa Station."),(0,s.kt)("h2",{id:"massa-station"},"Massa Station"),(0,s.kt)("h3",{id:"massa-station-isnt-starting"},"Massa Station isn't starting"),(0,s.kt)("p",null,"To check what is happening, you can open Massa Station logs. See ",(0,s.kt)("a",{parentName:"p",href:"#get-massa-station-logs"},"Get Massa Station logs")," to know how to get them."),(0,s.kt)("p",null,"Once you have the logs, please go at the end of the file and look for the last error. If you see an error like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"listen tcp :80: bind: address already in use\n")),(0,s.kt)("p",null,"That means that another application is already using the port 80. You can either stop the application using the port 80 or change its port."),(0,s.kt)("h3",{id:"i-get-a-page-with-the-error-dns_probe_finished_nxdomain"},'I get a page with the error "DNS_PROBE_FINISHED_NXDOMAIN"'),(0,s.kt)("p",null,"This error means that your computer can't resolve the domain name of Massa Station. This can happen in multiple cases:"),(0,s.kt)("h4",{id:"the-dns-server-isnt-installed"},"The DNS server isn't installed"),(0,s.kt)("p",null,"For Windows users, if you unselected the option to install the DNS server during the installation of Massa Station, ",(0,s.kt)("inlineCode",{parentName:"p"},".massa")," domain names can't be resolved."),(0,s.kt)("p",null,"To fix this, you can either reinstall Massa Station and make sure to select the option to install the DNS server\nor you can manually change your DNS server to redirect the Massa Station domain name to your computer as explained in\nthe ",(0,s.kt)("a",{parentName:"p",href:"/docs/massaStation/manual-install#handle-massa-redirection"},"manual installation")," section."),(0,s.kt)("p",null,"If the problem persists, please go to the ",(0,s.kt)("a",{parentName:"p",href:"#your-web-browser-is-using-another-dns-server"},"Web browser is using another DNS server")," section."),(0,s.kt)("h4",{id:"the-dns-server-isnt-running"},"The DNS server isn't running"),(0,s.kt)("p",null,"If the DNS server is installed but not running, ",(0,s.kt)("inlineCode",{parentName:"p"},".massa")," domain names can't be resolved.\nPlease restart your computer to make sure that the DNS server is running."),(0,s.kt)("p",null,"If the problem persists, please go to the next section."),(0,s.kt)("h4",{id:"your-web-browser-is-using-another-dns-server"},"Your web browser is using another DNS server"),(0,s.kt)("p",null,'If the DNS server is installed and running, the problem might be that your web browser is using another DNS server.\nIn Chromium based browsers, you can go to your browser settings and search for "Use secure DNS" and disable it.'),(0,s.kt)("p",null,"If the problem persists, please open an issue with the logs of Massa Station as explained in the\n",(0,s.kt)("a",{parentName:"p",href:"#get-massa-station-logs"},"Get Massa Station logs")," section."),(0,s.kt)("h3",{id:"i-get-a-page-with-the-error-err_connection_refused"},'I get a page with the error "ERR_CONNECTION_REFUSED"'),(0,s.kt)("p",null,"This error means that your computer can't connect to Massa Station.\nThis might be because Massa Station isn't running or because the redirection to ",(0,s.kt)("inlineCode",{parentName:"p"},"station.massa")," isn't working."),(0,s.kt)("p",null,"Please check that Massa Station is running and retry to open ",(0,s.kt)("a",{parentName:"p",href:"https://station.massa/"},"https://station.massa/")," in your web browser."),(0,s.kt)("p",null,"If you still have the error, please open http://localhost/ in your web browser.\nIf you get the same error, that means that Massa Station isn't running. In that case, please follow the instructions provided in the ",(0,s.kt)("a",{parentName:"p",href:"#massa-station-isnt-starting"},"Massa Station isn't starting")," section."),(0,s.kt)("h3",{id:"get-massa-station-logs"},"Get Massa Station logs"),(0,s.kt)("p",null,"In case you encounter an issue that isn't listed in the FAQ or previously on this page, we will need the logs of Massa Station to help you.\nThis section will explain you how to get them."),(0,s.kt)("p",null,"Please make sure to follow the instructions for your operating system."),(0,s.kt)("p",null,"Once you have the logs, please open a new issue on the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/massalabs/station/issues/new?assignees=&labels=issue%3Abug&projects=&template=bug.md&title="},"Massa Station repository"),"\nand attach the logs to your issue so we can help you."),(0,s.kt)("h4",{id:"windows-1"},"Windows"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Copy ",(0,s.kt)("inlineCode",{parentName:"li"},"C:\\Program Files (x86)\\MassaStation\\logs\\")),(0,s.kt)("li",{parentName:"ol"},"Press ",(0,s.kt)("strong",{parentName:"li"},"Win + R"),", a small window with a text box should open."),(0,s.kt)("li",{parentName:"ol"},"Paste the previously copied text in the window and press ",(0,s.kt)("strong",{parentName:"li"},"Enter"),"."),(0,s.kt)("li",{parentName:"ol"},"A File Explorer window should appear in a the Massa Station logs directory"),(0,s.kt)("li",{parentName:"ol"},"In this directory, search for the file named ",(0,s.kt)("inlineCode",{parentName:"li"},"massastation.log"))),(0,s.kt)("h4",{id:"macos-1"},"MacOS"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Copy this path: ",(0,s.kt)("inlineCode",{parentName:"li"},"/usr/local/share/massastation/logs/")),(0,s.kt)("li",{parentName:"ol"},"Open finder"),(0,s.kt)("li",{parentName:"ol"},'Click on the "Go" button at the top of your screen\n',(0,s.kt)("img",{alt:"Go button",src:a(8559).Z,width:"856",height:"70"})),(0,s.kt)("li",{parentName:"ol"},'Click on the "Go to folder..." button at the bottom of the menu'),(0,s.kt)("li",{parentName:"ol"},"Paste the path you copied previously"),(0,s.kt)("li",{parentName:"ol"},"Press ",(0,s.kt)("strong",{parentName:"li"},"Enter"))),(0,s.kt)("p",null,"You should be able to see 2 log files:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"massastation.log")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"massastation-repair.log"))),(0,s.kt)("p",null,"Those are the log files you need."),(0,s.kt)("h4",{id:"linux-1"},"Linux"),(0,s.kt)("p",null,"It is located in ",(0,s.kt)("inlineCode",{parentName:"p"},"/usr/local/share/massastation/logs"),". You can access it using the Files app or with a terminal using ",(0,s.kt)("inlineCode",{parentName:"p"},"cd"),".\nOnce in the directory, search for the file named ",(0,s.kt)("inlineCode",{parentName:"p"},"massastation.log"),"."),(0,s.kt)("h2",{id:"massa-wallet"},"Massa Wallet"),(0,s.kt)("h3",{id:"get-massa-wallet-logs"},"Get Massa Wallet logs"),(0,s.kt)("p",null,"In case you encounter an issue that isn't listed in the FAQ or previously on this page, we will need the logs of Massa Wallet to help you.\nThis section will explain you how to get them."),(0,s.kt)("p",null,"Please make sure to follow the instructions for your operating system."),(0,s.kt)("p",null,"Once you have the logs, please open a new issue on the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/massalabs/station-massa-wallet/issues/new?assignees=&labels=issue%3Abug&projects=&template=bug.md&title="},"Massa Wallet repository"),"\nand attach the logs to your issue so we can help you."),(0,s.kt)("h4",{id:"windows-2"},"Windows"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Copy ",(0,s.kt)("inlineCode",{parentName:"li"},"%APPDATA%\\massa-station-wallet\\")),(0,s.kt)("li",{parentName:"ol"},"Press ",(0,s.kt)("strong",{parentName:"li"},"Win + R"),", a small window with a text box should open."),(0,s.kt)("li",{parentName:"ol"},"In this window, paste what you just copied and press Enter."),(0,s.kt)("li",{parentName:"ol"},"A File Explorer window should appear in an ",(0,s.kt)("strong",{parentName:"li"},"APPDATA")," directory"),(0,s.kt)("li",{parentName:"ol"},"In this directory, search for the file named ",(0,s.kt)("inlineCode",{parentName:"li"},"station-massa-wallet.log"))),(0,s.kt)("h4",{id:"macos-2"},"MacOS"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Open Finder"),(0,s.kt)("li",{parentName:"ol"},"On the top right you should see an application bar with different options such as File, Edit and View"),(0,s.kt)("li",{parentName:"ol"},"Click on the Go and in the dropdown select ",(0,s.kt)("strong",{parentName:"li"},"Library")),(0,s.kt)("li",{parentName:"ol"},"Look for a directory named ",(0,s.kt)("strong",{parentName:"li"},"Application Support")," and open it"),(0,s.kt)("li",{parentName:"ol"},"Open the folder named ",(0,s.kt)("strong",{parentName:"li"},"massa-station-wallet")),(0,s.kt)("li",{parentName:"ol"},"In this directory, search for the file named ",(0,s.kt)("inlineCode",{parentName:"li"},"station-massa-wallet.log"))),(0,s.kt)("h4",{id:"linux-2"},"Linux"),(0,s.kt)("p",null,"The log file is located in ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.config/massa-station-wallet/"),". You can access it using the Files app or with a terminal using ",(0,s.kt)("inlineCode",{parentName:"p"},"cd"),".\nOnce in the directory, search for the file named ",(0,s.kt)("inlineCode",{parentName:"p"},"station-massa-wallet.log"),"."),(0,s.kt)("h2",{id:"massa-wallet-cant-be-opened-error"},(0,s.kt)("inlineCode",{parentName:"h2"},"Massa Wallet can't be opened")," error"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Wallet plugin error",src:a(4474).Z,width:"1506",height:"624"})),(0,s.kt)("p",null,"So far, this issue happens only on Linux because some dependencies aren't installed correctly."),(0,s.kt)("h4",{id:"linux-3"},"Linux"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Open your terminal"),(0,s.kt)("li",{parentName:"ol"},"Verify witch version of this packet you have ",(0,s.kt)("inlineCode",{parentName:"li"},"libwebkit2gtk")," with ",(0,s.kt)("inlineCode",{parentName:"li"},"apt list --installed libwebkit2gtk")),(0,s.kt)("li",{parentName:"ol"},"The required version is ",(0,s.kt)("inlineCode",{parentName:"li"},"0.4-37"),", so you need to install it with this cmd ",(0,s.kt)("inlineCode",{parentName:"li"},"sudo apt install libwebkit2gtk-4.0-37"),". If the version installed is already the ",(0,s.kt)("inlineCode",{parentName:"li"},"0.4-37"),", please open an issue ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/massalabs/station/issues/new/choose"},"here"),"."),(0,s.kt)("li",{parentName:"ol"},"Once the library installed, restart Massa Wallet module by turning it off and on again.")))}d.isMDXComponent=!0},8559:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/troubleshooting-finder-go-d4f39d0b0a2432eeb103d32e2f5d3d77.png"},4474:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wallet-plugin-error-ce200ead1f72b1fc0cddd95ce1afe987.png"}}]);