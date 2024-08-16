"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[9019],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>c});var a=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),y=i,c=u["".concat(s,".").concat(y)]||u[y]||m[y]||r;return t?a.createElement(c,o(o({ref:n},d),{},{components:t})):a.createElement(c,o({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},4290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(8168),i=(t(6540),t(5680));const r={id:"prerequisites",sidebar_label:"Prerequisites",sidebar_position:2},o="Prerequisites",l={unversionedId:"build/web3/prerequisites",id:"build/web3/prerequisites",title:"Prerequisites",description:"Before you can begin developing dapps on Massa, you'll need to ensure that your development environment meets the following requirements:",source:"@site/docs/build/web3/prerequisites.md",sourceDirName:"build/web3",slug:"/build/web3/prerequisites",permalink:"/docs/build/web3/prerequisites",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/web3/prerequisites.md",tags:[],version:"current",lastUpdatedBy:"BenRey",lastUpdatedAt:1723798300,formattedLastUpdatedAt:"Aug 16, 2024",sidebarPosition:2,frontMatter:{id:"prerequisites",sidebar_label:"Prerequisites",sidebar_position:2},sidebar:"buildSidebar",previous:{title:"Introduction",permalink:"/docs/build/web3/intro"},next:{title:"Provider",permalink:"/docs/build/web3/provider"}},s={},p=[{value:"Using a Bundler for Vanilla JavaScript Projects",id:"using-a-bundler-for-vanilla-javascript-projects",level:2},{value:"1. Install Required Dependencies",id:"1-install-required-dependencies",level:2},{value:"2. Create Vite Configuration File",id:"2-create-vite-configuration-file",level:2},{value:"3. Explanation of the Configuration",id:"3-explanation-of-the-configuration",level:2},{value:"Why This Configuration is Necessary",id:"why-this-configuration-is-necessary",level:2}],d={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"prerequisites"},"Prerequisites"),(0,i.yg)("p",null,"Before you can begin developing dapps on Massa, you'll need to ensure that your development environment meets the following requirements:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," installed on your system.")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"We recommend updating Node.js and npm to the latest version for best performance and security."),(0,i.yg)("p",{parentName:"admonition"},"To update npm, run the following commands:"),(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"npm install -g npm\n")),(0,i.yg)("p",{parentName:"admonition"},"To update Node.js, the recommended way is to use ",(0,i.yg)("inlineCode",{parentName:"p"},"n"),", the Node.js version manager.\nIf you do not already have ",(0,i.yg)("inlineCode",{parentName:"p"},"n")," installed, you can install it with the following command:"),(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"npm install -g n\n")),(0,i.yg)("p",{parentName:"admonition"},"Once ",(0,i.yg)("inlineCode",{parentName:"p"},"n")," is installed, you can update to the latest version of Node.js with the following command:"),(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"n latest\n"))),(0,i.yg)("p",null,"Once you have an up-to-date Node.js, you're ready to start developing smart contracts on the Massa blockchain."),(0,i.yg)("h2",{id:"using-a-bundler-for-vanilla-javascript-projects"},"Using a Bundler for Vanilla JavaScript Projects"),(0,i.yg)("p",null,"As the Massa Web3 library doesn't provide a pre-bundled version, it's recommended to use a bundler when working with vanilla JavaScript projects. This approach ensures proper module resolution and allows you to take full advantage of the library's features."),(0,i.yg)("p",null,"We recommend using ",(0,i.yg)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," as a fast and efficient bundler for your projects. Here's how you can set up a new project with Vite:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create a new project directory and navigate into it:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"npm create vite@latest\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Choose the ",(0,i.yg)("inlineCode",{parentName:"p"},"vanilla")," template when prompted.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Install the Massa Web3 library:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"npm install @massalabs/wallet-provider@next\nnpm install @massalabs/massa-web3@next\n")))),(0,i.yg)("p",null,"This setup allows you to use the Massa Web3 library in a vanilla JavaScript project with proper bundling and module resolution."),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Using a bundler like Vite not only resolves module dependencies but also provides features like hot module replacement and optimized builds for production, enhancing your development experience with the Massa Web3 library.")),(0,i.yg)("h1",{id:"vite-configuration-and-polyfills-for-massa-web3-projects"},"Vite Configuration and Polyfills for Massa Web3 Projects"),(0,i.yg)("p",null,"To ensure compatibility with Vite and to provide necessary polyfills for the Massa Web3 library, follow these steps. These configurations are necessary because, at the moment, ",(0,i.yg)("inlineCode",{parentName:"p"},"massa-web3")," uses ",(0,i.yg)("inlineCode",{parentName:"p"},"lodash")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"events"),", which are not natively supported in the browser environment."),(0,i.yg)("h2",{id:"1-install-required-dependencies"},"1. Install Required Dependencies"),(0,i.yg)("p",null,"First, install the necessary dependencies by running the following commands in your project directory:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"npm install lodash-es\nnpm install vite-plugin-node-polyfills\n")),(0,i.yg)("h2",{id:"2-create-vite-configuration-file"},"2. Create Vite Configuration File"),(0,i.yg)("p",null,"Create a ",(0,i.yg)("inlineCode",{parentName:"p"},"vite.config.js")," file in your project root with the following content:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},'import { defineConfig } from "vite";\nimport { nodePolyfills } from "vite-plugin-node-polyfills";\n\nexport default defineConfig({\n  plugins: [nodePolyfills()],\n  resolve: {\n    alias: {\n      lodash: "lodash-es",\n    },\n  },\n  build: {\n    rollupOptions: {\n      external: ["lodash"],\n    },\n  },\n});\n')),(0,i.yg)("h2",{id:"3-explanation-of-the-configuration"},"3. Explanation of the Configuration"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"nodePolyfills()"),": This plugin provides polyfills for Node.js built-in modules, which are required by ",(0,i.yg)("inlineCode",{parentName:"li"},"massa-web3")," but not available in the browser environment."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"resolve.alias"),": This configuration resolves ",(0,i.yg)("inlineCode",{parentName:"li"},"lodash")," to its ES module version (",(0,i.yg)("inlineCode",{parentName:"li"},"lodash-es"),"), ensuring compatibility with the module system used by Vite."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"build.rollupOptions.external"),": This tells Vite to treat ",(0,i.yg)("inlineCode",{parentName:"li"},"lodash")," as an external dependency, which can help prevent duplicated code and potential conflicts.")),(0,i.yg)("h2",{id:"why-this-configuration-is-necessary"},"Why This Configuration is Necessary"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Node.js Polyfills"),": The ",(0,i.yg)("inlineCode",{parentName:"p"},"massa-web3")," library uses some Node.js-specific modules (like ",(0,i.yg)("inlineCode",{parentName:"p"},"events"),") that are not available in the browser environment. The ",(0,i.yg)("inlineCode",{parentName:"p"},"vite-plugin-node-polyfills")," provides implementations of these modules for the browser.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Lodash Compatibility"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"massa-web3")," depends on ",(0,i.yg)("inlineCode",{parentName:"p"},"lodash"),", which is traditionally a CommonJS module. Vite works best with ES modules. By using ",(0,i.yg)("inlineCode",{parentName:"p"},"lodash-es")," and setting up the alias, we ensure that the ES module version of lodash is used, which is compatible with Vite's ESM-centric approach.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Build Optimization"),": By marking ",(0,i.yg)("inlineCode",{parentName:"p"},"lodash")," as external, we prevent potential issues with multiple versions of lodash being bundled and allow for better tree-shaking and code splitting."))),(0,i.yg)("p",null,"By following these steps and understanding the reasons behind them, you'll have a properly configured development environment ready for building dApps on the Massa blockchain using the Massa Web3 library with Vite as your build tool."),(0,i.yg)("p",null,"Remember to keep an eye on updates to ",(0,i.yg)("inlineCode",{parentName:"p"},"massa-web3"),", as future versions may reduce or eliminate the need for some of these polyfills and configurations."))}m.isMDXComponent=!0}}]);