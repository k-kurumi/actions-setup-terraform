const execSync = require('child_process').execSync;
const result = execSync('bash ./entrypoint.sh');
console.log(result.toString());
