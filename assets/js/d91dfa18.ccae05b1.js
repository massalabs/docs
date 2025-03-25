"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[7415],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>y});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),c=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(a),m=r,y=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(y,s(s({ref:e},p),{},{components:a})):n.createElement(y,s({ref:e},p))}));function y(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[d]="string"==typeof t?t:r,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7544:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={},s="Smart Contract Data Types",l={unversionedId:"build/smart-contract/basic-concepts/data-types",id:"build/smart-contract/basic-concepts/data-types",title:"Smart Contract Data Types",description:"When developing smart contracts on Massa, it is essential to understand the data types available in AssemblyScript, as they directly influence how you handle and manipulate data within the contract. AssemblyScript offers a range of data types that align closely with WebAssembly's capabilities, providing efficient and predictable performance.",source:"@site/docs/build/smart-contract/basic-concepts/data-types.mdx",sourceDirName:"build/smart-contract/basic-concepts",slug:"/build/smart-contract/basic-concepts/data-types",permalink:"/docs/build/smart-contract/basic-concepts/data-types",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/smart-contract/basic-concepts/data-types.mdx",tags:[],version:"current",lastUpdatedBy:"Peterjah",lastUpdatedAt:1742893647,formattedLastUpdatedAt:"Mar 25, 2025",frontMatter:{},sidebar:"buildSidebar",previous:{title:"File structure and function visibility",permalink:"/docs/build/smart-contract/basic-concepts/file-structure"},next:{title:"Calling a smart contract",permalink:"/docs/build/smart-contract/basic-concepts/functions-parameters"}},o={},c=[{value:"AssemblyScript native types",id:"assemblyscript-native-types",level:2},{value:"Array:",id:"array",level:3},{value:"Byte array:",id:"byte-array",level:3},{value:"Handling Large Numbers in Massa Smart Contracts",id:"handling-large-numbers-in-massa-smart-contracts",level:2},{value:"Example Import Statement",id:"example-import-statement",level:3}],p={toc:c},d="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-contract-data-types"},"Smart Contract Data Types"),(0,r.kt)("p",null,"When developing smart contracts on Massa, it is essential to understand the data types available in AssemblyScript, as they directly influence how you handle and manipulate data within the contract. AssemblyScript offers a range of data types that align closely with WebAssembly's capabilities, providing efficient and predictable performance."),(0,r.kt)("h2",{id:"assemblyscript-native-types"},"AssemblyScript native types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i8 / u8"),(0,r.kt)("td",{parentName:"tr",align:null},"8-bit signed/unsigned integers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i16 / u16"),(0,r.kt)("td",{parentName:"tr",align:null},"16-bit signed/unsigned integers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i32 / u32"),(0,r.kt)("td",{parentName:"tr",align:null},"32-bit signed/unsigned integers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i64 / u64"),(0,r.kt)("td",{parentName:"tr",align:null},"64-bit signed/unsigned integers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"f32 / f64"),(0,r.kt)("td",{parentName:"tr",align:null},"32-bit and 64-bit floating-point numbers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents a Boolean value (",(0,r.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents UTF-16 encoded text")))),(0,r.kt)("h3",{id:"array"},"Array:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Array<T>"),": Represents a dynamically-sized collection of elements of type T.\nArrays are suitable for storing lists of data, such as user addresses or transaction histories. You can define arrays with specific types, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Array<i32>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Array<string>"),", to ensure data consistency."),(0,r.kt)("h3",{id:"byte-array"},"Byte array:"),(0,r.kt)("p",null,"Massa use AssemblyScript ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticArray<u8>")," native type to represent data bytes. This type is used internally in storage and is also used to serialize public function parameters and returned data."),(0,r.kt)("h2",{id:"handling-large-numbers-in-massa-smart-contracts"},"Handling Large Numbers in Massa Smart Contracts"),(0,r.kt)("p",null,"In some smart contracts, you may need to work with numbers that exceed the size limitations of standard 64-bit integers. For example, financial applications involving token balances or computations with very large numbers require higher precision and larger ranges that i64 or u64 can't provide. To handle such cases, Massa smart contracts can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MaxGraey/as-bignum"},"as-bignum")," library, which supports fixed length big number arithmetic."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i128 / u128"),(0,r.kt)("td",{parentName:"tr",align:null},"128-bit signed/unsigned integers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i256 / u256"),(0,r.kt)("td",{parentName:"tr",align:null},"256-bit signed/unsigned integers")))),(0,r.kt)("h3",{id:"example-import-statement"},"Example Import Statement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { u256 } from "as-bignum/assembly"\n')))}u.isMDXComponent=!0}}]);