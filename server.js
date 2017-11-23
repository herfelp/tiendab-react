const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      cookieSession = require("cookie-session"),
      methodOverride = require("method-override"),
      Router = require('./router')


const app = express();


mongoose.Promise = global.Promise;


const Users = require('./models/usuario.js');


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

app.use('/tienda', Router);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(methodOverride("_method"));

app.use(cookieSession({
  name:"session",
  keys:["llave-1","llave-2"]
}));



app.post("/login", function(req, res) {
  Users.findOne({
      nombre: req.body.user,
      password: req.body.pass
    },
    function(err, user) {
      if (user != null) {
        req.session.user_id = user._id;
        res.send("Validado");
      } else {
        res.send("No_validado");
      }
    });
});

app.listen(3000, function(){
  console.log('server on port 3000');
});
