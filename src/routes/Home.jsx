import React from 'react';
import Login from '../components/Login.jsx';
import {Link} from "react-router-dom";

class Home extends React.Component {
  constructor() {
   super()
  }

  render() {
    return(
      <div>
      <Login />
      </div>

    )
  }
}



export default Home;
