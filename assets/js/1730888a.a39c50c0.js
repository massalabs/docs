"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[5750],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9328:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={id:"operation",sidebar_label:"Operation"},i="Operation",s={unversionedId:"build/massa-web3/operation",id:"build/massa-web3/operation",title:"Operation",description:"The Operation object is returned when sending an operation to the Massa blockchain. It contains a variety of helper methods to check the status of the operation, wait for its execution, and retrieve associated events.",source:"@site/docs/build/massa-web3/operation.md",sourceDirName:"build/massa-web3",slug:"/build/massa-web3/operation",permalink:"/docs/build/massa-web3/operation",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/massa-web3/operation.md",tags:[],version:"current",lastUpdatedBy:"Peterjah",lastUpdatedAt:1733919726,formattedLastUpdatedAt:"Dec 11, 2024",frontMatter:{id:"operation",sidebar_label:"Operation"},sidebar:"buildSidebar",previous:{title:"Smart-contracts",permalink:"/docs/build/massa-web3/smart-contracts"},next:{title:"Introduction",permalink:"/docs/build/massa-web3/contracts-wrappers/contract-wrappers-intro"}},l={},p=[{value:"Usage Example",id:"usage-example",level:2},{value:"Methods",id:"methods",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"operation"},"Operation"),(0,r.kt)("p",null,"The Operation object is returned when sending an operation to the Massa blockchain. It contains a variety of helper methods to check the status of the operation, wait for its execution, and retrieve associated events."),(0,r.kt)("h2",{id:"usage-example"},"Usage Example"),(0,r.kt)("p",null,"Here's a basic example of how to use the Operation object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { OperationStatus } from "@massalabs/massa-web3";\n\n// Here we assume that \'provider\' is an instance of Provider\nconst operation = await provider.callSC({\n  func: targetFunction,\n  target: targetAddress,\n  parameter,\n  coins,\n});\n\nconst speculativeStatus = await operation.waitSpeculativeExecution();\nconsole.log("Speculative status:", speculativeStatus);\n\nif (status === OperationStatus.SpeculativeSuccess) {\n  console.log("Operation Success");\n}\n\nconst speculativeEvents = await operation.getSpeculativeEvents();\nconsole.log("Speculative events:", speculativeEvents);\n\nconst finalStatus = await operation.waitFinalExecution();\nconsole.log("Final status:", finalStatus);\n\nconst finalEvents = await operation.getFinalEvents();\nconsole.log("Final events:", finalEvents);\n')),(0,r.kt)("p",null,"This example demonstrates how to create an Operation object, wait for its execution (both speculative and final) and retrieve events."),(0,r.kt)("p",null,"Remember to handle errors appropriately in your actual implementation, as blockchain operations can fail due to various reasons such as network issues or execution errors."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async getStatus(): Promise<OperationStatus>\n")),(0,r.kt)("p",null,"Gets the current status of the operation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Returns: A Promise that resolves to the OperationStatus of the operation.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async waitSpeculativeExecution(timeout?: number, period?: number): Promise<OperationStatus>\n")),(0,r.kt)("p",null,"Waits for the operation to be included in a block (speculative execution)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout")," (optional): The maximum time to wait (default: 60000ms)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"period")," (optional): The time interval to check the status (default: 500ms)."),(0,r.kt)("li",{parentName:"ul"},"Returns: A Promise that resolves to the OperationStatus or NotFound if the timeout is reached.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async waitFinalExecution(timeout?: number, period?: number): Promise<OperationStatus>\n")),(0,r.kt)("p",null,"Waits for the block containing the operation to be final."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout")," (optional): The maximum time to wait (default: 60000ms)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"period")," (optional): The time interval to check the status (default: 500ms)."),(0,r.kt)("li",{parentName:"ul"},"Returns: A Promise that resolves to the OperationStatus or NotFound if the timeout is reached.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async getFinalEvents(): Promise<SCEvent[]>\n")),(0,r.kt)("p",null,"Gets the events of the operation once the block reaches the final state."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Returns: A Promise that resolves to an array of SCEvent objects."),(0,r.kt)("li",{parentName:"ul"},"Throws an error if the operation is not found.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async getSpeculativeEvents(): Promise<SCEvent[]>\n")),(0,r.kt)("p",null,"Gets the events of the speculative execution of the operation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Returns: A Promise that resolves to an array of SCEvent objects."),(0,r.kt)("li",{parentName:"ul"},"Throws an error if the operation is not found.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async getDeployedAddress(waitFinal = false): Promise<string>\n")),(0,r.kt)("p",null,"Gets the deployed address of a smart contract operation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"waitFinal")," (optional): If true, waits for final execution; otherwise, uses speculative execution (default: false)."),(0,r.kt)("li",{parentName:"ul"},"Returns: A Promise that resolves to the deployed contract address."),(0,r.kt)("li",{parentName:"ul"},"Throws an error if no events are received or if there's an execution error.")))}m.isMDXComponent=!0}}]);