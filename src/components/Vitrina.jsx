import React from 'react';
import Producto from './Producto.jsx';


class Vitrina extends React.Component {

 constructor(){
   super()
 }


  render() {

    let item =[]
    let click = this.props.onProductClick
    let agrega = this.props.onAgregarVit
    let obj = this.props.products
    let filtro = this.props.filter
    if(this.props.products != null && this.props.filter !=null){
      Object.keys(obj).forEach((productId)=>{
        if(obj[productId].nombre.indexOf(filtro) > -1){
         item.push(<Producto
           key={productId}
           id={obj[productId].id}
           nomb={obj[productId].nombre_}
           imgn={obj[productId].imagen}
           prec={obj[productId].precio}
           cant={obj[productId].cantidad}
           onClick={click}
           onAgregar={agrega}
             />)
        }
      })
    }else if(this.props.products != null){
        Object.keys(obj).forEach((productId)=>{
         item.push(<Producto
           key={productId}
           id={obj[productId].id}
           nomb={obj[productId].nombre_}
           imgn={obj[productId].imagen}
           prec={obj[productId].precio}
           cant={obj[productId].cantidad}
           onClick={click}
           onAgregar={agrega}
           />)
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
