"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[4956],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),s=a(6550),o=a(1980),c=a(7392),u=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,c]=b({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=o??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var h=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==s&&(p(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return r.createElement(g,(0,n.Z)({key:String(t)},e))}},3436:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),i=a(5162);const s={id:"massa-web3-main",title:"Introduction"},o="Leveraging Javascript API for Massa interaction",c={unversionedId:"build/massa-web3/massa-web3-main",id:"build/massa-web3/massa-web3-main",title:"Introduction",description:"What is Massa-Web3?",source:"@site/docs/build/massa-web3/massa-web3.mdx",sourceDirName:"build/massa-web3",slug:"/build/massa-web3/",permalink:"/docs/build/massa-web3/",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/build/massa-web3/massa-web3.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1693560131,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{id:"massa-web3-main",title:"Introduction"},sidebar:"buildSidebar",previous:{title:"Community Wallets",permalink:"/docs/build/wallet/community-wallets"},next:{title:"dApp Usage",permalink:"/docs/build/massa-web3/dapp-usage-massa-web3"}},u={},p=[{value:"What is Massa-Web3?",id:"what-is-massa-web3",level:2},{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:3},{value:"As a library (Node.js/React/Vue.js)",id:"as-a-library-nodejsreactvuejs",level:3},{value:"In a browser",id:"in-a-browser",level:3},{value:"Initialization",id:"initialization",level:2},{value:"With Wallet-provider",id:"with-wallet-provider",level:3},{value:"Without Wallet-provider",id:"without-wallet-provider",level:3},{value:"Client exposed APIs",id:"client-exposed-apis",level:3}],d={toc:p},m="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"leveraging-javascript-api-for-massa-interaction"},"Leveraging Javascript API for Massa interaction"),(0,r.kt)("h2",{id:"what-is-massa-web3"},"What is Massa-Web3?"),(0,r.kt)("p",null,"Massa-web3 is an exhaustive library enabling interaction with the Massa blockchain. It can be used in a browser environment and Node.js runtime."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Massa-web3 operates by utilizing JsonRPC API in the background to facilitate blockchain communication. The API is divided into a Private and a Public segment, used for node management and blockchain interactions, respectively. For more information on the API, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/build/api/jsonrpc"},"JsonRPC API documentation"),".")),(0,r.kt)("p",null,"Massa-web3 will allow you to interact with the Massa blockchain in a variety of ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Send transactions"),(0,r.kt)("li",{parentName:"ul"},"Deploy smart contracts"),(0,r.kt)("li",{parentName:"ul"},"Create, manage and inspect addresses"),(0,r.kt)("li",{parentName:"ul"},"Manage your node"),(0,r.kt)("li",{parentName:"ul"},"Fetch events from the blockchain"),(0,r.kt)("li",{parentName:"ul"},"And much more!")),(0,r.kt)("p",null,"In addition, the library includes a ",(0,r.kt)("a",{parentName:"p",href:"/docs/build/massa-web3/massa-web3-utils"},"collection of handy utility functions")," (e.g conversion between different units, etc)."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For a quick integration of Massa within a web browser, consider reading our Web Frontend Integration Guide.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Massa-web3 can be used as a library for frameworks or as a stand-alone bundled js file which can be easily loaded into the browser."),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NodeJS 14+"),(0,r.kt)("li",{parentName:"ul"},"npm / yarn (see package.json)")),(0,r.kt)("h3",{id:"as-a-library-nodejsreactvuejs"},"As a library (Node.js/React/Vue.js)"),(0,r.kt)("p",null,"Just install the library using npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @massalabs/massa-web3\n")),(0,r.kt)("h3",{id:"in-a-browser"},"In a browser"),(0,r.kt)("p",null,"If you want to use the library in a vanilla javascript project, please add the following script tag to your html file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script\n  type="text/javascript"\n  src="https://cdn.jsdelivr.net/npm/@massalabs/massa-web3@x.x.x/bundle.js"\n><\/script>\n')),(0,r.kt)("p",null,"whereby the x.x.x is one of the available released versions under ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-web3/releases"},"Massa-web3's releases page"),":"),(0,r.kt)("p",null,"In your code, once the script is fully loaded, just use window.massa to access all massa-web3 exports."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'<script>console.log("Massa Web3 ", window.massa);<\/script>\n')),(0,r.kt)("h2",{id:"initialization"},"Initialization"),(0,r.kt)("p",null,"Some usage of massa-web3 require an account. This account can be either provided using ",(0,r.kt)("a",{parentName:"p",href:"/docs/build/wallet/wallet-provider"},"Wallet-provider")," or directly in the code"),(0,r.kt)("h3",{id:"with-wallet-provider"},"With Wallet-provider"),(0,r.kt)("p",null,"The Wallet-provider allows you to easily connect your dApp to a user's wallet, without having to worry about\nsecret keys and other sensitive information. The Wallet-provider will automatically detect if a wallet is installed and connect to it."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"wallet-provider-react",label:"React",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Full code can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-sc-examples/blob/main/age/react/src/App.tsx"},"here")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'useEffect(() => {\n  const registerAndSetProvider = async () => {\n    try {\n      let provider = (await providers(true, 10000))[0];\n      let accounts = await provider.accounts();\n      if (accounts.length === 0) {\n        setErrorMessage("No accounts found");\n        return;\n      }\n      setAccount(accounts[0]);\n      if (!account || !provider) {\n        return;\n      }\n      setClient(await ClientFactory.fromWalletProvider(provider, account));\n    } catch (e) {\n      console.log(e);\n      setErrorMessage(\n        "Please install massa station and the wallet plugin and refresh."\n      );\n    }\n  };\n  registerAndSetProvider();\n}, [account]);\n'))),(0,r.kt)(i.Z,{value:"vanilla-js",label:"Vanilla JS",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Full code can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-sc-examples/blob/main/age/html/js/index.js"},"here")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'let massa = window.massa;\nlet wallet = window.wallet;\n\nlet client = null;\nlet account = null;\n\nconst initializeClient = async () => {\n  try {\n    let provider = (await wallet.providers(true, 10000))[0];\n    let accounts = await provider.accounts();\n    if (accounts.length === 0) {\n      throw new Error("No accounts found");\n    }\n    account = accounts[0];\n    if (!account || !provider) {\n      throw new Error("No account or provider found");\n    }\n    client = await massa.ClientFactory.fromWalletProvider(provider, account);\n  } catch (e) {\n    console.error(e);\n  }\n};\n')))),(0,r.kt)("h3",{id:"without-wallet-provider"},"Without Wallet-provider"),(0,r.kt)("p",null,"You can easily initialize a client instance using the ClientFactory class:"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mainnet-client",label:"Mainnet",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const baseAccount: IAccount = await WalletClient.getAccountFromSecretKey(\n  privateKey\n);\n\nconst testnetClient: Client = await ClientFactory.createDefaultClient(\n  DefaultProviderUrls.MAINNET,\n  true, // retry failed requests\n  baseAccount // optional parameter\n);\n"))),(0,r.kt)(i.Z,{value:"testnet-client",label:"Testnet",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const baseAccount: IAccount = await WalletClient.getAccountFromSecretKey(\n  privateKey\n);\n\nconst testnetClient: Client = await ClientFactory.createDefaultClient(\n  DefaultProviderUrls.TESTNET,\n  true, // retry failed requests\n  baseAccount // optional parameter\n);\n"))),(0,r.kt)(i.Z,{value:"buildnet-client",label:"Buildnet",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const baseAccount: IAccount = await WalletClient.getAccountFromSecretKey(\n  privateKey\n);\n\nconst testnetClient: Client = await ClientFactory.createDefaultClient(\n  DefaultProviderUrls.BUILDNET,\n  true, // retry failed requests\n  baseAccount // optional parameter\n);\n"))),(0,r.kt)(i.Z,{value:"labnet-client",label:"Labnet",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const baseAccount: IAccount = await WalletClient.getAccountFromSecretKey(\n  privateKey\n);\n\nconst testnetClient: Client = await ClientFactory.createDefaultClient(\n  DefaultProviderUrls.LABNET,\n  true, // retry failed requests\n  baseAccount // optional parameter\n);\n"))),(0,r.kt)(i.Z,{value:"local-client",label:"Localnet",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const baseAccount: IAccount = await WalletClient.getAccountFromSecretKey(\n  privateKey\n);\n\nconst testnetClient: Client = await ClientFactory.createDefaultClient(\n  DefaultProviderUrls.LOCALNET,\n  true, // retry failed requests\n  baseAccount // optional parameter\n);\n"))),(0,r.kt)(i.Z,{value:"custom-client",label:"Custom Client",mdxType:"TabItem"},"You can also create a custom client connecting to a node whose ip and ports are to be specified by the user.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const baseAccount: IAccount = await WalletClient.getAccountFromSecretKey(\n  privateKey\n);\n\n// initialize a custom client using an own provider\nconst providers: Array<IProvider> = [\n  {\n    url: "http://127.0.0.1:33035",\n    type: ProviderType.PUBLIC,\n  } as IProvider,\n  {\n    url: "http://127.0.0.1:33034",\n    type: ProviderType.PRIVATE,\n  } as IProvider,\n];\n\nconst customClient: Client = await ClientFactory.createCustomClient(\n  providers,\n  true, // retry failed requests\n  baseAccount // optional parameter\n);\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When initializing the client, you have the option to specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"baseAccount"),". If provided, this account\nwill be used as the default executor for upcoming calls. If you choose to initialize\nthe client without a ",(0,r.kt)("inlineCode",{parentName:"p"},"baseAccount"),", it becomes mandatory to specify the executor for each call that requires a signature.\nYou can learn more about how to manage the base account in the ",(0,r.kt)("a",{parentName:"p",href:"https://web3.docs.massa.net/classes/WalletClient.html"},"Wallet Operations")," section.")),(0,r.kt)("h3",{id:"client-exposed-apis"},"Client exposed APIs"),(0,r.kt)("p",null,"Once there is an initialized client instance, it is straightforward to call methods on it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const balance = await web3Client\n  .wallet()\n  .getAccountBalance("address")\n')),(0,r.kt)("p",null,"You can find details for each of the exposed APIs with all the available methods in the following sections:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web3.docs.massa.net/classes/WalletClient.html"},"Wallet Operations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web3.docs.massa.net/classes/SmartContractsClient.html"},"Smart Contracts Operations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web3.docs.massa.net/classes/PublicApiClient.html"},"Public API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web3.docs.massa.net/classes/PrivateApiClient.html"},"Private API"))))}b.isMDXComponent=!0}}]);