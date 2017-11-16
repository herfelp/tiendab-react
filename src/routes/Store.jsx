import React from 'react';
import {Link} from "react-router-dom";
import Tienda from '../components/Tienda.jsx';


import data from '../testData';
console.log(data.productos);


class Store extends React.Component {
  constructor() {
   super()
  }

  render() {
    return(

    <Tienda tienda={data.productos}/>

    )
  }
}



export default Store;
