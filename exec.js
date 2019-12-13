const execSync = require('child_process').execSync;
const result = execSync('./entrypoint.sh');
console.log(result);
