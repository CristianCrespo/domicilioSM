import React, { useState, useEffect } from "react";

import TablaMensajeros from "./TablaMensajeros";
import MensajerosServices from "../services/MensajerosServices";
import AgregarMensajero from "./AgregarMensajero";
import EditarMensajero from "./EditarMensajero";

const ManejadorMensajeros = () => {
    const estadoInicialListaMensajeros = []
    const [estadoListaMensajeros, setEstadoListaMensajeros] = useState(estadoInicialListaMensajeros);

    const estadoInicialFormulario = {
        id: "",
        nombreM: "",
        direccionM: "",
        cedulaM: "",
        celularM: "",
        placa: ""

    };
    const [mensajeroEditar, setMensajeroEditar] = useState(estadoInicialFormulario);
    const [modoEdicion, setModoEdicion] = useState(false);

    useEffect(() => {
        recuperarMensajeros();
    },[]);
    const recuperarMensajeros = () => {
        MensajerosServices.getAll()
        .then(response => {
            setEstadoListaMensajeros(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    const agregarMensajero = (mensajero) => {
        MensajerosServices.create(mensajero)
        .then(response => {
            const nuevoMensajero = {
                id: response.data.id,
                nombreM: response.data.nombreM,
                direccionM: response.data.direccionM,
                cedulaM: response.data.cedulaM,
                celularM: response.data.celularM,
                placa: response.data.placa
            };
            setEstadoListaMensajeros([...estadoInicialListaMensajeros, nuevoMensajero]);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const editarMensajero = (mensajero) => {
        setModoEdicion(true);
        setMensajeroEditar({
            id: mensajero.id,
            nombreM: mensajero.nombreM,
            direccionM: mensajero.direccionM,
            cedulaM: mensajero.cedulaM,
            celularM: mensajero.celularM,
            placa: mensajero.placa
        });
    };

    const actualizarMensajero = (id, mensajeroActualizado) => {
        setModoEdicion(false);
        MensajerosServices.update(id, mensajeroActualizado)
        .then(response => {
            const mensajeroConElActualizado = estadoListaMensajeros.map(
                (mensajero) =>
                 mensajero.id === id ? mensajeroActualizado : mensajero
            );
            setEstadoListaMensajeros(mensajeroConElActualizado);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        })
    }

    return(
        <div className="row">
            <div className="col-md col-xl-9">
                <h2>Mensajeros</h2>
                <TablaMensajeros
                    mensajero={estadoListaMensajeros}
                    editar={editarMensajero}
                />
            </div>
            <div className="col-md">
                {!modoEdicion ? (
                    <>
                        <h2>Agregar Mensajero</h2>
                        <AgregarMensajero agregar={agregarMensajero}
                        />
                    </>
                ) : (
                    <>
                        <h2>Editar Mensajero</h2>
                        <EditarMensajero
                            mensajeroAEditar={mensajeroEditar}
                            modoEdicion={setModoEdicion}
                            actualizar={actualizarMensajero}
                        />
                    </>
                )}                
            </div>
        </div>
    );
};
export default ManejadorMensajeros;