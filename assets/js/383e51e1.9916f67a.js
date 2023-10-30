"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[3396],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6113:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={id:"grpc",sidebar_label:"gRPC"},i="Massa gRPC API",l={unversionedId:"build/api/grpc",id:"build/api/grpc",title:"Massa gRPC API",description:"The gRPC API allows you to communicate with the Massa blockchain.",source:"@site/docs/build/api/grpc.mdx",sourceDirName:"build/api",slug:"/build/api/grpc",permalink:"/docs/build/api/grpc",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/build/api/grpc.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1698693553,formattedLastUpdatedAt:"Oct 30, 2023",frontMatter:{id:"grpc",sidebar_label:"gRPC"},sidebar:"buildSidebar",previous:{title:"JsonRPC",permalink:"/docs/build/api/jsonrpc"},next:{title:"Standards",permalink:"/docs/build/standards"}},s={},p=[{value:"Documentation",id:"documentation",level:2},{value:"Integrations",id:"integrations",level:2},{value:"Code generation",id:"code-generation",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"massa-grpc-api"},"Massa gRPC API"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," API allows you to communicate with the Massa blockchain."),(0,o.kt)("p",null,"The Massa JSON-RPC API is splitted in two parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Public API"),": used for blockchain interactions. Default port:\n33037 e.g. ",(0,o.kt)("a",{parentName:"li",href:"grpc://localhost:33037"},"grpc://localhost:33037")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Private API"),": used for node management. Default port: 33038 e.g.\n",(0,o.kt)("a",{parentName:"li",href:"grpc://localhost:33038"},"grpc://localhost:33038"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To enable events (blocks, endorsements, operations...) brodcast via gRPC streams in your Massa node, add or edit the file\n",(0,o.kt)("inlineCode",{parentName:"p"},"massa-node/config/config.toml")," with the following content:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-toml"},"[api]\n   # whether to broadcast for blocks, endorsement and operations\n   enable_broadcast = true\n"))),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"gRPC ",(0,o.kt)("strong",{parentName:"li"},"API")," ",(0,o.kt)("a",{parentName:"li",href:"https://htmlpreview.github.io/?https://github.com/massalabs/massa-proto/blob/main/doc/api.html"},"documentation"),"."),(0,o.kt)("li",{parentName:"ul"},"gRPC ",(0,o.kt)("strong",{parentName:"li"},"Commons")," ",(0,o.kt)("a",{parentName:"li",href:"https://htmlpreview.github.io/?https://github.com/massalabs/massa-proto/blob/main/doc/commons.html"},"documentation"),"."),(0,o.kt)("li",{parentName:"ul"},"gRPC ",(0,o.kt)("strong",{parentName:"li"},"API")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/massalabs/massa-proto/tree/main/proto/apis/massa/api/v1"},"specification"),".")),(0,o.kt)("h2",{id:"integrations"},"Integrations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Postman"),": You can find our Massa Postman collections on our official\n",(0,o.kt)("a",{parentName:"li",href:"https://www.postman.com/massalabs"},"workspace"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Massa proto rs"),": is a Rust library which contains generated code from Massa protobuf files. See\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/massalabs/massa-proto-rs"},"massa-proto-rs"),".")),(0,o.kt)("h2",{id:"code-generation"},"Code generation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Clone ",(0,o.kt)("inlineCode",{parentName:"strong"},"massa-proto")," repository")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone -b MASSA_PROTO_TAG https://github.com/massalabs/massa-proto.git --depth 1\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you are using an older version of the Massa node, please use the tag version or commit hash corresponding to your node version.\nFind all ",(0,o.kt)("inlineCode",{parentName:"p"},"massa-proto")," tags ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-proto/tags"},"here"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: Install Buf CLI")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the latest version of Buf CLI from the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.buf.build/installation"},"official website"),"."),(0,o.kt)("li",{parentName:"ol"},"Extract the downloaded file to a folder on your computer."),(0,o.kt)("li",{parentName:"ol"},"Add the buf binary to your system PATH environment variable.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3: Set up Buf")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add the following content to ",(0,o.kt)("inlineCode",{parentName:"li"},"buf.work.yml"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: v1\ndirectories:\n    - proto/apis\n    - proto/commons\n    - proto/third_party\n")),(0,o.kt)("p",null,"By specifying the directories in the configuration file, Buf knows which\n","[.proto]","{.title-ref} files to include in the build process."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a file called ",(0,o.kt)("inlineCode",{parentName:"li"},"buf.gen.yml")," and add the following content:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: v1\nmanaged:\n  enabled: true\nplugins:\n  - remote: buf.build/community/timostamm-protobuf-ts:v2.9.0\n    out: gen/ts\n")),(0,o.kt)("p",null,"The configuration uses the official ",(0,o.kt)("a",{parentName:"p",href:"https://buf.build/community/timostamm-protobuf-ts"},"timostamm-protobuf-ts"),"\nplugin to generate gRPC client and classes in TypeScript."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For other languages check the complete list of ",(0,o.kt)("a",{parentName:"p",href:"https://buf.build/plugins"},"official Buf plugins"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4: Generate gRPC client/classes in TypeScript")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Launch the code generation:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"buf generate\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install the required dependencies for the generated code to your project:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @protobuf-ts/runtime@^2.9.0 @protobuf-ts/runtime-rpc@^2.9.0\n")))}u.isMDXComponent=!0}}]);