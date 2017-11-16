import React from 'react';

class Buscador extends React.Component {

 constructor(){
   super()
 }



  render() {
    return (
      <div className="buscador">
        <div className="row">
          <div className="catalogo-nombre col-8">
            <h2>Catálogo de productos</h2>
          </div>
        <div className="formulario col-4">
          <span className="titulobusc">¿Qué estás buscando?</span>
          <form className=" col-12 formbox">
            <input className="form-control mr-sm-2" onChange={this.props.onChange} type="text" placeholder="Buscar producto" name="Search" ></input>
          </form>
        </div>
        </div>
      </div>
    );
  }

}

export default Buscador;
