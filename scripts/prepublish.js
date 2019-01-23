const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;
const currentVersion = 'latest';
function getCurrentVersion () {
  var lernaPath = path.join(__dirname,'../lerna.json');
  var lernaJson = JSON.parse(fs.readFileSync(lernaPath,{encoding:'utf8'}));
  currentVersion = lernaJson.version;
}
console.log('prepublish:yyl');
getCurrentVersion();
console.log(`currentVersion: ${currentVersion}`)

var targetNpm = path.join(__dirname,'../packages/pack1');
var cmd = `cd ${targetNpm}; npm i yyl-learn-pack2@${currentVersion}`;
console.log(cmd);
execSync(cmd);

