const fsPromises = require('fs').promises;

const readAFile = (file) => {
  fsPromises.readFile(file)
    .then(() => console.log('DONE!'));
};

const writeAFile = (file, content) => {
  fsPromises.writeFile(file, content)
    .then(() => console.log('DONE!'));
};

const copyAFile = (file) => {
  fsPromises.readFile(file)
    .then(res => {
      fsPromises.writeFile(file, res);
    })
    .then(() => console.log('DONE!'));
};

module.exports = {
  readAFile,
  writeAFile,
  copyAFile
};
