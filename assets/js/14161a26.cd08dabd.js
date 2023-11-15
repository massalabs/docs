"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[7046],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,b=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(b,s(s({ref:t},p),{},{components:r})):a.createElement(b,s({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={id:"webassembly-module",sidebar_label:"WebAssembly Module"},s="WebAssembly Module",i={unversionedId:"build/smart-contract/webassembly-module",id:"build/smart-contract/webassembly-module",title:"WebAssembly Module",description:"Each smart contract is a WebAssembly module with exported functions, and has access to specific node ABIs. We will see these ABIs in the next chapter.",source:"@site/docs/build/smart-contract/webassembly-module.md",sourceDirName:"build/smart-contract",slug:"/build/smart-contract/webassembly-module",permalink:"/docs/build/smart-contract/webassembly-module",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/build/smart-contract/webassembly-module.md",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1700037058,formattedLastUpdatedAt:"Nov 15, 2023",frontMatter:{id:"webassembly-module",sidebar_label:"WebAssembly Module"},sidebar:"buildSidebar",previous:{title:"Prerequisites",permalink:"/docs/build/smart-contract/prerequisites"},next:{title:"AS SDK",permalink:"/docs/build/smart-contract/sdk"}},l={},c=[],p={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"webassembly-module"},"WebAssembly Module"),(0,n.kt)("p",null,"Each smart contract is a WebAssembly module with exported functions, and has access to specific node ABIs. We will see these ABIs in the next chapter."),(0,n.kt)("p",null,"WebAssembly code is compiled from AssemblyScript, a language created specifically for WebAssembly."),(0,n.kt)("p",null,"AssemblyScript is very similar to TypeScript, but there are some important differences to keep in mind.\nFor example, the basic types in AssemblyScript directly expose all integer and floating-point types available in WebAssembly.\nUnion types and optional arguments/properties are not supported in AssemblyScript, and all objects are statically typed and do not allow for dynamically changing properties.\nAdditionally, AssemblyScript does not support exceptions catching or closures yet."),(0,n.kt)("p",null,"To learn more about AssemblyScript, WebAssembly modules, and ABIs, we invite you to check out the following resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://assemblyscript.org/"},"AssemblyScript home page"),", ",(0,n.kt)("a",{parentName:"li",href:"https://www.assemblyscript.org/introduction.html"},"its book")," and ",(0,n.kt)("a",{parentName:"li",href:"https://www.assemblyscript.org/introduction.html#from-a-javascript-perspective"},"its introduction from a JS perspective"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webassembly.org/"},"WebAssembly home page")," and ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/WebAssembly"},"MDN version"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Application_binary_interface"},"Wikipedia explaination of the concept of ABI"),".")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Do not initialize a smart contract project following AssemblyScript documentation. It will be unnecessarily painful. Go back to the the ",(0,n.kt)("a",{parentName:"p",href:"/docs/build/hello-world-dapp"},'"Hello, World" dApp tutorial')," or use the following command:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npx clear-npx-cache && npx @massalabs/sc-project-initializer@buildnet init my-first-sc && cd my-first-sc\n"))))}d.isMDXComponent=!0}}]);