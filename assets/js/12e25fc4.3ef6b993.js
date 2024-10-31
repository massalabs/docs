"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[5241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={id:"prerequisites",sidebar_label:"Prerequisites",sidebar_position:2},o="Prerequisites",l={unversionedId:"build/massa-web3/prerequisites",id:"build/massa-web3/prerequisites",title:"Prerequisites",description:"Before you can begin developing dapps on Massa, you'll need to ensure that your development environment meets the following requirements:",source:"@site/docs/build/massa-web3/prerequisites.md",sourceDirName:"build/massa-web3",slug:"/build/massa-web3/prerequisites",permalink:"/docs/build/massa-web3/prerequisites",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/massa-web3/prerequisites.md",tags:[],version:"current",lastUpdatedBy:"Peterjah",lastUpdatedAt:1730365623,formattedLastUpdatedAt:"Oct 31, 2024",sidebarPosition:2,frontMatter:{id:"prerequisites",sidebar_label:"Prerequisites",sidebar_position:2},sidebar:"buildSidebar",previous:{title:"Introduction",permalink:"/docs/build/massa-web3/intro"},next:{title:"Provider",permalink:"/docs/build/massa-web3/provider"}},s={},p=[{value:"Using a Bundler for Vanilla JavaScript Projects",id:"using-a-bundler-for-vanilla-javascript-projects",level:2},{value:"1. Install Required Dependencies",id:"1-install-required-dependencies",level:2},{value:"2. Create Vite Configuration File",id:"2-create-vite-configuration-file",level:2},{value:"3. Explanation of the Configuration",id:"3-explanation-of-the-configuration",level:2},{value:"Why This Configuration is Necessary",id:"why-this-configuration-is-necessary",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before you can begin developing dapps on Massa, you'll need to ensure that your development environment meets the following requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," installed on your system.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We recommend updating Node.js and npm to the latest version for best performance and security."),(0,i.kt)("p",{parentName:"admonition"},"To update npm, run the following commands:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g npm\n")),(0,i.kt)("p",{parentName:"admonition"},"To update Node.js, the recommended way is to use ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),", the Node.js version manager.\nIf you do not already have ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," installed, you can install it with the following command:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g n\n")),(0,i.kt)("p",{parentName:"admonition"},"Once ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," is installed, you can update to the latest version of Node.js with the following command:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"n latest\n"))),(0,i.kt)("p",null,"Once you have an up-to-date Node.js, you're ready to start developing smart contracts on the Massa blockchain."),(0,i.kt)("h2",{id:"using-a-bundler-for-vanilla-javascript-projects"},"Using a Bundler for Vanilla JavaScript Projects"),(0,i.kt)("p",null,"As the Massa Web3 library doesn't provide a pre-bundled version, it's recommended to use a bundler when working with vanilla JavaScript projects. This approach ensures proper module resolution and allows you to take full advantage of the library's features."),(0,i.kt)("p",null,"We recommend using ",(0,i.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," as a fast and efficient bundler for your projects. Here's how you can set up a new project with Vite:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new project directory and navigate into it:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm create vite@latest\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose the ",(0,i.kt)("inlineCode",{parentName:"p"},"vanilla")," template when prompted.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the Massa Web3 library:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @massalabs/wallet-provider\nnpm install @massalabs/massa-web3\n")))),(0,i.kt)("p",null,"This setup allows you to use the Massa Web3 library in a vanilla JavaScript project with proper bundling and module resolution."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Using a bundler like Vite not only resolves module dependencies but also provides features like hot module replacement and optimized builds for production, enhancing your development experience with the Massa Web3 library.")),(0,i.kt)("h1",{id:"vite-configuration-and-polyfills-for-massa-web3-projects"},"Vite Configuration and Polyfills for Massa Web3 Projects"),(0,i.kt)("p",null,"To ensure compatibility with Vite and to provide necessary polyfills for the Massa Web3 library, follow these steps. These configurations are necessary because, at the moment, ",(0,i.kt)("inlineCode",{parentName:"p"},"massa-web3")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"events"),", which are not natively supported in the browser environment."),(0,i.kt)("h2",{id:"1-install-required-dependencies"},"1. Install Required Dependencies"),(0,i.kt)("p",null,"First, install the necessary dependencies by running the following commands in your project directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install lodash-es\nnpm install vite-plugin-node-polyfills\n")),(0,i.kt)("h2",{id:"2-create-vite-configuration-file"},"2. Create Vite Configuration File"),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"vite.config.js")," file in your project root with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import { defineConfig } from "vite";\nimport { nodePolyfills } from "vite-plugin-node-polyfills";\n\nexport default defineConfig({\n  plugins: [nodePolyfills()],\n  resolve: {\n    alias: {\n      lodash: "lodash-es",\n    },\n  },\n  build: {\n    rollupOptions: {\n      external: ["lodash"],\n    },\n  },\n});\n')),(0,i.kt)("h2",{id:"3-explanation-of-the-configuration"},"3. Explanation of the Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodePolyfills()"),": This plugin provides polyfills for Node.js built-in modules, which are required by ",(0,i.kt)("inlineCode",{parentName:"li"},"massa-web3")," but not available in the browser environment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resolve.alias"),": This configuration resolves ",(0,i.kt)("inlineCode",{parentName:"li"},"lodash")," to its ES module version (",(0,i.kt)("inlineCode",{parentName:"li"},"lodash-es"),"), ensuring compatibility with the module system used by Vite."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"build.rollupOptions.external"),": This tells Vite to treat ",(0,i.kt)("inlineCode",{parentName:"li"},"lodash")," as an external dependency, which can help prevent duplicated code and potential conflicts.")),(0,i.kt)("h2",{id:"why-this-configuration-is-necessary"},"Why This Configuration is Necessary"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Node.js Polyfills"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"massa-web3")," library uses some Node.js-specific modules (like ",(0,i.kt)("inlineCode",{parentName:"p"},"events"),") that are not available in the browser environment. The ",(0,i.kt)("inlineCode",{parentName:"p"},"vite-plugin-node-polyfills")," provides implementations of these modules for the browser.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Lodash Compatibility"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"massa-web3")," depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash"),", which is traditionally a CommonJS module. Vite works best with ES modules. By using ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash-es")," and setting up the alias, we ensure that the ES module version of lodash is used, which is compatible with Vite's ESM-centric approach.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Build Optimization"),": By marking ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," as external, we prevent potential issues with multiple versions of lodash being bundled and allow for better tree-shaking and code splitting."))),(0,i.kt)("p",null,"By following these steps and understanding the reasons behind them, you'll have a properly configured development environment ready for building dApps on the Massa blockchain using the Massa Web3 library with Vite as your build tool."),(0,i.kt)("p",null,"Remember to keep an eye on updates to ",(0,i.kt)("inlineCode",{parentName:"p"},"massa-web3"),", as future versions may reduce or eliminate the need for some of these polyfills and configurations."))}m.isMDXComponent=!0}}]);