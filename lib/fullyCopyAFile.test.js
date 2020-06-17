const { fullyCopyAFile } = require('./fullyCopyAFile');
const fs = require('fs').promises;

describe('copying a function', () => {
  beforeAll(() => {
    return fs.writeFile('./this-is-my-test.txt', 'this is what is going to pass');
  });
  afterAll(() => {
    return fs.unlink('./this-is-my-test.txt');
  });
  
  it('copies a file', () => {
    return fullyCopyAFile('./this-is-my-test.txt', './copy-this-is-my-test.txt')
      .then(() => {
        return fs.readFile('./copy-this-is-my-test.txt', { encoding: 'utf8' });
      })
      .then(expected => {
        expect(expected).toEqual('this is what is going to pass');
      });
  });
});
