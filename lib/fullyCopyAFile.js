const fsPromises = require('fs').promises;

const fullyCopyAFile = (src, dst) => {
  return fsPromises.readFile(src)
    .then(res => fsPromises.writeFile(dst, res));
};

module.exports = {
  fullyCopyAFile
};
