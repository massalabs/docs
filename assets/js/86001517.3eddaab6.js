"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[2914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=d(n),c=o,m=h["".concat(s,".").concat(c)]||h[c]||p[c]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={id:"faq",sidebar_label:"Frequently Asked Questions"},i="Frequently Asked Questions",l={unversionedId:"node/faq",id:"node/faq",title:"Frequently Asked Questions",description:"General questions",source:"@site/docs/node/faq.mdx",sourceDirName:"node",slug:"/node/faq",permalink:"/docs/node/faq",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/node/faq.mdx",tags:[],version:"current",lastUpdatedBy:"Leo-Besancon",lastUpdatedAt:1737480666,formattedLastUpdatedAt:"Jan 21, 2025",frontMatter:{id:"faq",sidebar_label:"Frequently Asked Questions"},sidebar:"nodeSidebar",previous:{title:"Updating a node",permalink:"/docs/node/update"},next:{title:"Tutorials and community resources",permalink:"/docs/node/community-resources"}},s={},d=[{value:"General questions",id:"general-questions",level:2},{value:"What are the hardware requirements?",id:"what-are-the-hardware-requirements",level:3},{value:"Can it run on a VPS?",id:"can-it-run-on-a-vps",level:3},{value:"How to keep the node running when I close the terminal?",id:"how-to-keep-the-node-running-when-i-close-the-terminal",level:3},{value:"What ports does Massa use?",id:"what-ports-does-massa-use",level:3},{value:"How to restart the Node?",id:"how-to-restart-the-node",level:3},{value:"How secure are the keypairs?",id:"how-secure-are-the-keypairs",level:3},{value:"Balance and wallet",id:"balance-and-wallet",level:2},{value:"How to migrate from one server to another without losing staked amounts and tokens?",id:"how-to-migrate-from-one-server-to-another-without-losing-staked-amounts-and-tokens",level:3},{value:"Why are the balances in the client and the explorer different?",id:"why-are-the-balances-in-the-client-and-the-explorer-different",level:3},{value:"Where are the wallet files located?",id:"where-are-the-wallet-files-located",level:3},{value:"Rolls and staking",id:"rolls-and-staking",level:2},{value:"My rolls disappeared/were sold automatically",id:"my-rolls-disappearedwere-sold-automatically",level:3},{value:"Why are rolls automatically sold? Is it some kind of penalty/slashing?",id:"why-are-rolls-automatically-sold-is-it-some-kind-of-penaltyslashing",level:3},{value:"Do I need to register the keys after subsequent purchases of ROLLs, or do they get staked automatically?",id:"do-i-need-to-register-the-keys-after-subsequent-purchases-of-rolls-or-do-they-get-staked-automatically",level:3},{value:"I can buy, send, sell ROLLs and coins without fees. When should I increase the fee &gt;0?",id:"i-can-buy-send-sell-rolls-and-coins-without-fees-when-should-i-increase-the-fee-0",level:3},{value:"I am staking ROLLs but my wallet info doesn&#39;t change. When do I get my first staking rewards?",id:"i-am-staking-rolls-but-my-wallet-info-doesnt-change-when-do-i-get-my-first-staking-rewards",level:3},{value:"Common issues",id:"common-issues",level:2},{value:"Ping too high issue",id:"ping-too-high-issue",level:3},{value:"API can&#39;t start",id:"api-cant-start",level:3},{value:"Raspberry Pi problem &quot;Thread &#39;main&#39; panicked&quot;",id:"raspberry-pi-problem-thread-main-panicked",level:3},{value:"Disable IPV6 support",id:"disable-ipv6-support",level:3},{value:"Bootstrapping and error message &quot;client &amp; server clocks differ too much&quot;",id:"bootstrapping-and-error-message-client--server-clocks-differ-too-much",level:3}],u={toc:d},h="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("h2",{id:"general-questions"},"General questions"),(0,o.kt)("h3",{id:"what-are-the-hardware-requirements"},"What are the hardware requirements?"),(0,o.kt)("p",null,"The philosophy of Massa is to be as decentralized as possible. To fulfill this goal, we aim to have low hardware\nrequirements so that many people can run nodes. On the other hand, some minimal hardware is required to be able\nto process enough operations per second as per our scalability goals. We plan that the mainnet fits on a desktop\ncomputer with 8 cores, 16 GB RAM, 1TB disk and a decent home internet connection."),(0,o.kt)("h3",{id:"can-it-run-on-a-vps"},"Can it run on a VPS?"),(0,o.kt)("p",null,"You can use a VPS to run a node. The pros of VPS are that they have high availability and are easy to configure. Cons\nare that nodes running on a VPS can lead to centralization if a lot of nodes running on the same provider (e.g. AWS)."),(0,o.kt)("h3",{id:"how-to-keep-the-node-running-when-i-close-the-terminal"},"How to keep the node running when I close the terminal?"),(0,o.kt)("p",null,"You can run the following command in the terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nohup cargo run --release &\n")),(0,o.kt)("p",null,"the output will go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"nohup.out")," file. You will be able to close the terminal safely then. To kill the app you'll\nhave to use ",(0,o.kt)("inlineCode",{parentName:"p"},"pkill -f massa-node"),". You can also use ",(0,o.kt)("a",{parentName:"p",href:"https://help.ubuntu.com/community/Screen"},"screen")," or\n",(0,o.kt)("a",{parentName:"p",href:"http://manpages.ubuntu.com/manpages/cosmic/man1/tmux.1.html"},"tmux")," for example."),(0,o.kt)("h3",{id:"what-ports-does-massa-use"},"What ports does Massa use?"),(0,o.kt)("p",null,"By default, Massa uses TCP port 31244 for protocol communication with other nodes, and 31245 to bootstrap other nodes.\nMassa also uses TCP port 33034 for the new private API, 33035 for the new public API (API v2), 33037 for public GRPC and 33038 for private GRPC access."),(0,o.kt)("h3",{id:"how-to-restart-the-node"},"How to restart the Node?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ubuntu ",(0,o.kt)("inlineCode",{parentName:"li"},"cargo run --release |& tee logs.txt")),(0,o.kt)("li",{parentName:"ul"},"Windows: ctrl + c for killing the process and ",(0,o.kt)("inlineCode",{parentName:"li"},"cargo run --release")),(0,o.kt)("li",{parentName:"ul"},"Mac Os ",(0,o.kt)("inlineCode",{parentName:"li"},"cargo run --release > logs.txt 2>&1"))),(0,o.kt)("h3",{id:"how-secure-are-the-keypairs"},"How secure are the keypairs?"),(0,o.kt)("p",null,"The staking wallet in the node folder and the wallet file in the client are encrypted."),(0,o.kt)("p",null,"Note that nodes don't know or trust each other, and they never exchange sensitive information, therefore cryptography is\nnot required at that level. A handshake is performed at the connection with another peer. We sign random bytes that the\npeer sent us with our keypair, and same on the other side. And data that is sent after that is signed by its creator,\nnot the node that is sending it to us. During the bootstrap, the handshake is asymmetric. We know the public key of the\nbootstrap node and we expect signed messages from it, but we do not communicate our public key, nor we sign the only\nmessage we send (just random bytes)."),(0,o.kt)("h2",{id:"balance-and-wallet"},"Balance and wallet"),(0,o.kt)("h3",{id:"how-to-migrate-from-one-server-to-another-without-losing-staked-amounts-and-tokens"},"How to migrate from one server to another without losing staked amounts and tokens?"),(0,o.kt)("p",null,"You need to back up the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"massa-client/wallets")," and migrate it to the massa-client folder on your new server. You also need to\nbackup and migrate the ",(0,o.kt)("inlineCode",{parentName:"p"},"node_privkey.key")," file in massa-node/config to keep your connectivity stats."),(0,o.kt)("p",null,"If you have rolls, you also need to register the key used to buy rolls to start staking again."),(0,o.kt)("p",null,"Note: You should never stake with the same address on two different nodes, don't forget to stop the node on the old server before\nstaking on your new server."),(0,o.kt)("h3",{id:"why-are-the-balances-in-the-client-and-the-explorer-different"},"Why are the balances in the client and the explorer different?"),(0,o.kt)("p",null,"It may mean that your node is desynchronized. Check that your node is running, that the computer meets hardware\nrequirements, and try restarting your node."),(0,o.kt)("h3",{id:"where-are-the-wallet-files-located"},"Where are the wallet files located?"),(0,o.kt)("p",null,"By default, in the massa-client/wallets directory."),(0,o.kt)("h2",{id:"rolls-and-staking"},"Rolls and staking"),(0,o.kt)("h3",{id:"my-rolls-disappearedwere-sold-automatically"},"My rolls disappeared/were sold automatically"),(0,o.kt)("p",null,"The most likely reason is that you did not produce some blocks when selected to do so. Most frequent reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node not running 100% of the time during which you had active_rolls ",">"," 0"),(0,o.kt)("li",{parentName:"ul"},"Node not being properly connected to the network 100% of the time during which you had active_rolls ",">"," 0"),(0,o.kt)("li",{parentName:"ul"},"Node being desynchronized (which can be caused by temporary overload if the specs are insufficient or if other\nprograms are using resources on the computer or because of internet connection problems) at some point while you had\nactive_rolls ",">"," 0"),(0,o.kt)("li",{parentName:"ul"},"The node does not have the right registered staking keys (type ",(0,o.kt)("inlineCode",{parentName:"li"},"node_get_staking_addresses")," in the client to verify that they\nmatch the addresses in your wallet_info that have active rolls) 100% of the time during which you had active_rolls ",">","\n0"),(0,o.kt)("li",{parentName:"ul"},"Some hosting providers have Half-duplex connection setting. Contact hosting support and ask to switch you to\nfull-duplex.")),(0,o.kt)("p",null,"Diagnostic process:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"make sure the node is running on a computer that matches hardware requirements and that no other software is hogging\nresources"),(0,o.kt)("li",{parentName:"ul"},"type ",(0,o.kt)("inlineCode",{parentName:"li"},"wallet_info")," and make sure that at least one address has active rolls > 0",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"if there are no addresses listed, create a new one by calling ",(0,o.kt)("inlineCode",{parentName:"li"},"wallet_generate_private_key")," and try the diagnostic\nprocess again"),(0,o.kt)("li",{parentName:"ul"},"if none of the listed addresses has non-zero active rolls, perform a new roll buy (see tutorials) and try the\ndiagnostic process again"))),(0,o.kt)("li",{parentName:"ul"},"type ",(0,o.kt)("inlineCode",{parentName:"li"},"node_get_staking_addresses")," in the client:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"if the list is empty or if none of the addresses listed matches addresses that have active rolls in ",(0,o.kt)("inlineCode",{parentName:"li"},"wallet_info"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"call ",(0,o.kt)("inlineCode",{parentName:"li"},"node_start_staking")," with the secret key matching an address that has non-zero active rolls in\n",(0,o.kt)("inlineCode",{parentName:"li"},"wallet_get_secret_key <Address1> <Address2>")))))),(0,o.kt)("li",{parentName:"ul"},"check your address with the online explorer: if there is a mismatch between the number of active rolls displayed in\nthe online interface and what is returned by ",(0,o.kt)("inlineCode",{parentName:"li"},"wallet_info"),", it might be that your node is desynchronized. Try\nrestarting it.")),(0,o.kt)("h3",{id:"why-are-rolls-automatically-sold-is-it-some-kind-of-penaltyslashing"},"Why are rolls automatically sold? Is it some kind of penalty/slashing?"),(0,o.kt)("p",null,"It is not slashing because the funds are reimbursed fully. It's more like an implicit roll sell."),(0,o.kt)("p",null,"The point is the following: for the network to be healthy, everyone with active rolls needs to produce blocks whenever\nthey are selected to do so. If an address misses more than 70% of its block creation opportunities during cycle C, all\nits rolls are implicitly sold at the end of cycle C+3."),(0,o.kt)("h3",{id:"do-i-need-to-register-the-keys-after-subsequent-purchases-of-rolls-or-do-they-get-staked-automatically"},"Do I need to register the keys after subsequent purchases of ROLLs, or do they get staked automatically?"),(0,o.kt)("p",null,"For now, they don't stake automatically. In the future, we will add a feature allowing auto compounding. That being\nsaid, some people appear to have done that very early in the project. Feel free to ask on the\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/massa"},"Discord")," server :)."),(0,o.kt)("h3",{id:"i-can-buy-send-sell-rolls-and-coins-without-fees-when-should-i-increase-the-fee-0"},"I can buy, send, sell ROLLs and coins without fees. When should I increase the fee ",">","0?"),(0,o.kt)("p",null,"For the moment, there are only a few transactions at the same time and so most created blocks are empty. This means that\nyour operation will be added to a block even if the fee is zero. We will communicate if you need to increase the fee."),(0,o.kt)("h3",{id:"i-am-staking-rolls-but-my-wallet-info-doesnt-change-when-do-i-get-my-first-staking-rewards"},"I am staking ROLLs but my wallet info doesn't change. When do I get my first staking rewards?"),(0,o.kt)("p",null,"You need to wait for your rolls to become active (around 1h45), then depending on the number of rolls you have, you\nmight want to wait for more to be selected for block/endorsement production."),(0,o.kt)("h2",{id:"common-issues"},"Common issues"),(0,o.kt)("h3",{id:"ping-too-high-issue"},"Ping too high issue"),(0,o.kt)("p",null,'Check the quality of your internet connection. Try increasing the "max_ping" setting in your config file:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"edit file ",(0,o.kt)("inlineCode",{parentName:"li"},"massa-node/config/config.toml")," (create if it is absent) with the following content:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},"[bootstrap]\nmax_ping = 10000 # try 10000 for example\n")),(0,o.kt)("h3",{id:"api-cant-start"},"API can't start"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If your API can't start, e.g. with ",(0,o.kt)("inlineCode",{parentName:"li"},'could not start API controller: ServerError(hyper::Error(Listen, Os { code: 98,\nkind: AddrInUse, message: "Address already in use" }))'),", it's probably because the default API ports 33034/33035 are\nalready in use on your computer. You should change the port in the config files, both in the API and Client:"),(0,o.kt)("li",{parentName:"ul"},"create/edit file ",(0,o.kt)("inlineCode",{parentName:"li"},"massa-node/config/config.toml")," to change the port used by the API:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[api]\nbind_private = "127.0.0.1:33034" # change port here from 33034 to something else\nbind_public = "0.0.0.0:33035" # change port here from 33035 to something else\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create/edit file ",(0,o.kt)("inlineCode",{parentName:"li"},"massa-client/config/config.toml")," and put the same port:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},"[default_node]\nip = \"127.0.0.1\"\nprivate_port = 33034 # change port here from 33034 to the port chosen in node's bind_private\npublic_port = 33035 # change port here from 33035 to the port chosen in node's bind_public\n")),(0,o.kt)("h3",{id:"raspberry-pi-problem-thread-main-panicked"},"Raspberry Pi problem \"Thread 'main' panicked\""),(0,o.kt)("p",null,"If you encountered an error message such as: ",(0,o.kt)("inlineCode",{parentName:"p"},"Thread 'main' panicked at 'called Option::unwrap() on a None value',\nmodels/src/hasher.rs:35:46"),", this is a known\nproblem on older Raspberry Pi, especially with Raspbian. Try installing Debian."),(0,o.kt)("p",null,"Please note, running a Massa node on a Raspberry Pi is ambitious and will probably not work that well. We don't expect\nraspberry to be enough powerful to run on the mainnet."),(0,o.kt)("h3",{id:"disable-ipv6-support"},"Disable IPV6 support"),(0,o.kt)("p",null,"If your OS, virtual machine or provider does not support IPV6, try disabling IPV6 support on your Massa node."),(0,o.kt)("p",null,"To do this, edit (or create if absent) the file ",(0,o.kt)("inlineCode",{parentName:"p"},"massa-node/config/config.toml")," with the following contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[network]\n    bind = "0.0.0.0:31244"\n\n[bootstrap]\n    bind = "0.0.0.0:31245"\n')),(0,o.kt)("p",null,"then restart your node."),(0,o.kt)("h3",{id:"bootstrapping-and-error-message-client--server-clocks-differ-too-much"},'Bootstrapping and error message "client & server clocks differ too much"'),(0,o.kt)("p",null,"The clock of your server is not synchronized."),(0,o.kt)("p",null,"On linux system using systemd, this can be checked using:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"timedatectl")),(0,o.kt)("p",null,"Check the line starting with 'System clock synchronized':"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Local time: Wed 2018-06-13 12:38:51 UTC\nUniversal time: Wed 2018-06-13 12:38:51 UTC\nRTC time: Wed 2018-06-13 12:38:51\nTime zone: ETC/UTC (UTC, +0000)\nSystem clock synchronized: no\nsystemd-timesyncd.service active: yes\nRTC in local TZ: no")),(0,o.kt)("p",null,"To fix this, edit the following file:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sudo nano /etc/systemd/timesyncd.conf")),(0,o.kt)("p",null,"Edit the NTP Server detail (from ",(0,o.kt)("a",{parentName:"p",href:"https://www.ntppool.org/zone/@"},"https://www.ntppool.org/zone/@"),"):"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"[Time]\nNTP=0.ch.pool.ntp.org 1.ch.pool.ntp.org\nFallbackNTP=0.north-america.pool.ntp.org 1.north-america.pool.ntp.org")),(0,o.kt)("p",null,"Then:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sudo systemctl daemon-reload\nsudo timedatectl set-ntp off\nsudo timedatectl set-ntp on")),(0,o.kt)("p",null,"and you can check it with:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"timedatectl status")))}p.isMDXComponent=!0}}]);