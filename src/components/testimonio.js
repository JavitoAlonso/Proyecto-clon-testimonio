import React from "react"
import '../css/testimonio.css';

function Testimonio (props){
    return (
      <div className="card-group mb-3 m-3 mw-100 ">
        <div className="row g-0 mw-100 border">
          <div className="col-md-3  ">
            <img src={require(`../images/${props.imagen}.jpg`)} className="img-fluid h-100 mw-100" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title mt-3">{props.nombre}</h5>
              <p className="card-text"><small className="text-muted">{props.cargo}</small></p>
              <p className="card-text text p-3">{props.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Testimonio;