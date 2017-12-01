import React from 'react';
import Login from '../components/Login.jsx';
import {Link} from "react-router-dom";
import * as api from '../api';
class Home extends React.Component {
  constructor() {
   super()
  }

  validator = (user, password) =>{
    api.validateUser(user, password).then(resp =>
    this.setState({
      permiso: resp.status
    })
   )
   .catch(console.error);
  };



  render() {
    return(
      <div>
      <Login
         validator = {this.validator.bind(this)}
        />
      </div>

    )
  }
}



export default Home;
