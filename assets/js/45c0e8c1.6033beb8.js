"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[9780],{5680:(e,a,s)=>{s.d(a,{xA:()=>o,yg:()=>u});var n=s(6540);function t(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function r(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,n)}return s}function m(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?r(Object(s),!0).forEach((function(a){t(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}function p(e,a){if(null==e)return{};var s,n,t=function(e,a){if(null==e)return{};var s,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],a.indexOf(s)>=0||(t[s]=e[s]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}var i=n.createContext({}),l=function(e){var a=n.useContext(i),s=a;return e&&(s="function"==typeof e?e(a):m(m({},a),e)),s},o=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var s=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),g=l(s),y=t,u=g["".concat(i,".").concat(y)]||g[y]||c[y]||r;return s?n.createElement(u,m(m({ref:a},o),{},{components:s})):n.createElement(u,m({ref:a},o))}));function u(e,a){var s=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=s.length,m=new Array(r);m[0]=y;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[g]="string"==typeof e?e:t,m[1]=p;for(var l=2;l<r;l++)m[l]=s[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,s)}y.displayName="MDXCreateElement"},6914:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>i,contentTitle:()=>m,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var n=s(8168),t=(s(6540),s(5680));const r={id:"massa-web3-utils",title:"Utils"},m=void 0,p={unversionedId:"build/massa-web3/massa-web3-utils",id:"build/massa-web3/massa-web3-utils",title:"Utils",description:"Massa Units",source:"@site/docs/build/massa-web3/utils.mdx",sourceDirName:"build/massa-web3",slug:"/build/massa-web3/massa-web3-utils",permalink:"/docs/build/massa-web3/massa-web3-utils",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/massa-web3/utils.mdx",tags:[],version:"current",lastUpdatedBy:"BenRey",lastUpdatedAt:1723798300,formattedLastUpdatedAt:"Aug 16, 2024",frontMatter:{id:"massa-web3-utils",title:"Utils"},sidebar:"buildSidebar",previous:{title:"Wallet Provider",permalink:"/docs/build/massa-web3/wallet-provider"},next:{title:"Introduction",permalink:"/docs/build/wallet/intro"}},i={},l=[{value:"Massa Units",id:"massa-units",level:3}],o={toc:l},g="wrapper";function c(e){let{components:a,...s}=e;return(0,t.yg)(g,(0,n.A)({},o,s,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h3",{id:"massa-units"},"Massa Units"),(0,t.yg)("p",null,"All Massa values that are being used or returned by web3 (gas, fees, coins and rolls) are expressed via BigInt's. Massa-web3 has however a few convenience methods and converters that might come handy. Below is a summary of available methods:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Rolls: expressed in BigInt's. For Rolls there is no metric system as rolls are unit-less. 10 rolls is to be represented by a BigInt containing 10. Example:")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"const rolls = BigInt(10);\n// or. ...\nconst rolls = 10n;\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Gas/MaxGas: expressed in BigInt's. For Gas/MaxGas there is no metric system as gas is unit-less. The gas represents the computational units required for a given operation to be executed by the network. Example:")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"const gas = BigInt(2000000);\n// or. ...\nconst gas = 2000000n;\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Coins/Fees: expressed in BigInt's. Coins/fees do however have a metric system behind them. The smallest unit is 10",(0,t.yg)("strong",{parentName:"li"},"-9 Massa. All coins/fees are to be expressed as integers scaled by 10"),"9 and this way consumed by the network json-rpc protocol. Since gas/fees are to be used as BigInt's web3 adds in a few convenience utils allowing smaller units (e.g. 0.5 Massa) to be expressed.")),(0,t.yg)("p",null,"The util function ",(0,t.yg)("inlineCode",{parentName:"p"},"fromMAS")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"toMAS")," are used exactly for the latter purpose. ",(0,t.yg)("inlineCode",{parentName:"p"},"fromMAS")," receives any amount of type ",(0,t.yg)("inlineCode",{parentName:"p"},"number | string | BigNumber | bigint and returns a scaled bigint")," for ready use. ",(0,t.yg)("inlineCode",{parentName:"p"},"toMAS")," on the contrary converts any amount from ",(0,t.yg)("inlineCode",{parentName:"p"},"nanoMassa")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"Massa")," and returns a ",(0,t.yg)("inlineCode",{parentName:"p"},"BigNumber")," representing the amount as a decimal."),(0,t.yg)("p",null,"Examples:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},'const coinsToTransfer = fromMAS("0.5"); // half a massa\n// or. ...\nconst coinsToTransfer = 500n * MassaUnits.mMassa; // half a massa\nconst coinsToTransfer = fromMAS("1"); // one massa\n// or. ...\nconst coinsToTransfer = 1n * MassaUnits.oneMassa; // one massa\n')),(0,t.yg)("p",null,"Web3 exposes a collection ",(0,t.yg)("inlineCode",{parentName:"p"},"MassaUnits")," which has three convenience ",(0,t.yg)("inlineCode",{parentName:"p"},"BigInt")," constants that could be used for amount scaling:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"MassaUnits.oneMassa")," = ",(0,t.yg)("span",{parentName:"li",className:"math math-inline"},(0,t.yg)("span",{parentName:"span",className:"katex"},(0,t.yg)("span",{parentName:"span",className:"katex-mathml"},(0,t.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,t.yg)("semantics",{parentName:"math"},(0,t.yg)("mrow",{parentName:"semantics"},(0,t.yg)("mn",{parentName:"mrow"},"1"),(0,t.yg)("msup",{parentName:"mrow"},(0,t.yg)("mn",{parentName:"msup"},"0"),(0,t.yg)("mn",{parentName:"msup"},"9"))),(0,t.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^{9}")))),(0,t.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.yg)("span",{parentName:"span",className:"base"},(0,t.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,t.yg)("span",{parentName:"span",className:"mord"},"1"),(0,t.yg)("span",{parentName:"span",className:"mord"},(0,t.yg)("span",{parentName:"span",className:"mord"},"0"),(0,t.yg)("span",{parentName:"span",className:"msupsub"},(0,t.yg)("span",{parentName:"span",className:"vlist-t"},(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,t.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,t.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,t.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,t.yg)("span",{parentName:"span",className:"mord mtight"},(0,t.yg)("span",{parentName:"span",className:"mord mtight"},"9")))))))))))))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"MassaUnits.mMassa")," = ",(0,t.yg)("span",{parentName:"li",className:"math math-inline"},(0,t.yg)("span",{parentName:"span",className:"katex"},(0,t.yg)("span",{parentName:"span",className:"katex-mathml"},(0,t.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,t.yg)("semantics",{parentName:"math"},(0,t.yg)("mrow",{parentName:"semantics"},(0,t.yg)("mn",{parentName:"mrow"},"1"),(0,t.yg)("msup",{parentName:"mrow"},(0,t.yg)("mn",{parentName:"msup"},"0"),(0,t.yg)("mn",{parentName:"msup"},"6"))),(0,t.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^{6}")))),(0,t.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.yg)("span",{parentName:"span",className:"base"},(0,t.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,t.yg)("span",{parentName:"span",className:"mord"},"1"),(0,t.yg)("span",{parentName:"span",className:"mord"},(0,t.yg)("span",{parentName:"span",className:"mord"},"0"),(0,t.yg)("span",{parentName:"span",className:"msupsub"},(0,t.yg)("span",{parentName:"span",className:"vlist-t"},(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,t.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,t.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,t.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,t.yg)("span",{parentName:"span",className:"mord mtight"},(0,t.yg)("span",{parentName:"span",className:"mord mtight"},"6")))))))))))))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"MassaUnits.uMassa")," = ",(0,t.yg)("span",{parentName:"li",className:"math math-inline"},(0,t.yg)("span",{parentName:"span",className:"katex"},(0,t.yg)("span",{parentName:"span",className:"katex-mathml"},(0,t.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,t.yg)("semantics",{parentName:"math"},(0,t.yg)("mrow",{parentName:"semantics"},(0,t.yg)("mn",{parentName:"mrow"},"1"),(0,t.yg)("msup",{parentName:"mrow"},(0,t.yg)("mn",{parentName:"msup"},"0"),(0,t.yg)("mn",{parentName:"msup"},"3"))),(0,t.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^{3}")))),(0,t.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.yg)("span",{parentName:"span",className:"base"},(0,t.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,t.yg)("span",{parentName:"span",className:"mord"},"1"),(0,t.yg)("span",{parentName:"span",className:"mord"},(0,t.yg)("span",{parentName:"span",className:"mord"},"0"),(0,t.yg)("span",{parentName:"span",className:"msupsub"},(0,t.yg)("span",{parentName:"span",className:"vlist-t"},(0,t.yg)("span",{parentName:"span",className:"vlist-r"},(0,t.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,t.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,t.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,t.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,t.yg)("span",{parentName:"span",className:"mord mtight"},(0,t.yg)("span",{parentName:"span",className:"mord mtight"},"3"))))))))))))))))}c.isMDXComponent=!0}}]);