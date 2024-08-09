"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[7240],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>y});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,c=r(t,["components","mdxType","originalType","parentName"]),m=p(n),d=i,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(y,l(l({ref:e},c),{},{components:n})):a.createElement(y,l({ref:e},c))}));function y(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r[m]="string"==typeof t?t:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6930:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={id:"uninstall",title:"Uninstall"},l=void 0,r={unversionedId:"massaStation/uninstall",id:"massaStation/uninstall",title:"Uninstall",description:"Windows",source:"@site/docs/massaStation/uninstall.mdx",sourceDirName:"massaStation",slug:"/massaStation/uninstall",permalink:"/docs/massaStation/uninstall",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/massaStation/uninstall.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1723198300,formattedLastUpdatedAt:"Aug 9, 2024",frontMatter:{id:"uninstall",title:"Uninstall"},sidebar:"massaStationSidebar",previous:{title:"Manual Install",permalink:"/docs/massaStation/manual-install"},next:{title:"Modules",permalink:"/docs/massaStation/modules"}},s={},p=[{value:"Windows",id:"windows",level:2},{value:"MacOS",id:"macos",level:2},{value:"Linux",id:"linux",level:2}],c={toc:p},m="wrapper";function u(t){let{components:e,...n}=t;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"windows"},"Windows"),(0,i.kt)("p",null,"To uninstall ",(0,i.kt)("strong",{parentName:"p"},"Massa Station")," from your Windows system, follow the steps below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Stop MassaStation by right-clicking on the icon in the system tray and selecting "Quit".'),(0,i.kt)("li",{parentName:"ol"},'Open your "Start" panel.'),(0,i.kt)("li",{parentName:"ol"},'Type "Settings" and open the settings.'),(0,i.kt)("li",{parentName:"ol"},'On the left panel, click on "Apps".'),(0,i.kt)("li",{parentName:"ol"},'Click on "Installed Apps".'),(0,i.kt)("li",{parentName:"ol"},'Search for "MassaStation" in the list of installed applications.'),(0,i.kt)("li",{parentName:"ol"},'On the "..." menu, click on "Uninstall".'),(0,i.kt)("li",{parentName:"ol"},'Confirm uninstallation by clicking on "Uninstall" in the confirmation dialog.'),(0,i.kt)("li",{parentName:"ol"},"Follow the instructions provided by the uninstaller.")),(0,i.kt)("p",null,"The application and all modules installed will be deleted from your desktop."),(0,i.kt)("h2",{id:"macos"},"MacOS"),(0,i.kt)("p",null,"To uninstall ",(0,i.kt)("strong",{parentName:"p"},"Massa Station")," from your MacOS system, follow the steps below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Stop MassaStation by right-clicking on the icon in the system tray and selecting "Quit".'),(0,i.kt)("li",{parentName:"ol"},"Open the Terminal application on your MacOS system."),(0,i.kt)("li",{parentName:"ol"},"Execute the following command in the terminal to download and run the ",(0,i.kt)("strong",{parentName:"li"},"Massa Station")," uninstaller script:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/share/massastation/uninstall.sh\n")),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This command will remove MassaStation and its associated files from your system."))),(0,i.kt)("li",{parentName:"ol"},"Follow any prompts or instructions provided by the uninstaller script. This may involve confirming the removal and providing your password for administrative privileges."),(0,i.kt)("li",{parentName:"ol"},"Once the uninstallation process is complete, you will receive a confirmation message indicating that ",(0,i.kt)("strong",{parentName:"li"},"Massa Station")," has been successfully uninstalled.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"DNSMasq and Homebrew might have been installed on your system as dependencies for Massa Station.\nWe do not remove these packages automatically as they may be used by other applications on your system.")),(0,i.kt)("h2",{id:"linux"},"Linux"),(0,i.kt)("p",null,"To uninstall ",(0,i.kt)("strong",{parentName:"p"},"Massa Station")," from your Linux system, follow the steps below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Stop MassaStation by right-clicking on the icon in the system tray and selecting "Quit".'),(0,i.kt)("li",{parentName:"ol"},"Open the Terminal application on your Linux system."),(0,i.kt)("li",{parentName:"ol"},"Execute the following command in the terminal to download and run the ",(0,i.kt)("strong",{parentName:"li"},"Massa Station")," uninstaller script:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg -r massastation\n")),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This command will remove MassaStation and its associated files from your system."))),(0,i.kt)("li",{parentName:"ol"},"Once the uninstallation process is complete, you will receive a confirmation message indicating that ",(0,i.kt)("strong",{parentName:"li"},"Massa Station")," has been successfully uninstalled.")))}u.isMDXComponent=!0}}]);