"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[6161],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8375:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const s={},i="Generic Serializable",o={unversionedId:"build/smart-contract/basic-concepts/serializable",id:"build/smart-contract/basic-concepts/serializable",title:"Generic Serializable",description:"In Massa smart contracts, you often need to work with complex data structures that go beyond primitive types. The Serializable interface provides a way to create custom types that can be easily serialized and deserialized, allowing you to store and retrieve these types in contract storage. By implementing Serializable, you can define your own classes and handle their serialization logic for efficient data management.",source:"@site/docs/build/smart-contract/basic-concepts/serializable.mdx",sourceDirName:"build/smart-contract/basic-concepts",slug:"/build/smart-contract/basic-concepts/serializable",permalink:"/docs/build/smart-contract/basic-concepts/serializable",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/smart-contract/basic-concepts/serializable.mdx",tags:[],version:"current",lastUpdatedBy:"Peterjah",lastUpdatedAt:1742893647,formattedLastUpdatedAt:"Mar 25, 2025",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Storage",permalink:"/docs/build/smart-contract/basic-concepts/storage"},next:{title:"Events",permalink:"/docs/build/smart-contract/basic-concepts/events"}},l={},c=[{value:"Creating a Serializable Type",id:"creating-a-serializable-type",level:2},{value:"Explanation of the User Class",id:"explanation-of-the-user-class",level:3},{value:"Storing and retrieving Serializable data",id:"storing-and-retrieving-serializable-data",level:2},{value:"Using array of serializable",id:"using-array-of-serializable",level:2},{value:"Client-Side Serialization in TypeScript",id:"client-side-serialization-in-typescript",level:3},{value:"Defining the User Class in TypeScript",id:"defining-the-user-class-in-typescript",level:4},{value:"Calling the Contract with an Array of Users",id:"calling-the-contract-with-an-array-of-users",level:4},{value:"Benefits of using Serializable Types",id:"benefits-of-using-serializable-types",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"generic-serializable"},"Generic Serializable"),(0,n.kt)("p",null,"In Massa smart contracts, you often need to work with complex data structures that go beyond primitive types. The Serializable interface provides a way to create custom types that can be easily serialized and deserialized, allowing you to store and retrieve these types in contract storage. By implementing Serializable, you can define your own classes and handle their serialization logic for efficient data management."),(0,n.kt)("h2",{id:"creating-a-serializable-type"},"Creating a Serializable Type"),(0,n.kt)("p",null,"The example below demonstrates a User class that implements the Serializable interface. This class includes properties for the user's name and age, along with methods to serialize and deserialize User objects for storage and retrieval."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"// users.ts\nimport { Args, stringToBytes, Result, Serializable } from '@massalabs/as-types';\nimport { Storage } from '@massalabs/massa-as-sdk';\n\nexport class User implements Serializable {\n  constructor(public name: string = '', public age: u8 = 0) {}\n\n  // Serialize user data to bytes for storage\n  serialize(): StaticArray<u8> {\n    return new Args().add(this.name).add(this.age).serialize();\n  }\n\n  // Deserialize user data from bytes\n  deserialize(data: StaticArray<u8>, offset: i32): Result<i32> {\n    const args = new Args(data, offset);\n    this.name = args.nextString().expect(\"Can't deserialize name.\");\n    this.age = args.nextU8().expect(\"Can't deserialize age.\");\n    return new Result(args.offset);\n  }\n}\n")),(0,n.kt)("h3",{id:"explanation-of-the-user-class"},"Explanation of the User Class"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Constructor:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The constructor initializes User instances with a name and an age. - Default values are provided to allow for easy instantiation."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"serialize Method:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This method uses ",(0,n.kt)("inlineCode",{parentName:"li"},"Args")," to convert the ",(0,n.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"age")," properties into a byte array. It returns a serialized representation of the User object, which can then be stored in the contract's storage."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"deserialize Method:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The deserialize method takes in a byte array and an offset, reconstructing the User object by extracting the name and age values. This allows the User instance to be reconstructed from storage.")))),(0,n.kt)("h2",{id:"storing-and-retrieving-serializable-data"},"Storing and retrieving Serializable data"),(0,n.kt)("p",null,"The following functions demonstrate how to store and retrieve User objects in the smart contract storage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"//main.ts\nimport { Args, stringToBytes } from '@massalabs/as-types';\nimport { Storage } from '@massalabs/massa-as-sdk';\nimport { Users } from './users.ts';\n\nexport function addUser(binArgs: StaticArray<u8>): void {\n  const args = new Args(binArgs);\n  const name = args.nextString().expect('Unable to decode user name');\n  const age = args.nextU8().expect('Unable to decode user age');\n  const id = args.nextString().expect('Unable to decode user id');\n  const userKey = stringToBytes(id);\n  assert(!Storage.has(userKey), 'User already exists');\n\n  // Create user serializable\n  const user = new User(name, age);\n  // Store serialized User\n  Storage.set(stringToBytes(id), user.serialize());\n}\n\nexport function getUser(binArgs: StaticArray<u8>): StaticArray<u8> {\n  const args = new Args(binArgs);\n  const id = args.nextString().expect('Unable to decode user id');\n  const userKey = stringToBytes(id);\n  assert(Storage.has(userKey), 'User not found');\n\n  return Storage.get(userKey);\n}\n")),(0,n.kt)("h2",{id:"using-array-of-serializable"},"Using array of serializable"),(0,n.kt)("p",null,"In some scenarios, you might need to manage a collection of User objects as an array. The following example shows how to deserialize an array of User objects and store it in the contract's storage."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"export function addUsers(binArgs: StaticArray<u8>): void {\n  const users = new Args(binArgs)\n    .nextSerializableObjectArray<User>()\n    .expect('Unable to decode users');\n  for (let i = 0; i < users.length; i++) {\n    const user = users[i];\n    const userKey = stringToBytes(user.name);\n    assert(!Storage.has(userKey), 'User already exists');\n    Storage.set(userKey, user.serialize());\n  }\n}\n")),(0,n.kt)("h3",{id:"client-side-serialization-in-typescript"},"Client-Side Serialization in TypeScript"),(0,n.kt)("p",null,"To add users from a client application, you need to serialize the user data in TypeScript, ensuring that it matches the AssemblyScript serialization format. This requires defining the same User class in TypeScript with methods that adhere to the serialization protocol."),(0,n.kt)("h4",{id:"defining-the-user-class-in-typescript"},"Defining the User Class in TypeScript"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"//user.ts (typescript)\nimport {\n  Args,\n  IDeserializedResult,\n  ISerializable,\n} from '@massalabs/massa-web3';\n\nexport class User implements ISerializable<User> {\n  constructor(\n    public name: string = '',\n    public age: number = 0,\n  ) {}\n\n  serialize(): Uint8Array {\n    const data = new Args()\n      .addString(this.name)\n      .addU8(BigInt(this.age))\n      .serialize();\n    return new Uint8Array(data);\n  }\n\n  deserialize(data: Uint8Array, offset: number): IDeserializedResult<User> {\n    const args = new Args(data, offset);\n\n    this.name = args.nextString();\n    this.age = Number(args.nextU8());\n\n    return { instance: this, offset: args.getOffset() };\n  }\n}\n")),(0,n.kt)("h4",{id:"calling-the-contract-with-an-array-of-users"},"Calling the Contract with an Array of Users"),(0,n.kt)("p",null,"Using the serialized User objects, you can call the addUsers function in the contract to store multiple users:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"//addUsers.ts (typescript)\nimport { User } from './user.ts';\n\nconst contract = new SmartContract(provider, \"<deployed_contract_address>\");\n\nconst users = [new User('Alice', 25), new User('Bob', 30)];\nconst operation = await contract.call(\n  'addUsers',\n  new Args().addSerializableObjectArray(users),\n);\n")),(0,n.kt)("h2",{id:"benefits-of-using-serializable-types"},"Benefits of using Serializable Types"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Flexibility: Implementing Serializable allows you to create custom data types that can be stored and retrieved efficiently, enabling the management of complex data structures within smart contracts."),(0,n.kt)("li",{parentName:"ul"},"Data Integrity: By handling serialization and deserialization within the class, you control how the data is represented and validated, ensuring that only valid data is stored and retrieved."),(0,n.kt)("li",{parentName:"ul"},"Reusability: Once defined, serializable types can be reused across different parts of the contract or even in other contracts, promoting modular and maintainable code.")))}p.isMDXComponent=!0}}]);