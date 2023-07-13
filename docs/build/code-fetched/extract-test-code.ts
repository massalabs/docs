const fs = require('fs');
const path = require('path');

function extractTestCode(fileName, testName) {
  const data = fs.readFileSync(path.resolve(__dirname, fileName), 'utf-8');
  const lines = data.split('\n');
  let startLine = -1;
  let endLine = -1;

  lines.forEach((line, index) => {
    if (line.includes(`/* Test function ${testName}`)) {
      startLine = index;
    }
    if (line.includes(`/* End of test */`) && startLine !== -1 && endLine === -1) {
      endLine = index;
    }
  });

  if (startLine !== -1 && endLine !== -1) {
    return lines.slice(startLine + 2, endLine).join('\n');
  } else {
    return '';
  }
}

const testCode = extractTestCode('test-wallet.ts', 'walletGenerateNewAccount');
// Write to JSON file
const jsonOutput = {
  walletGenerateNewAccount: testCode,
};

fs.writeFileSync('docs/build/code-fetched/code-extracted-wallet.json', JSON.stringify(jsonOutput, null, 2));