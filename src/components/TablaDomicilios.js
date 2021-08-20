import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function TablaDomicilios(props) {

    const [show, setShow] = useState(false);
    const handleModalClose = (e) => {
        setShow(false);
    };
      
      const handleModalOpen = () => {
        setShow(true);
    };
    
    const [cambioEstado, setCambioEstado] = useState(false);
    
    return(
        <table className="table mt-2">
            <thead className="thead-light">
                <tr>
                 <th># ID</th>
                 <th>Solicitante</th>
                 <th>Estado</th>
                 <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {props.domicilios.length > 0 ? (
                    props.domicilios.map((d) => (
                        <tr key={d.id}>
                            <td>{d.id}</td>
                            <td>{d.nombreS}</td>
                            <td>
                            {!cambioEstado ?(
                                    <button
                                    className="button btn btn-success btn-sm m-1"
                                        onClick={(ev) => setCambioEstado(true) }
                                    >
                                        Pendiete
                                    </button>
                                ) : (
                                    <button 
                                    className="button btn btn-secondary btn-sm m-1"
                                    onClick={(ev) => setCambioEstado(false)}>
                                        Cerrado
                                    </button>
                                )
                                }   
                            </td>
                            <td>
                                <div
                                    hidden={!show}  
                                >
                                    <div
                                    className="modal-background"
                                    onClick={handleModalClose}
                                    >
                                        <div className="modal-card">
                                            <div class="text-center"><h1 class="display-2">Domicilios SM</h1></div> 
                                            <dl class="row">
                                            <dt class="col-sm-6"><strong><h5>Informacion del Solicitante</h5></strong></dt><dt class="col-sm-6"><strong><h5>Informacion del Destinatario</h5></strong></dt>                  
                                            <dt class="col-sm-2 text-muted">Nombre:</dt><dd class="col-sm-4">{d.nombreS}</dd>             <dt class="col-sm-2 text-muted">Nombre:</dt><dd class="col-sm-3">{d.nombreD}</dd>
                                            <dt class="col-sm-2 text-muted">Celular:</dt><dd class="col-sm-4">{d.celularS}</dd>           <dt class="col-sm-2 text-muted">Celular:</dt><dd class="col-sm-3">{d.celularD}</dd>
                                            <dt class="col-sm-2 text-muted">Hora recogida:</dt><dd class="col-sm-4">{d.horaS}</dd>        <dt class="col-sm-2 text-muted">Dreccion:</dt><dd class="col-sm-3">{d.direccionD}</dd>
                                            <dt class="col-sm-2 text-muted">Observacion:</dt><dd class="col-sm-10">{d.descripcionPaquete}</dd>
                                            <dt class="col-sm-2 text-muted">Dreccion:</dt><dd class="col-sm-10">{d.direccionS}</dd>

                                            </dl> 
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="button btn btn-primary btn-sm m-1"
                                    onClick={handleModalOpen}  
                                >
                                    Detalles
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-warning btn-sm m-1"
                                    onClick={(ev) => props.editar(d)}
                                >
                                    Editar
                                </button>
                                
                                
                                <button
                                    type="button"
                                    className="btn btn-danger btn-sm m-1"
                                    onClick={(ev) => props.eliminar(d.id)}
                                >
                                    Cerrar
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>No se han agregado domicilios</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}


