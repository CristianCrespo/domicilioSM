import React, { useState, useEffect } from "react";

const EditarDomicilio = (props) => {
    const [domicilio, setDomicilio] = useState(props.domicilioAEditar);

    useEffect(() =>{
        setDomicilio(props.domicilioAEditar);
    },[props]);

    const gestionarCamposFomulario = (event) => {
        const {name, value} = event.target;
        setDomicilio({
            ...domicilio,
            [name]: value
        });
    };
    const accionBotonActualizar =(event) => {
        event.preventDefault();
        props.actualizar(domicilio.id, domicilio);
    };
    return (
        <form onSubmit={accionBotonActualizar}>
            <div className="form-group">
                <label>Nombre</label>
                <input 
                id="nombreS"
                className="form-control"
                type="text"
                name="nombreS"
                value={domicilio.nombreS}
                onChange={gestionarCamposFomulario}
                />
            </div>
            <div className="from-group">
                <label>Direccion Solicitante</label>
                <input
                    id="direccionS"
                    className="form-control"
                    type="text"
                    name="direccionS"
                    value={domicilio.direccionS}
                    onChange={gestionarCamposFomulario}
                />
            </div>
            <div className="from-group">
                <label>Celular Solicitante</label>
                <input
                    id="celularS"
                    className="form-control"
                    type="tel"
                    pattern="[0-9]{10}"
                    placeholder="10 Numeros"
                    name="celularS"
                    value={domicilio.celularS}
                    onChange={gestionarCamposFomulario}
                />
            </div>
            <div className="from-group">
                <label>Hora Solicitante</label>
                <input
                    id="horaS"
                    className="form-control"
                    type="text"
                    name="horaS"
                    value={domicilio.horaS}
                    onChange={gestionarCamposFomulario}
                />
            </div>
            <div className="from-group">
                <label>Nombre Destinatario</label>
                <input
                    id="nombreD"
                    className="form-control"
                    type="text"
                    name="nombreD"
                    value={domicilio.nombreD}
                    onChange={gestionarCamposFomulario}
                />
            </div>
            <div className="from-group">
                <label>Direccion Solicitante</label>
                <input
                    id="direccionD"
                    className="form-control"
                    type="text"
                    name="direccionD"
                    value={domicilio.direccionD}
                    onChange={gestionarCamposFomulario}
                />
            </div>
            <div className="from-group">
                <label>Celular Destinatario</label>
                <input
                    id="celularD"
                    className="form-control"
                    type="tel"
                    pattern="[0-9]{10}"
                    placeholder="10 Numeros"
                    name="celularD"
                    value={domicilio.celularD}
                    onChange={gestionarCamposFomulario}
                />
            </div>
            <div className="from-group">
                <label>Descripcion Paquete</label>
                <input
                    id="descripcionPaquete"
                    className="form-control"
                    type="text"
                    name="descripcionPaquete"
                    value={domicilio.descripcionPaquete}
                    onChange={gestionarCamposFomulario}
                />
            </div>
            <div className="form-group text-center">
                <button type="submit" className="btn btn-success">
                    actualizar
                </button>
                <button 
                    type="submit"
                    className="btn btn-danger m-1"
                    onClick={(ev) => props.modoEdicion(false)}
                >
                    Cancelar                    
                </button>
            </div>
        </form>
    );
};

export default EditarDomicilio;