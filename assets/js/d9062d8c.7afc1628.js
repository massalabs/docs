"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[2924],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),s=a(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),s=a(7294),r=a(6010),l=a(2466),i=a(6550),o=a(1980),u=a(7392),c=a(12);function m(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}function d(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,u]=b({queryString:a,groupId:n}),[m,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=o??m;return p({value:e,tabValues:r})?e:null})();(0,s.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),v(e)}),[u,v,r]),tabValues:r}}var f=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(m(t),o(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},l,{className:(0,r.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=v(e);return s.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},s.createElement(w,(0,n.Z)({},e,t)),s.createElement(k,(0,n.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return s.createElement(g,(0,n.Z)({key:String(t)},e))}},1984:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),s=a(814),r=a(4866),l=a(5162);const i=JSON.parse('{"title":"Massa Tools Versions Compatibilities","networks":["Buildnet"],"projects":[{"title":"sc-project-initializer","compatibilities":[{"network":"Buildnet","version":"buildnet"}],"install":"npm install @massalabs/project-initializer","npmLink":"https://www.npmjs.com/package/@massalabs/sc-project-initializer?activeTab=versions"},{"title":"massa-as-sdk","compatibilities":[{"network":"Buildnet","version":"buildnet"}],"install":"npm install @massalabs/massa-as-sdk","npmLink":"https://www.npmjs.com/package/@massalabs/massa-as-sdk?activeTab=versions"},{"title":"massa-web3","compatibilities":[{"network":"Buildnet","version":"buildnet"}],"install":"npm install @massalabs/massa-web3","npmLink":"https://www.npmjs.com/package/@massalabs/massa-web3?activeTab=versions"},{"title":"wallet-provider","compatibilities":[{"network":"Buildnet","version":"buildnet"}],"install":"npm install @massalabs/wallet-provider","npmLink":"https://www.npmjs.com/package/@massalabs/wallet-provider?activeTab=versions"},{"title":"as-types","compatibilities":[{"network":"Buildnet","version":"buildnet"}],"install":"npm install @massalabs/as-types","npmLink":"https://www.npmjs.com/package/@massalabs/as-types?activeTab=versions"},{"title":"as-proba","compatibilities":[{"network":"Buildnet","version":"buildnet"}],"install":"npm install @massalabs/as-proba","npmLink":"https://www.npmjs.com/package/@massalabs/as-proba?activeTab=versions"},{"title":"as-transformer","compatibilities":[{"network":"Buildnet","version":"buildnet"}],"install":"npm install @massalabs/as-transformer","npmLink":"https://www.npmjs.com/package/@massalabs/as-transformer?activeTab=versions"},{"title":"sc-deployer","compatibilities":[{"network":"Buildnet","version":"buildnet"}],"install":"npm install @massalabs/massa-sc-deployer","npmLink":"https://www.npmjs.com/package/@massalabs/massa-sc-deployer?activeTab=versions"}]}');function o(){const e=i;return n.createElement(r.Z,{defaultValue:"Buildnet"},e.networks.map((t=>n.createElement(l.Z,{value:t,label:t,key:t},n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Project"),n.createElement("th",null,"Install"),n.createElement("th",null,"NPM versions"))),n.createElement("tbody",null,e.projects.map(((e,a)=>{const r=e.compatibilities.find((e=>e.network===t));return n.createElement("tr",{key:a},n.createElement("td",null,e.title),n.createElement("td",null,n.createElement(s.Z,{className:"language-bash"},r?`${e.install}@${r.version}`:"")),n.createElement("td",null,n.createElement("a",{href:e.npmLink,target:"_blank",rel:"noopener noreferrer"},e.title," versions")))}))))))))}},1902:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(7462),s=(a(7294),a(3905)),r=a(1984);const l={id:"tooling-versions",title:"Tooling Versions"},i=void 0,o={unversionedId:"build/tooling-versions",id:"build/tooling-versions",title:"Tooling Versions",description:"This table provides a concise overview of the different versions of our projects that are compatible with the different Networks.",source:"@site/docs/build/sdk.mdx",sourceDirName:"build",slug:"/build/tooling-versions",permalink:"/docs/build/tooling-versions",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/build/sdk.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1704192328,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{id:"tooling-versions",title:"Tooling Versions"},sidebar:"buildSidebar",previous:{title:"Local network (sandbox)",permalink:"/docs/build/networks-faucets/local-network"},next:{title:"Providers",permalink:"/docs/build/api/providers"}},u={},c=[],m={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,s.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This table provides a concise overview of the different versions of our projects that are compatible with the different Networks."),(0,s.kt)("p",null,"Take a look at the table below to identify the right version for your desired network."),(0,s.kt)(r.Z,{mdxType:"VersionsTable"}))}p.isMDXComponent=!0}}]);