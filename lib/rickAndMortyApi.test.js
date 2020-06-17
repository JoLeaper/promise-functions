const { getCharacter } = require('./rickAndMorty');
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
        'gender':'Female',
        'origin':{ 'name':'Earth (Replacement Dimension)',
          'url':'https://rickandmortyapi.com/api/location/20' },
        'location':{ 'name':'Earth (Replacement Dimension)',
          'url':'https://rickandmortyapi.com/api/location/20' },
        'image':'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      }
    });
  }
}));

describe('copying a function', () => {  
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
});
