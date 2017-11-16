import React from 'react';

import Vitrina from './Vitrina.jsx';
import Barra from './Barra.jsx';
import Buscador from './Buscador.jsx';


class Tienda extends React.Component{
  constructor() {
    super()
  this.state = {
    filter: null
   }
  }

  filterlist(ev){
       let filter = ev.target.value
       this.setState({
         filter: filter
       })
  }


  render(){
    return (
      <div className="contenedor-tienda">
        <Barra/>
        <Buscador onChange={this.filterlist.bind(this)} />
       <Vitrina products = {this.props.tienda}  filter = {this.state.filter}/>
    </div>
    );
  }




}


export default Tienda;
