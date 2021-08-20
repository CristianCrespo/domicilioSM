import React, { useState } from "react";

const AgregarMensajero = (props) => {
    const estadoInicialForm = {
        id: null,
        nombreM: "",
        direccionM: "",
        cedulaM: "",
        celularM: "",
        placa: ""
    }
    const [estadoFormMensajero, setEstadoFormMensajero] = useState(estadoInicialForm);
    const gestionCamposForm = (event) => {
        const { name, value } = event.target;
        setEstadoFormMensajero({
            ...estadoFormMensajero,[name]: value
        });
    };
    return(
        <form
            onSubmit={(event) => {
                event.preventDefault()
                    if(
                        !estadoFormMensajero.nombreM ||
                        !estadoFormMensajero.direccionM ||
                        !estadoFormMensajero.cedulaM ||
                        !estadoFormMensajero.celularM ||
                        !estadoFormMensajero.placa
                    )
                    return;
                    props.agregar(estadoFormMensajero);
                    setEstadoFormMensajero(estadoInicialForm);
                }}
        >
            <div className="from-group">
                <label>Nombre</label>
                <input
                    id="nombreM"
                    className="form-control"
                    type="text"
                    name="nombreM"
                    value={estadoFormMensajero.nombreM}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>Direccion</label>
                <input
                    id="direccionM"
                    className="form-control"
                    type="text"
                    name="direccionM"
                    value={estadoFormMensajero.direccionM}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>Cedula</label>
                <input
                    id="cedulaM"
                    className="form-control"
                    type="text"
                    name="cedulaM"
                    value={estadoFormMensajero.cedulaM}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>Celular</label>
                <input
                    id="celularM"
                    className="form-control"
                    type="text"
                    name="celularM"
                    value={estadoFormMensajero.celularM}
                    onChange={gestionCamposForm}
                />
            </div>
            <div className="from-group">
                <label>Placa</label>
                <input
                    id="placa"
                    className="form-control"
                    type="text"
                    name="placa"
                    value={estadoFormMensajero.placa}
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
export default AgregarMensajero;