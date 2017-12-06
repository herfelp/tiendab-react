import React from 'react';
import {Link} from "react-router-dom";


class Login extends React.Component {

 constructor(){
   super()
 }

 handleSubmit = (event) => {
    event.preventDefault();
    this.props.validator(this.refs.user.value, this.refs.pass.value);
 };

  render() {
    return (

        <div className="container_login">
        <div className="formu ">
          <div className="text-center">
            <h3>Inicia Sesión</h3>
          </div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label >Correo electrónico</label>
              <input type="email" className="form-control" ref="user" aria-describedby="emailHelp" placeholder="Ingresa tu email"  name="email" required pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"/>

            </div>
            <div className="form-group">
              <label >Contraseña</label>
              <input type="password" className="form-control" ref="pass" placeholder="Ingresa tu contraseña"  name="password" required/>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success center-block">
                Ingresar
              </button>

            </div>
          </form>
        </div>
        </div>

    )
  };

}

export default Login;
