import React from 'react';


class Contenido extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div>

        <div className="item">
          <div className="row">
            <div className="col-3">
              <div className="foto">
                <img src={"../img/" + this.props.imgn} alt=""/>
              </div>
            </div>
            <div className="col-9">
              <div className="detalle">
                <p>Nombre: {this.props.nomb}</p>
                <p>Unidades: {this.props.cant}</p>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col subt">
              <p>Subtotal: ${this.props.sub}</p>
            </div>
          </div>
        </div>

      </div>
    )
  }

}

export default Contenido;
