"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[5809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var l=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=l.createContext({}),u=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,k=d["".concat(i,".").concat(h)]||d[h]||p[h]||a;return n?l.createElement(k,r(r({ref:t},c),{},{components:n})):l.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var l=n(7462),o=(n(7294),n(3905));const a={id:"stake",sidebar_label:"Staking"},r="Staking",s={unversionedId:"node/stake",id:"node/stake",title:"Staking",description:"In Massa, the minimal number of coins required to be able to stake is 100 MAS.",source:"@site/docs/node/stake.mdx",sourceDirName:"node",slug:"/node/stake",permalink:"/docs/node/stake",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/node/stake.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1723458370,formattedLastUpdatedAt:"Aug 12, 2024",frontMatter:{id:"stake",sidebar_label:"Staking"},sidebar:"nodeSidebar",previous:{title:"Creating a wallet",permalink:"/docs/node/wallet"},next:{title:"Check your node's status",permalink:"/docs/node/check_status"}},i={},u=[{value:"Buying rolls",id:"buying-rolls",level:2},{value:"Telling your node to start staking with your rolls",id:"telling-your-node-to-start-staking-with-your-rolls",level:2},{value:"Selling rolls",id:"selling-rolls",level:2},{value:"What next ?",id:"what-next-",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"staking"},"Staking"),(0,o.kt)("p",null,'In Massa, the minimal number of coins required to be able to stake is 100 MAS.\nThis is the amount necessary to buy one unit of staking rights, which is called one "roll".\nThe total initial supply is 1B MAS, so in theory, there could be 10 million people staking.'),(0,o.kt)("p",null,"Addresses are randomly selected to stake (create blocks) in all threads, based on the number of rolls they possess."),(0,o.kt)("p",null,"Rolls can be bought with Massa coins or sold to get the coins back. If you already have more than 100 Massa, you can\ncontinue this tutorial, otherwise, please look into buying some coins first."),(0,o.kt)("h2",{id:"buying-rolls"},"Buying rolls"),(0,o.kt)("p",null,"Get the address that has coins in your wallet. In the Massa client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_info\n")),(0,o.kt)("p",null,"Buy rolls with it: put your address, the number of rolls you want to buy, and the operation fee (you can put 0):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"buy_rolls <address> <roll count> <fee>\n")),(0,o.kt)("p",null,"As an example, the command for buying 1 roll with 0 fee for the address\n",(0,o.kt)("inlineCode",{parentName:"p"},"A12dr48yZaL2NpQkwsrpsNLGDpndFUCVSdYdSiQh4UfkYRMo17km")," is: ",(0,o.kt)("inlineCode",{parentName:"p"},"buy_rolls\nA12dr48yZaL2NpQkwsrpsNLGDpndFUCVSdYdSiQh4UfkYRMo17km 1 0")),(0,o.kt)("p",null,"It should take less than one minute for your roll to become final, check with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_info\n")),(0,o.kt)("h2",{id:"telling-your-node-to-start-staking-with-your-rolls"},"Telling your node to start staking with your rolls"),(0,o.kt)("p",null,"Get the address that has rolls in your wallet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_info\n")),(0,o.kt)("p",null,"Register your address so that your node start to stake with it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"node_start_staking <your_address>\n")),(0,o.kt)("p",null,"Now you should wait some time so that your rolls become active: 3 cycles of 128 periods (one period is 32 blocks - 16\nsec), so about 1 hour and 40 minutes."),(0,o.kt)("p",null,"You can check if your rolls are active with the same command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_info\n")),(0,o.kt)("p",null,"When your rolls become active, that's it! You're staking!\nYou should be selected to create blocks in the different threads."),(0,o.kt)("p",null,"To check when your address is selected to stake, run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"get_addresses <your_address>\n")),(0,o.kt)("p",null,'and look at the "next draws" section.'),(0,o.kt)("p",null,"Also check that your balance increases, for each block or endorsement that you create you should get a small reward."),(0,o.kt)("h2",{id:"selling-rolls"},"Selling rolls"),(0,o.kt)("p",null,"If you want to get back some or all of your coins, sell rolls the same way you bought them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sell_rolls <address> <roll count> <fee>\n")),(0,o.kt)("p",null,"It should take some time again for your coins to be credited, and they will be frozen for 1 cycle before you can spend\nthem, again check with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_info\n")),(0,o.kt)("h2",{id:"what-next-"},"What next ?"),(0,o.kt)("p",null,"Congratulations, you followed all the steps to be part of the Massa adventure!"),(0,o.kt)("p",null,"You should now check the status of your setup: ",(0,o.kt)("a",{parentName:"p",href:"/docs/node/check_status"},"Check your node's status"),"."))}p.isMDXComponent=!0}}]);