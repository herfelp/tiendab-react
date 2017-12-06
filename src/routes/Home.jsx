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
     carroAct: ''
    }
  }

componentDidMount(){
  api.fetchUser().then(resp =>
    this.setState({
      permiso: resp
    })
 )
 .catch(console.error);
};


  validator = (user, password) =>{
    api.validateUser(user, password).then(resp =>
    this.setState({
      permiso: resp.status
    })
   )
   .catch(console.error);
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
      this.setState({
        carroAct: 'activo'
      })
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
        />
     )
    }
    return(
    <Carrito
        exit ={this.clearSession.bind(this)}
        carritoactiv ={this.activa.bind(this)}
        carritoinact ={this.inactiva.bind(this)}
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
}



export default Home;
