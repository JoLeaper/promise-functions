const { transformer } = require('./transformer');
const fs = require('fs').promises;

describe('copying a function', () => {
  beforeAll(() => {
    return fs.writeFile('./this-is-my-test.txt', 'i Am tHE bESt');
  });
  afterAll(() => {
    return fs.unlink('./this-is-my-test.txt');
  });
  
  it('transforms a file', () => {
    return transformer('./this-is-my-test.txt')
      .then(() => {
        return fs.readFile('./this-is-my-test.txt', { encoding: 'utf8' });
      })
      .then(expected => {
        expect(expected).toEqual('TB T M I');
      });
  });
});
