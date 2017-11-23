import React from 'react';
import axios from 'axios';
import Vitrina from './Vitrina.jsx';
import Barra from './Barra.jsx';
import Buscador from './Buscador.jsx';
import Detalle from './Detalle.jsx';

const pushState = (obj, url) =>
   window.history.pushState(obj,'',url);


class Tienda extends React.Component{
  constructor() {
    super()
  this.state = {
    filter: null,
    produ: [],
    currentProductId: null
   }
  }

  componentDidMount() {
    axios.get('/tienda/productos').then(resp => {
      this.setState({produ: resp.data.productos});
    }).catch(console.error);
  }




  filterlist(ev){
       let filter = ev.target.value
       this.setState({
         filter: filter
       })
  }

  fetchProduct = (productId) =>{
    pushState(
      { currentProductId: productId },
        `/productos/${productId}`
    )
    this.setState({
      currentProductId: productId
    });
  };

  //lookup el producto
  // this.state.produ[productId]


currentContent(){

if(this.state.currentProductId != null){
  console.log("currentContent")
return (<Detalle id={this.state.produ[this.state.currentProductId].id}
  nombre={this.state.produ[this.state.currentProductId].nombre_}
    precio={this.state.produ[this.state.currentProductId].precio}
      cantidad={this.state.produ[this.state.currentProductId].cantidad}
        imagen={this.state.produ[this.state.currentProductId].imagen}/>
  )
}

return (
  <div>
     <Buscador onChange={this.filterlist.bind(this)} />
     <Vitrina
        onProductClick = {this.fetchProduct}
        products = {this.state.produ}
        filter = {this.state.filter}/>
 </div>
  );
};

  render(){
    return (
      <div className="contenedor-tienda">
        <Barra/>
             {this.currentContent()}
    </div>
    );
  }
}


export default Tienda;
