import React from 'react';
import {Link} from "react-router-dom";


class Detalle extends React.Component{
  constructor() {
    super()
      }

  limpiar = () => {
    this.props.onClick();
  };


  render(){
    return (
      <div className="contenedor-producto" >
        <div className="row">
          <div className="col nomprod-col">
            <div className="nomprod">
              <h4>{this.props.nombre}</h4>
            </div>
           <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col">

            <div className="fotop">
              <img src={"../img/" + this.props.imagen} alt="imagen"/>
            </div>
          </div>
          <div className="col">
            <div className="datos_prod">

              <div className="carac">
                <p>Precio: ${this.props.precio}<br/> Cantidad disponible: {this.props.cantidad}
                </p>
              </div>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="boton">
                   <Link to="/" className="btn btn-secondary" onClick={this.limpiar}>Atrás</Link>
            </div>
          </div>
        </div>
          </div>
    );

};

};


export default Detalle;
