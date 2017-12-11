import React from 'react';
import Contenido from './Contenido.jsx';
import {Link} from "react-router-dom";
import * as api from '../api';

class Contenedor_carro extends React.Component {

  constructor() {
    super()
    this.state = {
      userId: null
     }
  }



pagaProductos(){
  api.fetchUser().then(user => {
    this.setState({
      userId: user
    });
    let userId =  this.state.userId;
   api.pagaProductos(userId).then(resp => {
       console.log(resp)
   }).catch(console.error);
 }).catch(console.error);
};




  render() {
    let item = []
    let suma = 0
    if (this.props.carro != null) {
      this.props.carro.forEach((conten) => {
        item.push(<Contenido key={conten._id} nomb={conten.nombre_} imgn={conten.imagen} prec={conten.precio} cant={conten.qt} sub={conten.sub}  />)
        suma = suma + conten.sub
      })
    } else {
      item.push(
        <h1>Loading...</h1>
      )
    }

    return (
      <div className="contenedor-carrito">
        <div className="row">
          <div className="col">
            <div className="nomprod">
              <h4>Carrito de compras</h4>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col">
        <div className="list-group">
          {item}
        </div>
        </div>
        <div className="col">
          <h3>Total: ${suma}</h3>
          <div className="row botones">
            <div className="col">

              <Link  role="button" className="btn btn-secondary" to="/" onClick={this.props.carritoinact} >Cancelar</Link>
              <Link  role="button"  className="btn btn-secondary" to="/"onClick={this.props.carritoinact} >Pagar</Link>
            </div>

          </div>
        </div>
        </div>

      </div>
    )
  }

}

export default Contenedor_carro;
