const express = require('express'),
      Router = require('./router')


const app = express();

app.set('view engine', 'ejs');

app.get(['/','/store','/carro','/productos/:'],(req,res)=>{
res.render('index')
});





app.use('/tienda', Router);
app.use(express.static('public'));



app.listen(3000, () => {
  console.log('server listening on port 3000');
});
