"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[245],{5833:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(7294),s=r(4873);const n=()=>{const[e,t]=(0,i.useState)([]),[r,n]=(0,i.useState)(null),[a,l]=(0,i.useState)(!0);return(0,i.useEffect)((()=>{(async()=>{l(!0);try{const e=await fetch("https://raw.githubusercontent.com/massalabs/DeWeb-Providers/refs/heads/main/providers.yaml",{redirect:"follow"});if(!e.ok)return void n(`HTTP error! Status: ${e.status}`);const r=await e.text(),i=(0,s.Qc)(r);t(i)}catch(e){n(e.message),console.error("Error loading YAML file:",e)}finally{l(!1)}})()}),[]),r?i.createElement("p",null,"Error: ",r):a?i.createElement("p",null,"Loading..."):i.createElement("div",null,i.createElement("table",null,i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Title"),i.createElement("th",null,"URL"),i.createElement("th",null,"Description"),i.createElement("th",null,"Owner"))),i.createElement("tbody",null,r&&i.createElement("tr",null,r),e.map(((e,t)=>i.createElement("tr",{key:t},i.createElement("td",null,e.title),i.createElement("td",null,i.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.url)),i.createElement("td",null,e.desc),i.createElement("td",null,e.owner))))),i.createElement("tfoot",null,i.createElement("tr",null,i.createElement("td",{colSpan:4},i.createElement("a",{href:"https://github.com/massalabs/DeWeb-Providers/blob/main/providers.yaml",target:"_blank",rel:"noopener noreferrer"},"View on GitHub"))))))}},745:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var i=r(7462),s=r(7294),n=r(3905),a=r(4873);const l=()=>{const[e,t]=(0,s.useState)([]),[r,i]=(0,s.useState)(null),[n,l]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{(async()=>{l(!0);try{const e=await fetch("https://raw.githubusercontent.com/massalabs/DeWeb-Websites/refs/heads/main/websites.yaml",{redirect:"follow"});if(!e.ok)return void i(`HTTP error! Status: ${e.status}`);const r=await e.text(),s=(0,a.Qc)(r);t(s)}catch(e){i(e.message),console.error("Error loading YAML file:",e)}finally{l(!1)}})()}),[]),r?s.createElement("p",null,"Error: ",r):n?s.createElement("p",null,"Loading..."):s.createElement("div",null,s.createElement("table",null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,"Title"),s.createElement("th",null,"MNS"),s.createElement("th",null,"Description"),s.createElement("th",null,"Owner"))),s.createElement("tbody",null,r&&s.createElement("tr",null,r),e.map(((e,t)=>s.createElement("tr",{key:t},s.createElement("td",null,e.title),s.createElement("td",null,e.mns),s.createElement("td",null,e.desc),s.createElement("td",null,e.owner))))),s.createElement("tfoot",null,s.createElement("tr",null,s.createElement("td",{colSpan:4},s.createElement("a",{href:"https://github.com/massalabs/DeWeb-Websites/blob/main/websites.yaml",target:"_blank",rel:"noopener noreferrer"},"View on GitHub"))))))};var o=r(5833);const c={title:"Registries"},d="DeWeb Registries",u={unversionedId:"deweb/getting-started/registries",id:"deweb/getting-started/registries",title:"Registries",description:"DeWeb uses registries to simplify the process of finding and accessing on-chain websites.",source:"@site/docs/deweb/getting-started/registries.mdx",sourceDirName:"deweb/getting-started",slug:"/deweb/getting-started/registries",permalink:"/docs/deweb/getting-started/registries",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/deweb/getting-started/registries.mdx",tags:[],version:"current",lastUpdatedBy:"BenRey",lastUpdatedAt:1734363757,formattedLastUpdatedAt:"Dec 16, 2024",frontMatter:{title:"Registries"},sidebar:"massaDeWebSidebar",previous:{title:"Overview",permalink:"/docs/deweb/getting-started/overview"},next:{title:"Setting up a local server",permalink:"/docs/deweb/local-server-config/setup-local-server"}},m={},p=[{value:"Website Registry",id:"website-registry",level:2},{value:"Register Your Website",id:"register-your-website",level:3},{value:"Provider Registry",id:"provider-registry",level:2},{value:"Register Your Provider",id:"register-your-provider",level:3}],b={toc:p},g="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(g,(0,i.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deweb-registries"},"DeWeb Registries"),(0,n.kt)("p",null,"DeWeb uses registries to simplify the process of finding and accessing on-chain websites.\nThese registries serve as indexes for on-chain websites, making it easier for users to discover and interact with them.\nWebsites owners and Providers administrators can register their websites and providers in the respective registries."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"These registries are intermediary solutions, intended to simplify operations and enhance usability while a fully decentralized,\non-chain alternative is being developed.")),(0,n.kt)("h2",{id:"website-registry"},"Website Registry"),(0,n.kt)("p",null,"The website registry plays a vital role in improving the accessibility of on-chain websites.\nSince these sites are referenced by smart contract addresses, locating them directly can be impractical for end users.\nThe registry provides a temporary solution by offering an index of all on-chain websites, simplifying discovery and interaction.\nIn addition, it facilitates optimized search capabilities based on metadata, categories, or other relevant parameters."),(0,n.kt)("p",null,"Here is a list of websites that have been uploaded to the DeWeb:"),(0,n.kt)(l,{mdxType:"WebsiteTable"}),(0,n.kt)("h3",{id:"register-your-website"},"Register Your Website"),(0,n.kt)("p",null,"You can register your website hosted on DeWeb by opening a pull request to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/massalabs/Deweb-Websites"},"DeWeb Websites Registry"),".\nYour pull request must follow the guidelines outlined in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/massalabs/Deweb-Websites?tab=readme-ov-file#adding-a-website"},"repository's README file"),"."),(0,n.kt)("h2",{id:"provider-registry"},"Provider Registry"),(0,n.kt)("p",null,"The provider registry enables the creation of customizable access points to on-chain content, helping individuals and\norganizations securely distribute their data. Providers act as intermediaries, allowing end users to access on-chain content with ease,\nwithout requiring direct interaction with smart contracts. This system also supports allow-list functionality,\nempowering providers to limit access to specific on-chain content. For example, an organization like Solana could establish a provider\nusing the ",(0,n.kt)("inlineCode",{parentName:"p"},".solana.com")," domain and configure an allow-list to deliver only its on-chain applications."),(0,n.kt)(o.Z,{mdxType:"ProviderTable"}),(0,n.kt)("h3",{id:"register-your-provider"},"Register Your Provider"),(0,n.kt)("p",null,"Learn how to ",(0,n.kt)("a",{parentName:"p",href:"../provider/setup-public-instance"},"become a DeWeb provider")," and register your provider in the Provider Registry."))}h.isMDXComponent=!0}}]);