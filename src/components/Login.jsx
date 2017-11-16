import React from 'react';
import {Link} from "react-router-dom";

class Login extends React.Component {

 constructor(){
   super()
 }



  render() {
    return (
      <div className="container_login">
        <div className="formu ">
          <div className="text-center">
            <h3>Inicia Sesión</h3>
          </div>
          <form >
            <div className="form-group">
              <label >Correo electrónico</label>
              <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu email"  name="email" required pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"/>

            </div>
            <div className="form-group">
              <label >Contraseña</label>
              <input type="password" className="form-control" id="InputPassword1" placeholder="Ingresa tu contraseña"  name="password" required/>
            </div>
            <div className="text-center">
              <Link  role="submit" className="btn btn-success center-block" to="store" >Ingresar</Link>

            </div>
          </form>
        </div>

      </div>
    )
  };

}

export default Login;
