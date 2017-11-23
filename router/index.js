const express = require('express'),
data = require('../src/testData'),
router = require('express').Router();

const productos = data.productos.reduce((obj, producto)=>{
  obj[producto.id]=producto;
  return obj;
},{});


router.get('/productos',(req, res)=>{
  res.send({
    productos: productos
  });
});


module.exports = router;
