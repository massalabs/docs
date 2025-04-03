"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[7515],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var s=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=s.createContext({}),c=function(e){var t=s.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return s.createElement(i.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,p=u["".concat(i,".").concat(m)]||u[m]||h[m]||r;return a?s.createElement(p,o(o({ref:t},d),{},{components:a})):s.createElement(p,o({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},198:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=a(7462),n=(a(7294),a(3905));const r={id:"massa-asc",sidebar_label:"Autonomous Smart Contracts"},o="Massa's Autonomous Smart Contracts",l={unversionedId:"learn/asc/massa-asc",id:"learn/asc/massa-asc",title:"Massa's Autonomous Smart Contracts",description:"Here we will explain how Massa's Autonomous Smart Contracts work by constructing all their features step by step.",source:"@site/docs/learn/asc/massa-asc.mdx",sourceDirName:"learn/asc",slug:"/learn/asc/massa-asc",permalink:"/docs/learn/asc/massa-asc",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/learn/asc/massa-asc.mdx",tags:[],version:"current",lastUpdatedBy:"Peterjah",lastUpdatedAt:1743675671,formattedLastUpdatedAt:"Apr 3, 2025",frontMatter:{id:"massa-asc",sidebar_label:"Autonomous Smart Contracts"},sidebar:"learnSidebar",previous:{title:"Introduction",permalink:"/docs/learn/asc/intro"},next:{title:"Decentralized Web",permalink:"/docs/learn/decentralized-web"}},i={},c=[{value:"The clock: Massa is a timed blockchain",id:"the-clock-massa-is-a-timed-blockchain",level:2},{value:"Slots and block execution",id:"slots-and-block-execution",level:3},{value:"Operations in Massa",id:"operations-in-massa",level:3},{value:"Having users race for automation",id:"having-users-race-for-automation",level:3},{value:"Async messages: allowing smart contracts to emit operation-like messages",id:"async-messages-allowing-smart-contracts-to-emit-operation-like-messages",level:2},{value:"General idea",id:"general-idea",level:3},{value:"Async message structure",id:"async-message-structure",level:3},{value:"The power of Async Messages in Massa",id:"the-power-of-async-messages-in-massa",level:3},{value:"Limitations of Async Messages",id:"limitations-of-async-messages",level:3},{value:"Deferred calls: scheduling future calls with guaranteed execution",id:"deferred-calls-scheduling-future-calls-with-guaranteed-execution",level:2},{value:"General description",id:"general-description",level:3},{value:"How are deferred calls scheduled?",id:"how-are-deferred-calls-scheduled",level:3},{value:"Step 1: Requesting a quote",id:"step-1-requesting-a-quote",level:3},{value:"Step 2: Registering a deferred call",id:"step-2-registering-a-deferred-call",level:3},{value:"How are deferred calls executed?",id:"how-are-deferred-calls-executed",level:3},{value:"Cancellation",id:"cancellation",level:3},{value:"The power of Deferred Calls in Massa",id:"the-power-of-deferred-calls-in-massa",level:3},{value:"Limitations of Deferred Calls",id:"limitations-of-deferred-calls",level:3},{value:"Summary: Centralized Servers vs Public race vs Async Messages vs Deferred Calls",id:"summary-centralized-servers-vs-public-race-vs-async-messages-vs-deferred-calls",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,s.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"massas-autonomous-smart-contracts"},"Massa's Autonomous Smart Contracts"),(0,n.kt)("p",null,"Here we will explain how Massa's Autonomous Smart Contracts work by constructing all their features step by step.\nMake sure you have read the ",(0,n.kt)("a",{parentName:"p",href:"./intro"},"introduction to Autonomous Smart Contracts")," before diving into the details."),(0,n.kt)("p",null,"Massa provides three features that enable smart contracts to operate autonomously:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"an absolute clock"),(0,n.kt)("li",{parentName:"ul"},"async messages: those resemble normal user-emitted operations but can be emitted by smart contracts in order to execute something in the future"),(0,n.kt)("li",{parentName:"ul"},"deferred calls: a way to schedule a future call")),(0,n.kt)("h2",{id:"the-clock-massa-is-a-timed-blockchain"},"The clock: Massa is a timed blockchain"),(0,n.kt)("h3",{id:"slots-and-block-execution"},"Slots and block execution"),(0,n.kt)("p",null,"In Massa, time is divided in 0.5 second intervals through Slots (see ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn/architecture/basic-concepts"},"the basic concepts"),".\nSlots are absolute points in time: the first slot happened at the genesis timestamp (",(0,n.kt)("inlineCode",{parentName:"p"},"15/01/2024 12:00:00 UTC"),") and there is one slot every 0.5 second since genesis."),(0,n.kt)("p",null,'At each slot, a block producer is selected to produce a block.\nThe block producer picks operations from the pool of non-executed operations ("mempool") that it has observed propagating in the network, and includes them in their block for execution.\nIf the blocks are full, pending operations are competing for resources, and therefore block producers will prioritize operations that bring them higher fees compared to the resources they occupy.'),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn/architecture/basic-concepts"},"the basic concepts")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn/architecture/operation-lifecycle"},"the operation lifecycle")," for more details."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Slots in Massa",src:a(647).Z,width:"924",height:"697"})),(0,n.kt)("p",null,"When the time of a slot is reached, that slot is executed by all nodes."),(0,n.kt)("p",null,'During the execution of a slot, the block produced for that slot is executed by all nodes.\nIt can happen that the block producer did not produce their block, in which case no block is executed during the execution of the slot (it\'s a "miss").\nWhen a block is executed, the operations it contains are executed in the order they were included in the block.'),(0,n.kt)("h3",{id:"operations-in-massa"},"Operations in Massa"),(0,n.kt)("p",null,"Here is what a typical operation in Massa looks like:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Transaction in Massa",src:a(7992).Z,width:"445",height:"385"})),(0,n.kt)("p",null,"It contains:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a Fee (tip) given to block producers to motivate them to include the operation in their block and limit flooding,"),(0,n.kt)("li",{parentName:"ul"},"validity conditions (validity start and end slots) to ensure the operation is executed only in a specific time window,"),(0,n.kt)("li",{parentName:"ul"},"info on resource usage, typically the amount of gas consumed by the operation,"),(0,n.kt)("li",{parentName:"ul"},"the payload which can be the execution of a smart contract or a simple transfer of tokens.")),(0,n.kt)("p",null,"Read about ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn/architecture/operation-lifecycle"},"the operation lifecycle")," for more details."),(0,n.kt)("h3",{id:"having-users-race-for-automation"},"Having users race for automation"),(0,n.kt)("p",null,"One trick used by some protocols to achieve decentralized automation is to let users race and pay the first one that manages to trigger an expected call.\nPublic race is typically used in lending protocols in which users race to detect under-collateralized positions and send operations to liquidate them, pocketing a reward."),(0,n.kt)("p",null,"This approach works on Massa as well, but it has several limitations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"it only works for suitable use cases in which there is a reward for users"),(0,n.kt)("li",{parentName:"ul"},"it inherits of the usual limitations of operations: the need for private keys and signing, the need to pay fees, potential delays, etc.")),(0,n.kt)("p",null,"Another problem is that having many users race can result in many operations being sent to the network by many users at the same time, which can cause overload issues."),(0,n.kt)("h2",{id:"async-messages-allowing-smart-contracts-to-emit-operation-like-messages"},"Async messages: allowing smart contracts to emit operation-like messages"),(0,n.kt)("h3",{id:"general-idea"},"General idea"),(0,n.kt)("p",null,'Why would only external users be allowed to emit operations?\nThe idea is that if we allow smart contracts to emit something that looks like operations (we call those "Async Messages"),\nthey could schedule future calls to themselves or to other smart contracts in order to achieve autonomy.'),(0,n.kt)("p",null,"Here is how it works:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Async message execution in Massa",src:a(9400).Z,width:"1389",height:"515"})),(0,n.kt)("p",null,"When a smart contract is executed, it can emit async messages that will be sent to a separate mempool which,\ncontrary to the classical mempool, is deterministic and synchronized between all nodes.\nAll nodes see exactly the same autonomous mempool at each final slot."),(0,n.kt)("p",null,"When a slot is executed, nodes start by executing the block it contains (if any).\nThen, all nodes pick async messages that are ready to execute from the autonomous mempool and execute them by prioritizing them by the same criteria that block producers use for operations:\nfee vs resource (gas) usage.\nJust like for block production, the available gas for async message execution is limited within a slot.\nThe difference here is that all nodes pick exactly the same async messages to execute at the end of the slot, through an automated algorithm that ensures that all nodes stay in sync.\nThis means that async messages can get executed at a given slot even if there was no block produced at that slot."),(0,n.kt)("p",null,"A smart contract executed by an operation or an async message can in turn emit more async messages."),(0,n.kt)("h3",{id:"async-message-structure"},"Async message structure"),(0,n.kt)("p",null,"Here is what an async message looks like:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Async message in Massa",src:a(1552).Z,width:"533",height:"461"})),(0,n.kt)("p",null,"It resembles a normal operation as it contains:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Fee (tip) that is ",(0,n.kt)("strong",{parentName:"li"},"fully burned")," because anti-flood is needed, but since inclusion is deterministic, there is no need to incentivize block producers. All token holders profit from the burn."),(0,n.kt)("li",{parentName:"ul"},"Validity conditions can be one or all of the following:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"start and end validity slots: the async message can only be executed in a specific time window"),(0,n.kt)("li",{parentName:"ul"},"require a specific entry to change in the blockchain to enable the message: this is useful to only trigger the message when a specific on-chain event happens"))),(0,n.kt)("li",{parentName:"ul"},"Info on resource usage: here only gas usage."),(0,n.kt)("li",{parentName:"ul"},"The payload describing the call of a smart contract function. The contents match those of a ",(0,n.kt)("inlineCode",{parentName:"li"},"CallSC")," operation (",(0,n.kt)("inlineCode",{parentName:"li"},"target_address"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"target_function"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"parameters"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"coins"),"). Read about ",(0,n.kt)("a",{parentName:"li",href:"/docs/learn/architecture/operation-lifecycle"},"the operation lifecycle")," for more details.")),(0,n.kt)("p",null,"When an async message is emitted by a smart contract, ",(0,n.kt)("inlineCode",{parentName:"p"},"fee + coins")," are taken away from the smart contract's balance.\n",(0,n.kt)("inlineCode",{parentName:"p"},"fee")," is burned (see above) and ",(0,n.kt)("inlineCode",{parentName:"p"},"coins")," is locked in the message to be used as the ",(0,n.kt)("inlineCode",{parentName:"p"},"coins")," parameter for calling the target smart contract function when the message is executed in the future."),(0,n.kt)("h3",{id:"the-power-of-async-messages-in-massa"},"The power of Async Messages in Massa"),(0,n.kt)("p",null,"Async messages are executed independently of blocks.\nThis means that smart contracts in Massa do not need block executions to run over time: they can live by themselves.\nThis is possible because the full async message lifecycle is on-chain, deterministic and synchronized between all nodes:\nevery node knows exactly how each smart contract should evolve in time."),(0,n.kt)("p",null,"In other words, blocks in Massa are just a way to ensure security and to inject data and user requests from the outside world into the blockchain,\nbut the smart contracts themselves can live and evolve autonomously within the blockchain."),(0,n.kt)("p",null,"This also means that, just like normal users do for operations, smart contracts in Massa need to be handling the fee payments for the async messages they emit. "),(0,n.kt)("p",null,"Also, contrary to operations, there no need to handle private keys and signing!"),(0,n.kt)("h3",{id:"limitations-of-async-messages"},"Limitations of Async Messages"),(0,n.kt)("p",null,"Async messages are inspired by operations, and therefore they are subject to some of their limitations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In case of congestion of the autonomous mempool, the fee of the async message will determine its priority for execution. This means that if the fee is too low, the message execution might be delayed or not happen at all."),(0,n.kt)("li",{parentName:"ul"},"If the async message expires without having been executed, it is dropped from the autonomous mempool and the locked ",(0,n.kt)("inlineCode",{parentName:"li"},"coins")," are sent back to the smart contract that emitted the async message."),(0,n.kt)("li",{parentName:"ul"},"If the autonomous mempool is full, the lowest priority async messages (lowest fee over gas ratio) are dropped from the mempool and the locked ",(0,n.kt)("inlineCode",{parentName:"li"},"coins")," are sent back to the smart contract that emitted the async message. They won't be executed.")),(0,n.kt)("h2",{id:"deferred-calls-scheduling-future-calls-with-guaranteed-execution"},"Deferred calls: scheduling future calls with guaranteed execution"),(0,n.kt)("p",null,"As a complementary solution to async messages, Massa also provides a way for smart contracts to schedule future calls,\nbut this time with a full guarantee that not only the scheduled execution will happen, but also that it will happen exactly at the slot decided by the smart contract."),(0,n.kt)("h3",{id:"general-description"},"General description"),(0,n.kt)("p",null,"Deferred calls work in a fundamentally different way compared to async messages and provide different advantages and drawbacks.\nHere is an overview:"),(0,n.kt)("h3",{id:"how-are-deferred-calls-scheduled"},"How are deferred calls scheduled?"),(0,n.kt)("p",null,"A smart contract can schedule a deferred call in two steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"step 1: the smart contract requests a quote to schedule the call at a given future slot and provides the call parameter length and max amount of gas necessary for the call.\nThe system tells the smart contract whether there is still enough gas available at the desired slot, and the fee the smart contract would need to burn to schedule the requested call."),(0,n.kt)("li",{parentName:"ul"},"step 2: if the smart contract agrees with the quote, it pays the quoted fee and any call coins, and the system schedules the call for the desired slot.")),(0,n.kt)("p",null,"Here are more details:"),(0,n.kt)("h3",{id:"step-1-requesting-a-quote"},"Step 1: Requesting a quote"),(0,n.kt)("p",null,"To schedule a future call, a smart contract needs to request a quote from the system with the following parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the target slot at which the call should happen"),(0,n.kt)("li",{parentName:"ul"},"the max amount of gas the call will need"),(0,n.kt)("li",{parentName:"ul"},"the size of the arguments to pass to the called function")),(0,n.kt)("p",null,"The system then performs the following steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the target slot is at the current slot or the past, or too much in the future (later than ",(0,n.kt)("inlineCode",{parentName:"li"},"DEFERRED_CALL_MAX_FUTURE_SLOTS")," slots from now), the quote is rejected."),(0,n.kt)("li",{parentName:"ul"},"At each slot, there is ",(0,n.kt)("inlineCode",{parentName:"li"},"DEFERRED_CALL_MAX_ASYNC_GAS")," assigned for deferred calls. If, given the already scheduled deferred calls at the target slot, there is not enough gas left for the new call, the quote is rejected."),(0,n.kt)("li",{parentName:"ul"},"A fee is automatically calculated and returned by the system using an algorithm inspired by airplane transport pricing:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"there is a base fee that is adjusted slowly over time based on the average usage to respond to market changes"),(0,n.kt)("li",{parentName:"ul"},"the fee increases with the amount of gas requested"),(0,n.kt)("li",{parentName:"ul"},"the fee increases with the occupancy of the target slot"),(0,n.kt)("li",{parentName:"ul"},"the fee increases with the average occupancy of all slots currently available for reservation"),(0,n.kt)("li",{parentName:"ul"},"there is an extra fee for storing the arguments of the call in the state according to the logic given by ",(0,n.kt)("a",{parentName:"li",href:"/docs/learn/storage-costs"},"storage costs"),". This charge is refunded to the emitter of the deferred call when the deferred call is removed from the state (eg. when it is executed).")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Deferred calls: quote step",src:a(6726).Z,width:"1213",height:"503"})),(0,n.kt)("p",null,"If the quote does not match the expectations of the smart contract,\nit can quote again at a different slot or different parameters, or simply trigger some notification or backup mechanism."),(0,n.kt)("h3",{id:"step-2-registering-a-deferred-call"},"Step 2: Registering a deferred call"),(0,n.kt)("p",null,"If the smart contract agrees with the quote, it can request the registration of the deferred call by providing:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the slot at which the call should happen"),(0,n.kt)("li",{parentName:"ul"},"the max amount of gas the call will need"),(0,n.kt)("li",{parentName:"ul"},"the target smart contract address to call"),(0,n.kt)("li",{parentName:"ul"},"the target function name to call"),(0,n.kt)("li",{parentName:"ul"},"the parameters of the function to call"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"coins")," to pass for the call")),(0,n.kt)("p",null,"If the deferred call is valid and the target slot is properly available (i.e. a quote would not return a rejection, see above),\nthe system spends ",(0,n.kt)("inlineCode",{parentName:"p"},"fee + coins")," from the smart contract balance and schedules the call for the target slot.\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"fee")," is burned and the ",(0,n.kt)("inlineCode",{parentName:"p"},"coins")," are locked in the deferred call."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Deferred calls: quote step",src:a(3241).Z,width:"1216",height:"508"})),(0,n.kt)("p",null,"Once registered, the deferred call is guaranteed to be executed at the target slot by all nodes, independently of blocks and async messages.\nAfter registration, a unique ID of the deferred call is returned to the smart contract."),(0,n.kt)("h3",{id:"how-are-deferred-calls-executed"},"How are deferred calls executed?"),(0,n.kt)("p",null,"During the execution of a slot, executions happen in the following order:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"first the deferred calls scheduled for that slot are executed (if any)"),(0,n.kt)("li",{parentName:"ul"},"then the block produced for that slot is executed (if any)"),(0,n.kt)("li",{parentName:"ul"},"then, any async messages that are ready to execute (if any) are executed as long as there is enough remaining slot gas to fill all the available slot gas that was not used by the block or deferred calls.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Deferred calls execution",src:a(9525).Z,width:"1391",height:"603"})),(0,n.kt)("p",null,"Just like async messages, deferred calls are executed independently of blocks."),(0,n.kt)("p",null,"When a deferred call is executed, the ",(0,n.kt)("inlineCode",{parentName:"p"},"coins")," locked in the call are used as the ",(0,n.kt)("inlineCode",{parentName:"p"},"coins")," parameter for calling the target smart contract function.\nThe storage costs for the arguments of the call are sent back to the smart contract that registered the deferred call."),(0,n.kt)("p",null,"In case of execution failure (non-existent target address/function, VM runtime error...), the ",(0,n.kt)("inlineCode",{parentName:"p"},"coins")," locked in the deferred call are sent back to the smart contract that registered the deferred call."),(0,n.kt)("h3",{id:"cancellation"},"Cancellation"),(0,n.kt)("p",null,"Smart contracts can decide to to cancel the execution of a deferred call they registered at any time before the target slot is reached.\nTo do this, a smart contract can request the cancellation of a deferred call by providing its unique ID.\nWhen cancellation is requested, the ",(0,n.kt)("inlineCode",{parentName:"p"},"coins")," of the call are sent back to the smart contract that registered the deferred call, but the ",(0,n.kt)("inlineCode",{parentName:"p"},"fee")," is not refunded.\nAlso note that, in order to avoid any manipulation of the predictive fee market,\nthe occupancy of the target slot is not updated when a deferred call is canceled and remains the same, as if the deferred call was still there.\nAt the moment the call would have been executed if it weren't canceled, the coins locked for storing the function arguments are sent back to the caller."),(0,n.kt)("h3",{id:"the-power-of-deferred-calls-in-massa"},"The power of Deferred Calls in Massa"),(0,n.kt)("p",null,"Deferred calls are extremely powerful because they provide a way for smart contracts to schedule future calls with a full guarantee of execution.\nThis means that smart contracts can rely on deferred calls to perform actions at an exact time in the future with strong guarantees.\nThey are the most suitable for critical and time-sensitive applications."),(0,n.kt)("h3",{id:"limitations-of-deferred-calls"},"Limitations of Deferred Calls"),(0,n.kt)("p",null,"Contrary to async messages, deferred calls can only be registered up to ",(0,n.kt)("inlineCode",{parentName:"p"},"DEFERRED_CALL_MAX_FUTURE_SLOTS")," slots in the future.\nTheir validity conditions are also much more restricted than async calls: only the target slot can be chosen, no other triggers."),(0,n.kt)("h2",{id:"summary-centralized-servers-vs-public-race-vs-async-messages-vs-deferred-calls"},"Summary: Centralized Servers vs Public race vs Async Messages vs Deferred Calls"),(0,n.kt)("p",null,"Each of the four methods has its own advantages and drawbacks:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Deferred calls vs Async Messages",src:a(685).Z,width:"1401",height:"732"})),(0,n.kt)("p",null,"Typically, Async Messages are perfect to make NFTs evolve over time,\nadd redundancy on detecting on-chain events in case keepers are down,\nand perform cosmetic actions, cleanups and so on..."),(0,n.kt)("p",null,"Deferred Calls are perfect for critical and time-sensitive applications in which there is no room for failure,\nat the cost of lower expressivity."))}h.isMDXComponent=!0},1552:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/async_msg-ef915c5830da9ba56cac39f1b3007cff.png"},9400:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/async_msg_system-6c5c96a7682c255743241286b1383add.png"},685:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/comparison-b68dd53d082d53a3e91f6256f0107ff1.png"},6726:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/deferred_call_quote-48293f05406b301dc5e943840cb1eaec.png"},3241:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/deferred_call_register-715e282a7c3cd3e0b317755f0b2a9763.png"},9525:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/deferred_calls_general-c8bda1b6a1fe87b495943772ed793d8b.png"},647:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/massa_slots-cc1703fef55226982f9e137c4859abed.png"},7992:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/massa_tx-58ba8807248df7f262b9f07be6482cf1.png"}}]);