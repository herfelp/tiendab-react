import React from 'react';
import {Link} from "react-router-dom";
import Carrito from '../components/Carrito.jsx';
import * as api from '../api';

import data from '../testData';
console.log(data.productos);


class Carro extends React.Component {
  constructor() {
   super()
   this.state = {
     Carro: [],
     userId: null
    }
  }

  componentDidMount(){
    api.fetchUser().then(user => {
      this.setState({
        userId: user
      });
      api.productosCarro(this.state.userId).then(productos => {
        this.setState({
          Carro: productos
        });
      }).catch(console.error);
    }).catch(console.error);
  };

  render() {
    return(

    <Carrito carro={this.state.Carro}/>

    )
  }
}



export default Carro;
