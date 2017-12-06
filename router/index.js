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
     if (!err) {
       console.log("Credenciales de acceso:")
       console.log("Usuario: "+user.nombre)
       console.log("Contraseña: "+user.password)
     } else {
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


router.post("/login", (req, res) => {
  Users.findOne({
      nombre: req.body.user,
      password: req.body.pass
    },
    function(err, user) {
      if (user != null) {
        req.session.user_id = user._id;
        res.send({status: "Validado"});
      } else {
        res.send({status: null});
      }
    });
});

router.get("/usuario", (req, res) => {
  res.send(req.session.user_id);

});

router.get("/session", (req, res) => {
  console.log("Exit session")
  req.session.user_id = '';
  res.send(req.session.user_id);
});


router.get('/productos',(req, res) => {
Producto.find({})
     .exec(function(err, productos){
       if (err) {
         res.status(500)
         res.json(err)
       }
       res.json({productos});
     })
});


router.get('/productos/:productId', (req, res) => {
   let pid = req.params.productId;
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
  Producto.findOne({
      id: req.body.itemId
    },
    function(err, producto) {
      if (producto != null) {
        var item = new Items({
          userId: req.body.usuarioId,
          nombre_: producto.nombre_,
          nombre: producto.nombre,
          precio: producto.precio,
          qt: req.body.qt,
          sub: req.body.qt * producto.precio,
          imagen: producto.imagen
        });
        item.save(function(err){
         if(!err){
              Items.count({ userId:req.body.usuarioId }, (err, count) => {
               res.send({count});
               });
         }else{
           console.log("Error" + err);
         }
       });

      } else {
        console.log("no existe el producto");
        res.send( "no existe el producto");
      }
    });
});


router.post('/cuenta', (req, res) => {
  Items.count({ userId:req.body.usuarioId }, (err, count) => {
     if(count === 0){
       res.send('');
     }else{
      res.send({count})
    }
   });
});


router.post('/carro', (req, res) => {
  Items.find({userId:req.body.usuarioId})
       .exec(function(err, productos){
         if (err) {
           res.status(500)
           res.json(err)
         }
         res.json({productos});
       })
});







module.exports = router;
