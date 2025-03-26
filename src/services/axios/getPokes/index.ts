import { ApiPokemon } from '..';

import axios from 'axios';

export const getPokemons = () => {
  return new Promise(async (resolve, reject) => {
    ApiPokemon.api
      .get(
        'pokemon'
      )
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        resolve(error);
        reject(error)
      });

    

  });
};

export const getIndividualPokemons = (url: string) => {
  return new Promise(async (resolve, reject) => {
    axios.get(url).then(response => {
      resolve(response);
    })
    .catch(error => {
      resolve(error);
      reject(error)
    });

  });
};