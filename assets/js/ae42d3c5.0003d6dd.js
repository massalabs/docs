"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[4628],{1364:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=s(4848),a=s(8453);const o={id:"sdk",sidebar_label:"AS SDK"},i="AS-SDK",r={id:"build/smart-contract/sdk",title:"AS-SDK",description:"AS-SDK is a software development kit designed specifically for Massa smart contracts written in AssemblyScript. It provides a set of functions and objects that wrap the ABIs exposed by the node.",source:"@site/docs/build/smart-contract/as-sdk.md",sourceDirName:"build/smart-contract",slug:"/build/smart-contract/sdk",permalink:"/docs/build/smart-contract/sdk",draft:!1,unlisted:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/smart-contract/as-sdk.md",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1723551924e3,frontMatter:{id:"sdk",sidebar_label:"AS SDK"},sidebar:"buildSidebar",previous:{title:"WebAssembly Module",permalink:"/docs/build/smart-contract/webassembly-module"},next:{title:"Introduction",permalink:"/docs/build/wallet/intro"}},c={},d=[{value:"Coins",id:"coins",level:2},{value:"Context",id:"context",level:2},{value:"Contract",id:"contract",level:2},{value:"OpDatastore",id:"opdatastore",level:2},{value:"Storage",id:"storage",level:2},{value:"Utilities",id:"utilities",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"as-sdk",children:"AS-SDK"})}),"\n",(0,n.jsx)(t.p,{children:"AS-SDK is a software development kit designed specifically for Massa smart contracts written in AssemblyScript. It provides a set of functions and objects that wrap the ABIs exposed by the node."}),"\n",(0,n.jsx)(t.p,{children:"It includes several namespaces, each containing functions and objects that provide specific functionalities:"}),"\n",(0,n.jsx)(t.h2,{id:"coins",children:"Coins"}),"\n",(0,n.jsxs)(t.p,{children:["The Coins namespace includes functions for interacting with wallet balances and transfers. For more information on this namespace, see the ",(0,n.jsx)(t.a,{href:"https://as-sdk.docs.massa.net/modules/Coins.html",children:"AS-SDK Coins documentation"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,n.jsxs)(t.p,{children:["The Context namespace includes functions to interact with the execution context of a smart contract on the Massa blockchain. This namespace is particularly useful to retrieve information about the current state of a smart contract, such as the caller and callee of the current contract, the call stack, the amount of transferred coins, the remaining gas, and the timestamp. For more information on this namespace, see the ",(0,n.jsx)(t.a,{href:"https://as-sdk.docs.massa.net/modules/Context.html",children:"AS-SDK Context documentation"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"contract",children:"Contract"}),"\n",(0,n.jsxs)(t.p,{children:["The Contract namespace includes functions to interact with other smart contract functions and manipulate their bytecode. This namespace is particularly useful to create new smart contracts and send messages to existing ones. For more information on this namespace, see the ",(0,n.jsx)(t.a,{href:"https://as-sdk.docs.massa.net/modules/Contract.html",children:"AS-SDK Contract documentation"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"opdatastore",children:"OpDatastore"}),"\n",(0,n.jsxs)(t.p,{children:["The OpDatastore namespace includes functions to interact with the operation datastore. This key/value storage can be filled by the operation creator and then used by the smart contract being executed. This namespace is particularly useful to read the data that is passed with the bytecode in an ",(0,n.jsx)(t.a,{href:"/docs/learn/architecture/basic-concepts#smart-contract-operations",children:"execute smart contract operation"}),". For more information on this namespace, see the ",(0,n.jsx)(t.a,{href:"https://as-sdk.docs.massa.net/modules/OpDatastore.html",children:"AS-SDK OpDatastore documentation"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"storage",children:"Storage"}),"\n",(0,n.jsxs)(t.p,{children:["The Storage namespace includes functions to interact with the key-value datastore. This namespace is particularly useful to read and write data that is expected to persist between contract executions, such as contract state or user information. For more information on this namespace, see the ",(0,n.jsx)(t.a,{href:"https://as-sdk.docs.massa.net/modules/Storage.html",children:"AS-SDK Storage documentation"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"utilities",children:"Utilities"}),"\n",(0,n.jsxs)(t.p,{children:["The Utilities namespace includes various utility functions, such as event generation, base58 encoding and decoding, and public key to address conversion. For more information on this namespace, see the ",(0,n.jsx)(t.a,{href:"https://as-sdk.docs.massa.net/modules/Utilities.html",children:"AS-SDK Utilities documentation"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>r});var n=s(6540);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);