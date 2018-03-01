const fileSystem = require('fs');
const themeModules = require('./src/modules');
const themeMetadata = require('./src/themeMetadata');

function getJSONTheme() {
  return themeModules.buildStableModules();
}

function saveFile(path, data) {
  fileSystem.writeFile(path, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

saveFile(`./themes/${themeMetadata.themeFile.name}`, getJSONTheme());
