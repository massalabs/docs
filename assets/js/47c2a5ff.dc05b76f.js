"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[5777],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(n),y=i,d=m["".concat(s,".").concat(y)]||m[y]||u[y]||o;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=y;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(8168),i=(n(6540),n(5680));const o={id:"uninstall",title:"Uninstall"},l=void 0,r={unversionedId:"massaStation/uninstall",id:"massaStation/uninstall",title:"Uninstall",description:"Windows",source:"@site/docs/massaStation/uninstall.mdx",sourceDirName:"massaStation",slug:"/massaStation/uninstall",permalink:"/docs/massaStation/uninstall",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/massaStation/uninstall.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1723820343,formattedLastUpdatedAt:"Aug 16, 2024",frontMatter:{id:"uninstall",title:"Uninstall"},sidebar:"massaStationSidebar",previous:{title:"Manual Install",permalink:"/docs/massaStation/manual-install"},next:{title:"Modules",permalink:"/docs/massaStation/modules"}},s={},p=[{value:"Windows",id:"windows",level:2},{value:"MacOS",id:"macos",level:2},{value:"Linux",id:"linux",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(m,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"windows"},"Windows"),(0,i.yg)("p",null,"To uninstall ",(0,i.yg)("strong",{parentName:"p"},"Massa Station")," from your Windows system, follow the steps below:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},'Stop MassaStation by right-clicking on the icon in the system tray and selecting "Quit".'),(0,i.yg)("li",{parentName:"ol"},'Open your "Start" panel.'),(0,i.yg)("li",{parentName:"ol"},'Type "Settings" and open the settings.'),(0,i.yg)("li",{parentName:"ol"},'On the left panel, click on "Apps".'),(0,i.yg)("li",{parentName:"ol"},'Click on "Installed Apps".'),(0,i.yg)("li",{parentName:"ol"},'Search for "MassaStation" in the list of installed applications.'),(0,i.yg)("li",{parentName:"ol"},'On the "..." menu, click on "Uninstall".'),(0,i.yg)("li",{parentName:"ol"},'Confirm uninstallation by clicking on "Uninstall" in the confirmation dialog.'),(0,i.yg)("li",{parentName:"ol"},"Follow the instructions provided by the uninstaller.")),(0,i.yg)("p",null,"The application and all modules installed will be deleted from your desktop."),(0,i.yg)("h2",{id:"macos"},"MacOS"),(0,i.yg)("p",null,"To uninstall ",(0,i.yg)("strong",{parentName:"p"},"Massa Station")," from your MacOS system, follow the steps below:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},'Stop MassaStation by right-clicking on the icon in the system tray and selecting "Quit".'),(0,i.yg)("li",{parentName:"ol"},"Open the Terminal application on your MacOS system."),(0,i.yg)("li",{parentName:"ol"},"Execute the following command in the terminal to download and run the ",(0,i.yg)("strong",{parentName:"li"},"Massa Station")," uninstaller script:",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"/usr/local/share/massastation/uninstall.sh\n")),(0,i.yg)("admonition",{parentName:"li",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"This command will remove MassaStation and its associated files from your system."))),(0,i.yg)("li",{parentName:"ol"},"Follow any prompts or instructions provided by the uninstaller script. This may involve confirming the removal and providing your password for administrative privileges."),(0,i.yg)("li",{parentName:"ol"},"Once the uninstallation process is complete, you will receive a confirmation message indicating that ",(0,i.yg)("strong",{parentName:"li"},"Massa Station")," has been successfully uninstalled.")),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"DNSMasq and Homebrew might have been installed on your system as dependencies for Massa Station.\nWe do not remove these packages automatically as they may be used by other applications on your system.")),(0,i.yg)("h2",{id:"linux"},"Linux"),(0,i.yg)("p",null,"To uninstall ",(0,i.yg)("strong",{parentName:"p"},"Massa Station")," from your Linux system, follow the steps below:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},'Stop MassaStation by right-clicking on the icon in the system tray and selecting "Quit".'),(0,i.yg)("li",{parentName:"ol"},"Open the Terminal application on your Linux system."),(0,i.yg)("li",{parentName:"ol"},"Execute the following command in the terminal to download and run the ",(0,i.yg)("strong",{parentName:"li"},"Massa Station")," uninstaller script:",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg -r massastation\n")),(0,i.yg)("admonition",{parentName:"li",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"This command will remove MassaStation and its associated files from your system."))),(0,i.yg)("li",{parentName:"ol"},"Once the uninstallation process is complete, you will receive a confirmation message indicating that ",(0,i.yg)("strong",{parentName:"li"},"Massa Station")," has been successfully uninstalled.")))}u.isMDXComponent=!0}}]);