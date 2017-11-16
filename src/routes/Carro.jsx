import React from 'react';
import {Link} from "react-router-dom";
import Carrito from '../components/Carrito.jsx';


import data from '../testData';
console.log(data.productos);


class Carro extends React.Component {
  constructor() {
   super()
  }

  render() {
    return(

    <Carrito carro={data.productos}/>

    )
  }
}



export default Carro;
