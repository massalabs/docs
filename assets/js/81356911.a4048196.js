"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[5769],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),l=a(7294),r=a(6010),s=a(2466),o=a(6550),i=a(1980),u=a(7392),c=a(12);function m(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function p(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[i,u]=b({queryString:a,groupId:n}),[m,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),w=(()=>{const e=i??m;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{w&&o(w)}),[w]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),k(e)}),[u,k,r]),tabValues:r}}var w=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(m(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},s,{className:(0,r.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},l.createElement(h,(0,n.Z)({},e,t)),l.createElement(g,(0,n.Z)({},e,t)))}function y(e){const t=(0,w.Z)();return l.createElement(v,(0,n.Z)({key:String(t)},e))}},1984:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(814),r=a(4866),s=a(5162);const o=JSON.parse('{"title":"Massa Tools Versions Compatibilities","networks":["Buildnet","Securnet"],"projects":[{"title":"sc-project-initializer","compatibilities":[{"network":"Buildnet","version":"buildnet"},{"network":"Securnet","version":"latest"}],"install":"npm install @massalabs/project-initializer","npmLink":"https://www.npmjs.com/package/@massalabs/sc-project-initializer?activeTab=versions"},{"title":"massa-as-sdk","compatibilities":[{"network":"Buildnet","version":"buildnet"},{"network":"Securnet","version":"latest"}],"install":"npm install @massalabs/massa-as-sdk","npmLink":"https://www.npmjs.com/package/@massalabs/massa-as-sdk?activeTab=versions"},{"title":"massa-web3","compatibilities":[{"network":"Buildnet","version":"buildnet"},{"network":"Securnet","version":"latest"}],"install":"npm install @massalabs/massa-web3","npmLink":"https://www.npmjs.com/package/@massalabs/massa-web3?activeTab=versions"},{"title":"wallet-provider","compatibilities":[{"network":"Buildnet","version":"buildnet"},{"network":"Securnet","version":"latest"}],"install":"npm install @massalabs/wallet-provider","npmLink":"https://www.npmjs.com/package/@massalabs/wallet-provider?activeTab=versions"},{"title":"as-types","compatibilities":[{"network":"Buildnet","version":"buildnet"},{"network":"Securnet","version":"latest"}],"install":"npm install @massalabs/as-types","npmLink":"https://www.npmjs.com/package/@massalabs/as-types?activeTab=versions"},{"title":"as-proba","compatibilities":[{"network":"Buildnet","version":"buildnet"},{"network":"Securnet","version":"latest"}],"install":"npm install @massalabs/as-proba","npmLink":"https://www.npmjs.com/package/@massalabs/as-proba?activeTab=versions"},{"title":"as-transformer","compatibilities":[{"network":"Buildnet","version":"buildnet"},{"network":"Securnet","version":"latest"}],"install":"npm install @massalabs/as-transformer","npmLink":"https://www.npmjs.com/package/@massalabs/as-transformer?activeTab=versions"},{"title":"sc-deployer","compatibilities":[{"network":"Buildnet","version":"buildnet"},{"network":"Securnet","version":"latest"}],"install":"npm install @massalabs/massa-sc-deployer","npmLink":"https://www.npmjs.com/package/@massalabs/massa-sc-deployer?activeTab=versions"}]}');function i(){const e=o;return n.createElement(r.Z,{defaultValue:"Buildnet"},e.networks.map((t=>n.createElement(s.Z,{value:t,label:t,key:t},n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Project"),n.createElement("th",null,"Install"),n.createElement("th",null,"NPM versions"))),n.createElement("tbody",null,e.projects.map(((e,a)=>{const r=e.compatibilities.find((e=>e.network===t));return n.createElement("tr",{key:a},n.createElement("td",null,e.title),n.createElement("td",null,n.createElement(l.Z,{className:"language-bash"},r?`${e.install}@${r.version}`:"")),n.createElement("td",null,n.createElement("a",{href:e.npmLink,target:"_blank",rel:"noopener noreferrer"},e.title," versions")))}))))))))}},1968:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));a(4866),a(5162),a(1984);const r={id:"local-network",sidebar_label:"Local network (sandbox)"},s="Local network generation",o={unversionedId:"build/networks-faucets/local-network",id:"build/networks-faucets/local-network",title:"Local network generation",description:"Here, you will learn how to launch a local network with custom settings, initial coins and rolls distribution.",source:"@site/docs/build/networks-faucets/local-network.mdx",sourceDirName:"build/networks-faucets",slug:"/build/networks-faucets/local-network",permalink:"/docs/build/networks-faucets/local-network",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/build/networks-faucets/local-network.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1702204596,formattedLastUpdatedAt:"Dec 10, 2023",frontMatter:{id:"local-network",sidebar_label:"Local network (sandbox)"},sidebar:"buildSidebar",previous:{title:"Public networks & Faucets",permalink:"/docs/build/networks-faucets/public-networks"},next:{title:"Tooling Versions",permalink:"/docs/build/tooling-versions"}},i={},u=[],c={toc:u},m="wrapper";function p(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"local-network-generation"},"Local network generation"),(0,l.kt)("p",null,"Here, you will learn how to launch a local network with custom settings, initial coins and rolls distribution."),(0,l.kt)("p",null,"This may be useful for instance if you want to build and test your integration on the latest version of the nodes."),(0,l.kt)("p",null,"Clone massa:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:massalabs/massa.git\n")),(0,l.kt)("p",null,"Compile it with the sandbox feature enabled:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd massa && cargo build --release --features sandbox\n")),(0,l.kt)("p",null,"Create a keypair in massa-client:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd massa-client && cargo run\nwallet_generate_secret_key\n")),(0,l.kt)("p",null,"For the rest of the tutorial we will use theses abbreviations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SECRETK"),": The secret you just generated"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PUBK"),": The public key corresponding to SECRETK"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ADDR"),": The address corresponding to PUBK")),(0,l.kt)("p",null,"Setup your node to use the secret you just generated as its public key and staking key:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"modify or create the file ",(0,l.kt)("inlineCode",{parentName:"p"},"massa-node/config/node_privkey.key"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{"secret_key":"SECRETK","public_key":"PUBK"}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"modify the file ",(0,l.kt)("inlineCode",{parentName:"p"},"massa-node/base_config/initial_ledger.json"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "ADDR": {\n        "balance": "80000000",\n        "datastore": {},\n        "bytecode": []\n    }\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"CLEAR and modify the file ",(0,l.kt)("inlineCode",{parentName:"p"},"massa-node/base_config/initial_rolls.json"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "ADDR": 100\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"CLEAR content of ",(0,l.kt)("inlineCode",{parentName:"p"},"massa-node/base_config/initial_vesting.json"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"optionally, if you need a non-standard configuration, you can modify the file ",(0,l.kt)("inlineCode",{parentName:"p"},"massa-node/base_config/config.toml")," depending on what you are trying to do."))),(0,l.kt)("p",null,"You can now launch your node:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd massa-node && cargo run --features sandbox\n")),(0,l.kt)("p",null,"On your client run the following command to add your secret key as staking key:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd massa-client && cargo run node_start_staking ADDR\n")),(0,l.kt)("p",null,"The local network and your node will start after 10 seconds. Once it is started, you can interact with it using the CLI\nclient as you would with a node on a public network."))}p.isMDXComponent=!0}}]);