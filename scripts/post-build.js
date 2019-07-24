const exec = require('child_process').exec;
const args = process.argv.slice(2);

var yourscript = exec(`sh ${__dirname}/post-build.sh ${args[0]}`, (error, stdout, stderr) => {
  console.log(`${stdout}`);
  console.log(`${stderr}`);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
});
