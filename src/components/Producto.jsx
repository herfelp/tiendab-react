import React from 'react';


class Producto extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div>

            <div className="producto_ind">
              <div className="foto_m">
                <img src={"../img/" + this.props.imgn}></img>
              </div>
              <div className="datos_prod">
                <div >
                  <h5>{this.props.nomb}</h5>
                </div>
                <div className="carac">
                  <p>Precio: ${this.props.prec}
                    <br></br>
                    Cantidad disponible: {this.props.cant}
                  </p>
                </div>
                <div className="row botones">
                  <div className="col-4 ">
                    <button type="button" className=" carc_caj btn btn-primary btn-sm">Ver más</button>
                  </div>
                  <div className="col-4">
                    <button type="button" className=" carc_caj btn btn-warning btn-sm">Añadir</button>
                  </div>
                  <div className="col-4">
                    <input className="form-control input-sm" type="number" min="1" max={this.props.cant} ></input>
                  </div>
                </div>
              </div>
            </div>

      </div>
    )
  }

}

export default Producto;