"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[2395],{7615:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=t(4848),l=t(8453);const s={id:"wallet",sidebar_label:"Creating a wallet"},i="Creating a Massa wallet",r={id:"node/wallet",title:"Creating a Massa wallet",description:"In this tutorial you will learn how to create or import a Massa wallet.",source:"@site/docs/node/wallet.mdx",sourceDirName:"node",slug:"/node/wallet",permalink:"/docs/node/wallet",draft:!1,unlisted:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/node/wallet.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1723551924e3,frontMatter:{id:"wallet",sidebar_label:"Creating a wallet"},sidebar:"nodeSidebar",previous:{title:"Running a node",permalink:"/docs/node/run"},next:{title:"Staking",permalink:"/docs/node/stake"}},o={},d=[{value:"From the command line interface",id:"from-the-command-line-interface",level:2},{value:"If your client is not running",id:"if-your-client-is-not-running",level:3},{value:"If your client is running",id:"if-your-client-is-running",level:3},{value:"If you have saved your secret/private key",id:"if-you-have-saved-your-secretprivate-key",level:2},{value:"If you have saved an encrypted wallet file",id:"if-you-have-saved-an-encrypted-wallet-file",level:2},{value:"What next ?",id:"what-next-",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"creating-a-massa-wallet",children:"Creating a Massa wallet"})}),"\n",(0,a.jsx)(n.p,{children:"In this tutorial you will learn how to create or import a Massa wallet."}),"\n",(0,a.jsx)(n.p,{children:"A wallet is a file that contains a list of keypairs. Like other blockchains, Massa uses elliptic curve cryptography\n(specifically ed25519) to secure your coins. It means that your secret key is your password allowing you to spend coins\nthat were sent to your address."}),"\n",(0,a.jsx)(n.h2,{id:"from-the-command-line-interface",children:"From the command line interface"}),"\n",(0,a.jsx)(n.h3,{id:"if-your-client-is-not-running",children:"If your client is not running"}),"\n",(0,a.jsx)(n.p,{children:"Go to the client folder:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"cd massa/massa-client/\n"})}),"\n",(0,a.jsx)(n.p,{children:"Start the interactive client and load a wallet file:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"cargo run\n"})}),"\n",(0,a.jsxs)(n.p,{children:["It will ask your wallet password in order to load the ",(0,a.jsx)(n.code,{children:"wallet.dat"})," file. If the file does not exist, you will be asked\nto set a password and it will be created."]}),"\n",(0,a.jsx)(n.h3,{id:"if-your-client-is-running",children:"If your client is running"}),"\n",(0,a.jsx)(n.p,{children:"Now you can either generate a new keypair (and associated address):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"wallet_generate_secret_key\n"})}),"\n",(0,a.jsx)(n.p,{children:"The list of addresses of your wallet can be accessed with:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"wallet_info\n"})}),"\n",(0,a.jsx)(n.p,{children:"Access public key(s) of addresse(s):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"wallet_get_public_key <Address1> <Address2>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Access secret key(s) of addresse(s):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"wallet_get_secret_key <Address1> <Address2>\n"})}),"\n",(0,a.jsx)(n.h1,{id:"importing-your-wallet-in-the-client",children:"Importing your wallet in the client"}),"\n",(0,a.jsx)(n.p,{children:"In order to import a wallet into your client, the procedure depends on how you have saved your wallet in the first place."}),"\n",(0,a.jsx)(n.h2,{id:"if-you-have-saved-your-secretprivate-key",children:"If you have saved your secret/private key"}),"\n",(0,a.jsx)(n.p,{children:"Then you can import it in the client using the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"wallet_add_secret_keys <your_secret_key>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"if-you-have-saved-an-encrypted-wallet-file",children:"If you have saved an encrypted wallet file"}),"\n",(0,a.jsxs)(n.p,{children:["Then you can import it in the client by placing the corresponding ",(0,a.jsx)(n.code,{children:".yaml"})," file in the ",(0,a.jsx)(n.code,{children:"massa/massa-client/wallets"})," folder.\nMake sure it is the only wallet in the folder."]}),"\n",(0,a.jsx)(n.h2,{id:"what-next-",children:"What next ?"}),"\n",(0,a.jsx)(n.p,{children:"Congratulations, you are now running a node and have access to a wallet.\nBut your node is still not staking, so it is not producing blocks nor receiving rewards."}),"\n",(0,a.jsxs)(n.p,{children:["It is time to activate staking on your node. Follow the tutorial: ",(0,a.jsx)(n.a,{href:"/docs/node/stake",children:"Staking with a node"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(6540);const l={},s=a.createContext(l);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);