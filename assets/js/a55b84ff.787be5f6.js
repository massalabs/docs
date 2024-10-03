"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[6952],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,g=m["".concat(l,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(8168),o=(n(6540),n(5680));const r={},s="Instructions",i={unversionedId:"massaBridge/instructions",id:"massaBridge/instructions",title:"Instructions",description:"This page explains step-by-step instructions on how to bridge tokens to and from Massa.",source:"@site/docs/massaBridge/instructions.mdx",sourceDirName:"massaBridge",slug:"/massaBridge/instructions",permalink:"/docs/massaBridge/instructions",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/massaBridge/instructions.mdx",tags:[],version:"current",lastUpdatedBy:"BenRey",lastUpdatedAt:1727965977,formattedLastUpdatedAt:"Oct 3, 2024",frontMatter:{},sidebar:"massaBridgeSidebar",previous:{title:"Introduction",permalink:"/docs/massaBridge/home"},next:{title:"Architecture and Security Overview",permalink:"/docs/massaBridge/architecture-security"}},l={},c=[{value:"Connect Wallets",id:"connect-wallets",level:2},{value:"Bridge Tokens to Massa",id:"bridge-tokens-to-massa",level:2},{value:"Redeem Tokens from Massa to origin network",id:"redeem-tokens-from-massa-to-origin-network",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"instructions"},"Instructions"),(0,o.yg)("p",null,"This page explains step-by-step instructions on how to bridge tokens to and from Massa."),(0,o.yg)("h2",{id:"connect-wallets"},"Connect Wallets"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Navigate to ",(0,o.yg)("a",{parentName:"li",href:"https://bridge.massa.net/index"},"Massa Bridge"),". Select the networks you wish to bridge between.\nFor Testnet, switch the mode to Testnet in the top-right of your screen."),(0,o.yg)("li",{parentName:"ol"},"Click on the \u2018Connect wallet\u2019 button."),(0,o.yg)("li",{parentName:"ol"},"Connect your Metamask wallet."),(0,o.yg)("li",{parentName:"ol"},"Connect a Massa wallet account:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"For Massa Station Wallet (recommended): Ensure the Massa Station desktop app is installed, open, and running. For Massa Station-related questions, please refer to ",(0,o.yg)("a",{parentName:"li",href:"https://docs.massa.net/docs/massaStation/faq"},"Massa Station FAQ")," and ",(0,o.yg)("a",{parentName:"li",href:"https://docs.massa.net/docs/massaStation/massa-wallet/getting-started"},"Massa Wallet FAQ"),"."),(0,o.yg)("li",{parentName:"ul"},"For Bearby (community-developed): Ensure the extension is installed and activated.")))),(0,o.yg)("h2",{id:"bridge-tokens-to-massa"},"Bridge Tokens to Massa"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"You will need to sign up to 2 transactions on the origin network, and none on Massa.")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},'Once both wallets are connected, ensure your "From" network is Ethereum or BNB Smart Chain, and "To" network is Massa.'),(0,o.yg)("li",{parentName:"ol"},"Select the token and the amount you wish to transfer."),(0,o.yg)("li",{parentName:"ol"},"Click on the \u2018Next\u2019 button to proceed. You will see the confirmation screen with the estimated cost."),(0,o.yg)("li",{parentName:"ol"},"Ensure you have enough coins to pay for transaction fees. Click on the \u2018Bridge\u2019 button to proceed."),(0,o.yg)("li",{parentName:"ol"},"If bridging tokens for the first time, you must first sign the Allowance transaction. In the Metamask\u2019s sign request screen, you can approve the max. or a custom amount, depending on your preference. Proceed to sign the transaction."),(0,o.yg)("li",{parentName:"ol"},"Once the allowance transaction is completed, you will be asked to sign the bridge transaction in your Metamask. Review the transaction and sign it."),(0,o.yg)("li",{parentName:"ol"},"Return to the Bridge page and wait for the completion of your transfer."),(0,o.yg)("li",{parentName:"ol"},"A success screen will be shown once the Massa operation is finalized. The tokens should now be in your wallet."),(0,o.yg)("li",{parentName:"ol"},"Follow the instructions to add the token to your Massa wallet."),(0,o.yg)("li",{parentName:"ol"},"Past transfers can be checked on the History page.")),(0,o.yg)("h2",{id:"redeem-tokens-from-massa-to-origin-network"},"Redeem Tokens from Massa to origin network"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"You will need to sign up to 3 transactions: 2 on Massa, and 1 on the destination network.")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},'Once both wallets are connected, ensure your "From" network is Massa, and "To" network is either Ethereum or BNB Smart Chain.'),(0,o.yg)("li",{parentName:"ol"},"Select the token you wish to redeem and enter the amount."),(0,o.yg)("li",{parentName:"ol"},"Click on the \u2018Next\u2019 button to proceed. You will see the confirmation screen with the estimated cost."),(0,o.yg)("li",{parentName:"ol"},"Ensure you have enough coins to pay for transaction fees in your wallets. Click on the \u2018Redeem\u2019 button to proceed."),(0,o.yg)("li",{parentName:"ol"},"If redeeming tokens for the first time, you must first sign the Allowance transaction. Proceed to sign the transaction."),(0,o.yg)("li",{parentName:"ol"},"Once the allowance transaction is completed, you will be asked to sign the burn transaction in your Massa wallet. Proceed to sign it."),(0,o.yg)("li",{parentName:"ol"},"After the burn transaction is completed, click on the button to initiate a claim transaction on Ethereum or BNB Smart Chain."),(0,o.yg)("li",{parentName:"ol"},"Review and sign the last transaction in your Metamask to redeem tokens to your wallet."),(0,o.yg)("li",{parentName:"ol"},"A success screen will be shown once the transaction is finalized. Check your Metamask wallet balance."),(0,o.yg)("li",{parentName:"ol"},"Past transfers can be checked on the History page.")),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"For additional information, please refer to the ",(0,o.yg)("a",{parentName:"p",href:"https://bridge.massa.net/faq"},"Massa Bridge FAQ"),".\nIf you can't find an answer to your issue feel free to drop a ticket to our ",(0,o.yg)("a",{parentName:"p",href:"https://discord.com/channels/828270821042159636/1229348333848629319"},"Discord Bridge Support Channel"),".")))}u.isMDXComponent=!0}}]);