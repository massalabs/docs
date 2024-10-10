"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[2788],{3905:(a,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>h});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var o=n.createContext({}),i=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},l=function(a){var e=i(a.components);return n.createElement(o.Provider,{value:e},a.children)},c="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,o=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),c=i(t),k=s,h=c["".concat(o,".").concat(k)]||c[k]||N[k]||m;return t?n.createElement(h,r(r({ref:e},l),{},{components:t})):n.createElement(h,r({ref:e},l))}));function h(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p[c]="string"==typeof a?a:s,r[1]=p;for(var i=2;i<m;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3548:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>N,frontMatter:()=>m,metadata:()=>p,toc:()=>i});var n=t(7462),s=(t(7294),t(3905));const m={id:"storage-costs",sidebar_label:"Storage costs"},r="Storage costs",p={unversionedId:"learn/storage-costs",id:"learn/storage-costs",title:"Storage costs",description:"In Massa, each network node maintains a full copy of the ledger.",source:"@site/docs/learn/storage-costs.mdx",sourceDirName:"learn",slug:"/learn/storage-costs",permalink:"/docs/learn/storage-costs",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/learn/storage-costs.mdx",tags:[],version:"current",lastUpdatedBy:"Pierre Seznec",lastUpdatedAt:1728550477,formattedLastUpdatedAt:"Oct 10, 2024",frontMatter:{id:"storage-costs",sidebar_label:"Storage costs"},sidebar:"learnSidebar",previous:{title:"Bootstrapping in Massa",permalink:"/docs/learn/bootstrap"},next:{title:"Gas",permalink:"/docs/learn/gas"}},o={},i=[{value:"Examples",id:"examples",level:2},{value:"Transferring coins to a non-existing account",id:"transferring-coins-to-a-non-existing-account",level:3},{value:"Datastore handling in a smart contract",id:"datastore-handling-in-a-smart-contract",level:3}],l={toc:i},c="wrapper";function N(a){let{components:e,...t}=a;return(0,s.kt)(c,(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"storage-costs"},"Storage costs"),(0,s.kt)("p",null,"In Massa, each network node maintains a full copy of the ledger.\nTo prevent the requirement of massive storage capacities, a ledger-size limit of 10TB has been set.\nThis limit is essential to encourage widespread adoption and enable users to run nodes from their homes.\nTo ensure compliance with this limit, a mechanism has been established that correlates storage space with locked coins."),(0,s.kt)("p",null,"For every byte of storage space claimed, whether it's for storing address and balance information,\nkeys in the datastore, bytecode, or other data elements, users are required to lock a corresponding amount of coins.\nThese locked coins act as a commitment and are released when the allocated storage space is released."),(0,s.kt)("p",null,"To determine the amount of coins needed to lock for each byte of storage, the value of 0.0001 Massa coin (MAS) has been chosen.\nThis value ensures that if all of the total initial coin supply (1,000,000,000 MAS) is locked for storage only,\nthe 10TB limit is reached and no account can push this limit further because there are no more coins available."),(0,s.kt)("p",null,"The initial ledger entry for address and balance incurs a cost of 0.001 MAS."),(0,s.kt)("p",null,"Datastore entries also occupy space:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"a base size of 4 bytes that represents the average storage used for storing an empty key-value entry"),(0,s.kt)("li",{parentName:"ul"},"the length of the key"),(0,s.kt)("li",{parentName:"ul"},"the length of the value")),(0,s.kt)("p",null,"To calculate the storage cost for a specific address in the ledger, the formula includes the address size, balance constant, bytecode length,\nand the sum of constants for each datastore key and its corresponding value size."),(0,s.kt)("p",null,"The overall formula is:"),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"t"),(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mrow"},"M"),(0,s.kt)("mi",{parentName:"mrow"},"A"),(0,s.kt)("mi",{parentName:"mrow"},"S"))),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"0.001"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"0.0001"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mi",{parentName:"mrow"},"B"),(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"S"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"z"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"0.0001"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("munder",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"munder"},"\u2211"),(0,s.kt)("mi",{parentName:"munder"},"i")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"D"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"S"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"K"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mi",{parentName:"mrow"},"S"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"z"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"e"),(0,s.kt)("mi",{parentName:"msub"},"i")),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"D"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"V"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"S"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"z"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"e"),(0,s.kt)("mi",{parentName:"msub"},"i")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Cost_{MAS} = 0.001 + 0.0001 * BytecodeSize + 0.0001 * \\sum_i (4 + DataStoreKeySize_i + DatastoreValueSize_i)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"os"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10903em"}},"M"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"A"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05764em"}},"S"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0.001"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0.0001"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"eco"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"ze"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0.0001"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"2.3277em",verticalAlign:"-1.2777em"}}),(0,s.kt)("span",{parentName:"span",className:"mop op-limits"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.05em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-1.8723em",marginLeft:"0em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,s.kt)("span",{parentName:"span"},(0,s.kt)("span",{parentName:"span",className:"mop op-symbol large-op"},"\u2211")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.2777em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"St"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"oreKey"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"ore"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"Va"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("p",null,"It's important to note that the storage costs are always paid by the address that initiates the Application Binary Interface (ABI) call.\nFor example, if the ABI functions ",(0,s.kt)("a",{parentName:"p",href:"https://as-sdk.docs.massa.net/functions/setBytecode.html"},"setBytecode")," or ",(0,s.kt)("a",{parentName:"p",href:"https://as-sdk.docs.massa.net/functions/setBytecodeOf.html"},"setBycodeOf")," are used,\nthe associated storage costs will be charged to the address making the call."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"transferring-coins-to-a-non-existing-account"},"Transferring coins to a non-existing account"),(0,s.kt)("p",null,"When creating a new account in Massa, a minimum of 0.001 MAS needs to be sent alongside the operation that creates the new account (e.g., a transfer).\nThis cost covers the creation of the address and its associated balance."),(0,s.kt)("p",null,"You create a new account using the Massa Client ",(0,s.kt)("inlineCode",{parentName:"p"},"massa-client"),", you can generate a secret key ",(0,s.kt)("inlineCode",{parentName:"p"},"(wallet_generate_secret_key)"),") and verify its address using the ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_info")," function.\nHowever, that operation is done fully offline and the new account does not appear in the blockchain just yet."),(0,s.kt)("p",null,"Now imagine a sender account wants to send ",(0,s.kt)("inlineCode",{parentName:"p"},"10 MAS")," to your new account using a Transaction operation transferring ",(0,s.kt)("inlineCode",{parentName:"p"},"10 MAS")," to your newly generated address.\nSince the newly created account is not in the state just yet,\n",(0,s.kt)("inlineCode",{parentName:"p"},"0.001")," coins from the transferred amount are reserved for writing the account address and balance,\nand your newly created account's balance becomes ",(0,s.kt)("inlineCode",{parentName:"p"},"9.999"),".\nNote that if the transferred amount is lower than ",(0,s.kt)("inlineCode",{parentName:"p"},"0.001 MAS"),", the new destination account can not be written and the operation payload run fails."),(0,s.kt)("p",null,"In any subsequent transfers towards your now-written account,\nno coins will be reserved for storage and you will receive the full transferred amount."),(0,s.kt)("h3",{id:"datastore-handling-in-a-smart-contract"},"Datastore handling in a smart contract"),(0,s.kt)("p",null,'Suppose you want to store your username "kevin" under the key "username" in the datastore of an existing account, both in utf-8 bytes.\nThe value is 5 bytes long and the key is 8 bytes long and we assume that that entry did not exist before in the datastore of the account.\nIn that case, you need to send an operation that creates this new entry in your datastore using a Smart Contract.\nStoring the entry locks ',(0,s.kt)("inlineCode",{parentName:"p"},"0.0001 * (4 + 8 + 5) = 0,0017")," MAS coins."),(0,s.kt)("p",null,'Now suppose that you change that existing entry to a new nickname "kev".\nThe new value is shorter: freeing 2 bytes causes ',(0,s.kt)("inlineCode",{parentName:"p"},"0.0001 * 2 = 0.0002")," coins to be refunded."),(0,s.kt)("p",null,'Now let\'s change the nickname again from "kev" to "ned". This does not change the datastore size and does not change the coin balance.'),(0,s.kt)("p",null,'Now, let\'s change the nickname again from "ned" to "pierre".\nThis uses 3 extra byte and therefore locks ',(0,s.kt)("inlineCode",{parentName:"p"},"0.0001 * 3 = 0.0003")," MAS coins."),(0,s.kt)("p",null,'In case you then delete the "nickname" datastore entry (with the "pierre" value),\n',(0,s.kt)("inlineCode",{parentName:"p"},"0.0001 * (4 + 8 + 6) = 0.0018")," coins are refunded."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"In the case of a refund for storage costs, the address that receives the refund is the one that initiates the ABI call\n(",(0,s.kt)("a",{parentName:"p",href:"https://as-sdk.docs.massa.net/functions/setBytecode.html"},"setBytecode")," or ",(0,s.kt)("a",{parentName:"p",href:"https://as-sdk.docs.massa.net/functions/setBytecodeOf.html"},"setBycodeOf")," for example),\nwhich may differ from the address that initially paid for the storage."),(0,s.kt)("p",{parentName:"admonition"},'If you are a Smart Contract developer and want your users to cover the storage costs for your contract, you can utilize the coins passed via the "',(0,s.kt)("inlineCode",{parentName:"p"},"coins"),'" parameter of the "',(0,s.kt)("inlineCode",{parentName:"p"},"CallSC"),'" operation.\nAdditionally, you can save their addresses in your datastore to facilitate future refunds.')))}N.isMDXComponent=!0}}]);