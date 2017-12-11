import React from 'react';
import {Link} from "react-router-dom";


class Barra extends React.Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light ">
              <a className="navbar-brand" >TiendaReactJs</a>
              <div >
              </div>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item" onClick={this.props.carritoinact}>
                    <Link to="/" className="nav-link"><i className="material-icons" >apps</i></Link>
                  </li>
                  <li className="nav-item" onClick={this.props.carritoactiv}>
                    <Link to="/" className="nav-link"><i className="material-icons" >shopping_cart</i><span className="badge bg-red">{this.props.conteo}</span></Link>
                  </li>
                  <li className="nav-item" onClick={this.props.exit}>
                    <Link to="/" className="nav-link"><i className="material-icons" >exit_to_app</i></Link>
                  </li>
                </ul>
            </nav>
      </div>

    );
  }
}


export default Barra;
