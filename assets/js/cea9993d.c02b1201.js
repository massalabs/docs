"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[2605],{5833:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(7294),n=a(4873);const r=e=>{let{network:t}=e;const[a,r]=(0,s.useState)([]),[i,o]=(0,s.useState)(null),[l,c]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{(async()=>{c(!0);try{const e=await fetch("https://raw.githubusercontent.com/massalabs/DeWeb-Providers/refs/heads/main/providers.yaml",{redirect:"follow"});if(!e.ok)return void o(`HTTP error! Status: ${e.status}`);const a=await e.text(),s=(0,n.Qc)(a).filter((e=>e.network===t));r(s)}catch(e){o(e.message),console.error("Error loading YAML file:",e)}finally{c(!1)}})()}),[]),i?s.createElement("p",null,"Error: ",i):l?s.createElement("p",null,"Loading..."):s.createElement("div",null,s.createElement("table",null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,"Title"),s.createElement("th",null,"URL"),s.createElement("th",null,"Description"),s.createElement("th",null,"Owner"))),s.createElement("tbody",null,i&&s.createElement("tr",null,i),a.map(((e,t)=>s.createElement("tr",{key:t},s.createElement("td",null,e.title),s.createElement("td",null,s.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.url)),s.createElement("td",null,e.desc),s.createElement("td",null,e.owner))))),s.createElement("tfoot",null,s.createElement("tr",null,s.createElement("td",{colSpan:4},s.createElement("a",{href:"https://github.com/massalabs/DeWeb-Providers/blob/main/providers.yaml",target:"_blank",rel:"noopener noreferrer"},"View on GitHub"))))))}},3710:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=a(7462),n=(a(7294),a(3905)),r=a(5833);const i={title:"Home"},o="Welcome to the DeWeb",l={unversionedId:"deweb/home",id:"deweb/home",title:"Home",description:"The DeWeb is your gateway to a fully decentralized web. Our vision is to create an on-chain web ecosystem with no intermediaries,",source:"@site/docs/deweb/home.mdx",sourceDirName:"deweb",slug:"/deweb/home",permalink:"/docs/deweb/home",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/deweb/home.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1740069617,formattedLastUpdatedAt:"Feb 20, 2025",frontMatter:{title:"Home"},sidebar:"massaDeWebSidebar",next:{title:"Overview",permalink:"/docs/deweb/getting-started/overview"}},c={},d=[{value:"Our Vision",id:"our-vision",level:2},{value:"Decentralized Web Hosting",id:"decentralized-web-hosting",level:2},{value:"Who is the Deweb for ?",id:"who-is-the-deweb-for-",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Users: Access the DeWeb",id:"users-access-the-deweb",level:3},{value:"Local-first DeWeb access",id:"local-first-deweb-access",level:4},{value:"Provider access",id:"provider-access",level:4},{value:"Developers: Upload Your Website On the DeWeb",id:"developers-upload-your-website-on-the-deweb",level:3},{value:"Resources",id:"resources",level:2}],u={toc:d},h="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"welcome-to-the-deweb"},"Welcome to the DeWeb"),(0,n.kt)("p",null,"The DeWeb is your gateway to a fully decentralized web. Our vision is to create an on-chain web ecosystem with no intermediaries,\naddressing security and reliability concerns associated with centralized servers."),(0,n.kt)("h2",{id:"our-vision"},"Our Vision"),(0,n.kt)("p",null,"The DeWeb aims to revolutionize the internet by enabling a fully decentralized web experience. By storing all websites on-chain,\nwe eliminate the risks associated with centralized servers, such as single points of failure and vulnerability to hacks.\nThis approach enhances security, ensuring that websites are resilient against censorship and attacks,\nand provides true freedom and accessibility to everyone."),(0,n.kt)("p",null,'The DeWeb allows developers to build and host their projects directly on the Massa blockchain.\nThis unique approach mitigates the risks of censorship and hacking, providing a seamless Web3 experience for users.\nDevelopers can register ".massa" domains using MNS and store their websites\' logic directly on the Massa blockchain,\nensuring applications are accessible directly from any browser of a user who installed DeWeb server app, without any intermediaries.'),(0,n.kt)("h2",{id:"decentralized-web-hosting"},"Decentralized Web Hosting"),(0,n.kt)("p",null,"The DeWeb enables developers to build and host both front-end and back-end components of DApps directly on the Massa blockchain.\nThis comprehensive on-chain hosting includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Domain Registration"),': Register ".massa" domain names using the Massa Name System (MNS) on the decentralized DNS,\ncreating unique, recognizable web addresses.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Back-End Hosting"),": Develop and host smart contracts in AssemblyScript,\nensuring the integrity and security of the blockchain infrastructure."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Front-End Hosting"),": Design and host the application's front-end using HTML, CSS, JavaScript,\nand other familiar web technologies, eliminating the need for third-party hosting services.")),(0,n.kt)("p",null,"This approach ensures a seamless transition between web2 and web3 experiences, providing users with a consistent and\nsecure browsing experience without intermediaries."),(0,n.kt)("h2",{id:"who-is-the-deweb-for-"},"Who is the Deweb for ?"),(0,n.kt)("p",null,"It's perfect for entrepreneurs & web3 studios who want to migrate to a decentralized hosting solution."),(0,n.kt)("p",null,"It's also great builders & developers blockchain enthusiasts who want to build fully on-chain, censorship-resistant,\nand tamper-proof applications."),(0,n.kt)("h2",{id:"get-started"},"Get Started"),(0,n.kt)("h3",{id:"users-access-the-deweb"},"Users: Access the DeWeb"),(0,n.kt)("h4",{id:"local-first-deweb-access"},"Local-first DeWeb access"),(0,n.kt)("p",null,"For complete privacy and autonomy, we recommend running a DeWeb server locally.\nVisit the ",(0,n.kt)("a",{parentName:"p",href:"/docs/deweb/getting-started/overview"},"Getting Started")," page to begin."),(0,n.kt)("p",null,"You can access local websites through the following URL : ",(0,n.kt)("inlineCode",{parentName:"p"},"{massaNameService}.localhost:8080")),(0,n.kt)("admonition",{title:"Important",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"If you're not a developer or a visual learner check out ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=DJUf3fU1MDI"},"how to set up a local server in under 1 minute"))),(0,n.kt)("h4",{id:"provider-access"},"Provider access"),(0,n.kt)("p",null,"To make the DeWeb universally accessible without running a local server, providers are available."),(0,n.kt)("p",null,"These providers allow users to access decentralized websites directly from their browsers,\nmaking it easy to use the DeWeb from anywhere and on devices that do not yet support DeWeb."),(0,n.kt)("p",null,"Here is a list of available providers:"),(0,n.kt)(r.Z,{mdxType:"ProviderTable"}),(0,n.kt)("h3",{id:"developers-upload-your-website-on-the-deweb"},"Developers: Upload Your Website On the DeWeb"),(0,n.kt)("p",null,"Developers can upload their websites to the Massa blockchain using the ",(0,n.kt)("a",{parentName:"p",href:"/docs/deweb/cli/overview"},"DeWeb upload CLI"),"."),(0,n.kt)("admonition",{title:"Work in Progress",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you encounter any issues or have suggestions, please let us know through our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/massalabs/DeWeb/issues"},"issue tracker"),".")),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/massalabs/DeWeb"},"GitHub Repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discord.com/channels/828270821042159636/1272551955784273981"},"DeWeb Discord Channel")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://massalabs.medium.com/how-is-massa-building-a-fully-on-chain-decentralized-web-8ddeaea26373"},"Medium - How is Massa building a fully on-chain Decentralized Web?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://massalabs.medium.com/enabling-the-on-chain-web-the-massa-decentralized-dns-is-coming-36272278f980"},"Medium - Enabling the On-Chain Web: The Massa Decentralized DNS"))))}m.isMDXComponent=!0}}]);