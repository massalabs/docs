---
id: webassembly-module
sidebar_label: WebAssembly Module
---

# WebAssembly Module

Each smart contract is a WebAssembly module with exported functions, and has access to specific node ABIs. We will see these ABIs in the next chapter.

WebAssembly code is compiled from AssemblyScript, a language created specifically for WebAssembly.

AssemblyScript is very similar to TypeScript, but there are some important differences to keep in mind.
For example, the basic types in AssemblyScript directly expose all integer and floating-point types available in WebAssembly.
Union types and optional arguments/properties are not supported in AssemblyScript, and all objects are statically typed and do not allow for dynamically changing properties.
Additionally, AssemblyScript does not support exceptions catching or closures yet.

To learn more about AssemblyScript, WebAssembly modules, and ABIs, we invite you to check out the following resources:

- [AssemblyScript home page](https://assemblyscript.org/), [its book](https://www.assemblyscript.org/introduction.html) and [its introduction from a JS perspective](https://www.assemblyscript.org/introduction.html#from-a-javascript-perspective).
- [WebAssembly home page](https://webassembly.org/) and [MDN version](https://developer.mozilla.org/en-US/docs/WebAssembly).
- [Wikipedia explaination of the concept of ABI](https://en.wikipedia.org/wiki/Application_binary_interface).

:::caution

Do not initialize a smart contract project following AssemblyScript documentation. It will be unnecessarily painful. Go back to the [quick start tutorial](../quickstart) or use the following command:
```shell
npx clear-npx-cache && npx @massalabs/sc-project-initializer@dev init my-first-sc && cd my-first-sc
```

:::
