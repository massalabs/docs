"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[6146],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:e},p),{},{components:n})):a.createElement(h,i({ref:e},p))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[u]="string"==typeof t?t:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5575:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="Constructor function",s={unversionedId:"build/smart-contract/basic-concepts/constructor",id:"build/smart-contract/basic-concepts/constructor",title:"Constructor function",description:"In Massa smart contracts, the constructor function is responsible for initializing the contract's state during deployment. This function is called only once, during the deployment step, to set up any required initial values or configurations.",source:"@site/docs/build/smart-contract/basic-concepts/constructor.mdx",sourceDirName:"build/smart-contract/basic-concepts",slug:"/build/smart-contract/basic-concepts/constructor",permalink:"/docs/build/smart-contract/basic-concepts/constructor",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/smart-contract/basic-concepts/constructor.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin-Massa",lastUpdatedAt:1743676062,formattedLastUpdatedAt:"Apr 3, 2025",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Calling a smart contract",permalink:"/docs/build/smart-contract/basic-concepts/functions-parameters"},next:{title:"Contract inheritance",permalink:"/docs/build/smart-contract/basic-concepts/inheritance"}},c={},l=[{value:"Example constructor implementation",id:"example-constructor-implementation",level:3},{value:"Deploying with Constructor Parameters",id:"deploying-with-constructor-parameters",level:3},{value:"Explanation of the Deployment Code",id:"explanation-of-the-deployment-code",level:4}],p={toc:l},u="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"constructor-function"},"Constructor function"),(0,r.kt)("p",null,"In Massa smart contracts, the constructor function is responsible for initializing the contract's state during deployment. This function is called only once, during the deployment step, to set up any required initial values or configurations."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Deployment-Only Execution"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To ensure that the constructor function is only executed during deployment, include the line ",(0,r.kt)("inlineCode",{parentName:"li"},"assert(Context.isDeployingContract());")," at the start of the function. This assertion checks that the contract is currently in the deployment phase and will throw an error if the function is called after deployment."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Passing Parameters to the Constructor"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Just like other functions, parameters can be passed to the constructor using serialized data. This allows for the flexible initialization of the contract, enabling the deployment process to be customized with specific data.\nThe Args utility can be used to handle serialization and deserialization of these parameters, ensuring consistency with other functions in the contract.")))),(0,r.kt)("h3",{id:"example-constructor-implementation"},"Example constructor implementation"),(0,r.kt)("p",null,"Below is an example of a constructor function that takes a string parameter for initialization. This example demonstrates how to set up the constructor to accept parameters, ensuring it is only called during deployment, and store the initialized data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Args, Storage, Context } from "@massalabs/as-types";\n\nexport function constructor(argsData: StaticArray<u8>): void {\n    // Ensure the function is only called during deployment\n    assert(Context.isDeployingContract(), "Constructor can only be called during deployment");\n\n    // Deserialize the initialization parameter\n    const initialMessage = new Args(argsData).nextString().expect("Initialization parameter missing or invalid");\n\n    // Store the initial message in contract storage\n    Storage.set("greeting", initialMessage);\n}\n')),(0,r.kt)("h3",{id:"deploying-with-constructor-parameters"},"Deploying with Constructor Parameters"),(0,r.kt)("p",null,"When deploying this contract, the serialized parameter(s) should be included in the deployment transaction. For example, in a TypeScript deployment script, you might serialize the initial message and include it in the deployment call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Account,\n  Args,\n  Mas,\n  SmartContract,\n  JsonRpcProvider\n} from '@massalabs/massa-web3';\nimport { getScByteCode } from './utils';\n\nconst account = await Account.fromEnv();\nconst provider = JsonRpcProvider.buildnet(account);\n\n// Retrieve the compiled smart contract bytecode\nconst byteCode = getScByteCode('build', 'main.wasm');\n\nconst constructorArgs = new Args().addString(\"Welcome to Massa!\");\n\nconst contract = await SmartContract.deploy(\n  provider,\n  byteCode,\n  constructorArgs,\n  { coins: Mas.fromString('0.01') }\n);\n")),(0,r.kt)("h4",{id:"explanation-of-the-deployment-code"},"Explanation of the Deployment Code"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Imports"),":")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Key modules are imported from @massalabs/massa-web3, including Account, Args, Mas, SmartContract, and JsonRpcProvider, which are essential for deploying a smart contract.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Account Setup"),":")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An Account instance is created using Account.fromEnv(), which retrieves the necessary credentials from environment variables. This ensures the deployment uses a valid account on the Massa network.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Provider Initialization"),":")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Web3Provider.buildnet(account) sets up a provider instance connected to the Massa buildnet, allowing the account to interact with the network.")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Bytecode Retrieval"),":")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The compiled smart contract bytecode is loaded using ",(0,r.kt)("inlineCode",{parentName:"li"},"getScByteCode('build', 'main.wasm')"),". This function reads the compiled .wasm file from the specified directory ",(0,r.kt)("inlineCode",{parentName:"li"},"build"),".\nIt assume your contract file is ",(0,r.kt)("inlineCode",{parentName:"li"},"main.ts"),". The getScByteCode implementation can be found ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/massalabs/massa-sc-toolkit/blob/a987baa4ad0f5b9a3aea1cc1107d1e90892c5fee/packages/sc-project-initializer/commands/init/src/utils.ts#L8"},"here"))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Constructor Arguments"),":")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The constructor arguments are prepared using Args, where addString("Welcome to Massa!") serializes the initialization message. This message will be passed to the constructor function in the smart contract.')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Contract Deployment"),":")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SmartContract.deploy is called with the provider, bytecode, and constructor arguments to deploy the contract.\nThe coins option specifies an initial allocation of 0.01 MAS to the contract.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Deploying a smart contract on Massa incurs a cost, which is deducted from the caller's wallet in MAS. The deployment cost is proportional to the size of the compiled contract bytecode. This means that larger smart contracts, with more complex logic and features, will generally require more MAS to deploy. Learn more about storage costs ",(0,r.kt)("a",{parentName:"p",href:"https://docs.massa.net/docs/learn/storage-costs"},"here"))),(0,r.kt)("p",null,"By following this approach, you can initialize your Massa smart contract with parameters at deployment, ensuring the constructor sets up the contract's initial state with custom values."))}m.isMDXComponent=!0}}]);