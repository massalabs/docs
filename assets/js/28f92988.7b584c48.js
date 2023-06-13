"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[9133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(n),f=r,h=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),s=n(6550),u=n(1980),i=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,i]=h({queryString:n,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),m=(()=>{const e=u??d;return f({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{m&&s(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),b(e)}),[i,b,l]),tabValues:l}}var m=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==s&&(d(t),u(a))},f=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:p},o,{className:(0,l.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,m.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},7189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),o=n(5162);const s={id:"networks-faucets",sidebar_label:"Networks & Faucets"},u="Networks & Faucets",i={unversionedId:"build/networks-faucets",id:"build/networks-faucets",title:"Networks & Faucets",description:"Here's a handy table containing all you need to know about the different Massa networks and their faucets.",source:"@site/docs/build/networks-faucets.mdx",sourceDirName:"build",slug:"/build/networks-faucets",permalink:"/docu-dev/docs/build/networks-faucets",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/build/networks-faucets.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1686677329,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"networks-faucets",sidebar_label:"Networks & Faucets"},sidebar:"buildSidebar",previous:{title:"Community Wallets",permalink:"/docu-dev/docs/build/wallet/community-wallets"},next:{title:"SDK",permalink:"/docu-dev/docs/build/sdk"}},c={},d=[{value:"What&#39;s a Network, Anyway?",id:"whats-a-network-anyway",level:2},{value:"What about Faucets?",id:"what-about-faucets",level:2},{value:"What&#39;s Special About These Networks?",id:"whats-special-about-these-networks",level:2},{value:"Testnet",id:"testnet",level:3},{value:"Buildnet",id:"buildnet",level:3},{value:"Are There Any Requirements for Using Faucets?",id:"are-there-any-requirements-for-using-faucets",level:2}],p={toc:d},f="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"networks--faucets"},"Networks & Faucets"),(0,r.kt)("p",null,"Here's a handy table containing all you need to know about the different Massa networks and their faucets. "),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"buildnet",label:"\ud83d\udc77 BuildNet",default:!0,mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"\ud83d\udd17 Public API"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://buildnet.massa.net/api/v2"},"https://buildnet.massa.net/api/v2"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\ud83e\ude99 Faucet"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://discord.com/channels/828270821042159636/1097797634065956915"},"#buildernet-faucet")," Discord channel")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\ud83d\udd75\ufe0f Explorer"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://buildnet.massa.net"},"https://buildnet.massa.net"))))),(0,r.kt)(o.Z,{value:"testnet",label:"\ud83e\uddd1\u200d\ud83d\udd2c TestNet",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"\ud83d\udd17 Public API"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://test.massa.net/api/v2"},"https://test.massa.net/api/v2"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\ud83e\ude99 Faucet"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://discord.com/channels/828270821042159636/866190913030193172"},"#testnet-faucet")," Discord channel")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\ud83d\udd75\ufe0f Explorer"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://test.massa.net/v1/"},"https://test.massa.net/v1/")))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Each faucet allows for only one request per day.")),(0,r.kt)("h2",{id:"whats-a-network-anyway"},"What's a Network, Anyway?"),(0,r.kt)("p",null,"In the realm of blockchain technology, a network is a decentralized system of interconnected nodes.\nThese nodes work in harmony to ensure the blockchain runs smoothly, validating transactions, adding them to the blockchain, and maintaining the integrity of the ledger."),(0,r.kt)("h2",{id:"what-about-faucets"},"What about Faucets?"),(0,r.kt)("p",null,"A faucet, in the context of blockchain, is a mechanism that provides small amounts of cryptocurrency to users for free.\nThink of it as a digital tap that drips a small portion of a specific cryptocurrency."),(0,r.kt)("p",null,"Faucets play a crucial role in the blockchain ecosystem: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"they offer a friendly introduction to new users by giving them a starting amount of cryptocurrency, and"),(0,r.kt)("li",{parentName:"ul"},"they also aid developers in testing and building blockchain applications by providing the necessary tokens for experimentation.")),(0,r.kt)("h2",{id:"whats-special-about-these-networks"},"What's Special About These Networks?"),(0,r.kt)("h3",{id:"testnet"},"Testnet"),(0,r.kt)("p",null,"The Massa Testnet serves as the vital sandbox in the Massa ecosystem, designed for robust testing and experimentation. "),(0,r.kt)("p",null,"At Massa, we are continually pushing the boundaries of performance, decentralization, and security, introducing significant and groundbreaking features regularly.\nWith such relentless innovation, it's crucial that we ensure everything functions perfectly, even at scale. This is where Testnet comes into play. "),(0,r.kt)("p",null,"Testnet allows anyone to run a node and actively participate in the network, trying out these innovative features, testing applications, and experimenting with smart contracts.\nWhat makes Testnet even more appealing is that all this can be done without the worry of using real assets or affecting the main network.\nThink of Testnet as our proving ground - a place where we can confidently explore and experiment with the future of blockchain technology."),(0,r.kt)("h3",{id:"buildnet"},"Buildnet"),(0,r.kt)("p",null,"The Massa BuilderNet serves as your reliable playground for crafting and deploying smart contracts on the Massa blockchain. "),(0,r.kt)("p",null,"While we regularly push new, groundbreaking features to Testnet, BuilderNet follows a more gradual upgrade cycle. This careful pace ensures its constant availability and stability - key factors that you, as a developer, rely on."),(0,r.kt)("p",null,"At MassaLabs, we put significant effort into the careful maintenance of BuilderNet. Our goal is to provide you with a platform where you can build robust, innovative applications. "),(0,r.kt)("p",null,"Leveraging BuilderNet's unique features and capabilities, you can navigate the forefront of blockchain technology with confidence and peace of mind, knowing you have a stable and dependable environment for your projects."),(0,r.kt)("h2",{id:"are-there-any-requirements-for-using-faucets"},"Are There Any Requirements for Using Faucets?"),(0,r.kt)("p",null,"Sure! You'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Massa wallet (Don't have one yet? Generate addresses on the ",(0,r.kt)("a",{parentName:"li",href:"https://massa.net/testnet/wallet"},"Explorer website"),")"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://support.discord.com/hc/en-us/articles/360033931551-Getting-Started"},"Discord account"))))}h.isMDXComponent=!0}}]);