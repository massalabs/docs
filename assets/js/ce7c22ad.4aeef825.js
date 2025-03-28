"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[4016],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?a.createElement(b,o(o({ref:t},d),{},{components:r})):a.createElement(b,o({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={id:"oracle",sidebar_label:"Oracle"},o="Introduction",s={unversionedId:"build/oracle",id:"build/oracle",title:"Introduction",description:"Oracles are devices or entities that connect a blockchain network to the outside world.",source:"@site/docs/build/oracle.mdx",sourceDirName:"build",slug:"/build/oracle",permalink:"/docs/build/oracle",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/oracle.mdx",tags:[],version:"current",lastUpdatedBy:"Peterjah",lastUpdatedAt:1743169255,formattedLastUpdatedAt:"Mar 28, 2025",frontMatter:{id:"oracle",sidebar_label:"Oracle"},sidebar:"buildSidebar",previous:{title:"Standards",permalink:"/docs/build/standards"}},c={},l=[{value:"Available Price feeds",id:"available-price-feeds",level:2},{value:"Deployed Smart contracts",id:"deployed-smart-contracts",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Oracles are devices or entities that connect a blockchain network to the outside world.\nThey enable smart contracts to access all kinds of off-chain information by entering every data input through an external transaction."),(0,n.kt)("h1",{id:"umbrella"},"Umbrella"),(0,n.kt)("h2",{id:"available-price-feeds"},"Available Price feeds"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://umbrella-network.readme.io/docs/price-feeds"},"https://umbrella-network.readme.io/docs/price-feeds")),(0,n.kt)("h2",{id:"deployed-smart-contracts"},"Deployed Smart contracts"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://umbrella-network.readme.io/docs/umb-token-contracts"},"https://umbrella-network.readme.io/docs/umb-token-contracts")),(0,n.kt)("h1",{id:"example-fetching-a-price-feed"},"Example: fetching a price feed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import {Client, Args, IReadData} from "@massalabs/massa-web3";\nimport keccak256 from "@indeliblelabs/keccak256";\nimport {getClient} from "./utils";\n\nimport {\n  Args,\n  IDeserializedResult,\n  ISerializable,\n} from \'@massalabs/massa-web3\';\n\nexport class PriceData implements ISerializable<PriceData> {\n  private data: number = 0; // u8\n  private heartbeat: number = 0; // u32\n  private timestamp: number = 0; // u32\n  private price: bigint = BigInt(0); // u128\n\n  constructor(data: number = 0, heartbeat: number = 0, timestamp: number = 0, price: bigint = BigInt(0)) {\n    this.data = data;\n    this.heartbeat = heartbeat;\n    this.timestamp = timestamp;\n    this.price = price;\n  }\n\n  serialize(): Uint8Array {\n    let args = new Args()\n        .addU8(this.data)\n        .addU32(this.heartbeat)\n        .addU32(this.timestamp)\n        .addU128(BigInt(this.price));\n    return new Uint8Array(args.serialize());\n  }\n  deserialize(data: Uint8Array, offset: number): IDeserializedResult<PriceData> {\n    const args = new Args(data, offset);\n    this.data = parseInt(args.nextU8().toString());\n    this.heartbeat = args.nextU32();\n    this.timestamp = args.nextU32();\n    this.price = BigInt(parseInt(args.nextU128().toString()));\n    return { instance: this, offset: args.getOffset() };\n  }\n}\n\nlet getPriceDataArgs = new Args();\nlet pair_ = keccak256("MS-USD");\ngetPriceDataArgs.addUint8Array(new Uint8Array(pair_));\nconst scAddr: string = "AS12bVikBj3xFP3ouP71hpWbzLRDTxq2RaY2ssQWzoSZJUdK3aRm";\n\nconst {client, account} = await getClient();\n\nlet readData: IReadData = {\n    maxGas: BigInt(40_000_000),\n    targetAddress: scAddr,\n    targetFunction: "getPriceData",\n    parameter: getPriceDataArgs,\n}\nconst resp = await client.smartContracts().readSmartContract(readData);\nconst priceData = new Args(resp.returnValue).nextSerializable(PriceData);\nconsole.log("priceData:", priceData);\n')))}u.isMDXComponent=!0}}]);