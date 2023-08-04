"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[2788],{3905:(a,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>h});var s=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},m=Object.keys(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var o=s.createContext({}),i=function(a){var e=s.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},l=function(a){var e=i(a.components);return s.createElement(o.Provider,{value:e},a.children)},c="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},k=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,m=a.originalType,o=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),c=i(t),k=n,h=c["".concat(o,".").concat(k)]||c[k]||N[k]||m;return t?s.createElement(h,r(r({ref:e},l),{},{components:t})):s.createElement(h,r({ref:e},l))}));function h(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=t.length,r=new Array(m);r[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p[c]="string"==typeof a?a:n,r[1]=p;for(var i=2;i<m;i++)r[i]=t[i];return s.createElement.apply(null,r)}return s.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3548:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>N,frontMatter:()=>m,metadata:()=>p,toc:()=>i});var s=t(7462),n=(t(7294),t(3905));const m={id:"storage-costs",sidebar_label:"Storage costs"},r="Storage costs",p={unversionedId:"learn/storage-costs",id:"learn/storage-costs",title:"Storage costs",description:"In Massa, each network node maintains a full copy of the ledger.",source:"@site/docs/learn/storage-costs.mdx",sourceDirName:"learn",slug:"/learn/storage-costs",permalink:"/docs/learn/storage-costs",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/learn/storage-costs.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1691141517,formattedLastUpdatedAt:"Aug 4, 2023",frontMatter:{id:"storage-costs",sidebar_label:"Storage costs"},sidebar:"learnSidebar",previous:{title:"Consensus quality initiatives",permalink:"/docs/learn/architecture/consensus-quality"},next:{title:"Introduction",permalink:"/docs/learn/asc/intro"}},o={},i=[{value:"Examples",id:"examples",level:2}],l={toc:i},c="wrapper";function N(a){let{components:e,...t}=a;return(0,n.kt)(c,(0,s.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"storage-costs"},"Storage costs"),(0,n.kt)("p",null,"In Massa, each network node maintains a full copy of the ledger.\nTo prevent the requirement of massive storage capacities, a ledger-size limit of 1TB has been set.\nThis limit is essential to encourage widespread adoption and enable users to run nodes from their homes.\nTo ensure compliance with this limit, a mechanism has been established that correlates storage space with locked coins."),(0,n.kt)("p",null,"For every byte of storage space claimed, whether it's for storing address and balance information, keys in the datastore, bytecode, or other data elements,\nusers are required to lock a corresponding amount of coins.\nThese locked coins act as a commitment and are released when the allocated storage space is released."),(0,n.kt)("p",null,"To determine the amount of coins needed to lock for each byte of storage, the value of 0.00025 Massa coin (MAS) has been chosen.\nThis value ensures that if half of the total coins (250,000,000 MAS) are locked, the storage limit of 1TB will be reached."),(0,n.kt)("p",null,"To avoid confusion, a fixed size of 8 bytes has been chosen for each balance.\nTherefore, the initial ledger entry for address and balance incurs a cost of (8 + 32) * 0.00025 = 0.01 MAS.\nDatastore keys also have variable sizes, but to simplify calculations, a fixed size of 10 bytes is used for determining storage costs."),(0,n.kt)("p",null,"To calculate the storage cost for a specific address in the ledger, the formula includes the address size, balance constant, bytecode length,\nand the sum of constants for each datastore key and its corresponding value size."),(0,n.kt)("p",null,"The overall formula is:"),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"C"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"t"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"m"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mi",{parentName:"mrow"},"a"))),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mn",{parentName:"mrow"},"0.00025"),(0,n.kt)("mo",{parentName:"mrow"},"\u2217"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"A"),(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mi",{parentName:"mrow"},"S"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"z"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mi",{parentName:"mrow"},"B"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"c"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"S"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"z"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mi",{parentName:"mrow"},"B"),(0,n.kt)("mi",{parentName:"mrow"},"y"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"c"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"S"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"z"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("munder",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"munder"},"\u2211"),(0,n.kt)("mi",{parentName:"munder"},"i")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"D"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"S"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"K"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"y"),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mi",{parentName:"mrow"},"D"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"V"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"e"),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Cost_{massa} = 0.00025 * (AddressSize + BalanceSize + BytecodeSize + \\sum_i (DataStoreKey_i + DatastoreValue_i))")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"os"),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"ma"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"ss"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"0.00025"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"dd"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"ress"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"ze"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"ce"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"ze"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"eco"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"ze"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"2.3277em",verticalAlign:"-1.2777em"}}),(0,n.kt)("span",{parentName:"span",className:"mop op-limits"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.05em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-1.8723em",marginLeft:"0em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,n.kt)("span",{parentName:"span"},(0,n.kt)("span",{parentName:"span",className:"mop op-symbol large-op"},"\u2211")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.2777em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"St"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"oreKe"),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"ore"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"Va"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mclose"},"))")))))),(0,n.kt)("p",null,"It's important to note that the storage costs are always paid by the address that initiates the Application Binary Interface (ABI) call.\nFor example, if the ABI functions ",(0,n.kt)("a",{parentName:"p",href:"https://as-sdk.docs.massa.net/functions/setBytecode.html"},"setBytecode")," or ",(0,n.kt)("a",{parentName:"p",href:"https://as-sdk.docs.massa.net/functions/setBytecodeOf.html"},"setBycodeOf")," are used,\nthe associated storage costs will be charged to the address making the call."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"When creating an address on the blockchain, a minimum of 0.01 MAS (0.00025 * (32 + 8)) needs to be sent alongside the operation that generates the address (e.g., a transfer).\nThis cost covers the creation of the address and its associated balance."),(0,n.kt)("p",null,"Suppose you want to store your birth date, which is 30 bytes long, in your datastore.\nIn that case, you need to send an operation that creates a key in your datastore using a Smart Contract.\nThis operation incurs a storage cost of at least 0.01 MAS, calculated as 0.00025 * (10 + 30)."),(0,n.kt)("p",null,"Thus, if you create a new wallet using the Massa Client ",(0,n.kt)("inlineCode",{parentName:"p"},"massa-client"),", you can generate a secret key ",(0,n.kt)("inlineCode",{parentName:"p"},"(wallet_generate_secret_key)"),") and verify its address using the ",(0,n.kt)("inlineCode",{parentName:"p"},"wallet_info")," function.\nHowever, until a transfer of at least 0.01 Massa is received to your wallet address, it will not appear in any of blockchain's ledgers."),(0,n.kt)("p",null,"If the amount of transfer to an unexisting user address is lower than the amount of MAS coin needed to create the address on the ledger, the operation will be refused."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If a transfer of 0.005 MAS is received, the operation will fail.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If a transfer of 10 MAS is received, the balance of the newly created address will show 9.99 MAS, as 0.01 MAS represent the storage cost.")))),(0,n.kt)("p",null,"In case you wish to delete the entry in your datastore, you will be refunded the storage costs (0.01 MAS)."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"In the case of a refund for storage costs, the address that receives the refund is the one that initiates the ABI call\n(",(0,n.kt)("a",{parentName:"p",href:"https://as-sdk.docs.massa.net/functions/setBytecode.html"},"setBytecode")," or ",(0,n.kt)("a",{parentName:"p",href:"https://as-sdk.docs.massa.net/functions/setBytecodeOf.html"},"setBycodeOf")," for example),\nwhich may differ from the address that initially paid for the storage."),(0,n.kt)("p",{parentName:"admonition"},'If you are a Smart Contract developer and want your users to cover the storage costs for your contract, you can utilize the coins passed via the "',(0,n.kt)("inlineCode",{parentName:"p"},"coins"),'" parameter of the "',(0,n.kt)("inlineCode",{parentName:"p"},"CallSC"),'" operation.\nAdditionally, you can save their addresses in your datastore to facilitate future refunds.')))}N.isMDXComponent=!0}}]);