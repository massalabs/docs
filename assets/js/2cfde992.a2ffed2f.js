"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[7602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={id:"account",sidebar_label:"Account"},i="Account Management",c={unversionedId:"build/massa-web3/account",id:"build/massa-web3/account",title:"Account Management",description:"In @massalabs/massa-web3, the Account class provides a straightforward way to sign transactions on the Massa blockchain. You can initialize an account using a private key, ensuring secure access while keeping sensitive information out of the codebase. Here, we\u2019ll cover how to create a new account or load an existing one from its private key unsing an .env file.",source:"@site/docs/build/massa-web3/account.md",sourceDirName:"build/massa-web3",slug:"/build/massa-web3/account",permalink:"/docs/build/massa-web3/account",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/massa-web3/account.md",tags:[],version:"current",lastUpdatedBy:"Peterjah",lastUpdatedAt:1743675671,formattedLastUpdatedAt:"Apr 3, 2025",frontMatter:{id:"account",sidebar_label:"Account"},sidebar:"buildSidebar",previous:{title:"Introduction",permalink:"/docs/build/massa-web3/intro"},next:{title:"Provider",permalink:"/docs/build/massa-web3/provider"}},s={},l=[{value:"Create new account",id:"create-new-account",level:2},{value:"Import an existing account",id:"import-an-existing-account",level:2},{value:"Setting Up the Private Key",id:"setting-up-the-private-key",level:3},{value:"Initializing the Account in massa-web3",id:"initializing-the-account-in-massa-web3",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"account-management"},"Account Management"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"@massalabs/massa-web3"),", the Account class provides a straightforward way to sign transactions on the Massa blockchain. You can initialize an account using a private key, ensuring secure access while keeping sensitive information out of the codebase. Here, we\u2019ll cover how to create a new account or load an existing one from its private key unsing an ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("h2",{id:"create-new-account"},"Create new account"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Account } from \'@massalabs/massa-web3\'\n\nconst account = await Account.generate()\nconsole.log("address:", account.address.toString())\nconsole.log("public key:", account.publicKey.toString())\nconsole.log("private key:", account.privateKey.toString())\n\n/* result example:\naddress: AU12TuXSXVr6ivBv4Y3QzVf9X1FeMo8SNtXheRJjEayNXyYYX5vSQ\npublic key: P12p6vgR4RKJCeNp7TH5wmhWNwkBBQJiByCnvahcRRvKnsmngXJa\nprivate key: S1cSpLU7XpfYrgLPxuMk1V47T1z1SFcNzgi4Yb8oaYXxqXGX1mu\n*/\n')),(0,r.kt)("h2",{id:"import-an-existing-account"},"Import an existing account"),(0,r.kt)("h3",{id:"setting-up-the-private-key"},"Setting Up the Private Key"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Install the dotenv package"),": To securely load environment variables in Node.js, we\u2019ll use the dotenv package, which allows you to access variables stored in an ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install dotenv\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add the Private Key to an ",(0,r.kt)("inlineCode",{parentName:"strong"},".env")," File"),": Create an ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file in your project root directory (make sure to add this file to .gitignore to avoid sharing sensitive information). Add your private key as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"PRIVATE_KEY=your_private_key_here\n")))),(0,r.kt)("h3",{id:"initializing-the-account-in-massa-web3"},"Initializing the Account in massa-web3"),(0,r.kt)("p",null,"Once the private key is set up in the .env file, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"@massalabs/massa-web3")," to load the account and access it securely."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import 'dotenv/config'\nimport { Account } from '@massalabs/massa-web3'\n\nconst account = await Account.fromEnv()\n")))}d.isMDXComponent=!0}}]);