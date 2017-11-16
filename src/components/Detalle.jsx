import React from 'react';

import Barra from './Barra.jsx';



class Detalle extends React.Component{
  constructor() {
    super()
      }

  render(){
    return (
      <div className="contenedor-tienda">
        <Barra/>
        //<Contenedor_carro produ = {this.props.carro} />
    </div>
    );

};

};


export default Detalle;
