import React from 'react';

import Vitrina from './Vitrina.jsx';
import Barra from './Barra.jsx';
import Buscador from './Buscador.jsx';
import Detalle from './Detalle.jsx';
import * as api from '../api';


class Tienda extends React.Component{
  constructor() {
    super()
  this.state = {
    filter: null,
    produ: [],
    currentProductId: null,
    agregaProductId: null,
    userId: null
   }
  }

  componentDidMount() {
    api.fetchProducts().then(productos => {
      this.setState({
        produ: productos
      });
    }).catch(console.error);

    api.fetchUser().then(user => {
      this.setState({
        userId: user
      });
    }).catch(console.error);
  };


  filterlist(ev){
       let filter = ev.target.value
       this.setState({
         filter: filter
       })
  }

  fetchProduct = (productId) => {
    api.fetchProduct(productId).then(product => {
      this.setState({
        currentProductId: product._id,
        produ :{
          ...this.state.produ,
          [product._id]: product
        }
      });

    });
  };


removeState(){
  this.setState({
    currentProductId: null
  });
};


currentContent(){

if(this.state.currentProductId != null){
return (<Detalle id={this.state.produ[this.state.currentProductId].id}
  nombre={this.state.produ[this.state.currentProductId].nombre_}
    precio={this.state.produ[this.state.currentProductId].precio}
      cantidad={this.state.produ[this.state.currentProductId].cantidad}
        imagen={this.state.produ[this.state.currentProductId].imagen}
         onClick={this.removeState.bind(this)}
        />
  )
}

return (
  <div>
     <Buscador onChange={this.filterlist.bind(this)} />
     <Vitrina
        onProductClick = {this.fetchProduct}
        onAgregarVit = {this.props.agregaProducto}
        products = {this.state.produ}
        filter = {this.state.filter}
         />
 </div>
  );
};

  render(){
    return (
      <div className="contenedor-tienda">
        <Barra
          conteo = {this.props.cantCarro}
          exit = {this.props.exit}
          carritoactiv = {this.props.carritoactiv}
          carritoinact = {this.props.carritoinact}
          />
             {this.currentContent()}
    </div>
    );
  }
}


export default Tienda;
