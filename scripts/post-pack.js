const shell = require('shelljs');
const fs = require('fs-extra');
const path = require('path');
let tar = '';

var removeTarFiles = async (root) => {
  if (fs.existsSync(root)) {
    fs.readdirSync(root).forEach((file, index) => {
      var path = root + '/' + file;
      if (!fs.lstatSync(path).isDirectory()) {
        if(file.indexOf('.tgz') > -1) {
          console.log(`file: ${file}`);
          tar = path;
          fs.unlinkSync(path);
        }
      }
    });
  }
};


shell.cp('-R', 'dist/', 'package');
shell.cp('package.json', 'package');

console.log(`Build Folder: ${path.join(__dirname, '../')}`);

removeTarFiles(path.join(__dirname, '../'));

console.log(`Tar File: ${tar}`);

if (shell.exec(`tar cvzf ${tar} package`).code !== 0) {
  shell.echo('Error: Git commit failed');
  shell.exit(1);
}
