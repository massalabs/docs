"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,y=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={id:"update",sidebar_label:"Updating a node"},i="Updating a node",l={unversionedId:"node/update",id:"node/update",title:"Updating a node",description:"If you use the binaries, simply download the latest binaries. Otherwise if you have built from source, follow the",source:"@site/docs/node/update.mdx",sourceDirName:"node",slug:"/node/update",permalink:"/docs/node/update",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/node/update.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1698693553,formattedLastUpdatedAt:"Oct 30, 2023",frontMatter:{id:"update",sidebar_label:"Updating a node"},sidebar:"nodeSidebar",previous:{title:"Running a node",permalink:"/docs/node/run"},next:{title:"Creating a wallet",permalink:"/docs/node/wallet"}},s={},d=[],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"updating-a-node"},"Updating a node"),(0,r.kt)("p",null,"If you use the binaries, simply download the latest binaries. Otherwise if you have built from source, follow the\ninstructions below."),(0,r.kt)("p",null,"Make sure you have all the packages installed on your system. Maybe new one could have been added since you last release\nrefer to our ",(0,r.kt)("a",{parentName:"p",href:"/docs/node/install#from-source-code-advanced-installation"},"documentation")," for the updated list."),(0,r.kt)("p",null,"Make sure you have the right git repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd massa/\ngit stash\ngit remote set-url origin https://github.com/massalabs/massa.git\n")),(0,r.kt)("p",null,"Update Massa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout testnet\ngit pull\n")),(0,r.kt)("p",null,"After updating, enter the command ",(0,r.kt)("inlineCode",{parentName:"p"},"node_get_staking_addresses")," in your client and make sure that it returns an address\nthat has rolls according to wallet_info."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"wallet_info")," does not return any address, it means that you haven't backed up your wallet.dat correctly. Close the\nclient, overwrite wallet.dat with your backup, launch the client again and try again. You can also create a new address\nby calling ",(0,r.kt)("inlineCode",{parentName:"li"},"wallet_generate_secret_key"),"."),(0,r.kt)("li",{parentName:"ul"},"If you can't find an address in ",(0,r.kt)("inlineCode",{parentName:"li"},"wallet_info")," that has non-zero candidate, non-zero final and non-zero active rolls,\nplease refer to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/node/stake"},"staking tutorial")," on getting rolls."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"node_get_staking_addresses")," does not return any address or does not return an address that has active_rolls\naccording to wallet_info, it means you haven't backed up ",(0,r.kt)("inlineCode",{parentName:"li"},"staking_keys.json")," properly. Try stopping the node,\noverwriting ",(0,r.kt)("inlineCode",{parentName:"li"},"staking_keys.json")," with your backup, and starting the node again to try again. You can also manually add a\nstaking key by calling ",(0,r.kt)("inlineCode",{parentName:"li"},"add_staking_keys")," with the ",(0,r.kt)("inlineCode",{parentName:"li"},"KEY")," matching the address that has active rolls in wallet_info\n(warning: do not type the address or public key, only the ",(0,r.kt)("inlineCode",{parentName:"li"},"SECRET KEY"),").")))}p.isMDXComponent=!0}}]);