"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[8364],{9390:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(4848),t=a(8453);const i={id:"storage-costs",sidebar_label:"Storage costs"},r="Storage costs",l={id:"learn/storage-costs",title:"Storage costs",description:"In Massa, each network node maintains a full copy of the ledger.",source:"@site/docs/learn/storage-costs.mdx",sourceDirName:"learn",slug:"/learn/storage-costs",permalink:"/docs/learn/storage-costs",draft:!1,unlisted:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/learn/storage-costs.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1723551924e3,frontMatter:{id:"storage-costs",sidebar_label:"Storage costs"},sidebar:"learnSidebar",previous:{title:"Bootstrapping in Massa",permalink:"/docs/learn/bootstrap"},next:{title:"Gas",permalink:"/docs/learn/gas"}},c={},m=[{value:"Examples",id:"examples",level:2},{value:"Transferring coins to a non-existing account",id:"transferring-coins-to-a-non-existing-account",level:3},{value:"Datastore handling in a smart contract",id:"datastore-handling-in-a-smart-contract",level:3}];function o(s){const e={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",munder:"munder",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,t.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"storage-costs",children:"Storage costs"})}),"\n",(0,n.jsx)(e.p,{children:"In Massa, each network node maintains a full copy of the ledger.\nTo prevent the requirement of massive storage capacities, a ledger-size limit of 10TB has been set.\nThis limit is essential to encourage widespread adoption and enable users to run nodes from their homes.\nTo ensure compliance with this limit, a mechanism has been established that correlates storage space with locked coins."}),"\n",(0,n.jsx)(e.p,{children:"For every byte of storage space claimed, whether it's for storing address and balance information,\nkeys in the datastore, bytecode, or other data elements, users are required to lock a corresponding amount of coins.\nThese locked coins act as a commitment and are released when the allocated storage space is released."}),"\n",(0,n.jsx)(e.p,{children:"To determine the amount of coins needed to lock for each byte of storage, the value of 0.0001 Massa coin (MAS) has been chosen.\nThis value ensures that if all of the total initial coin supply (1,000,000,000 MAS) is locked for storage only,\nthe 10TB limit is reached and no account can push this limit further because there are no more coins available."}),"\n",(0,n.jsx)(e.p,{children:"The initial ledger entry for address and balance incurs a cost of 0.001 MAS."}),"\n",(0,n.jsx)(e.p,{children:"Datastore entries also occupy space:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"a base size of 4 bytes that represents the average storage used for storing an empty key-value entry"}),"\n",(0,n.jsx)(e.li,{children:"the length of the key"}),"\n",(0,n.jsx)(e.li,{children:"the length of the value"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"To calculate the storage cost for a specific address in the ledger, the formula includes the address size, balance constant, bytecode length,\nand the sum of constants for each datastore key and its corresponding value size."}),"\n",(0,n.jsx)(e.p,{children:"The overall formula is:"}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"C"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mi,{children:"A"}),(0,n.jsx)(e.mi,{children:"S"})]})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"0.001"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mn,{children:"0.0001"}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsx)(e.mi,{children:"B"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"S"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"z"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mn,{children:"0.0001"}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsxs)(e.munder,{children:[(0,n.jsx)(e.mo,{children:"\u2211"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mn,{children:"4"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:"D"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"S"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"K"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mi,{children:"S"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"z"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:"D"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"V"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"S"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"z"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"Cost_{MAS} = 0.001 + 0.0001 * BytecodeSize + 0.0001 * \\sum_i (4 + DataStoreKeySize_i + DatastoreValueSize_i)"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"os"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"A"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05764em"},children:"S"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord",children:"0.001"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"0.0001"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"eco"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ze"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"0.0001"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.3277em",verticalAlign:"-1.2777em"}}),(0,n.jsx)(e.span,{className:"mop op-limits",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.05em"},children:[(0,n.jsxs)(e.span,{style:{top:"-1.8723em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.2777em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord",children:"4"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"St"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"oreKey"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ore"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"Va"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})]})]})}),"\n",(0,n.jsxs)(e.p,{children:["It's important to note that the storage costs are always paid by the address that initiates the Application Binary Interface (ABI) call.\nFor example, if the ABI functions ",(0,n.jsx)(e.a,{href:"https://as-sdk.docs.massa.net/functions/setBytecode.html",children:"setBytecode"})," or ",(0,n.jsx)(e.a,{href:"https://as-sdk.docs.massa.net/functions/setBytecodeOf.html",children:"setBycodeOf"})," are used,\nthe associated storage costs will be charged to the address making the call."]}),"\n",(0,n.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(e.h3,{id:"transferring-coins-to-a-non-existing-account",children:"Transferring coins to a non-existing account"}),"\n",(0,n.jsx)(e.p,{children:"When creating a new account in Massa, a minimum of 0.001 MAS needs to be sent alongside the operation that creates the new account (e.g., a transfer).\nThis cost covers the creation of the address and its associated balance."}),"\n",(0,n.jsxs)(e.p,{children:["You create a new account using the Massa Client ",(0,n.jsx)(e.code,{children:"massa-client"}),", you can generate a secret key ",(0,n.jsx)(e.code,{children:"(wallet_generate_secret_key)"}),") and verify its address using the ",(0,n.jsx)(e.code,{children:"wallet_info"})," function.\nHowever, that operation is done fully offline and the new account does not appear in the blockchain just yet."]}),"\n",(0,n.jsxs)(e.p,{children:["Now imagine a sender account wants to send ",(0,n.jsx)(e.code,{children:"10 MAS"})," to your new account using a Transaction operation transferring ",(0,n.jsx)(e.code,{children:"10 MAS"})," to your newly generated address.\nSince the newly created account is not in the state just yet,\n",(0,n.jsx)(e.code,{children:"0.001"})," coins from the transferred amount are reserved for writing the account address and balance,\nand your newly created account's balance becomes ",(0,n.jsx)(e.code,{children:"9.999"}),".\nNote that if the transferred amount is lower than ",(0,n.jsx)(e.code,{children:"0.001 MAS"}),", the new destination account can not be written and the operation payload run fails."]}),"\n",(0,n.jsx)(e.p,{children:"In any subsequent transfers towards your now-written account,\nno coins will be reserved for storage and you will receive the full transferred amount."}),"\n",(0,n.jsx)(e.h3,{id:"datastore-handling-in-a-smart-contract",children:"Datastore handling in a smart contract"}),"\n",(0,n.jsxs)(e.p,{children:['Suppose you want to store your username "kevin" under the key "username" in the datastore of an existing account, both in utf-8 bytes.\nThe value is 5 bytes long and the key is 8 bytes long and we assume that that entry did not exist before in the datastore of the account.\nIn that case, you need to send an operation that creates this new entry in your datastore using a Smart Contract.\nStoring the entry locks ',(0,n.jsx)(e.code,{children:"0.0001 * (4 + 8 + 5) = 0,0017"})," MAS coins."]}),"\n",(0,n.jsxs)(e.p,{children:['Now suppose that you change that existing entry to a new nickname "kev".\nThe new value is shorter: freeing 2 bytes causes ',(0,n.jsx)(e.code,{children:"0.0001 * 2 = 0.0002"})," coins to be refunded."]}),"\n",(0,n.jsx)(e.p,{children:'Now let\'s change the nickname again from "kev" to "ned". This does not change the datastore size and does not change the coin balance.'}),"\n",(0,n.jsxs)(e.p,{children:['Now, let\'s change the nickname again from "ned" to "pierre".\nThis uses 3 extra byte and therefore locks ',(0,n.jsx)(e.code,{children:"0.0001 * 3 = 0.0003"})," MAS coins."]}),"\n",(0,n.jsxs)(e.p,{children:['In case you then delete the "nickname" datastore entry (with the "pierre" value),\n',(0,n.jsx)(e.code,{children:"0.0001 * (4 + 8 + 6) = 0.0018"})," coins are refunded."]}),"\n",(0,n.jsxs)(e.admonition,{type:"info",children:[(0,n.jsxs)(e.p,{children:["In the case of a refund for storage costs, the address that receives the refund is the one that initiates the ABI call\n(",(0,n.jsx)(e.a,{href:"https://as-sdk.docs.massa.net/functions/setBytecode.html",children:"setBytecode"})," or ",(0,n.jsx)(e.a,{href:"https://as-sdk.docs.massa.net/functions/setBytecodeOf.html",children:"setBycodeOf"})," for example),\nwhich may differ from the address that initially paid for the storage."]}),(0,n.jsxs)(e.p,{children:['If you are a Smart Contract developer and want your users to cover the storage costs for your contract, you can utilize the coins passed via the "',(0,n.jsx)(e.code,{children:"coins"}),'" parameter of the "',(0,n.jsx)(e.code,{children:"CallSC"}),'" operation.\nAdditionally, you can save their addresses in your datastore to facilitate future refunds.']})]})]})}function h(s={}){const{wrapper:e}={...(0,t.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(o,{...s})}):o(s)}},8453:(s,e,a)=>{a.d(e,{R:()=>r,x:()=>l});var n=a(6540);const t={},i=n.createContext(t);function r(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function l(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:r(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);