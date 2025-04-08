"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[7884],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>d});var s=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,s,n=function(e,a){if(null==e)return{};var t,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=s.createContext({}),i=function(e){var a=s.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},o=function(e){var a=i(e.components);return s.createElement(l.Provider,{value:a},e.children)},c="mdxType",N={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},u=s.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=i(t),u=n,d=c["".concat(l,".").concat(u)]||c[u]||N[u]||r;return t?s.createElement(d,m(m({ref:a},o),{},{components:t})):s.createElement(d,m({ref:a},o))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,m=new Array(r);m[0]=u;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[c]="string"==typeof e?e:n,m[1]=p;for(var i=2;i<r;i++)m[i]=t[i];return s.createElement.apply(null,m)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3956:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>m,default:()=>N,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var s=t(7462),n=(t(7294),t(3905));const r={id:"massa-web3-utils",title:"Utils"},m=void 0,p={unversionedId:"build/massa-web3-legacy/massa-web3-utils",id:"build/massa-web3-legacy/massa-web3-utils",title:"Utils",description:"Massa Units",source:"@site/docs/build/massa-web3-legacy/utils.mdx",sourceDirName:"build/massa-web3-legacy",slug:"/build/massa-web3-legacy/massa-web3-utils",permalink:"/docs/build/massa-web3-legacy/massa-web3-utils",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/massa-web3-legacy/utils.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1744108433,formattedLastUpdatedAt:"Apr 8, 2025",frontMatter:{id:"massa-web3-utils",title:"Utils"},sidebar:"buildSidebar",previous:{title:"Wallet Provider",permalink:"/docs/build/massa-web3-legacy/wallet-provider"},next:{title:'"Hello, World!" dApp',permalink:"/docs/build/hello-world-dapp"}},l={},i=[{value:"Massa Units",id:"massa-units",level:3}],o={toc:i},c="wrapper";function N(e){let{components:a,...t}=e;return(0,n.kt)(c,(0,s.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"massa-units"},"Massa Units"),(0,n.kt)("p",null,"All Massa values that are being used or returned by web3 (gas, fees, coins and rolls) are expressed via BigInt's. Massa-web3 has however a few convenience methods and converters that might come handy. Below is a summary of available methods:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rolls: expressed in BigInt's. For Rolls there is no metric system as rolls are unit-less. 10 rolls is to be represented by a BigInt containing 10. Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const rolls = BigInt(10);\n// or. ...\nconst rolls = 10n;\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Gas/MaxGas: expressed in BigInt's. For Gas/MaxGas there is no metric system as gas is unit-less. The gas represents the computational units required for a given operation to be executed by the network. Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const gas = BigInt(2000000);\n// or. ...\nconst gas = 2000000n;\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Coins/Fees: expressed in BigInt's. Coins/fees do however have a metric system behind them. The smallest unit is 10",(0,n.kt)("strong",{parentName:"li"},"-9 Massa. All coins/fees are to be expressed as integers scaled by 10"),"9 and this way consumed by the network json-rpc protocol. Since gas/fees are to be used as BigInt's web3 adds in a few convenience utils allowing smaller units (e.g. 0.5 Massa) to be expressed.")),(0,n.kt)("p",null,"The util function ",(0,n.kt)("inlineCode",{parentName:"p"},"fromMAS")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"toMAS")," are used exactly for the latter purpose. ",(0,n.kt)("inlineCode",{parentName:"p"},"fromMAS")," receives any amount of type ",(0,n.kt)("inlineCode",{parentName:"p"},"number | string | BigNumber | bigint and returns a scaled bigint")," for ready use. ",(0,n.kt)("inlineCode",{parentName:"p"},"toMAS")," on the contrary converts any amount from ",(0,n.kt)("inlineCode",{parentName:"p"},"nanoMassa")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"Massa")," and returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber")," representing the amount as a decimal."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'const coinsToTransfer = fromMAS("0.5"); // half a massa\n// or. ...\nconst coinsToTransfer = 500n * MassaUnits.mMassa; // half a massa\nconst coinsToTransfer = fromMAS("1"); // one massa\n// or. ...\nconst coinsToTransfer = 1n * MassaUnits.oneMassa; // one massa\n')),(0,n.kt)("p",null,"Web3 exposes a collection ",(0,n.kt)("inlineCode",{parentName:"p"},"MassaUnits")," which has three convenience ",(0,n.kt)("inlineCode",{parentName:"p"},"BigInt")," constants that could be used for amount scaling:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MassaUnits.oneMassa")," = ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"0"),(0,n.kt)("mn",{parentName:"msup"},"9"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^{9}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"9")))))))))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MassaUnits.mMassa")," = ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"0"),(0,n.kt)("mn",{parentName:"msup"},"6"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^{6}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"6")))))))))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MassaUnits.uMassa")," = ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"0"),(0,n.kt)("mn",{parentName:"msup"},"3"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^{3}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"3"))))))))))))))))}N.isMDXComponent=!0}}]);