import React from 'react';
import {Link} from "react-router-dom";
import * as api from '../api';

class Barra extends React.Component {
  constructor() {
    super()
  this.state = {
    countCarro: ''
   }
  }

  componentDidMount() {
    api.fetchUser().then(user => {
      this.setState({
        userId: user
      });

      api.cuentaCarro(this.state.userId).then(count => {
        this.setState({
          countCarro: count.count
        });
      }).catch(console.error);

    }).catch(console.error);
  };


  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light ">
              <a className="navbar-brand" >TiendaReactJs</a>
              <div >
              </div>
                <ul className="navbar-nav ml-auto">
                  <li >
                    <Link to="store" className="nav-link"><i className="material-icons">apps</i></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="carro" className="nav-link"><i className="material-icons">shopping_cart</i><span className="badge bg-red">{this.state.countCarro}</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="" className="nav-link"><i className="material-icons">exit_to_app</i></Link>
                  </li>
                </ul>
            </nav>
      </div>

    );
  }
}


export default Barra;
