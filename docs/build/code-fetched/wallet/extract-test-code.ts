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



// Définir le chemin du dossier dans lequel vous voulez générer les composants
const outputDirectory = path.join(__dirname, 'outputDirectory');

// Vérifier si le dossier de sortie existe, sinon le créer
if (!fs.existsSync(outputDirectory)){
    fs.mkdirSync(outputDirectory);
}

// Parcourir chaque fonction extraite
for (let funcName in walletCodeExtracted) {
    let content = `
import React from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function ${funcName}() {
  return (
    <div>
      <CodeBlock
        language="ts"
        title="${funcName}"
        showLineNumbers
      >
        {${JSON.stringify(walletCodeExtracted[funcName])}}
      </CodeBlock>
    </div>
  );
}
`;
    // Écrire le contenu dans un nouveau fichier .jsx
    fs.writeFileSync(path.join(outputDirectory, `${funcName}.jsx`), content);
}
