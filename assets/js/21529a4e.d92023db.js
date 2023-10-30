"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[2595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={id:"operation-lifecycle",sidebar_label:"Operation lifecycle"},i="Operation lifecycle",l={unversionedId:"learn/architecture/operation-lifecycle",id:"learn/architecture/operation-lifecycle",title:"Operation lifecycle",description:"After learning about the Basic concepts and Massa's node architecture, we have all the elements and vocabulary",source:"@site/docs/learn/architecture/operation-lifecycle.mdx",sourceDirName:"learn/architecture",slug:"/learn/architecture/operation-lifecycle",permalink:"/docs/learn/architecture/operation-lifecycle",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/learn/architecture/operation-lifecycle.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1698693553,formattedLastUpdatedAt:"Oct 30, 2023",frontMatter:{id:"operation-lifecycle",sidebar_label:"Operation lifecycle"},sidebar:"learnSidebar",previous:{title:"Node architecture",permalink:"/docs/learn/architecture/node-architecture"},next:{title:"Consensus quality initiatives",permalink:"/docs/learn/architecture/consensus-quality"}},c={},s=[],d={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"operation-lifecycle"},"Operation lifecycle"),(0,a.kt)("p",null,"After learning about the Basic concepts and Massa's node architecture, we have all the elements and vocabulary\nin place to explore the lifecycle of an operation within the network; from creation to permanent execution in\na finalized block."),(0,a.kt)("p",null,"Operations originate externally from a client that is forging the operation, for example: a transaction or a\nsmart contract code execution. The client will have to know the IP address of a Massa Node (this can be either\nbecause it is a node itself and will simply use localhost, or via some maintained list of known nodes and/or\nsome browser plugin), and will then send the operation to the API."),(0,a.kt)("p",null,"When an operation is made available in a given node, it will be broadcasted to all other nodes via the Protocol/Network\nModule and to factories via the API Module, so that it will eventually end up in all the Pool Modules of the network."),(0,a.kt)("p",null,"Let\u2019s assume we just got a code execution operation from an external client. Let\u2019s suppose the client knows a\nparticular node, which is running its block factory on the same machine, and sends the operation to this node.\nThese are the different steps of the operation processing that will occur, as illustrated in the schema below:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5549).Z,width:"1041",height:"1041"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The operation enters the node via the API Module (the operation path is marked in blue)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The API Module forwards the operation to the Pool Module and broadcasts it to other nodes via the Protocol/Network\nModule. Other nodes hearing about it will also broadcast it (gossip protocol), and feed it to their Pool Module.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"At that stage, the operation sits in the Pool Modules of most nodes")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The Selector Module elects a particular node to handle the block production of the next current slot")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The elected node Block Factory finds out about its election by querying a Selector Module")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"It starts building a block by picking up pending operations in the Pool Module. The original operation is\neventually picked and integrated into the block. It's worth to mention that only operations created by an address within the same thread as the block can be included. This is known as a 'transaction sharding' technique and it's used to prevent double spending problem. We will now follow the block around (the block path is marked in green)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The newly produced block is sent to the Graph/Consensus Module")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The new block is processed by the Graph/Consensus Module to be included into the pending blocks DAG and\npotentially integrated into a new blockclique")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The Graph/Consensus Module sends the new block to other nodes via the Protocol/Network Module, to ensure\nsynchronization of the information in the network. The new block reaching other nodes is similarly going to be integrated into their Graph/Consensus Module")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In general, the blockclique will be extended with the new block and so will reach the Execution Module\nfrom the Graph/Consensus Module via the notification of a new blockclique. Eventually, it will also be notified\nas a final block if it gets finalized.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The Execution Module will run the blocks that are part of the updated blockclique, so the original block\nwill eventually be executed. Within the block is the original operation that was originally sent and that will\nthen be applied to the ledger for potential modifications. At this stage, the modifications are not permanent and\nsimply stored in a diff compared to the finalized ledger")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Eventually, the block will be marked as final and the ledger modification, including the operation changes,\nwill become final in the finalized ledger."))))}u.isMDXComponent=!0},5549:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/operation_lifecycle.drawio-201746987c637edaf2d8a3cf760c993a.svg"}}]);