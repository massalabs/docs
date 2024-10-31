"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[1028],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,u=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return n?a.createElement(u,s(s({ref:t},p),{},{components:n})):a.createElement(u,s({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:i,s[1]=r;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={id:"tokenomics",sidebar_label:"Tokenomics"},s="Massa Tokenomics",r={unversionedId:"learn/tokenomics",id:"learn/tokenomics",title:"Massa Tokenomics",description:"Introduction",source:"@site/docs/learn/tokenomics.mdx",sourceDirName:"learn",slug:"/learn/tokenomics",permalink:"/docs/learn/tokenomics",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/learn/tokenomics.mdx",tags:[],version:"current",lastUpdatedBy:"Peterjah",lastUpdatedAt:1730365623,formattedLastUpdatedAt:"Oct 31, 2024",frontMatter:{id:"tokenomics",sidebar_label:"Tokenomics"},sidebar:"learnSidebar",previous:{title:"Consensus quality initiatives",permalink:"/docs/learn/architecture/consensus-quality"},next:{title:"Bootstrapping in Massa",permalink:"/docs/learn/bootstrap"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Initial Coin Distribution",id:"initial-coin-distribution",level:2},{value:"Nakamoto Coefficient",id:"nakamoto-coefficient",level:2},{value:"Genesis Ledger",id:"genesis-ledger",level:2},{value:"Expected Unlocked Supply",id:"expected-unlocked-supply",level:2},{value:"Staking Rewards",id:"staking-rewards",level:2},{value:"Example: How to compute my expected staking rewards ?",id:"example-how-to-compute-my-expected-staking-rewards-",level:3}],p={toc:d},c="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"massa-tokenomics"},"Massa Tokenomics"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This page reproduces most of the whitepaper's Tokenomics section, with additional details and updates.")),(0,i.kt)("p",null,"Massa, true to its values, has implemented a unique tokenomics model that emphasizes fairness and decentralization. This model ensures that the Massa token is distributed widely among the community, reducing the risk of centralization that can result in unfair voting practices, price manipulation, and security issues:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unfairly-distributed voting"),": When a small number of entities control a significant portion of a blockchain's tokens, they can disproportionately influence governance decisions, undermining the democratic principles that underpin decentralized systems."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Price manipulation"),": Token centralization can also lead to price manipulation, as large holders can exert undue influence on the market, creating artificial fluctuations that distort the true value of the token."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Security issues"),": A centralized token distribution can lead to security vulnerabilities, as malicious actors can target the limited number of entities controlling a large portion of the token supply. It also generates centralization in block production, leading to protocol-level risks.")),(0,i.kt)("p",null,"Massa is committed to maintaining the highest standards of decentralization, with the goal to achieve a Nakamoto coefficient of over ",(0,i.kt)("inlineCode",{parentName:"p"},"1,000"),", ensuring that control and decision-making power are widely distributed across the community. Achieving this not only requires efforts on the technical and legal design, but also on the coin distribution. On this aspect, we crafted three main particularities compared to other L1 blockchain coin distributions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Less tokens for the company/founders"),": Massa Labs and founders are allocated ",(0,i.kt)("inlineCode",{parentName:"li"},"12%")," of the total supply."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Less tokens for insiders"),": The maximum number of tokens bought per entity in all ourtoken sales is relatively small. For instance, the cap was ",(0,i.kt)("inlineCode",{parentName:"li"},"1%")," of the total supply in the\nseed sale, allowing a record number of ",(0,i.kt)("inlineCode",{parentName:"li"},"100")," backers in such a sale. Also, the supply allocated to these private sales is only ",(0,i.kt)("inlineCode",{parentName:"li"},"16%")," in total."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"More tokens for future builders and stakers"),": the Decentralization Program sets aside ",(0,i.kt)("inlineCode",{parentName:"li"},"30%")," of the supply to grow the future builders and stakers community, with the aim to achieve full decentralization in a transparent way. ")),(0,i.kt)("p",null,"These steps together improve the token decentralization, limit the influence of early insiders and VCs, and limit the formation of whales whose only remaining option is to buy on the market."),(0,i.kt)("h2",{id:"initial-coin-distribution"},"Initial Coin Distribution"),(0,i.kt)("p",null,"The total initial token supply is ",(0,i.kt)("inlineCode",{parentName:"p"},"1,000,000,000")," Massa tokens. These initial tokens are created in the genesis ledger. They are distributed as follows."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4460).Z,width:"1394",height:"896"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Massa Labs & Founders"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"12%"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"120,000,000")," tokens. This allocation goes to the team, the founders and a reserve for Massa Labs, to ensure that the main development team is invested in the project's long-term success. These coins are vested linearly for ",(0,i.kt)("inlineCode",{parentName:"li"},"60")," months, with a ",(0,i.kt)("inlineCode",{parentName:"li"},"5%")," initial unlock."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Private Sales"),": Up to ",(0,i.kt)("inlineCode",{parentName:"li"},"16%"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"160,000,000")," tokens. These coins are vested linearly for ",(0,i.kt)("inlineCode",{parentName:"li"},"24")," months, with a ",(0,i.kt)("inlineCode",{parentName:"li"},"30%")," initial unlock."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Community and Ecosystem"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"31%"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"310,000,000")," tokens. This allocation is managed by the Massa Foundation. Its purpose is to foster the growth of the Massa community and ecosystem in the long term through grants, marketing actions, partnerships and other programs. These coins are vested linearly for ",(0,i.kt)("inlineCode",{parentName:"li"},"60")," months, with a ",(0,i.kt)("inlineCode",{parentName:"li"},"5%")," initial unlock."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Testnet Incentive Program"),": up to ",(0,i.kt)("inlineCode",{parentName:"li"},"8%"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"80,000,000")," tokens. The Testnet Incentive Program rewards the thousands of node runners who successfully participated in the testnet. These coins are vested linearly for ",(0,i.kt)("inlineCode",{parentName:"li"},"24")," months, with a ",(0,i.kt)("inlineCode",{parentName:"li"},"30%")," initial unlock."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Public Sale"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"3%"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"30,000,000")," tokens. These coins are going to be vested for some time, cf future updates."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Decentralization Program"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"30%"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"300,000,000")," tokens. In the initial ledger, these coins are vested for ",(0,i.kt)("inlineCode",{parentName:"li"},"60")," months with a ",(0,i.kt)("inlineCode",{parentName:"li"},"24"),"-month cliff and then ",(0,i.kt)("inlineCode",{parentName:"li"},"36")," months linear. Tokens not distributed after ",(0,i.kt)("inlineCode",{parentName:"li"},"96")," months will be burnt. They are composed of:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"100k-nodes Program"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"20%"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"200,000,000")," tokens. The goal of this pool is to grow the number of individual stakers participating in the security of the network and in the core governance. Compared to the coin distribution of other L1s biased towards insiders who later sell large chunks in opaque deals or on the market, this alternative mechanism provides more transparency and decentralization. This pool, managed by the Foundation, is dedicated to be bought by new node runners with a low cap per person and at a slow pace between ",(0,i.kt)("inlineCode",{parentName:"li"},"2")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," years post-mainnet, with vesting."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"2k-builders Program"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"10%"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"100,000,000")," tokens. The goal of this program is to grow a larger builder community with many grants, involving the Massa holders in the decisions to give grants. These grants have a smaller size than with the main grant program: they are capped at ",(0,i.kt)("inlineCode",{parentName:"li"},"50k")," tokens per project. ")),(0,i.kt)("h2",{id:"nakamoto-coefficient"},"Nakamoto Coefficient"),(0,i.kt)("p",null,"With this data, we can compute the Nakamoto coefficient of the coin after full distribution. The Nakamoto coefficient is computed as the minimum number of independent entities/persons required to reach ",(0,i.kt)("inlineCode",{parentName:"p"},"50%")," of the total supply. We take the most concentrated categories and count the expected number of entities/people until we reach ",(0,i.kt)("inlineCode",{parentName:"p"},"50%"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Massa Labs: ",(0,i.kt)("inlineCode",{parentName:"li"},"12%"),", at least ",(0,i.kt)("inlineCode",{parentName:"li"},"100")," people"),(0,i.kt)("li",{parentName:"ul"},"Private sales: ",(0,i.kt)("inlineCode",{parentName:"li"},"16%"),", at least ",(0,i.kt)("inlineCode",{parentName:"li"},"100")," people"),(0,i.kt)("li",{parentName:"ul"},"Community and Ecosystem: expecting ",(0,i.kt)("inlineCode",{parentName:"li"},"1,000+")," people in the first ",(0,i.kt)("inlineCode",{parentName:"li"},"22%"),".")),(0,i.kt)("p",null,"Thanks to the fair distribution with smaller pools for insiders and larger pools dedicated to the community, the Nakamoto coefficient of Massa aims to be well over ",(0,i.kt)("inlineCode",{parentName:"p"},"1,000")," on the long-term when all the categories are distributed. On the short-term, only parts of these categories will be effectively distributed. The next section describes the distribution right on mainnet launch."),(0,i.kt)("h2",{id:"genesis-ledger"},"Genesis Ledger"),(0,i.kt)("p",null,"The genesis ledger is the initial distribution of coins when the network starts. Some of these coins appear as initial rolls instead of tokens (1 roll = 100 tokens) giving the ability to stake right from launch."),(0,i.kt)("p",null,"The genesis ledger files have been set up in this GitHub ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Massa-Foundation/genesis-ledger/tree/main/node_initial_setup"},"folder"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Massa-Foundation/genesis-ledger/blob/main/node_initial_setup/genesis_timestamp.json"},"genesis_timestamp.json"),": file containing the start date of the Massa mainnet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Massa-Foundation/genesis-ledger/main/node_initial_setup/initial_ledger.json"},"initial_ledger.json"),": file containing the initial unlocked coins."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Massa-Foundation/genesis-ledger/blob/main/node_initial_setup/initial_rolls.json"},"initial_rolls.json"),": file containing the initial rolls: more than ",(0,i.kt)("inlineCode",{parentName:"li"},"1,000")," node runners have registered to be initial stakers right from launch!"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Massa-Foundation/genesis-ledger/main/node_initial_setup/deferred_credits.json"},"deferred_credits.json"),": file containing all the scheduled unlocking of coins.")),(0,i.kt)("p",null,"The total number of tokens in ",(0,i.kt)("inlineCode",{parentName:"p"},"initial_ledger.json"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"initial_rolls.json")," (",(0,i.kt)("inlineCode",{parentName:"p"},"x100")," tokens per roll), and ",(0,i.kt)("inlineCode",{parentName:"p"},"deferred_credits.json")," is exactly ",(0,i.kt)("inlineCode",{parentName:"p"},"1,000,000,000"),". These files have been generated with a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Massa-Foundation/genesis-ledger/blob/main/generator.py"},"script"),", from this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Massa-Foundation/genesis-ledger/tree/main/input_listings"},"data"),", where you can find the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Massa-Foundation/genesis-ledger/blob/main/input_listings/backers.json"},"backers.json"),": backers of Massa Labs who gave their addresses in time. Backers who did not provide their addresses have their coins kept in address ",(0,i.kt)("inlineCode",{parentName:"li"},"AU1PGvG4x1rmFaYBgSNVmgpPDkWvGtNqS2Jc7BjupmVjkce8dBai")," for now."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Massa-Foundation/genesis-ledger/main/input_listings/dashboard_data.json"},"dashboard_data.json"),": here you can find participants of the dashboard campaign, ambassadors, and testnet node runners who were eligible for a reward, with corresponding coins and if they want to be initial stakers. These tokens are vested for ",(0,i.kt)("inlineCode",{parentName:"li"},"24")," months, with a ",(0,i.kt)("inlineCode",{parentName:"li"},"30%")," initial unlock, and the release is approximately once per month, with some random noise to smooth the unlockings (e.g. on month ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),", a user might get tokens released on day ",(0,i.kt)("inlineCode",{parentName:"li"},"3")," while another gets tokens on day ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Massa-Foundation/genesis-ledger/blob/main/input_listings/foundation.json"},"foundation.json"),": here are the three main addresses of the Massa Foundation. The first corresponds to the ",(0,i.kt)("inlineCode",{parentName:"li"},"310,000,000"),' tokens from category "Community and Ecosystem", from which above rewards were deducted. These tokens are vested for ',(0,i.kt)("inlineCode",{parentName:"li"},"60")," months. The second is reserved for a public sale. These tokens are unlocked for now, but they are going to move to a vested smart contract for users to claim their tokens. The third address is the decentralization program address, with ",(0,i.kt)("inlineCode",{parentName:"li"},"2")," years cliff and then ",(0,i.kt)("inlineCode",{parentName:"li"},"3")," years linear vesting."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Massa-Foundation/genesis-ledger/blob/main/input_listings/founders.json"},"founders.json")," is an allocation reserved for founders. These tokens are unlocked at genesis and will be moved just after launch to a vested smart contract where tokens will be claimable, with ",(0,i.kt)("inlineCode",{parentName:"li"},"5%")," initially unlocked and ",(0,i.kt)("inlineCode",{parentName:"li"},"95%")," vested for ",(0,i.kt)("inlineCode",{parentName:"li"},"60")," months."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Massa-Foundation/genesis-ledger/blob/main/input_listings/labs.json"},"labs.json"),". These are Massa Labs' tokens, with ",(0,i.kt)("inlineCode",{parentName:"li"},"5%")," as initial rolls to start staking right from launch, together with the community, and the other ",(0,i.kt)("inlineCode",{parentName:"li"},"95%")," vested for ",(0,i.kt)("inlineCode",{parentName:"li"},"60")," months. Massa Labs will thus start staking with ",(0,i.kt)("inlineCode",{parentName:"li"},"35,000")," rolls. This is a large proportion of the total stake at launch, but it is expected to decrease significantly in the next days and weeks after launch when all other categories will ramp up with setting up their nodes.")),(0,i.kt)("h2",{id:"expected-unlocked-supply"},"Expected Unlocked Supply"),(0,i.kt)("p",null,"Taking into account the vesting schedules of all categories, we can estimate the evolution of the unlocked supply. Note that many of these unlocked tokens will not be effectively circulating, because they will be held as reserves by Massa Labs and Massa Foundation.\nThis figure does not account for staking rewards (see next section)."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4739).Z,width:"2688",height:"1591"})),(0,i.kt)("h2",{id:"staking-rewards"},"Staking Rewards"),(0,i.kt)("p",null,"Staking is the process of running a validator node verifying the blockchain and creating blocks. In Massa as in other Proof-of-Stake blockchains, nodes are selected to create blocks based on their deposited coins \u2013their stake in the blockchain."),(0,i.kt)("p",null,"As staking improves the decentralization and security of the network, this behavior is incentivized by staking rewards: the higher the number of staked coins, the higher the number of created blocks and received rewards."),(0,i.kt)("p",null,"To improve decentralization and dedicate rewards to independent node runners, there is no delegation mechanism in Massa, and custodial staking is limited by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa/blob/main/COMMUNITY_CHARTER.md"},"community charter"),"."),(0,i.kt)("p",null,"A minimum number of coins must be deposited to be able to stake, corresponding to one roll. The number of coins in a roll is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"100"),". Users deposit coins to get a number of rolls and stake with these rolls. When they want to stop staking, they can get back their coins after a small locking period and lose the corresponding rolls. When the staking address is selected to produce a block, the node is expected to produce exactly one block."),(0,i.kt)("p",null,"If the node is offline for some reason, it misses the opportunity to produce the block and to get the reward. If the node is missing these opportunities too often, it is automatically deactivated and its rolls are sold and fully given back as coins. If the node produces more than one block in a selected slot, this is considered as bad behavior and is punished with slashing: one roll is slashed, completely lost and no coins are given back."),(0,i.kt)("p",null,"At each slot, one staking address is selected to produce a block, and in order to improve consensus speed, ",(0,i.kt)("inlineCode",{parentName:"p"},"16")," other addresses are selected to create endorsements \u2014votes about the best blocks. A maximum minted reward of ",(0,i.kt)("inlineCode",{parentName:"p"},"1.02")," tokens is distributed per slot. If there was a block in this slot, the reward is distributed as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0.06")," tokens are given to the block creator"),(0,i.kt)("li",{parentName:"ul"},"For each endorsement included in the block (up to ",(0,i.kt)("inlineCode",{parentName:"li"},"16"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0.02")," tokens are given to the block creator"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0.02")," tokens are given to the endorsement creator"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0.02")," tokens are given to the creator of the endorsed block")))),(0,i.kt)("p",null,"Block and endorsement creators also share the gas fees of all transactions included in the block, and half of the slashed coins, the other half being burnt. However, all the fees of autonomous smart contracts are burnt as they run outside blocks. "),(0,i.kt)("p",null,"There are ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," slots per second in Massa architecture, so these rewards add up to a maximum of ",(0,i.kt)("inlineCode",{parentName:"p"},"64,377,504")," newly-minted Massa tokens per year, distributed to active staking nodes. The inflation rate is therefore approximately ",(0,i.kt)("inlineCode",{parentName:"p"},"6.4%")," during the first year, and decreases each year as the total supply increases."),(0,i.kt)("p",null,"As less than the total supply is expected to be staking at any point in time, the actual return per year for active stakers will be higher than this percentage. The next figure shows the maximum inflation rate and an estimation of the annual percentage return (APR) for staking nodes over time."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1499).Z,width:"1272",height:"680"})),(0,i.kt)("h3",{id:"example-how-to-compute-my-expected-staking-rewards-"},"Example: How to compute my expected staking rewards ?"),(0,i.kt)("p",null,"Let's assume I currently have ",(0,i.kt)("inlineCode",{parentName:"p"},"20")," initial rolls from genesis, and after launch I buy ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," other rolls, that's ",(0,i.kt)("inlineCode",{parentName:"p"},"23")," rolls in total, equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"2,300")," tokens, that I currently use to stake with my node."),(0,i.kt)("p",null,"I can monitor the total number of rolls currently staked on the network on the Massa ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.massa.net/"},"explorer"),". Let's assume I see that ",(0,i.kt)("inlineCode",{parentName:"p"},"500,000")," rolls are staked (low number, maybe only in the first weeks after mainnet). I thus produce ",(0,i.kt)("inlineCode",{parentName:"p"},"0,0046%")," of blocks and endorsements. "),(0,i.kt)("p",null,"There are ",(0,i.kt)("inlineCode",{parentName:"p"},"172,800")," blocks per day, so I expect to produce ",(0,i.kt)("inlineCode",{parentName:"p"},"8")," blocks per day on average, but also approximately ",(0,i.kt)("inlineCode",{parentName:"p"},"127")," endorsements per day. The maximum rewards given per block is ",(0,i.kt)("inlineCode",{parentName:"p"},"1.02")," tokens (for block and endorsement producers), which is ",(0,i.kt)("inlineCode",{parentName:"p"},"176,256")," tokens per day. Thus I can expect ",(0,i.kt)("inlineCode",{parentName:"p"},"176,256 * 0,0046% = 8.1")," tokens per day for my ",(0,i.kt)("inlineCode",{parentName:"p"},"23")," rolls, assuming ",(0,i.kt)("inlineCode",{parentName:"p"},"500,000")," rolls are staked in total, and assuming I am always online and I don't miss a block! "),(0,i.kt)("p",null,"These rewards do not take into account potential gas fees that will be set by users if the network becomes congested one day."),(0,i.kt)("p",null,"The staking rewards are unlocked, so after ",(0,i.kt)("inlineCode",{parentName:"p"},"13")," days, I should have ",(0,i.kt)("inlineCode",{parentName:"p"},"105")," tokens and I will be able to buy a ",(0,i.kt)("inlineCode",{parentName:"p"},"24th")," roll!"))}m.isMDXComponent=!0},4739:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Unlocked-93b84f018dc8646b2c08bb379405b642.png"},4460:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/distribution-6e178a33d57bd694701bbd1760471865.png"},1499:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/inflation-da58e9f0591d3fcc67807b24af2bb81c.png"}}]);