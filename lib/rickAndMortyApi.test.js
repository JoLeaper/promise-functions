const { getCharacter, getManyCharacters } = require('./rickAndMorty');
const fs = require('fs').promises;

jest.mock('superagent', () => ({
  get: () => {
    return Promise.resolve({
      body: {
        'id':4,
        'name':'Beth Smith',
        'status':'Alive',
        'species':'Human',
        'type':'',
        'gender':'Female'
      }
    });
  }
}));

describe('gets a singular rick and morty character', () => {  
  it('grabs a rick and morty character by id', () => {
    return getCharacter(4)
      .then(character => {
        console.log(character);
        expect(character).toEqual({
          name: 'Beth Smith',
          status: 'Alive',
          species: 'Human'
        });
      });
  });

  it('grabs several rick and morty characters by id using an array', () => {
    return getCharacter([3, 4])
      .then(character => {
        console.log(character);
        expect(character).toEqual([
          {
            name: 'Summer Smith',
            status: 'Alive',
            species: 'Human'
          }, 
          {
            name: 'Beth Smith',
            status: 'Alive',
            species: 'Human'
          }]);
      });
  });
});
