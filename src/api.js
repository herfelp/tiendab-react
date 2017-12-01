import axios from 'axios';


export const validateUser = (user, pass) => {
  return axios.post('/tienda/login', { user, pass })
              .then(resp => resp.data);
};


export const fetchProducts = () => {
  return axios.get('/tienda/productos')
              .then(resp => resp.data.productos);
};


export const agregaItem = (userId, itemId, qt) => {
  return axios.post('/tienda/agregaproducto', { userId, itemId, qt })
              .then(resp => resp.data);
};
