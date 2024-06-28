"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[4445],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>g});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||s;return t?n.createElement(g,o(o({ref:a},p),{},{components:t})):n.createElement(g,o({ref:a},p))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3107:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));const s={id:"dapp-usage-massa-web3",title:"dApp Usage"},o=void 0,i={unversionedId:"build/massa-web3/dapp-usage-massa-web3",id:"build/massa-web3/dapp-usage-massa-web3",title:"dApp Usage",description:"Here are some examples of how to use the Massa Web3 API for dApp development.",source:"@site/docs/build/massa-web3/dapp-usage-massa-web3.mdx",sourceDirName:"build/massa-web3",slug:"/build/massa-web3/dapp-usage-massa-web3",permalink:"/docs/build/massa-web3/dapp-usage-massa-web3",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/massa-web3/dapp-usage-massa-web3.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1719563340,formattedLastUpdatedAt:"Jun 28, 2024",frontMatter:{id:"dapp-usage-massa-web3",title:"dApp Usage"},sidebar:"buildSidebar",previous:{title:"Introduction",permalink:"/docs/build/massa-web3/"},next:{title:"Backend Usage",permalink:"/docs/build/massa-web3/backend-usage-massa-web3"}},c={},l=[{value:"Calling a smart contract",id:"calling-a-smart-contract",level:2},{value:"Reading a smart contract value",id:"reading-a-smart-contract-value",level:2}],p={toc:l},d="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here are some examples of how to use the Massa Web3 API for dApp development."),(0,r.kt)("h2",{id:"calling-a-smart-contract"},"Calling a smart contract"),(0,r.kt)("p",null,"Full code of the Age dApp is available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-sc-examples/tree/main/age"},"here"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-sc-examples/blob/main/age/contracts/assembly/contracts/main.ts"},"age smart contract")," stores the name and age of persons.\nThis snippets shows how to call the smart contract and change the age value of Alice."),(0,r.kt)("p",null,"After creating a react app and setting up the Massa Web3 API as described in the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/build/massa-web3#installation"},"installation")," section, we can call the smart contract method ",(0,r.kt)("inlineCode",{parentName:"p"},"changeAge")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'let args = new Args().addString(inputName).addU32(newAge);\nlet opId = await client.smartContracts().callSmartContract({\n  targetAddress: CONTRACT_ADDRESS,\n  targetFunction: "changeAge",\n  parameter: args.serialize(),\n  maxGas: BigInt(1000000),\n  coins: BigInt(0),\n  fee: BigInt(0),\n});\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-sc-examples/blob/1a0f4db090ac0516d9edae5ae839422747edfae9/age/front/react/src/App.tsx#L74"},"Github redirection")),(0,r.kt)("p",null,"Since that method requires a string and an integer as parameters, we need to serialize them first. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Args")," class\nprovides a convenient way to do that. You can learn more about Args via the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-web3/blob/3dbfe0e60fb397af4c4502ea0031ee5ae1f2aba6/packages/web3-utils/src/arguments.ts#L68"},"source code"),"\nand its usage with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-sc-examples/"},"examples"),"."),(0,r.kt)("h2",{id:"reading-a-smart-contract-value"},"Reading a smart contract value"),(0,r.kt)("p",null,"You can directly read smart contract datastore values\nwith the ",(0,r.kt)("inlineCode",{parentName:"p"},"readSmartContractData")," method, which does not require any gas or fee:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = await client.smartContracts().readSmartContract({\n  maxGas: BigInt(1000000),\n  targetAddress: CONTRACT_ADDRESS,\n  targetFunction: "getAge",\n  parameter: new Args().addString(inputName).serialize(),\n});\n\nconst age = res.returnValue;\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"getAge")," method doesn't change the state of the smart contract, we don't need to use a client with an account linked to it.")))}m.isMDXComponent=!0}}]);