const fs = require("fs");
const path = require("path");
const walletCodeExtracted = require("./code-extracted-wallet.json");

function extractTestCode(fileName) {
  const data = fs.readFileSync(path.resolve(__dirname, fileName), "utf-8");
  const lines = data.split("\n");
  let currentFunction = null;
  let currentFunctionLines = [];
  let testFunctions = {};
  let shouldSkipNextLine = false;

  lines.forEach((line, index) => {
    if (line.includes("/* Test function")) {
      currentFunction = line.trim().split(" ")[3];
      shouldSkipNextLine = true;
    } else if (line.includes("/* End of test */")) {
      testFunctions[currentFunction] = currentFunctionLines.join("\n");
      currentFunction = null;
      currentFunctionLines = [];
    } else if (currentFunction) {
      if (shouldSkipNextLine) {
        shouldSkipNextLine = false;
      } else {
        currentFunctionLines.push(line);
      }
    }
  });

  return testFunctions;
}

const testFunctions = extractTestCode("test-wallet.ts");

// Write to JSON file
fs.writeFileSync(
  "docs/build/code-fetched/wallet/code-extracted-wallet.json",
  JSON.stringify(testFunctions, null, 2)
);

// If --generate is passed, generate the react components
if (process.argv.includes('--generate')) {
  const outputDirectory = path.join(__dirname, 'components');
  if (!fs.existsSync(outputDirectory)){
      fs.mkdirSync(outputDirectory);
  }

  // Loop through each extracted function
  for (let funcName in walletCodeExtracted) {
      let content = `
  import React from 'react';
  import CodeBlock from '@theme/CodeBlock';
  import walletCode from '../code-extracted-wallet.json';

  export default function ${funcName}() {
    return (
      <div>
        <CodeBlock
          language="ts"
          title="${funcName}"
          showLineNumbers
        >
        {walletCode.${funcName}}
        </CodeBlock>
      </div>
    );
  }
  `;
      // Write the content to a new .jsx file
      fs.writeFileSync(path.join(outputDirectory, `${funcName}.jsx`), content);
  }
}