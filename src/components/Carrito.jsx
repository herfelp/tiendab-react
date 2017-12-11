import React from 'react';

import Barra from './Barra.jsx';
import Contenedor_carro from './Contenedor_carro.jsx';
import * as api from '../api';


class Carrito extends React.Component{
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

  render(){
    return (
      <div className="contenedor-tienda">
        <Barra
          conteo = {this.props.cantCarro}
          exit = {this.props.exit}
          carritoactiv = {this.props.carritoactiv}
          carritoinact = {this.props.carritoinact}
          />
        <Contenedor_carro
          carro = {this.state.Carro}
          carritoinact = {this.props.carritoinact}
          />
    </div>
    );

};

};


export default Carrito;
