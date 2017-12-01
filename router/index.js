const express = require('express'),
router = require('express').Router(),
MongoClient = require('mongodb'),
ObjectID = require('mongodb'),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
cookieSession = require("cookie-session"),
methodOverride = require("method-override"),
assert = require('assert');

const Producto = require('../models/producto.js');
const Users = require('../models/usuario.js');
const Items = require('../models/item.js');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/tienda', {
  useMongoClient: true
}, function(err, db) {
  if (err) {
    console.log(err)
  } else {
    console.log("Conexion establecida con la base de datos")

    var user = new Users({
      nombre: "usuario.prueba@mail.com",
      password: Math.floor((Math.random() * 1000000) + 100000)
    });

    user.save(function(err){
     if(!err){
       console.log("Credenciales de acceso:")
       console.log("Usuario: "+user.nombre)
       console.log("Contraseña: "+user.password)
     }else{
       console.log("Error" + err);
     }
   });
  }
});


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(methodOverride("_method"));

router.use(cookieSession({
  name:"session",
  keys:["llave-1","llave-2"]
}));


router.post("/login", function(req, res) {
  Users.findOne({
      nombre: req.body.user,
      password: req.body.pass
    },
    function(err, user) {
      if (user != null) {
        req.session.user_id = user._id;
        console.log("validado");
        res.send({status: "Validado"});
      } else {
        console.log("no validado");
        res.send({status: "No_validado"});
      }
    });
});


router.get('/productos',(req, res)=>{
Producto.find({})
     .exec(function(err, productos){
       if (err) {
         res.status(500)
         res.json(err)
       }
       res.json({productos});
     })
});


router.get('/productos/:productoId',(req, res) => {
   let pid = req.params.productoId;
  Producto.findOne({id:pid})
       .exec(function(err, producto){
         if (err) {
           res.status(500)
           res.json(err)
         }
         res.json(producto);
       })
});


router.post('/agregaproducto', (req, res) => {
  //agrega un producto al carrito del usuario
});



let mdb;
MongoClient.connect('mongodb://localhost/tienda', (err, db) => {
   assert.equal(null, err);
   mdb = db;
});



router.get('/productoscarro',(req, res)=>{
  let productoscarro = {};
  mdb.createCollection('productoscarro');
  mdb.collection('productoscarro').find({})
      .each((err, productocarro) => {
         assert.equal(null, err);
          if(!productocarro) { //no more productos
             res.send({ productoscarro });
             return;
          }
         productoscarro[productocarro._id] = productocarro;
      });
});


module.exports = router;
