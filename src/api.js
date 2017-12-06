import axios from 'axios';


export const validateUser = (user, pass) => {
  return axios.post('/tienda/login', { user, pass })
              .then(resp => resp.data);
};

export const fetchProducts = () => {
  return axios.get('/tienda/productos')
              .then(resp => resp.data.productos);
};

export const fetchProduct = productId => {
  return axios.get(`/tienda/productos/${productId}`)
              .then(resp => resp.data)
};

export const fetchUser = () => {
  return axios.get('/tienda/usuario')
              .then(resp => resp.data);
};

export const clearSession = () => {
  return axios.get('/tienda/session')
              .then(resp => resp.data);
};

export const agregaItem = (usuarioId, itemId, qt) => {
  return axios.post('/tienda/agregaproducto', {usuarioId, itemId, qt })
              .then(resp => resp.data);
};

export const cuentaCarro = (usuarioId) => {
  return axios.post('/tienda/cuenta', { usuarioId })
              .then(resp => resp.data);
};

export const productosCarro = (usuarioId) => {
  return axios.post('/tienda/carro', { usuarioId })
              .then(resp => resp.data.productos);
};
