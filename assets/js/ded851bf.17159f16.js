"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[5816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={id:"hello-world-dapp",sidebar_label:'"Hello, World!" dApp'},i='Build a "Hello, World!" dApp',l={unversionedId:"build/hello-world-dapp",id:"build/hello-world-dapp",title:'Build a "Hello, World!" dApp',description:"Welcome, Developer! You're about to embark on an exciting journey where you'll build your very first decentralized application (dApp) using the Massa blockchain. If you're thrilled about the world of blockchain, smart contracts, and dApps, you've come to the right place!",source:"@site/docs/build/hello-world-dapp.mdx",sourceDirName:"build",slug:"/build/hello-world-dapp",permalink:"/docs/build/hello-world-dapp",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/hello-world-dapp.mdx",tags:[],version:"current",lastUpdatedBy:"Thomas S\xe9n\xe9chal",lastUpdatedAt:1737541315,formattedLastUpdatedAt:"Jan 22, 2025",frontMatter:{id:"hello-world-dapp",sidebar_label:'"Hello, World!" dApp'},sidebar:"buildSidebar",previous:{title:"Utils",permalink:"/docs/build/massa-web3-legacy/massa-web3-utils"},next:{title:"Introduction",permalink:"/docs/build/wallet/intro"}},s={},p=[{value:"What are we going to do ?",id:"what-are-we-going-to-do-",level:2},{value:"The Smart Contract",id:"the-smart-contract",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setting up Your Project",id:"setting-up-your-project",level:3},{value:"Step 1: Initialize Your Smart Contract Project",id:"step-1-initialize-your-smart-contract-project",level:4},{value:"Step 2: Setting up the Environment variables",id:"step-2-setting-up-the-environment-variables",level:4},{value:"Writing and Deploying the Smart Contract",id:"writing-and-deploying-the-smart-contract",level:3},{value:"Step 1: Writing the smart contract",id:"step-1-writing-the-smart-contract",level:4},{value:"Step 2: Compile Your Smart Contract",id:"step-2-compile-your-smart-contract",level:4},{value:"Step 3: Deploy the Smart Contract",id:"step-3-deploy-the-smart-contract",level:4},{value:"The Frontend",id:"the-frontend",level:2},{value:"Setting Up Your Project",id:"setting-up-your-project-1",level:3},{value:"Understanding the Code",id:"understanding-the-code",level:3},{value:"Testing your application",id:"testing-your-application",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-a-hello-world-dapp"},'Build a "Hello, World!" dApp'),(0,o.kt)("p",null,"Welcome, Developer! You're about to embark on an exciting journey where you'll build your very first decentralized application (dApp) using the Massa blockchain. If you're thrilled about the world of blockchain, smart contracts, and dApps, you've come to the right place!"),(0,o.kt)("p",null,'This guide will help you build a simple "Hello, World!" dApp. We\'ll use a smart contract written in AssemblyScript and a user-friendly frontend designed in React.'),(0,o.kt)("h2",{id:"what-are-we-going-to-do-"},"What are we going to do ?"),(0,o.kt)("p",null,"Here's the scoop: The application we're about to develop is simple. It will allow the user to retrieve a \"Hello, World!\" message that was set during the dApp deployment. This message will be stored on the Massa blockchain and will be permanently visible to all users of our dApp trough a front end."),(0,o.kt)("p",null,"Here's a quick overview of the component that will make up our dApp:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"The Smart Contract (SC)"),'\nThe smart contract, written in AssemblyScript, is the backbone of our dApp. If you are familiar with web development, you can think of the smart contract as the back end of the application. It will be deployed on the Massa blockchain and will be responsible for storing and retrieving the "Hello, World!" greeting message.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"The Frontend"),'\nA basic web interface built in React will allow users to read the greeting message. This interface will interact with the Massa blockchain by fetching the "Hello, World!" message from our smart contract.'))),(0,o.kt)("p",null,"And that's it! Let's get started."),(0,o.kt)("h2",{id:"the-smart-contract"},"The Smart Contract"),(0,o.kt)("p",null,'In this section, we are going to create a smart contract that will be deployed on the Massa blockchain. As explained earlier, this smart contract will be responsible for storing and retrieving the "Hello, World!" message.\nSmart contract in Massa are written in AssemblyScript, a language that is very similar to TypeScript. If you are not familiar with AssemblyScript, don\'t worry! We will guide you through the process of writing your first smart contract.'),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before we start, here's what you'll need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Node.js and npm installed"),"\nWe recommend using Node.js version 18 or later, and the compatible npm version. You can download and install Node.js and npm from the official website: ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"https://nodejs.org/"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Massa Wallet and your secret key"),"\nYou'll need a funded Massa wallet and your secret key before you deploy your smart contract to the Massa blockchain."))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Not sure how to create and fund a Massa wallet? Check our guide ",(0,o.kt)("a",{parentName:"p",href:"/docs/build/wallet/intro"},"here"),".")),(0,o.kt)("h3",{id:"setting-up-your-project"},"Setting up Your Project"),(0,o.kt)("p",null,"Here are the steps to set up your smart contract project:"),(0,o.kt)("h4",{id:"step-1-initialize-your-smart-contract-project"},"Step 1: Initialize Your Smart Contract Project"),(0,o.kt)("p",null,"First, open a terminal, and navigate to your preferred directory. Now, let's create your project with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @massalabs/sc-project-initializer init massa-hello-world\n")),(0,o.kt)("p",null,"With this command, you have created a new folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"massa-hello-world")," with all the necessary files for developing a Massa smart contract. Navigate to this folder."),(0,o.kt)("p",null,"Once you have navigated to the project directory, you should see the following files and directories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"assembly")),": This is the directory where your smart contract code resides. Within this, you'll find your contract files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts")," subdirectory and your test files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tests")," subdirectory.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},".env.example")),": This file serves as a template for the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file you'll need to create. It outlines the necessary environment variables required to deploy your smart contract.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"package.json")),": This file contains the npm commands crucial for various operations such as checking, testing, building, and deploying your smart contract.\n:::"))),(0,o.kt)("h4",{id:"step-2-setting-up-the-environment-variables"},"Step 2: Setting up the Environment variables"),(0,o.kt)("p",null,"Seting up a wallet will allow us to sign and pay for the deployment of our smart contract. The wallet will come under the form of a private key."),(0,o.kt)("p",null,"Copy the content of the ",(0,o.kt)("inlineCode",{parentName:"p"},".env.example")," to a newly created ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file at the root of your project directory.\nOnce created, edit the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file by inserting your wallet's private key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'PRIVATE_KEY="Your_private_key_here"\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"PRIVATE_KEY: This is your wallet's secret key. It will be used to sign the contract deployment transaction. Make sure your wallet is funded."))),(0,o.kt)("h3",{id:"writing-and-deploying-the-smart-contract"},"Writing and Deploying the Smart Contract"),(0,o.kt)("p",null,"Now that you have set up your project, let's write our smart contract. Our smart contract will let users set and get a greeting message. The message will be stored in the contract storage and will be permanently visible to all users of our dApp. The greeting message will be set during the deployment of the smart contract."),(0,o.kt)("h4",{id:"step-1-writing-the-smart-contract"},"Step 1: Writing the smart contract"),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"assembly/contracts")," directory and open the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.ts")," file. This is where we will write our smart contract code.\nReplace the content of the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.ts")," file in assembly/contracts with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { generateEvent, Storage, Context } from "@massalabs/massa-as-sdk";\n\nconst GREETING_KEY = "greeting_key";\n\n/**\n * This function is meant to be called only one time: when the contract is deployed.\n */\nexport function constructor(_: StaticArray<u8>): void {\n  // This line is important. It ensures that this function can\'t be called in the future.\n  // If you remove this check, someone could call your constructor function and reset your smart contract.\n  assert(Context.isDeployingContract());\n\n  // Set the greeting message in the contract storage\n  Storage.set(GREETING_KEY, "Hello, World!");\n\n  // Emit an event to notify that the greeting message has been set\n  generateEvent(`Greeting has been set`);\n}\n')),(0,o.kt)("p",null,'At first glance, it may seems like a lot of code for a simple "Hello, World!". But the code above is actually quite simple. Let\'s break it down:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Importing the necessary packages from Massa AssemblyScript SDK"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { generateEvent, Storage, Context } from "@massalabs/massa-as-sdk";\n')),(0,o.kt)("p",null,"Here we are importing the necessary functions from the Massa AssemblyScript SDK. The Massa AssemblyScript software development kit (SDK) is a collection of functions and objects that wrap the ABIs exposed by the node."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you are familiar with Solidity smart contracts, you will soon notice that some object provided by Massa AssemblyScript SDK are very similar to the ones provided by the Solidity SDK. For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Context")," object is very similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"msg")," object in Solidity. It exposes methods such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Context.transferredCoins()")," which would translate to ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.value")," in Solidity. ",(0,o.kt)("inlineCode",{parentName:"p"},"Context.caller()")," would return the address of the function caller like ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.sender")," in solidity. Similarly, the ",(0,o.kt)("inlineCode",{parentName:"p"},"generateEvent")," function is very similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"emit")," function in Solidity, etc.\nYou can learn more about the Massa AssemblyScript SDK ",(0,o.kt)("a",{parentName:"p",href:"/docs/build/smart-contract/sdk"},"here"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"The constructor function"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export function constructor(_: StaticArray<u8>): void {\n  assert(Context.isDeployingContract());\n")),(0,o.kt)("p",null,"This is the constructor function. It is called only once when the contract is being deployed. The constructor function takes a parameter of type ",(0,o.kt)("inlineCode",{parentName:"p"},"StaticArray<u8>"),". This parameter is not used in this example, so we are ignoring it by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"_")," symbol. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Context.isDeployingContract()")," function is used to check if the contract is being deployed. If it is not, the function throws and the rest of the code is not executed. It ensures that the constructor function can't be called in the future. If you remove this check, someone could call your constructor function and reset your smart contract."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Setting the greeting message in the contract storage"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'Storage.set("greeting", "Hello, World!");\n')),(0,o.kt)("p",null,"This line sets the greeting message in the contract storage. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage.set()")," function takes two parameters: the key and the value. The key is a string that will be used to retrieve the value from the storage. The value can be of any type. In this example, we are using a string."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'In Massa, if you want some data to be persistent on the blockchain, you need to store it in the contract storage. If you are familiar with web development, you can think of the storage as the database of your application. The contract storage is a key-value store that can be used to store simple objects such as our "Hello, World!" string, or more complex objects such as serializable object arrays. Then the data can be retrieved from the storage using methods such has ',(0,o.kt)("inlineCode",{parentName:"p"},"Storage.get()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage.has()")," provided by the SDK. You can learn more about how to handle the storage with Massa AS-SDK ",(0,o.kt)("a",{parentName:"p",href:"/docs/build/smart-contract/sdk#storage"},"here"),". ")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In Massa, when writing to the persistent storage a.k.a the ledger, you need to pay for the storage space you will be using. The more data you store, the more you will have to pay. Similarly when you free-up some space from the ledger, you recover the amount of coins you paid to allocate the space. The price of storage is a fixed amount of Massa coins for each byte of data (0.001 MAS per byte). You can learn more about storage cost in Massa smart contracts ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/storage-costs"},"here"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Emitting an event"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"generateEvent(`Greeting has been set`);\n")),(0,o.kt)("p",null,"Here, we are emitting an event to notify that the greeting message has been set. Events are a great way to notify the front ends of a dApp that something has happened. They are similar to events in Solidity. You can learn more about events ",(0,o.kt)("a",{parentName:"p",href:"/docs/build/smart-contract/sdk#utilities"},"here"),"."),(0,o.kt)("p",null,"Now that we have written our smart contract, let's deploy it to the blockchain."),(0,o.kt)("h4",{id:"step-2-compile-your-smart-contract"},"Step 2: Compile Your Smart Contract"),(0,o.kt)("p",null,"In your project directory, run the following command to compile your smart contract into a WebAssembly (Wasm) file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This command compiles your ",(0,o.kt)("inlineCode",{parentName:"p"},"main.ts")," contract into a ",(0,o.kt)("inlineCode",{parentName:"p"},"main.wasm")," file generated in the ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," directory. This main.wasm file is the compiled version of your smart contract that will be deployed to the blockchain.")),(0,o.kt)("h4",{id:"step-3-deploy-the-smart-contract"},"Step 3: Deploy the Smart Contract"),(0,o.kt)("p",null,"Now that your smart contract is compiled and ready, let's deploy it to the Massa Buildnet.\nYou first need some Buildnet MAS in your wallet that you can request from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/build/networks-faucets/public-networks"},"faucet"),".\nYou can then run the following command in your project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run deploy\n")),(0,o.kt)("p",null,"Upon successful execution, the console should display the operation id that you can use to track the deployment of your smart contract."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"After deployment, an event will be displayed in the console. This event contains the address of your deployed smart contract and the event message set in the constructor function."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Contract deployed at: AS1v3HJroUxyUYzErpnbYCx9GoRNWysRgwM9h27yfNe4WUFvhctg\n")),(0,o.kt)("p",{parentName:"admonition"},"Keep the address of your deployed smart contract handy. You'll need it later.")),(0,o.kt)("h2",{id:"the-frontend"},"The Frontend"),(0,o.kt)("p",null,"Now that our smart contract is deployed, let's move on to the front end of your dApp. We'll use Vite with React and TypeScript to build a user interface that will interact with our deployed smart contract on the Massa blockchain. It will fetch the greeting message from the contract storage and display it to the user.\nSounds fun, doesn't it? Let's get started!"),(0,o.kt)("h3",{id:"setting-up-your-project-1"},"Setting Up Your Project"),(0,o.kt)("p",null,"To set up your frontend project, follow these steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1: Clone the Massa Vite boilerplate"))),(0,o.kt)("p",null,"First, open your terminal, navigate to your desired directory, and execute the following command to create a new Vite project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx degit massalabs/react-boilerplate my-massa-dapp\ncd my-massa-dapp\nnpm install\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The first command use degit to clone the Massa Vite boilerplate repository into a new ungited folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"my-massa-dapp"),". You can replace ",(0,o.kt)("inlineCode",{parentName:"p"},"my-massa-dapp")," with your preferred project name. The project files are directly downloaded from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/massalabs/react-boilerplate"},"https://github.com/massalabs/react-boilerplate"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2: Start building"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This boilerplate comes with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa-web3"},"Massa Web3 package")," installed. This package enables our front end to interact with the Massa blockchain. If you are familiar with the EVM ecosystem, ",(0,o.kt)("inlineCode",{parentName:"p"},"massa-web3")," would be the equivalent of ",(0,o.kt)("inlineCode",{parentName:"p"},"web3")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ethers")," librairies, but for the Massa blockchain. Here's how to install it:")),(0,o.kt)("p",null,"Now that we have our project installed, let's begin building the front end of our dApp."),(0,o.kt)("p",null,"Navigate to the src folder and locate the ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," file serves as the main entry point for your application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { bytesToStr, JsonRPCClient } from "@massalabs/massa-web3";\nimport { useEffect, useState } from "react";\nimport { MassaLogo } from "@massalabs/react-ui-kit";\nimport \'./App.css\';\n\nconst sc_addr = "SC_ADDRESS"; // TODO Update with your deployed contract address\n\n/**\n * The key used to store the greeting in the smart contract\n */\nconst GREETING_KEY = "greeting_key";\n\n/**\n * App component that handles interactions with a Massa smart contract\n * @returns The rendered component\n */\nfunction App() {\n\n  const [greeting, setGreeting] = useState<string | null>(null);\n\n    /**\n   * Initialize the web3 client\n   */\n  const client = JsonRPCClient.buildnet()\n\n  /**\n   * Fetch the greeting when the web3 client is initialized\n   */\n  useEffect(() => {\n    getGreeting();\n  });\n\n  /**\n   * Function to get the current greeting from the smart contract\n   */\n  async function getGreeting() {\n    if (client) {\n      const dataStoreVal = await client.getDatastoreEntry(GREETING_KEY, sc_addr, false)\n      const greetingDecoded = bytesToStr(dataStoreVal);\n      setGreeting(greetingDecoded);\n    }\n  }\n\n  return (\n    <>\n    <div>\n     <MassaLogo className="logo" size={100}/>\n     <h2>Greeting message:</h2>\n     <h1>{greeting}</h1>\n     </div>\n    </>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"SC_ADDRESS")," with your own smart contract address.")),(0,o.kt)("h3",{id:"understanding-the-code"},"Understanding the Code"),(0,o.kt)("p",null,"Our code might seem like a mouthful at first, but let's break it down into smaller, digestible parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Setting Up the Client"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"  const client = JsonRPCClient.buildnet()\n")),(0,o.kt)("p",null,"In order to interact with the blockchain, our front end application is going to need a client. A client is a piece of software that can be used to interact with a service; in our case the service is the Massa blockchain and we will use the client's methods to interact with our smart contract. "),(0,o.kt)("p",null,"In the code above, we are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonRPCClient.buildnet()")," method to initialize our client using public buildnet RPC."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The buildnet is a test network that is used to test smart contracts before deploying them to the mainnet. It is similar to the Ethereum Sepolia network. You can learn more about Massa networks ",(0,o.kt)("a",{parentName:"p",href:"/docs/build/networks-faucets/public-networks"},"here"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Retrieving the Greeting"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"  async function getGreeting() {\n    if (client) {\n      const dataStoreVal = await client.getDatastoreEntry(GREETING_KEY, sc_addr, false)\n      const greetingDecoded = bytesToStr(dataStoreVal);\n      setGreeting(greetingDecoded);\n    }\n  }\n")),(0,o.kt)("p",null,'In the code above, we are retrieving the "Hello, World!" greeting message by directly reading the smart contract\'s storage. '),(0,o.kt)("p",null,"To do so, we are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"getDatastoreEntry"),' method.\nIn our case, the address of the smart contract is the one we got during contract deployment. The key is the string "greeting_key" ',(0,o.kt)("a",{parentName:"p",href:"#step-1-writing-the-smart-contract"},"that we used to store the greeting message in the smart contract's storage"),".\nWe retrieve the current greeting from the smart contract's storage and decode it using the ",(0,o.kt)("inlineCode",{parentName:"p"},"bytesToStr")," function. Finally, we set the greeting to the ",(0,o.kt)("inlineCode",{parentName:"p"},"greeting")," state variable using the ",(0,o.kt)("inlineCode",{parentName:"p"},"setGreeting")," function."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"}," The storage of the smart contract is a key value store that stores data in bytes. Thus, we need to decode the bytes returned by the smart contract to get the actual greeting message. That is why we have to use massa-web3 ",(0,o.kt)("inlineCode",{parentName:"p"},"bytesToStr")," function.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User Interface"))),(0,o.kt)("p",null,"The user interface consists of a centered text display that shows the current greeting fetched from your smart contract's storage."),(0,o.kt)("h2",{id:"testing-your-application"},"Testing your application"),(0,o.kt)("p",null,"Finally, let's start our application and perform some basic user acceptance testing!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open your web browser and navigate to ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:5173"},"http://localhost:5173")),(0,o.kt)("li",{parentName:"ol"},'Here, you should see a greeting that says "Hello, World!" This is the message that was set in your smart contract.'),(0,o.kt)("li",{parentName:"ol"},"If you're able to see this greeting, your dApp is functioning correctly.")),(0,o.kt)("p",null,"\ud83c\udf89 Congratulations on building and testing your first dApp!"),(0,o.kt)("p",null,"Remember, Rome wasn't built in a day, and neither are amazing dApps! Keep learning!"),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Congratulations on writing and testing your first dApp using the Massa blockchain! You've taken a crucial step in your blockchain development journey."),(0,o.kt)("p",null,"There's always more to learn. To continue exploring and expanding your knowledge, you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Review more detailed guides on ",(0,o.kt)("a",{parentName:"li",href:"/docs/build/smart-contract/intro"},"smart contract development"),"."),(0,o.kt)("li",{parentName:"ul"},"Check out more ",(0,o.kt)("a",{parentName:"li",href:"/docs/tutorial/home"},"complex examples")," of dApps built on Massa.")))}u.isMDXComponent=!0}}]);