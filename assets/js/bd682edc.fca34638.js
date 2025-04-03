"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[5067],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),y=i,h=u["".concat(l,".").concat(y)]||u[y]||p[y]||n;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6998:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=r(7462),i=(r(7294),r(3905));const n={title:"Privacy and Security"},o="Privacy and security",s={unversionedId:"deweb/getting-started/privacy",id:"deweb/getting-started/privacy",title:"Privacy and Security",description:"DeWeb offers a decentralized way to host and access websites, putting control into users' hands. However, the level of privacy and security depends on how you choose to access DeWeb.",source:"@site/docs/deweb/getting-started/privacy.mdx",sourceDirName:"deweb/getting-started",slug:"/deweb/getting-started/privacy",permalink:"/docs/deweb/getting-started/privacy",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/deweb/getting-started/privacy.mdx",tags:[],version:"current",lastUpdatedBy:"Kevin-Massa",lastUpdatedAt:1743676062,formattedLastUpdatedAt:"Apr 3, 2025",frontMatter:{title:"Privacy and Security"},sidebar:"massaDeWebSidebar",previous:{title:"Registries",permalink:"/docs/deweb/getting-started/registries"},next:{title:"Setting up a local server",permalink:"/docs/deweb/local-server-config/setup-local-server"}},l={},c=[{value:"1. Accessing DeWeb Through a Local Node and Local Provider",id:"1-accessing-deweb-through-a-local-node-and-local-provider",level:2},{value:"2. Accessing DeWeb Through a Local Provider Connected to a Third-Party Node",id:"2-accessing-deweb-through-a-local-provider-connected-to-a-third-party-node",level:2},{value:"3. Accessing DeWeb Through a Third-Party Provider",id:"3-accessing-deweb-through-a-third-party-provider",level:2},{value:"Best Practices for Safe Browsing on DeWeb",id:"best-practices-for-safe-browsing-on-deweb",level:2},{value:"Looking Ahead",id:"looking-ahead",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"privacy-and-security"},"Privacy and security"),(0,i.kt)("p",null,"DeWeb offers a decentralized way to host and access websites, putting control into users' hands. However, the level of privacy and security depends on how you choose to access DeWeb.\nBelow, we\u2019ll detail the available methods, their benefits, and their risks."),(0,i.kt)("h2",{id:"1-accessing-deweb-through-a-local-node-and-local-provider"},"1. Accessing DeWeb Through a Local Node and Local Provider"),(0,i.kt)("p",null,"Running both a local node and a local provider is the most secure and private way to access DeWeb."),(0,i.kt)("p",null,"  ",(0,i.kt)("em",{parentName:"p"},"Benefit:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Full Privacy: No third parties are involved, so your browsing activity is completely private."),(0,i.kt)("li",{parentName:"ul"},"Data Integrity: Content is fetched directly from the blockchain, ensuring it hasn\u2019t been altered.")),(0,i.kt)("p",null,"  ",(0,i.kt)("em",{parentName:"p"},"Risks:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Malicious websites can still harm you. For example:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"JavaScript Backdoors: A site might call external servers, revealing your IP address."),(0,i.kt)("li",{parentName:"ul"},"Phishing: Fake sites could trick you into sharing sensitive information."),(0,i.kt)("li",{parentName:"ul"},"Wallet Exploits: A malicious site may try to get you to approve unauthorized transactions.")))),(0,i.kt)("h2",{id:"2-accessing-deweb-through-a-local-provider-connected-to-a-third-party-node"},"2. Accessing DeWeb Through a Local Provider Connected to a Third-Party Node"),(0,i.kt)("p",null,"If running a local node isn\u2019t an option, using a local provider with a third-party node offers a middle ground."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Benefits:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Improved Setup Simplicity: You don\u2019t need to manage a full node, but your local provider still processes content locally, adding a layer of security.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Risks:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Privacy Concerns: The third-party node can see the sites you access and associate them with your IP address."),(0,i.kt)("li",{parentName:"ul"},"Tampering Risk: A malicious node could modify the data before sending it to your local provider."),(0,i.kt)("li",{parentName:"ul"},"Site-Based Risks: Any compromised website can exploit your device, just as in Option 1.")),(0,i.kt)("h2",{id:"3-accessing-deweb-through-a-third-party-provider"},"3. Accessing DeWeb Through a Third-Party Provider"),(0,i.kt)("p",null,"For maximum convenience, you can use a third-party provider that retrieves and delivers content directly to your browser."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Benefits:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ease of Use: No technical setup is needed. You can access DeWeb directly in your browser.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Risks:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Visibility: The provider can track your browsing activity and associate it with your IP address."),(0,i.kt)("li",{parentName:"ul"},"Content Manipulation: The provider could modify website data, injecting malicious code or redirecting you to fake sites."),(0,i.kt)("li",{parentName:"ul"},"Site-Based Risks: The same risks from visiting malicious sites apply here as in Options 1 and 2.")),(0,i.kt)("h2",{id:"best-practices-for-safe-browsing-on-deweb"},"Best Practices for Safe Browsing on DeWeb"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Verify Websites: Only visit trusted websites with verified Massa Name Service (MNS) domains."),(0,i.kt)("li",{parentName:"ol"},"Review Transactions: Carefully check every transaction before signing it with your wallet."),(0,i.kt)("li",{parentName:"ol"},"Stay Updated: Follow official Massa channels for news on registry updates and decentralized tools."),(0,i.kt)("li",{parentName:"ol"},"Understand Immutability: Proposals are underway to make uploaded content immutable, reducing risks of unauthorized changes.")),(0,i.kt)("h2",{id:"looking-ahead"},"Looking Ahead"),(0,i.kt)("p",null,"Current registries are temporary solutions, and a fully decentralized registry system is in development to further enhance the experience.\nAlso, a browser plugin will be developped to validate website integritity end-to-end which should solve supply chain attack issues when a third party node or provider is used, but not censorship and privacy. So we really recommend you to run a node and a local provider."),(0,i.kt)("p",null,"Whether you prioritize privacy, security, or simplicity, DeWeb gives you the tools to browse the decentralized web in a way that suits your needs."))}p.isMDXComponent=!0}}]);