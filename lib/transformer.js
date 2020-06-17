const fsPromises = require('fs').promises;

const transformer = (src) => {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(res => {
      return res
        .split('')
        .filter(letter => (letter.toUpperCase() !== letter) || letter === ' ')
        .map(letter => letter.toUpperCase())
        .reverse()
        .join('');
    })
    .then(newString => {
      return fsPromises.writeFile(src, newString);
    } 
    );
};

module.exports = {
  transformer
};
