"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[7658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,m=p["".concat(l,".").concat(g)]||p[g]||c[g]||o;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"Assigning a MNS to your website"},s=void 0,i={unversionedId:"deweb/upload/mns",id:"deweb/upload/mns",title:"Assigning a MNS to your website",description:"After a successful upload",source:"@site/docs/deweb/upload/mns.mdx",sourceDirName:"deweb/upload",slug:"/deweb/upload/mns",permalink:"/docs/deweb/upload/mns",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/deweb/upload/mns.mdx",tags:[],version:"current",lastUpdatedBy:"BenRey",lastUpdatedAt:1733820441,formattedLastUpdatedAt:"Dec 10, 2024",frontMatter:{title:"Assigning a MNS to your website"},sidebar:"massaDeWebSidebar",previous:{title:"Overview",permalink:"/docs/deweb/upload/overview"},next:{title:"Register your website",permalink:"/docs/deweb/upload/website-registry"}},l={},u=[{value:"After a successful upload",id:"after-a-successful-upload",level:3},{value:"Changing MNS target",id:"changing-mns-target",level:4},{value:"1) Minting a MNS",id:"1-minting-a-mns",level:5},{value:"2) Changing MNS Target",id:"2-changing-mns-target",level:5}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"after-a-successful-upload"},"After a successful upload"),(0,a.kt)("p",null,"After a successful DeWeb upload you should see a success message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"successfully uploaded a website at AS12v...2UgLS\n")),(0,a.kt)("p",null,"This address represents that address you website was uploaded at."),(0,a.kt)("p",null,"To assign a MNS to your website navigate one of these links depending on your network"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Network"),(0,a.kt)("th",{parentName:"tr",align:null},"Mainnet"),(0,a.kt)("th",{parentName:"tr",align:null},"Buildnet"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"URL"),(0,a.kt)("td",{parentName:"tr",align:null},"mns.massa.net"),(0,a.kt)("td",{parentName:"tr",align:null},"mns.massa.network")))),(0,a.kt)("h4",{id:"changing-mns-target"},"Changing MNS target"),(0,a.kt)("h5",{id:"1-minting-a-mns"},"1) Minting a MNS"),(0,a.kt)("p",null,"If you already have a MNS proceed to ",(0,a.kt)("a",{parentName:"p",href:"mns#2-changing-mns-target"},"step 2"),"."),(0,a.kt)("p",null,"If you have no MNS minted on your prefferred network than you can mint one using the UI."),(0,a.kt)("h5",{id:"2-changing-mns-target"},"2) Changing MNS Target"),(0,a.kt)("p",null,"To have your MNS point at your website you need to change the target address."),(0,a.kt)("p",null,"By default this address targets the owner address."),(0,a.kt)("p",null,"To change the target address navigate to the MNS you want to use to your website."),(0,a.kt)("p",null,"Click on the pencil located on the right side of the arrow. You should see a pop-up."),(0,a.kt)("p",null,"Paste your website address and click ",(0,a.kt)("inlineCode",{parentName:"p"},"save"),"."),(0,a.kt)("p",null,"Your website should now be accessible using the chosen MNS."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can register your DeWeb website in the ",(0,a.kt)("a",{parentName:"p",href:"website-registry"},"DeWeb Website Registry"),"\nto make it easier for users to find your website.\nSoon, this registry will be used to create a decentralized search engine for DeWeb websites.")))}c.isMDXComponent=!0}}]);