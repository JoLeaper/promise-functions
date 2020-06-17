const { readAFile, writeAFile, copyAFile } = require('./lib/fileFunctions.js');

writeAFile('./test1', 'here I am!');
readAFile('./test1');
copyAFile('./test1');
