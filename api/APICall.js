import axios from 'axios';
const listurl = 'https://api.instantwebtools.net/v1/passenger?page=';
const listurl2 = 'https://pokeapi.co/api/v2/generation/?offset=';

export const listAPI = async params => {
  var {offset} = params;
  var res = await axios.get(listurl + offset + '&size=10');
  console.log(res, 'oooooooooooooo');
  return res.data;
};

export const listapi2 = async params => {
  var {offset} = params;
  var res = await axios.get(listurl2 + offset + '&limit=10');
  return res.data;
};
