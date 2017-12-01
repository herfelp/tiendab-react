const express = require('express'),
      Router = require('./router')


const app = express();




app.use('/tienda', Router);
app.use(express.static(__dirname + '/public'));



app.listen(3000, function(){
  console.log('server listening on port 3000');
});
