import React, { useState, useEffect } from "react";

const EditarMensajero = (props) => {
    const [mensajero, setMensajero] = useState(props.mensajeroAEditar);

    useEffect(() => {
        setMensajero(props.mensajeroAEditar);
    },[props]);

    const gestionarCamposFomulario = (event) => {
        const {name, value} = event.target;
        setMensajero({
            ...mensajero,
            [name]: value
        });
    };
    const accionBotonActualizar =(event) => {
        event.preventDefault();
        props.actualizar(mensajero.id, mensajero);
    };
    return (
        <form onSubmit={accionBotonActualizar}>
            <div className="form-group">
                <label>Nombre</label>
                <input 
                id="nombreM"
                className="form-control"
                type="text"
                name="nombreM"
                value={mensajero.nombreM}
                onChange={gestionarCamposFomulario}
                />
            </div>
            <div className="from-group">
                <label>Direccion</label>
                <input
                    id="direccionM"
                    className="form-control"
                    type="text"
                    name="direccionM"
                    value={mensajero.direccionM}
                    onChange={gestionarCamposFomulario}
                />
            </div>
            <div className="from-group">
                <label>Cedula</label>
                <input
                    id="cedulaM"
                    className="form-control"
                    type="text"
                    name="cedulaM"
                    value={mensajero.cedulaM}
                    onChange={gestionarCamposFomulario}
                />
            </div>
            <div className="from-group">
                <label>Celular</label>
                <input
                    id="celularM"
                    className="form-control"
                    type="text"
                    name="celularM"
                    value={mensajero.celularM}
                    onChange={gestionarCamposFomulario}
                />
            </div>
            <div className="from-group">
                <label>Placa</label>
                <input
                    id="placa"
                    className="form-control"
                    type="text"
                    name="placa"
                    value={mensajero.placa}
                    onChange={gestionarCamposFomulario}
                />
            </div>
            <br></br>
            <div className="form-group text-center">
                <button type="submit" className="btn btn-success">
                    actualizar
                </button>
                <button 
                    className="btn btn-danger m-1"
                    onClick={(ev) => props.modoEdicion(false)}
                >
                    Cancelar                    
                </button>
            </div>
        </form>
    );
};

export default EditarMensajero;