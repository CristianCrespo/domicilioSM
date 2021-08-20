import React, { useState } from "react";

const AgregarDomicilio = (props) => {
    const estadoInicialForm = {
        id: null,
        nombreS: "",
        direccionS: "",
        celularS: "",
        horaS: "",
        nombreD: "",
        direccionD: "",
        celularD: "",
        descripcionPaquete: "",
        estado:"Pendiente"
    }
    const [estadoFormDomicilio, setEstadoFormDomicilio] = useState(estadoInicialForm);
    const gestionCamposForm = (event) => {
        const { name, value } = event.target;
        setEstadoFormDomicilio({
            ...estadoFormDomicilio, [name]: value
        });
    };
    return(
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if(
                    !estadoFormDomicilio.nombreS ||
                    !estadoFormDomicilio.direccionS ||
                    !estadoFormDomicilio.celularS ||
                    !estadoFormDomicilio.horaS ||
                    !estadoFormDomicilio.nombreD ||
                    !estadoFormDomicilio.direccionD ||
                    !estadoFormDomicilio.celularD ||
                    !estadoFormDomicilio.descripcionPaquete
                )
                return;
                props.agregar(estadoFormDomicilio);
                setEstadoFormDomicilio(estadoInicialForm);
            }}
        >
            <div className="from-group">
                <label>Nombre Solicitante</label>
                <input
                    id="nombreS"
                    className="form-control"
                    type="text"
                    name="nombreS"
                    value={estadoFormDomicilio.nombreS}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>Direccion Solicitante</label>
                <input
                    id="direccionS"
                    className="form-control"
                    type="text"
                    name="direccionS"
                    value={estadoFormDomicilio.direccionS}
                    onChange={gestionCamposForm}
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
                    value={estadoFormDomicilio.celularS}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>Hora Solicitante</label>
                <input
                    id="horaS"
                    className="form-control"
                    type="text"
                    name="horaS"
                    value={estadoFormDomicilio.horaS}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>Nombre Destinatario</label>
                <input
                    id="nombreD"
                    className="form-control"
                    type="text"
                    name="nombreD"
                    value={estadoFormDomicilio.nombreD}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>Direccion Solicitante</label>
                <input
                    id="direccionD"
                    className="form-control"
                    type="text"
                    name="direccionD"
                    value={estadoFormDomicilio.direccionD}
                    onChange={gestionCamposForm}
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
                    value={estadoFormDomicilio.celularD}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>Descripcion Paquete</label>
                <input
                    id="descripcionPaquete"
                    className="form-control"
                    type="text"
                    name="descripcionPaquete"
                    value={estadoFormDomicilio.descripcionPaquete}
                    onChange={gestionCamposForm}
                />
            </div>
            <br></br>
            <div className="form-group text-center">
                <button type="submit" className="btn btn-primary">
                    Agregar
                </button>
            </div>
        </form>
    );

};
export default AgregarDomicilio;