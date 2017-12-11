import React from 'react';
import Login from '../components/Login.jsx';
import Tienda from '../components/Tienda.jsx';
import Carrito from '../components/Carrito.jsx';
import {Link} from "react-router-dom";
import * as api from '../api';
class Home extends React.Component {
  constructor() {
   super()
   this.state = {
     permiso: '',
     carroAct: '',
     userId: null,
     countCarro: ''
    }
  }


agregaProducto( proid, qt  ) {
  if(qt!=''){
    api.fetchUser().then(user => {
      this.setState({
        userId: user
      });
      let userId =  this.state.userId;
     api.agregaItem(userId, proid, qt).then(count => {
       this.setState({
         countCarro: count.count
       });
     }).catch(console.error);
   }).catch(console.error);
  }
};


  validator = (user, password) =>{
    api.validateUser(user, password).then(resp => {
      this.setState({
         permiso: resp.status
    })
    api.fetchUser().then(resp =>{
      this.setState({
        userId: resp
      })
      let userId =  this.state.userId;
      api.cuentaCarro(userId).then(count => {
        this.setState({
          countCarro: count.count
        });
      }).catch(console.error);
    }).catch(console.error);
   }).catch(console.error);
  };


    clearSession(){
      api.clearSession().then(resp => {
        this.setState({
          permiso: resp
        })
      }).catch(console.error);
      {this.currentContent()}
    };

    activa(){
      if(this.state.countCarro != undefined){
         this.setState({
            carroAct: 'activo'
         })
      }
    };

    inactiva(){
      this.setState({
        carroAct: ''
      })
    };



  currentContent(){
  if (this.state.permiso != '') {
    if(this.state.carroAct != 'activo' ){
      return(  <Tienda
             exit ={this.clearSession.bind(this)}
             carritoactiv ={this.activa.bind(this)}
             cantCarro={this.state.countCarro}
             agregaProducto={this.agregaProducto.bind(this)}
        />
     )
    }
    return(
    <Carrito
        exit ={this.clearSession.bind(this)}
        carritoactiv ={this.activa.bind(this)}
        carritoinact ={this.inactiva.bind(this)}
        cantCarro={this.state.countCarro}
      />
    )

  }
  return  <Login
     validator ={this.validator.bind(this)}
    />
};


  render() {
    return(
      <div>
         {this.currentContent()}
      </div>
    )
  }
};



export default Home;
