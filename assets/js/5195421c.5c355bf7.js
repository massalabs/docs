"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,v=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={},i="Events",o={unversionedId:"build/smart-contract/basic-concepts/events",id:"build/smart-contract/basic-concepts/events",title:"Events",description:"In Massa's smart contracts, events provide a way to emit runtime messages that can be useful for monitoring, debugging, and logging activities within the contract. Events can be triggered by errors, such as assertion failures or insufficient coin balances, as well as custom, user-defined events.",source:"@site/docs/build/smart-contract/basic-concepts/events.mdx",sourceDirName:"build/smart-contract/basic-concepts",slug:"/build/smart-contract/basic-concepts/events",permalink:"/docs/build/smart-contract/basic-concepts/events",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/smart-contract/basic-concepts/events.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1744108433,formattedLastUpdatedAt:"Apr 8, 2025",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Generic Serializable",permalink:"/docs/build/smart-contract/basic-concepts/serializable"},next:{title:"Autonomous smart contracts",permalink:"/docs/build/smart-contract/async"}},l={},c=[{value:"Types of events",id:"types-of-events",level:2},{value:"Important considerations for events",id:"important-considerations-for-events",level:2},{value:"Emitting a custom event",id:"emitting-a-custom-event",level:2},{value:"Retrieving events",id:"retrieving-events",level:2},{value:"Retrieving events with filters",id:"retrieving-events-with-filters",level:2},{value:"Available event Filters",id:"available-event-filters",level:3},{value:"Event poller",id:"event-poller",level:2},{value:"How the event poller works",id:"how-the-event-poller-works",level:3},{value:"Example: Setting up an event poller",id:"example-setting-up-an-event-poller",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events"},"Events"),(0,a.kt)("p",null,"In Massa's smart contracts, events provide a way to emit runtime messages that can be useful for monitoring, debugging, and logging activities within the contract. Events can be triggered by errors, such as assertion failures or insufficient coin balances, as well as custom, user-defined events."),(0,a.kt)("h2",{id:"types-of-events"},"Types of events"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Error Events"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Error events occur when the contract encounters runtime issues, such as:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Failed assertions, where the assert statement fails."),(0,a.kt)("li",{parentName:"ul"},"Errors during argument deserialization"),(0,a.kt)("li",{parentName:"ul"},"Insufficient coins to write to storage or to call another contract that requires a fee."))),(0,a.kt)("li",{parentName:"ul"},"These events help identify issues and diagnose why a transaction or contract call may have failed."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"User-Defined Events"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In addition to system-generated error events, developers can define custom events to log specific actions or important milestones within the contract."),(0,a.kt)("li",{parentName:"ul"},"User-defined events are typically used to provide visibility into contract behavior, for example during a transfer or token minting.")))),(0,a.kt)("h2",{id:"important-considerations-for-events"},"Important considerations for events"),(0,a.kt)("p",null,"In Massa, events are not stored in the blockchain ledger, meaning they are ephemeral. Therefore, events should not be used as a source of persistent data. Instead, they are suitable for temporary tasks such as monitoring, logging, or providing real-time feedback.\nFor use cases that require persistent data, storage should be used."),(0,a.kt)("h2",{id:"emitting-a-custom-event"},"Emitting a custom event"),(0,a.kt)("p",null,"To emit a custom event in a smart contract, you can use the generateEvent function (assuming this utility is available in your environment):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { generateEvent } from "@massalabs/massa-as-sdk";\n\nexport function transferTokens(to: string, amount: u64): void {\n    // Transfer logic here\n\n    // Emit a custom event after transfer\n    generateEvent(`Transferred ${amount.toString()} tokens to ${to}`);\n}\n')),(0,a.kt)("p",null,"In this example, the generateEvent function is used to emit a custom message after a token transfer operation. This message can be retrieved as shown in the example below."),(0,a.kt)("h2",{id:"retrieving-events"},"Retrieving events"),(0,a.kt)("p",null,"Although events are not permanently stored on the blockchain, they can still be retrieved for monitoring purposes after being emitted. Here's an example of how to retrieve events for a specific smart contract using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-web3"},"@massalabs/massa-web3")," provider:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// typescript\nconst events = await provider.getEvents({\n  smartContractAddress: \"<deployed_contract_address>\",\n});\n\nfor (const event of events) {\n  console.log('Event message:', event.data);\n}\n")),(0,a.kt)("h2",{id:"retrieving-events-with-filters"},"Retrieving events with filters"),(0,a.kt)("p",null,"When retrieving events from a Massa smart contract, you can apply various filters to specify which events to retrieve. These filters allow you to narrow down the results based on specific criteria, such as the contract address, caller address, event time range, and whether the events are final or error-related. This flexibility helps you target the most relevant events for monitoring, debugging, or analysis."),(0,a.kt)("h3",{id:"available-event-filters"},"Available event Filters"),(0,a.kt)("p",null,"Here are the different optional filters you can use when retrieving events:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"start")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"end")," (Slot):")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Specifies the time range for events to retrieve, based on slots."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"start"),": The slot at which to begin retrieving events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"end"),": The slot at which to stop retrieving events."),(0,a.kt)("li",{parentName:"ul"},"These filters are useful for fetching events that occurred within a specific timeframe.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"smartContractAddress"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Filters events by the specific smart contract address that emitted them."),(0,a.kt)("li",{parentName:"ul"},"This is essential for retrieving events from a particular contract, especially in environments with multiple contracts.")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"callerAddress"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Filters events by the address that called the smart contract."),(0,a.kt)("li",{parentName:"ul"},"Use this filter to track interactions made by a specific user or another smart contract, providing insights into usage patterns or access control.")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"operationId"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Filters events by a specific operation ID, allowing you to trace events related to a particular operation."),(0,a.kt)("li",{parentName:"ul"},"This is useful for tracking the full lifecycle of an operation, including any events it triggered.")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"isFinal"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Filters events based on whether they are final or not."),(0,a.kt)("li",{parentName:"ul"},"Set to true to retrieve only final events, which are confirmed and immutable, or false to get non-final events that are still subject to change.")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"isError"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Filters events by error status."),(0,a.kt)("li",{parentName:"ul"},"Set to true to retrieve only error events, which can help identify failed operations, or false to retrieve only successful events.")),(0,a.kt)("h2",{id:"event-poller"},"Event poller"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-web3"},"@massalabs/massa-web3")," library includes an event poller, that facilitates continuous monitoring of smart contract events by polling for updates at regular intervals. This feature is particularly useful for applications that require real-time event tracking or need to respond dynamically to contract activities."),(0,a.kt)("h3",{id:"how-the-event-poller-works"},"How the event poller works"),(0,a.kt)("p",null,"The event poller retrieves events from the Massa blockchain using specified filters and invokes callback functions for handling incoming data and errors. You can configure the poller with various parameters, such as the smart contract address and the polling interval, to tailor its behavior to your needs."),(0,a.kt)("h3",{id:"example-setting-up-an-event-poller"},"Example: Setting up an event poller"),(0,a.kt)("p",null,"Below is an example of how to use the EventPoller from ","[@massalabs/massa-web3]","(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-web3"},"https://github.com/massalabs/massa-web3")," to continuously fetch and log events for a specific smart contract. This code sets up a poller that checks for new events every 5 seconds, processes each event, and stops if an error occurs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// typescript\nlet stop = false;\n\n// Callback function for handling incoming events\nconst onData = async (events: SCEvent[]) => {\n  for (const event of events) {\n    console.log(\n      `Event period: ${event.context.slot.period} thread: ${event.context.slot.thread} -`,\n      event.data,\n    );\n  }\n};\n\n// Callback function for handling errors\nconst onError = (error: Error) => {\n  console.error('Error:', error);\n  stop = true; // Stop polling in case of an error\n};\n\n// Start the event poller with a 5-second interval\nconst { stopPolling } = EventPoller.start(\n  provider,\n  {\n    smartContractAddress: CONTRACT_ADDR, // Replace with your contract address\n  },\n  onData,\n  onError,\n  5000, // Polling interval in milliseconds\n);\n\n// Continue polling until stopped\nwhile (!stop) {\n  await scheduler.wait(5000);\n}\nstopPolling(); // Stop polling once the loop terminates\n")))}m.isMDXComponent=!0}}]);