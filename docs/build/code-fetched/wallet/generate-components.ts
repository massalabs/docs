// const fs = require('fs');
// const path = require('path');
// const walletCodeExtracted = require('./code-extracted-wallet.json');

// // Définir le chemin du dossier dans lequel vous voulez générer les composants
// const outputDirectory = path.join(__dirname, 'outputDirectory');

// // Vérifier si le dossier de sortie existe, sinon le créer
// if (!fs.existsSync(outputDirectory)){
//     fs.mkdirSync(outputDirectory);
// }

// // Parcourir chaque fonction extraite
// for (let funcName in walletCodeExtracted) {
//     let content = `
// import React from 'react';
// import CodeBlock from '@theme/CodeBlock';

// export default function ${funcName}() {
//   return (
//     <div>
//       <CodeBlock
//         language="ts"
//         title="${funcName}"
//         showLineNumbers
//       >
//         {${JSON.stringify(walletCodeExtracted[funcName])}}
//       </CodeBlock>
//     </div>
//   );
// }
// `;
//     // Écrire le contenu dans un nouveau fichier .jsx
//     fs.writeFileSync(path.join(outputDirectory, `${funcName}.jsx`), content);
// }
