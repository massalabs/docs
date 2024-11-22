"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[2605],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3710:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={title:"Home"},s="Welcome to the DeWeb",o={unversionedId:"deweb/home",id:"deweb/home",title:"Home",description:"The DeWeb is your gateway to a fully decentralized web. Our vision is to create an on-chain web ecosystem with no intermediaries,",source:"@site/docs/deweb/home.mdx",sourceDirName:"deweb",slug:"/deweb/home",permalink:"/docs/deweb/home",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/deweb/home.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1732269624,formattedLastUpdatedAt:"Nov 22, 2024",frontMatter:{title:"Home"},sidebar:"massaDeWebSidebar",next:{title:"Overview",permalink:"/docs/deweb/getting-started/overview"}},l={},d=[{value:"Our Vision",id:"our-vision",level:2},{value:"Decentralized Web Hosting",id:"decentralized-web-hosting",level:2},{value:"Who is the Deweb for ?",id:"who-is-the-deweb-for-",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Users: Access the DeWeb",id:"users-access-the-deweb",level:3},{value:"Local-first DeWeb access",id:"local-first-deweb-access",level:4},{value:"Provider access",id:"provider-access",level:4},{value:"Developers: Upload Your Website On the DeWeb",id:"developers-upload-your-website-on-the-deweb",level:3},{value:"Examples of on-chain websites:",id:"examples-of-on-chain-websites",level:2},{value:"Resources",id:"resources",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"welcome-to-the-deweb"},"Welcome to the DeWeb"),(0,r.kt)("p",null,"The DeWeb is your gateway to a fully decentralized web. Our vision is to create an on-chain web ecosystem with no intermediaries,\naddressing security and reliability concerns associated with centralized servers."),(0,r.kt)("h2",{id:"our-vision"},"Our Vision"),(0,r.kt)("p",null,"The DeWeb aims to revolutionize the internet by enabling a fully decentralized web experience. By storing all websites on-chain,\nwe eliminate the risks associated with centralized servers, such as single points of failure and vulnerability to hacks.\nThis approach enhances security, ensuring that websites are resilient against censorship and attacks,\nand provides true freedom and accessibility to everyone."),(0,r.kt)("p",null,'The DeWeb allows developers to build and host their projects directly on the Massa blockchain.\nThis unique approach mitigates the risks of censorship and hacking, providing a seamless Web3 experience for users.\nDevelopers can register ".massa" domains using MNS and store their websites\' logic directly on the Massa blockchain,\nensuring applications are accessible directly from any browser of a user who installed DeWeb server app, without any intermediaries.'),(0,r.kt)("h2",{id:"decentralized-web-hosting"},"Decentralized Web Hosting"),(0,r.kt)("p",null,"The DeWeb enables developers to build and host both front-end and back-end components of DApps directly on the Massa blockchain.\nThis comprehensive on-chain hosting includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Domain Registration"),': Register ".massa" domain names using the Massa Name Service (MNS) on the decentralized DNS,\ncreating unique, recognizable web addresses.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Back-End Hosting"),": Develop and host smart contracts in AssemblyScript,\nensuring the integrity and security of the blockchain infrastructure."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Front-End Hosting"),": Design and host the application's front-end using HTML, CSS, JavaScript,\nand other familiar web technologies, eliminating the need for third-party hosting services.")),(0,r.kt)("p",null,"This approach ensures a seamless transition between web2 and web3 experiences, providing users with a consistent and\nsecure browsing experience without intermediaries."),(0,r.kt)("h2",{id:"who-is-the-deweb-for-"},"Who is the Deweb for ?"),(0,r.kt)("p",null,"It's perfect for entrepreneurs & web3 studios who want to migrate to a decentralized hosting solution. "),(0,r.kt)("p",null,"It's also great builders & developers blockchain enthusiasts who want to build fully on-chain, censorship-resistant, and tamper-proof applications. "),(0,r.kt)("h2",{id:"get-started"},"Get Started"),(0,r.kt)("h3",{id:"users-access-the-deweb"},"Users: Access the DeWeb"),(0,r.kt)("h4",{id:"local-first-deweb-access"},"Local-first DeWeb access"),(0,r.kt)("p",null,"For complete privacy and autonomy, we recommend running a DeWeb server locally.\nVisit the ",(0,r.kt)("a",{parentName:"p",href:"/docs/deweb/getting-started/overview"},"Getting Started")," page to begin."),(0,r.kt)("p",null,"You can access local websites through the following URL : ",(0,r.kt)("inlineCode",{parentName:"p"},"{massaNameService}.localhost:8080")),(0,r.kt)("admonition",{title:"Important",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you're not a developer or a visual learner check out ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=DJUf3fU1MDI"},"how to set up a local server in under 1 minute"))),(0,r.kt)("h4",{id:"provider-access"},"Provider access"),(0,r.kt)("p",null,"To make the DeWeb universally accessible without running a local server, providers are available."),(0,r.kt)("p",null,"These providers allow users to access decentralized websites directly from their browsers,\nmaking it easy to use the DeWeb from anywhere and on devices that do not yet support DeWeb."),(0,r.kt)("p",null,"Here is a list of available providers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mainnet"),": Coming Soon..."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Buildnet"),": ",(0,r.kt)("a",{parentName:"li",href:"https://massa.network"},"massa.network"),", ",(0,r.kt)("a",{parentName:"li",href:"https://massahub.network"},"massahub.network"))),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"This list will eventually be transferred to the registry."),(0,r.kt)("p",{parentName:"admonition"},"We are working on a provider registry system so you can have quick access to different Massa DeWeb providers. ")),(0,r.kt)("h3",{id:"developers-upload-your-website-on-the-deweb"},"Developers: Upload Your Website On the DeWeb"),(0,r.kt)("p",null,"Developers can upload their websites to the Massa blockchain using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/deweb/cli/overview"},"DeWeb upload CLI"),"."),(0,r.kt)("admonition",{title:"Work in Progress",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"DeWeb is still in development and should be used with caution. For now it is only available on Massa Buildnet for testing purposes.\nThis means that your wallet needs to be setup to use the Buildnet, including the Buildnet version of Massa Name System which is independent from the Mainnet one."),(0,r.kt)("p",{parentName:"admonition"},"If you encounter any issues or have suggestions, please let us know through our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/DeWeb/issues"},"issue tracker"),".")),(0,r.kt)("h2",{id:"examples-of-on-chain-websites"},"Examples of on-chain websites:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Network")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Provider")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Provider URL")),(0,r.kt)("th",{parentName:"tr",align:null},"Local URL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buildnet")),(0,r.kt)("td",{parentName:"tr",align:null},"massa"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://vesting.massa.network"},"vesting.massa.network")),(0,r.kt)("td",{parentName:"tr",align:null},"vesting.localhost:8080")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buildnet")),(0,r.kt)("td",{parentName:"tr",align:null},"massa"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://mns.massa.network"},"mns.massa.network")),(0,r.kt)("td",{parentName:"tr",align:null},"mns.localhost:8080")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Buildnet")),(0,r.kt)("td",{parentName:"tr",align:null},"massahub"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://pur.massahub.network"},"pur.massahub.network")),(0,r.kt)("td",{parentName:"tr",align:null},"pur.localhost:8080")))),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/massalabs/DeWeb"},"GitHub Repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://discord.com/channels/828270821042159636/1272551955784273981"},"DeWeb Discord Channel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://massalabs.medium.com/how-is-massa-building-a-fully-on-chain-decentralized-web-8ddeaea26373"},"Medium - How is Massa building a fully on-chain Decentralized Web?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://massalabs.medium.com/enabling-the-on-chain-web-the-massa-decentralized-dns-is-coming-36272278f980"},"Medium - Enabling the On-Chain Web: The Massa Decentralized DNS"))))}u.isMDXComponent=!0}}]);