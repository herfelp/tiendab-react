import React from 'react';
import Producto from './Producto.jsx';


class Vitrina extends React.Component {

 constructor(){
   super()
 }

  render() {

    let item =[]
    if(this.props.products != null && this.props.filter !=null){
      console.log("filtro no null")
      this.props.products.forEach((product)=>{
        let filtro = this.props.filter
        if(product.nombre.indexOf(filtro) > -1){
         item.push(<Producto nomb={product.nombre_} imgn={product.imagen} prec={product.precio} cant={product.cantidad} key={product.nombre} />)
        }
      })
    }else if(this.props.products != null){
      this.props.products.forEach((product)=>{
         item.push(<Producto nomb={product.nombre_} imgn={product.imagen} prec={product.precio} cant={product.cantidad} key={product.nombre} />)
      })
    }else{
      item.push(<h1>Loading...</h1>)
    }


    return (
      <div className="cont-prod">
        <div className="productos d-flex flex-row">
         {item}
       </div>
     </div>
    )
  }

}

export default Vitrina;
