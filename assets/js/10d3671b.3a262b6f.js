"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[1913],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=p(a),d=s,u=c["".concat(l,".").concat(d)]||c[d]||h[d]||o;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,i=new Array(o);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:s,i[1]=r;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4159:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=a(7462),s=(a(7294),a(3905));const o={id:"node-architecture",sidebar_label:"Node architecture"},i="Architecture of Massa node",r={unversionedId:"learn/architecture/node-architecture",id:"learn/architecture/node-architecture",title:"Architecture of Massa node",description:"This section assumes some basic knowledge of the Massa protocol. If you are not familiar with the basic concepts of Massa,",source:"@site/docs/learn/architecture/node-architecture.mdx",sourceDirName:"learn/architecture",slug:"/learn/architecture/node-architecture",permalink:"/docs/learn/architecture/node-architecture",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/learn/architecture/node-architecture.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1699541782,formattedLastUpdatedAt:"Nov 9, 2023",frontMatter:{id:"node-architecture",sidebar_label:"Node architecture"},sidebar:"learnSidebar",previous:{title:"Basic concepts",permalink:"/docs/learn/architecture/basic-concepts"},next:{title:"Operation lifecycle",permalink:"/docs/learn/architecture/operation-lifecycle"}},l={},p=[{value:"Bootstrap Module",id:"bootstrap-module",level:2},{value:"API Module",id:"api-module",level:2},{value:"Protocol/Network Module",id:"protocolnetwork-module",level:2},{value:"Selector Module, Proof of Stake sybil resistance",id:"selector-module-proof-of-stake-sybil-resistance",level:2},{value:"Graph/Consensus Module",id:"graphconsensus-module",level:2},{value:"Block cliques",id:"block-cliques",level:3},{value:"Finalized blocks, stale blocks",id:"finalized-blocks-stale-blocks",level:3},{value:"Graph/Consensus Module Function",id:"graphconsensus-module-function",level:3},{value:"Execution Module",id:"execution-module",level:2},{value:"Pool Module",id:"pool-module",level:2},{value:"Block/Endorsement Factory Module",id:"blockendorsement-factory-module",level:2}],m={toc:p},c="wrapper";function h(e){let{components:t,...o}=e;return(0,s.kt)(c,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"architecture-of-massa-node"},"Architecture of Massa node"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"This section assumes some basic knowledge of the Massa protocol. If you are not familiar with the basic concepts of Massa,\nread the ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn/architecture/basic-concepts"},"Basic Concepts")," section first.")),(0,s.kt)("p",null,"The section describes the global architecture of a Massa node, from the ground up."),(0,s.kt)("p",null,"This is the diagram of the architecture of the software modules involved in building, endorsing and propagating blocks.\nThe bottom part corresponds to a single process running in a node and is in charge of the execution and consensus building.\nThe pool and factories, referred to as \u201cfactory\u201d, can be potentially running in a different process or be part of the node.\nOverall, each of the modules described here runs inside one or more threads attached to their respective executable process\n(NB: the factory/node separation is not yet implemented, but will be soon)."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(554).Z,width:"962",height:"980"})),(0,s.kt)("p",null,"We will explain below the different modules present in this diagram, and simulate the production of an operation to show\nhow it navigates through the different modules to better understand how blocks are produced and propagated."),(0,s.kt)("h2",{id:"bootstrap-module"},"Bootstrap Module"),(0,s.kt)("p",null,"The bootstrap module is responsible for the initial synchronization of the node with the rest of the network. It is responsible\nfor downloading the list of peers, the current graph of blocks, the ledger, the asynchronous pool, state of the Proof-of-Stake\nand latests executed operations."),(0,s.kt)("p",null,"The bootstrap will be done from a server that is listed on the configuration of the node. Bootstrap is the entry point of the\nnetwork so you have to be careful on which node you connect to avoid downloading malicious data."),(0,s.kt)("h2",{id:"api-module"},"API Module"),(0,s.kt)("p",null,"The API Module is the public window of the node to the rest of the world. It allows for interactions with external clients or\nfactories via a ",(0,s.kt)("a",{parentName:"p",href:"/docs/build/api/jsonrpc"},"JSON RPC")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/build/api/grpc"},"gRPC")," protocols."),(0,s.kt)("p",null,"The API includes interfaces to do the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"publish a new operation from a client"),(0,s.kt)("li",{parentName:"ul"},"query the network about balances or ledger status"),(0,s.kt)("li",{parentName:"ul"},"allow for synchronization between remote pool/factory nodes and the consensus nodes, by sending/asking for blocks, best\nparents, draws, etc.")),(0,s.kt)("h2",{id:"protocolnetwork-module"},"Protocol/Network Module"),(0,s.kt)("p",null,"The Protocol/Network Module implements the protocol connecting consensus nodes. This protocol is supported by a binary and optimized transport layer."),(0,s.kt)("p",null,"The Protocol/Network Module will relay all operations/blocks creation and propagation, so that all other nodes in the\nnetwork can synchronize their internal state, following a type of gossip synchronization protocol."),(0,s.kt)("p",null,"The type of messages that can be relayed via the Protocol/Network Module include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"blocks/operations/endorsements propagation (either getting in or out of the node)"),(0,s.kt)("li",{parentName:"ul"},"nodes ban requests"),(0,s.kt)("li",{parentName:"ul"},"connectivity infos/stats.")),(0,s.kt)("h2",{id:"selector-module-proof-of-stake-sybil-resistance"},"Selector Module, Proof of Stake sybil resistance"),(0,s.kt)("p",null,"Every 0.5s, a new slot becomes active to receive a new block. A determinist selection mechanism ensures that one of\nthe nodes in the network is elected to have the responsibility to build the block for that slot. This mechanism must have several key properties:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"it should be sybil resistant, so that it is not possible to increase one\u2019s odds of being elected by creating multiple\nclones of oneself (sybil) without a cost that is equal or greater than the cost of increasing one\u2019s odds for oneself only;")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"it should be deterministic, so that all nodes in the network will agree on the result of the selection at any given time;")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"it should be fair, so that each participant has a well-defined probability of being selected somehow proportional to\nthe cost of participating, and draws converge towards this probability distribution over time."))),(0,s.kt)("p",null,"The way sybil resistance is achieved here is via the proof of stake mechanism. Nodes who want to participate in the block\ncreation lottery will have to stake \u201crolls\u201d that they buy with Massa coins. If they try to cheat by creating fake blocks\nor multiple blocks on the same slot, their stake will be taken away from them (slashing) and they would suffer the loss.\nThe probabilistic \u201csurface\u201d of a participant is equal to its total stake, which makes the creation of sybil accounts useless\nbecause the stake would have to be split between them anyway."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"More about slashing mechanism ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn/architecture/consensus-quality#slashing"},"here"))),(0,s.kt)("p",null,"The method used to draw an elected node for a given slot is simply a random draw from a distribution where addresses are\nweighted by the amount of stake (=rolls) they hold. The schema below illustrates how the seed and probability distribution\nare built, based on past cycles (two cycles are needed for the distribution update to ensure that the balance finalization\nhas occurred and the amount of rolls is accurate):"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(7253).Z,width:"321",height:"261"})),(0,s.kt)("p",null,"The Selector Module is in charge of computing the formula and replying to requests regarding what node is elected for any\ngiven slot in the present or the past. The Execution Module (see below) is in charge of feeding the Selector Module with\nupdates regarding balances, needed to compute the draws."),(0,s.kt)("h2",{id:"graphconsensus-module"},"Graph/Consensus Module"),(0,s.kt)("p",null,"The Consensus Module is the heart of the machinery of the Massa Network. It is in charge of integrating proposed blocks\ninto their respective slots and verifying the integrity of the result. We have not yet talked about the various constraints\nregarding block creation, and in particular how parents are to be selected. In traditional blockchains, the parent of a\nblock is simply the previous valid block in the chain. In the context of the Massa network and the parallel chains in the\n32 threads, identifying the proper parent in a given thread requires a more sophisticated strategy involving the notion of block cliques."),(0,s.kt)("h3",{id:"block-cliques"},"Block cliques"),(0,s.kt)("p",null,"At any given time, the set of all the blocks that have been produced and propagated in the network constitutes a graph (more precisely\na Directed Acyclic Graph or \u201cDAG\u201d), where each block, except the genesis blocks, has 32 parents. All the reasoning below can be in\nprinciple done on this increasingly vast set, but in practice, we will introduce a notion of \u201cfinalized\u201d or \u201cstaled\u201d blocks, that\ncan be removed from the set and that will allow us to work on a smaller subset of recent blocks that are neither finalized nor\nstaled, so \u201cpending\u201d blocks. This set of pending blocks is all the network needs to know in order to incrementally build up a\nconsensus, therefore non-pending blocks will simply be forgotten (this is a striking difference with most other blockchains\nthat store in each node the history of all past transactions). The main benefit of this block pruning is to allow for some of\nthe algorithms below, which are in general NP-complete, to run fast enough on a smaller subgraph, and to allow for a practical implementation."),(0,s.kt)("p",null,"Here is a simplified example of a graph of pending blocks over two threads, with blocks 3 and 4 competing for slot C1 (for example\nas a result of a multistaking attack where the block producer decided to create competing blocks for the same slot). Here the\nletter of a slot identifies it, while the number refers to its thread number:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(6531).Z,width:"518",height:"181"})),(0,s.kt)("p",null,"In this illustration we have shown only relevant parent links in blue, to make the whole diagram more readable, but in reality,\neach block has 32 parents, one in each of the 32 threads."),(0,s.kt)("p",null,"An important notion we will use in the following is that of incompatibility between blocks. Excluding some edge cases with genesis\nblocks, there are two sources of incompatibilities defined for blocks:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"thread incompatibility"),": this occurs when two blocks in a given thread have the same parent in that thread."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"grandpa incompatibility"),": this corresponds to a case with two blocks B1 and B2 in threads t1 and t2, and where the block\nB1 in t1 has a parent in t2 who is an ancestor of B2\u2019s parent in t2, and symmetrically B2\u2019s parent in t1 is an ancestor of\nB1\u2019s parent in t1.")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You will find a more formal mathematical definition of these incompatibility notions in the ",(0,s.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1803.09029.pdf"},"whitepaper"))),(0,s.kt)("p",null,"From these definitions, you can build another graph, called the incompatibility graph, which connects any two blocks that\nhave any form of incompatibility together:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(2011).Z,width:"268",height:"228"})),(0,s.kt)("p",null,"As you can see, some blocks are isolated and therefore compatible with any other, while some are linked, because they have\na form of incompatibility."),(0,s.kt)("p",null,"This brings us to the notion of a maximal clique which is a subset of the incompatibility graph such as none of the block\nmembers are incompatible with each other (so, no internal link within the clique), and it is impossible to add an extra block\nto the set without introducing incompatibilities. In the above example, there are three maximal cliques that can be built,\nas illustrated below:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(7968).Z,width:"320",height:"312"})),(0,s.kt)("p",null,"They represent candidates to extend the set of already finalized blocks into a coherent set of new blocks. All we need to\nadd to be able to build a consensus rule now is to introduce a deterministic metric to rank those candidates so that nodes\ncan independently and consistently decide on which clique is the best candidate and keep building on top of it. In particular,\nonce the best maximal clique is identified, it becomes trivial to define the list of the parents for a new block simply by\npicking the oldest block from that clique in each thread."),(0,s.kt)("p",null,"The metric used in a traditional blockchain to rank competing chain candidates is habitually the length of the chain, or more\nprecisely the total amount of work invested in the chain (also known as \u201cNakamoto consensus\u201d). In the case of block cliques,\nwe will introduce a notion of fitness for each block, and the fitness of the clique will simply be the sum of all its block\u2019s\nfitness. The block fitness ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(b)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," is simply defined as ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"e")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1+e, e")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e")))))," being the number of endorsements registered in the block."),(0,s.kt)("p",null,"Taking the maximal clique with the highest fitness (or some hash-based deterministic selection in case of equality), the\nGraph/Consensus module can define what is called the blockclique at the current time."),(0,s.kt)("h3",{id:"finalized-blocks-stale-blocks"},"Finalized blocks, stale blocks"),(0,s.kt)("p",null,"The set of pending blocks is growing each time a new block is produced and added to the current set. As we mentioned previously,\nthere is also a pruning mechanism in charge of reducing the size of the graph by removing blocks that are considered final, and\nalso blocks that can be considered stale and will never finalize."),(0,s.kt)("p",null,"If a block is only contained inside cliques that have a fitness lower than the fitness of the blockclique (the clique with the maximal fitness), minus a constant ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msubsup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msubsup",mathvariant:"normal"},"\u0394"),(0,s.kt)("mi",{parentName:"msubsup"},"f"),(0,s.kt)("mn",{parentName:"msubsup"},"0"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Delta_{f}^{0}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2333em",verticalAlign:"-0.4192em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"\u0394"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.4169em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10764em"}},"f")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4192em"}},(0,s.kt)("span",{parentName:"span"})))))))))),", then this block is considered stale. Also, any new block that includes in its parents a stale block is stale."),(0,s.kt)("p",null,"A block is considered final if it is part of all maximal cliques, and included in at least one clique where the total sum of the fitness of all its descendants is greater than ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msubsup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msubsup",mathvariant:"normal"},"\u0394"),(0,s.kt)("mi",{parentName:"msubsup"},"f"),(0,s.kt)("mn",{parentName:"msubsup"},"0"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Delta_{f}^{0}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2333em",verticalAlign:"-0.4192em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"\u0394"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.4169em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10764em"}},"f")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4192em"}},(0,s.kt)("span",{parentName:"span"})))))))))),"."),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msubsup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msubsup",mathvariant:"normal"},"\u0394"),(0,s.kt)("mi",{parentName:"msubsup"},"f"),(0,s.kt)("mn",{parentName:"msubsup"},"0"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Delta_{f}^{0}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2333em",verticalAlign:"-0.4192em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"\u0394"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.4169em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10764em"}},"f")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4192em"}},(0,s.kt)("span",{parentName:"span"}))))))))))," is defined as a constant ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"F")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F")))))," multiplied by ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"E")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1+E")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"))))),"\n(",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"E")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"E")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E")))))," being the total max number of endorsements in a block, currently 16), and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"F")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F")))))," effectively measuring the maximum span in fully endorsed blocks of a successful blockclique, or the number of fully endorsed blocks by which an alternative clique can be shorter than the blockclique before its blocks may be discarded as stale."),(0,s.kt)("h3",{id:"graphconsensus-module-function"},"Graph/Consensus Module Function"),(0,s.kt)("p",null,"The Consensus Module (formerly known as the Graph) receives new block proposals, integrates them into the set of pending blocks,\nupdating the blockclique with the method explained above, and verifying the legitimacy of the parenting of new blocks. It also\ninforms other modules, like the Execution module, when blocks are finalized and the corresponding ledger modifications implied\nby their operations list should be made permanent."),(0,s.kt)("p",null,"It is also able to answer queries about the current best parents for a new block (based on the current blockclique) or the list\nof current maximal cliques."),(0,s.kt)("h2",{id:"execution-module"},"Execution Module"),(0,s.kt)("p",null,"The Execution Module is in charge of effectively executing the operations contained in blocks within the current blockclique,\nwhich is provided by the Graph/Consensus Module. Operations will typically modify the ledger, either by changing the balances\nof accounts or by modifying the datastore of smart contracts after the execution of some code. From an implementation point\nof view, ledger modifications are however stored as diff vs the current finalized ledger, until the corresponding blocks are\nmarked as finalized by the Graph/Consensus Module."),(0,s.kt)("p",null,"Block creators will typically need to query the Execution Module to check current balances at a given slot and verify if some\noperations can be run with sufficient funds or not, before being integrated into a new block."),(0,s.kt)("p",null,"As a side note, it is also possible that blocks might include invalid operations, in which case the Execution Module will\nsimply ignore them."),(0,s.kt)("p",null,"Being the maintainer of the ledger, the Execution Module is also queried about address information in general, via the API,\nfor any Module that needs it."),(0,s.kt)("p",null,"Finally, the Execution Module will inform the Selector Module when new cycles are initiated as the finalization of blocks\nprogresses."),(0,s.kt)("h2",{id:"pool-module"},"Pool Module"),(0,s.kt)("p",null,"When new pending operations reach a node, they are not immediately processed but instead are stored in a pool of pending operations,\nto be used by the Factory Module. Similarly, proposed endorsements coming from the Endorsement Factory are buffered inside the pool,\nto be integrated into new blocks by the Block Factory Module."),(0,s.kt)("p",null,"The origin of pending operations or endorsements inside the pool can be internal to the factory process or could come from remote\nnodes via the API Module. Similarly, locally produced pending endorsements are broadcasted via a gossip protocol to other pools\nvia the API Module."),(0,s.kt)("p",null,"Note that operations stored in the Pool are naturally discarded after a certain time, since operations come with an expiration\ndate in the ",(0,s.kt)("em",{parentName:"p"},"expiration_period")," field. Still, some potential attacks can occur by trying to flood the pool with high fees\noperations that have no chance of being executed because the corresponding account does not have the required funds.\nDiscussing about countermeasure for this is beyond the scope of this introduction."),(0,s.kt)("h2",{id:"blockendorsement-factory-module"},"Block/Endorsement Factory Module"),(0,s.kt)("p",null,"The Block Factory Module is in charge of creating new blocks when the corresponding node address has been designated to\nbe the block creator for a given slot. This information is provided to the Factory Module from the Selector Module via\nthe API Module."),(0,s.kt)("p",null,"The Block Factory Module also needs information about the best parents (made of the latest blocks in each thread in\nthe blockclique) from the Graph/Consensus Module. These parents will be included in the newly created block. Balance\ninformation, in order to assess the validity of pending operations, is obtained from the Execution Module, which\nmaintains the ledger state from the point of view of the slot where the new block is supposed to be created."),(0,s.kt)("p",null,"The Block Factory Module picks pending operations from the Pool Module. Note that the Block Factory will regularly\nquery the Execution Module about finalized and executed operations, and internally cleanup operations that have been handled."),(0,s.kt)("p",null,"Finally, the Block Factory will query the Pool Module and pick pending endorsements corresponding to the best parents\nthat are selected for the block."),(0,s.kt)("p",null,"With this information, it is able to forge a new block that will then be propagated to the Graph/Consensus Module\nvia the API Module, as well as to other nodes via gossip, to maintain a global synchronized state."),(0,s.kt)("p",null,"The Endorsement Factory Module works in a similar manner, requesting the Selector Module to find out when it has been\ndesignated to be an endorsement producer, then feeding new endorsements to the Pool Module and the API Module for global synchronization."))}h.isMDXComponent=!0},554:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/architecture.drawio-4a1209c66babdf0750ff11fb839724b3.svg"},7968:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cliques.drawio-1ea940b8535eb8b547c71482653edeee.svg"},2011:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/incompatibility_graph.drawio-3d0cbae75657b115b202ef3d216b2f86.svg"},7253:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/selector.drawio-e621b755dcea738530297fb7760b5f31.svg"},6531:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/unfinalized_blocks_set.drawio-dfbeffb53e6ae2f5096aac0c02c8c7b6.svg"}}]);