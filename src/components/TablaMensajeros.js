import React from "react";
import { Link } from "react-router-dom";

export default function TablaMensajeros(props){
    return(
        <table className="table mt-2">
            <thead className="thead-light">
                <tr>
                 <th># ID</th>
                 <th>Nombre</th>
                 <th>Direccion</th>
                 <th>Celular</th>
                 <th>Cedula</th>
                 <th>Placa</th>
                </tr>
            </thead>
            <tbody>
            {props.mensajero.length > 0 ? (
                    props.mensajero.map((m) => (
                        <tr key={m.id}>
                            <td>{m.id}</td>
                            <td>{m.nombreM}</td>
                            <td>{m.direccionM}</td>
                            <td>{m.cedulaM}</td>
                            <td>{m.celularM}</td>
                            <td>{m.placa}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-warning btn-sm m-1"
                                    onClick={(ev) => props.editar(m)}
                                >
                                    Editar
                                </button>
                                
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>No se han agregado Mensajeros</td>
                    </tr>
                )}
           </tbody>
        </table>
        
    );
}