"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[245],{5833:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(7294),a=r(4873);const n=e=>{let{network:t}=e;const[r,n]=(0,i.useState)([]),[s,l]=(0,i.useState)(null),[o,d]=(0,i.useState)(!0);return(0,i.useEffect)((()=>{(async()=>{d(!0);try{const e=await fetch("https://raw.githubusercontent.com/massalabs/DeWeb-Providers/refs/heads/main/providers.yaml",{redirect:"follow"});if(!e.ok)return void l(`HTTP error! Status: ${e.status}`);const r=await e.text(),i=(0,a.Qc)(r).filter((e=>e.network===t));n(i)}catch(e){l(e.message),console.error("Error loading YAML file:",e)}finally{d(!1)}})()}),[]),s?i.createElement("p",null,"Error: ",s):o?i.createElement("p",null,"Loading..."):i.createElement("div",null,i.createElement("table",null,i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Title"),i.createElement("th",null,"URL"),i.createElement("th",null,"Description"),i.createElement("th",null,"Owner"))),i.createElement("tbody",null,s&&i.createElement("tr",null,s),r.map(((e,t)=>i.createElement("tr",{key:t},i.createElement("td",null,e.title),i.createElement("td",null,i.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.url)),i.createElement("td",null,e.desc),i.createElement("td",null,e.owner))))),i.createElement("tfoot",null,i.createElement("tr",null,i.createElement("td",{colSpan:4},i.createElement("a",{href:"https://github.com/massalabs/DeWeb-Providers/blob/main/providers.yaml",target:"_blank",rel:"noopener noreferrer"},"View on GitHub"))))))}},5044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=r(7462),a=(r(7294),r(3905)),n=r(5833);const s={title:"Registries"},l="DeWeb Registries",o={unversionedId:"deweb/getting-started/registries",id:"deweb/getting-started/registries",title:"Registries",description:"DeWeb uses registries to simplify the process of finding and accessing on-chain websites.",source:"@site/docs/deweb/getting-started/registries.mdx",sourceDirName:"deweb/getting-started",slug:"/deweb/getting-started/registries",permalink:"/docs/deweb/getting-started/registries",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/deweb/getting-started/registries.mdx",tags:[],version:"current",lastUpdatedBy:"Peterjah",lastUpdatedAt:1744358987,formattedLastUpdatedAt:"Apr 11, 2025",frontMatter:{title:"Registries"},sidebar:"massaDeWebSidebar",previous:{title:"Overview",permalink:"/docs/deweb/getting-started/overview"},next:{title:"Privacy and Security",permalink:"/docs/deweb/getting-started/privacy"}},d={},c=[{value:"Website Registry",id:"website-registry",level:2},{value:"The DeWeb Website Index",id:"the-deweb-website-index",level:3},{value:"Register Your Website",id:"register-your-website",level:3},{value:"Manual Registration",id:"manual-registration",level:4},{value:"Provider Registry",id:"provider-registry",level:2},{value:"Mainnet Providers",id:"mainnet-providers",level:3},{value:"Buildnet Providers",id:"buildnet-providers",level:3},{value:"Register Your Provider",id:"register-your-provider",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deweb-registries"},"DeWeb Registries"),(0,a.kt)("p",null,"DeWeb uses registries to simplify the process of finding and accessing on-chain websites.\nThese registries serve as indexes for on-chain websites, making it easier for users to discover and interact with them.\nWebsites owners and Providers administrators can register their websites and providers in the respective registries."),(0,a.kt)("h2",{id:"website-registry"},"Website Registry"),(0,a.kt)("p",null,"The website registry plays a vital role in improving the accessibility of on-chain websites.\nSince these sites are referenced by smart contract addresses, locating them directly can be impractical for end users.\nThe registry provides a temporary solution by offering an index of all on-chain websites, simplifying discovery and interaction.\nIn addition, it facilitates optimized search capabilities based on metadata, categories, or other relevant parameters."),(0,a.kt)("h3",{id:"the-deweb-website-index"},"The DeWeb Website Index"),(0,a.kt)("p",null,"The DeWeb Website Index Smart Contract is a decentralized registry that stores metadata for all on-chain websites.\nThis will later be used for indexing and decentralized search using the website metadatas."),(0,a.kt)("p",null,"The following metadata keys will be used:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TITLE"),": The title of your website (max length of 50 characters)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DESCRIPTION"),": A brief description of your website (max length of 250 characters)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"KEYWORD1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"KEYWORD2"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"KEYWORD3"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"KEYWORD4"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"KEYWORD5"),": Keywords that describe your website (max length of 50 characters each).")),(0,a.kt)("h3",{id:"register-your-website"},"Register Your Website"),(0,a.kt)("p",null,"Websites uploaded using the ",(0,a.kt)("a",{parentName:"p",href:"../cli/overview"},"DeWeb CLI")," or the ",(0,a.kt)("a",{parentName:"p",href:"https://dws.massa.network"},"Decentralized Web Services platform"),"\nare automatically registered in the DeWeb Website Index Smart Contract. This process ensures that your website is easily\ndiscoverable by users."),(0,a.kt)("h4",{id:"manual-registration"},"Manual Registration"),(0,a.kt)("p",null,"If you uploaded your website using a different method, you can manually register it by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"updateWebsite")," function\nof the DeWeb Website Index Smart Contract. This function only requires the website smart contract address serialized using\nthe ",(0,a.kt)("a",{parentName:"p",href:"../../build/smart-contract/basic-concepts/functions-parameters#using-args-for-serialization-and-deserialization"},"Args")," format."),(0,a.kt)("p",null,"Here are the Smart Contract addresses for the DeWeb Website Index:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Network"),(0,a.kt)("th",{parentName:"tr",align:null},"Address"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,a.kt)("td",{parentName:"tr",align:null},"AS12UpEfdonZxyFnsmrJfZbXLM3Gq6LaL3hPk7wTXqU4UZfnypKzF")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Buildnet"),(0,a.kt)("td",{parentName:"tr",align:null},"AS1TmA4GNpSYBseNNMXpbAp2trUwZxZy3T1sZ9Qd3Qdn9L8wGbMS")))),(0,a.kt)("h2",{id:"provider-registry"},"Provider Registry"),(0,a.kt)("p",null,"The provider registry enables the creation of customizable access points to on-chain content, helping individuals and\norganizations securely distribute their data. Providers act as intermediaries, allowing end users to access on-chain content with ease,\nwithout requiring direct interaction with smart contracts. This system also supports allow-list functionality,\nempowering providers to limit access to specific on-chain content. For example, an organization like Solana could establish a provider\nusing the ",(0,a.kt)("inlineCode",{parentName:"p"},".solana.com")," domain and configure an allow-list to deliver only its on-chain applications."),(0,a.kt)("h3",{id:"mainnet-providers"},"Mainnet Providers"),(0,a.kt)(n.Z,{network:"mainnet",mdxType:"ProviderTable"}),(0,a.kt)("h3",{id:"buildnet-providers"},"Buildnet Providers"),(0,a.kt)(n.Z,{network:"buildnet",mdxType:"ProviderTable"}),(0,a.kt)("h3",{id:"register-your-provider"},"Register Your Provider"),(0,a.kt)("p",null,"Learn how to ",(0,a.kt)("a",{parentName:"p",href:"../provider/setup-public-instance"},"become a DeWeb provider")," and register your provider in the Provider Registry."))}m.isMDXComponent=!0}}]);