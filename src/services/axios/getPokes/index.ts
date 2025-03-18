import {ApiPokemon} from '..';

export const getPokemons = () => {
  return new Promise(async (resolve, reject) => {
    ApiPokemon.api
      .get(
        'pokemon'
      )
      .then(response => {
        console.log('resp: ', response)
        resolve(response);
      })
      .catch(error => {
        resolve(error);
      });

  });
};