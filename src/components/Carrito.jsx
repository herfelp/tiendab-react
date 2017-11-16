import React from 'react';

import Barra from './Barra.jsx';
import Contenedor_carro from './Contenedor_carro.jsx';


class Carrito extends React.Component{
  constructor() {
    super()
      }

  render(){
    return (
      <div className="contenedor-tienda">
        <Barra/>
        <Contenedor_carro produ = {this.props.carro} />
    </div>
    );

};

};


export default Carrito;
