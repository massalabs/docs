"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[5394],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>c});var n=a(6540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),g=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=g(a),m=i,c=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var g=2;g<r;g++)l[g]=a[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>g});var n=a(8168),i=(a(6540),a(5680));const r={id:"guidelines",title:"Plugin Creation Guidelines"},l="Plugin Creation Guidelines",o={unversionedId:"massaStation/guidelines",id:"massaStation/guidelines",title:"Plugin Creation Guidelines",description:"One of the advantages of Massa Station is its flexibility in allowing plugins to be developed in any programming language. In order for modules to work with Massa Station, they must adhere to specific guidelines and specifications.",source:"@site/docs/massaStation/guidelines.mdx",sourceDirName:"massaStation",slug:"/massaStation/guidelines",permalink:"/docs/massaStation/guidelines",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/massaStation/guidelines.mdx",tags:[],version:"current",lastUpdatedBy:"BenRey",lastUpdatedAt:1723798300,formattedLastUpdatedAt:"Aug 16, 2024",frontMatter:{id:"guidelines",title:"Plugin Creation Guidelines"},sidebar:"massaStationSidebar",previous:{title:"Troubleshooting",permalink:"/docs/massaStation/troubleshooting"},next:{title:'"Hello, World!" Plugin',permalink:"/docs/massaStation/hello-world-plugin"}},s={},g=[{value:"Plugin Overview",id:"plugin-overview",level:2},{value:"Plugin binary specifications",id:"plugin-binary-specifications",level:2},{value:"Plugin Packaging",id:"plugin-packaging",level:2},{value:"Supported OS Configurations",id:"supported-os-configurations",level:3},{value:"Archive Structure",id:"archive-structure",level:3}],p={toc:g},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"plugin-creation-guidelines"},"Plugin Creation Guidelines"),(0,i.yg)("p",null,"One of the advantages of Massa Station is its flexibility in allowing plugins to be developed in any programming language. In order for modules to work with Massa Station, they must adhere to specific guidelines and specifications."),(0,i.yg)("h2",{id:"plugin-overview"},"Plugin Overview"),(0,i.yg)("p",null,"Massa Station plugins are essentially binaries with a few specific requirements, as defined in this document."),(0,i.yg)("p",null,"Since Massa Station plugins are binaries, developers have the freedom to use their preferred programming language to create plugins that work seamlessly with Massa Station. Most of our Massa Station products and documentation are using Go because it's the language we use internally. However, we encourage developers to use any language they prefer."),(0,i.yg)("p",null,"For detailed steps on creating a plugin, please refer to the ",(0,i.yg)("a",{parentName:"p",href:"/docs/massaStation/hello-world-plugin"},"create plugin guide"),"."),(0,i.yg)("h2",{id:"plugin-binary-specifications"},"Plugin binary specifications"),(0,i.yg)("p",null,"When Massa Station starts a plugin, it generates a unique ID for the plugin and passes it as a parameter to the plugin binary. Once the plugin has started, it must register itself to Massa Station to confirm that it is running properly."),(0,i.yg)("p",null,"Plugins are started as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"./plugin-binary <PLUGIN-ID>\n")),(0,i.yg)("p",null,"At startup, the plugin must retrieve the plugin ID from the command line arguments.\nFollowing the startup, the plugin must register itself by calling the ",(0,i.yg)("inlineCode",{parentName:"p"},"/plugin-manager/register")," endpoint of Massa Station, providing the assigned ID."),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Massa Station will respond with a 204 status code if the registration is successful. In case of failure, the plugin must exit with a non-zero exit code.")),(0,i.yg)("h2",{id:"plugin-packaging"},"Plugin Packaging"),(0,i.yg)("p",null,"To be installed in Massa Station, a plugin must be packaged as a Zip Archive, tailored for each targeted operating system."),(0,i.yg)("h3",{id:"supported-os-configurations"},"Supported OS Configurations"),(0,i.yg)("p",null,"Currently, Massa Station supports the following OS configurations:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Windows 10/11, AMD64"),(0,i.yg)("li",{parentName:"ul"},"Linux, AMD64"),(0,i.yg)("li",{parentName:"ul"},"macOS, AMD64"),(0,i.yg)("li",{parentName:"ul"},"macOS, ARM64")),(0,i.yg)("h3",{id:"archive-structure"},"Archive Structure"),(0,i.yg)("p",null,"A plugin Zip Archive must contain the following files and adhere to the specified structure:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Plugin Binary"),": The plugin's binary, withch should follow the standards")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Logo"),": The archive must include a valid image file that serves as the plugin's logo. Refer to ",(0,i.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"},"the Mozilla Developer Network")," for valid image formats."),(0,i.yg)("admonition",{parentName:"li",type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"This logo will be displayed in the Massa Station interface. To ensure a good user experience, we recommend using a square image with a minimum size of 128x128 pixels."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Manifest"),": The plugin must have a ",(0,i.yg)("inlineCode",{parentName:"p"},"manifest.json")," file at the root of the Zip Archive. This manifest provides essential information to Massa Station for displaying the plugin in the user interface. The ",(0,i.yg)("inlineCode",{parentName:"p"},"manifest.json")," file must include the following properties:"),(0,i.yg)("table",{parentName:"li"},(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Field"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"),(0,i.yg)("th",{parentName:"tr",align:null},"Format"),(0,i.yg)("th",{parentName:"tr",align:null},"Specifications"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Author"),(0,i.yg)("td",{parentName:"tr",align:null},"Module author's name"),(0,i.yg)("td",{parentName:"tr",align:null},"text"),(0,i.yg)("td",{parentName:"tr",align:null},"Maximum 30 characters")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Name"),(0,i.yg)("td",{parentName:"tr",align:null},"Module name"),(0,i.yg)("td",{parentName:"tr",align:null},"text"),(0,i.yg)("td",{parentName:"tr",align:null},"Maximum 30 characters")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Description"),(0,i.yg)("td",{parentName:"tr",align:null},"Module short description text"),(0,i.yg)("td",{parentName:"tr",align:null},"text"),(0,i.yg)("td",{parentName:"tr",align:null},"Maximum 80 characters")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Logo"),(0,i.yg)("td",{parentName:"tr",align:null},"Module logo file name"),(0,i.yg)("td",{parentName:"tr",align:null},"text"),(0,i.yg)("td",{parentName:"tr",align:null},"Example: logo.png")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Home"),(0,i.yg)("td",{parentName:"tr",align:null},"URL to module home page"),(0,i.yg)("td",{parentName:"tr",align:null},"URL"),(0,i.yg)("td",{parentName:"tr",align:null},"Format: ",(0,i.yg)("inlineCode",{parentName:"td"},"http(s)://example.com"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Version"),(0,i.yg)("td",{parentName:"tr",align:null},"Module version"),(0,i.yg)("td",{parentName:"tr",align:null},"text"),(0,i.yg)("td",{parentName:"tr",align:null},"Follow ",(0,i.yg)("a",{parentName:"td",href:"https://semver.org/spec/v2.0.0"},"Semantic Versioning 2.0"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"APIspec"),(0,i.yg)("td",{parentName:"tr",align:null},"API specifications"),(0,i.yg)("td",{parentName:"tr",align:null},"text"),(0,i.yg)("td",{parentName:"tr",align:null},"Swagger file")))),(0,i.yg)("admonition",{parentName:"li",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"See the example manifest of the Hello-World plugin: ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/massalabs/station-massa-hello-world/blob/v0.0.8/manifest.json"},"Hello-World Manifest")))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Optional: Additional Resources"),": Any additional resources for the plugin such as configuration files, images, etc."))))}d.isMDXComponent=!0}}]);