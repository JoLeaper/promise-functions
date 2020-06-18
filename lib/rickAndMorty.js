const request = require('superagent');

// superagent for rick and morty api
request.get('https://rickandmortyapi.com/api/character/')
  .then(res => console.log(res));

  
const getCharacter = (id) => {
  return request.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => ({
      name: res.body.name,
      status: res.body.status,
      species: res.body.species
    }));
};

const getManyCharacters = (ids) => {
  return Promise.all(
    ids.map(id => {
      return getCharacter(id);
    })
  )
    .then(res => res.map(character => {
      return character;
    }));
};


module.exports = {
  getCharacter,
  getManyCharacters
};
