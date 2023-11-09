"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[7112],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),g=i,c=d["".concat(s,".").concat(g)]||d[g]||m[g]||r;return a?n.createElement(c,l(l({ref:t},u),{},{components:a})):n.createElement(c,l({ref:t},u))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9861:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={id:"guidelines",title:"Plugin Creation Guidelines"},l="Plugin Creation Guidelines",o={unversionedId:"massaStation/guidelines",id:"massaStation/guidelines",title:"Plugin Creation Guidelines",description:"One of the advantages of Massa Station is its flexibility in allowing plugins to be developed in any programming language. In order for modules to work with Massa Station, they must adhere to specific guidelines and specifications.",source:"@site/docs/massaStation/guidelines.mdx",sourceDirName:"massaStation",slug:"/massaStation/guidelines",permalink:"/docs/massaStation/guidelines",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/massaStation/guidelines.mdx",tags:[],version:"current",lastUpdatedBy:"Damir Vodenicarevic",lastUpdatedAt:1699541782,formattedLastUpdatedAt:"Nov 9, 2023",frontMatter:{id:"guidelines",title:"Plugin Creation Guidelines"},sidebar:"massaStationSidebar",previous:{title:"Troubleshooting",permalink:"/docs/massaStation/troubleshooting"},next:{title:'"Hello, World!" Plugin',permalink:"/docs/massaStation/hello-world-plugin"}},s={},p=[{value:"Plugin Overview",id:"plugin-overview",level:2},{value:"Plugin binary specifications",id:"plugin-binary-specifications",level:2},{value:"Plugin Packaging",id:"plugin-packaging",level:2},{value:"Supported OS Configurations",id:"supported-os-configurations",level:3},{value:"Archive Structure",id:"archive-structure",level:3}],u={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"plugin-creation-guidelines"},"Plugin Creation Guidelines"),(0,i.kt)("p",null,"One of the advantages of Massa Station is its flexibility in allowing plugins to be developed in any programming language. In order for modules to work with Massa Station, they must adhere to specific guidelines and specifications."),(0,i.kt)("h2",{id:"plugin-overview"},"Plugin Overview"),(0,i.kt)("p",null,"Massa Station plugins are essentially binaries with a few specific requirements, as defined in this document."),(0,i.kt)("p",null,"Since Massa Station plugins are binaries, developers have the freedom to use their preferred programming language to create plugins that work seamlessly with Massa Station. Most of our Massa Station products and documentation are using Go because it's the language we use internally. However, we encourage developers to use any language they prefer."),(0,i.kt)("p",null,"For detailed steps on creating a plugin, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/massaStation/hello-world-plugin"},"create plugin guide"),"."),(0,i.kt)("h2",{id:"plugin-binary-specifications"},"Plugin binary specifications"),(0,i.kt)("p",null,"When Massa Station starts a plugin, it generates a unique ID for the plugin and passes it as a parameter to the plugin binary. Once the plugin has started, it must register itself to Massa Station to confirm that it is running properly."),(0,i.kt)("p",null,"Plugins are started as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./plugin-binary <PLUGIN-ID>\n")),(0,i.kt)("p",null,"At startup, the plugin must retrieve the plugin ID from the command line arguments.\nFollowing the startup, the plugin must register itself by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"/plugin-manager/register")," endpoint of Massa Station, providing the assigned ID."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Massa Station will respond with a 204 status code if the registration is successful. In case of failure, the plugin must exit with a non-zero exit code.")),(0,i.kt)("h2",{id:"plugin-packaging"},"Plugin Packaging"),(0,i.kt)("p",null,"To be installed in Massa Station, a plugin must be packaged as a Zip Archive, tailored for each targeted operating system."),(0,i.kt)("h3",{id:"supported-os-configurations"},"Supported OS Configurations"),(0,i.kt)("p",null,"Currently, Massa Station supports the following OS configurations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows 10/11, AMD64"),(0,i.kt)("li",{parentName:"ul"},"Linux, AMD64"),(0,i.kt)("li",{parentName:"ul"},"macOS, AMD64"),(0,i.kt)("li",{parentName:"ul"},"macOS, ARM64")),(0,i.kt)("h3",{id:"archive-structure"},"Archive Structure"),(0,i.kt)("p",null,"A plugin Zip Archive must contain the following files and adhere to the specified structure:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Plugin Binary"),": The plugin's binary, withch should follow the statdards")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Logo"),": The archive must include a valid image file that serves as the plugin's logo. Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"},"the Mozilla Developer Network")," for valid image formats."),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This logo will be displayed in the Massa Station interface. To ensure a good user experience, we recommend using a square image with a minimum size of 128x128 pixels."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Manifest"),": The plugin must have a ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," file at the root of the Zip Archive. This manifest provides essential information to Massa Station for displaying the plugin in the user interface. The ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," file must include the following properties:"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Format"),(0,i.kt)("th",{parentName:"tr",align:null},"Specifications"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Author"),(0,i.kt)("td",{parentName:"tr",align:null},"Module author's name"),(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum 30 characters")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:null},"Module name"),(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum 30 characters")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Description"),(0,i.kt)("td",{parentName:"tr",align:null},"Module short description text"),(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum 80 characters")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Logo"),(0,i.kt)("td",{parentName:"tr",align:null},"Module logo file name"),(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"Example: logo.png")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Home"),(0,i.kt)("td",{parentName:"tr",align:null},"URL to module home page"),(0,i.kt)("td",{parentName:"tr",align:null},"URL"),(0,i.kt)("td",{parentName:"tr",align:null},"Format: ",(0,i.kt)("inlineCode",{parentName:"td"},"http(s)://example.com"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Version"),(0,i.kt)("td",{parentName:"tr",align:null},"Module version"),(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"Follow ",(0,i.kt)("a",{parentName:"td",href:"https://semver.org/spec/v2.0.0"},"Semantic Versioning 2.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"APIspec"),(0,i.kt)("td",{parentName:"tr",align:null},"API specifications"),(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"Swagger file")))),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"See the example manifest of the Hello-World plugin: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/massalabs/station-massa-hello-world/blob/v0.0.8/manifest.json"},"Hello-World Manifest")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optional: Additional Resources"),": Any additional resources for the plugin such as configuration files, images, etc."))))}m.isMDXComponent=!0}}]);