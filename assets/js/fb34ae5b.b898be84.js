"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[4445],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(a),u=r,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||s;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3107:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const s={id:"dapp-usage-massa-web3",title:"dApp Usage"},o=void 0,i={unversionedId:"build/massa-web3/dapp-usage-massa-web3",id:"build/massa-web3/dapp-usage-massa-web3",title:"dApp Usage",description:"Here are some examples of how to use the Massa Web3 API for dApp development.",source:"@site/docs/build/massa-web3/dapp-usage-massa-web3.mdx",sourceDirName:"build/massa-web3",slug:"/build/massa-web3/dapp-usage-massa-web3",permalink:"/docs/build/massa-web3/dapp-usage-massa-web3",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/build/massa-web3/dapp-usage-massa-web3.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1698229907,formattedLastUpdatedAt:"Oct 25, 2023",frontMatter:{id:"dapp-usage-massa-web3",title:"dApp Usage"},sidebar:"buildSidebar",previous:{title:"Introduction",permalink:"/docs/build/massa-web3/"},next:{title:"Backend Usage",permalink:"/docs/build/massa-web3/backend-usage-massa-web3"}},c={},l=[{value:"Calling a smart contract",id:"calling-a-smart-contract",level:2},{value:"Reading a smart contract value",id:"reading-a-smart-contract-value",level:2}],p={toc:l},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here are some examples of how to use the Massa Web3 API for dApp development."),(0,r.kt)("h2",{id:"calling-a-smart-contract"},"Calling a smart contract"),(0,r.kt)("p",null,"Full code of the Age dApp is available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-sc-examples/tree/main/age"},"here"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-sc-examples/blob/main/age/contracts/assembly/contracts/main.ts"},"age smart contract")," stores the name and age of persons.\nThis snippets shows how to call the smart contract and change the age value of Alice."),(0,r.kt)("p",null,"After creating a react app and setting up the Massa Web3 API as described in the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/build/massa-web3#installation"},"installation")," section, we can call the smart contract method ",(0,r.kt)("inlineCode",{parentName:"p"},"changeAge")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'let args = new Args().addString(inputName).addU32(newAge);\nlet opId = await client.smartContracts().callSmartContract({\n  targetAddress: CONTRACT_ADDRESS,\n  functionName: "changeAge",\n  parameter: args.serialize(),\n  maxGas: BigInt(1000000),\n  coins: BigInt(0),\n  fee: BigInt(0),\n});\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-sc-examples/blob/main/age/react/src/App.tsx#L77"},"Github redirection")),(0,r.kt)("p",null,"Since that method requires a string and an integer as parameters, we need to serialize them first. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Args")," class\nprovides a convenient way to do that. You can learn more about Args via the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/web3-utils/blob/main/src/arguments.ts#L42"},"source code"),"\nand its usage with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-sc-examples/"},"examples"),"."),(0,r.kt)("p",null,"If the call is successful, we get an operation id back, you can then use it to check the status of the operation with the ",(0,r.kt)("a",{parentName:"p",href:"https://buildnet.massa.net/#explorer"},"explorer")),(0,r.kt)("h2",{id:"reading-a-smart-contract-value"},"Reading a smart contract value"),(0,r.kt)("p",null,"You can directly read smart contract datastore values\nwith the ",(0,r.kt)("inlineCode",{parentName:"p"},"readSmartContractData")," method, which does not require any gas or fee:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'      const res = await client.smartContracts().readSmartContract({\n        maxGas: BigInt(1000000),\n        targetAddress: CONTRACT_ADDRESS,\n        targetFunction: "getAge",\n        parameter: new Args().addString(inputName).serialize(),\n      });\n    \n    const age = res.returnValue;\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"getAge")," method doesn't change the state of the smart contract, we don't need to use a client with an account linked to it.")))}d.isMDXComponent=!0}}]);