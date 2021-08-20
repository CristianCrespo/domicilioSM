import React, { useState, useEffect } from "react";

import TablaDomicilios from "./TablaDomicilios";
import DomiciliosServices from "../services/DomiciliosServices";
import AgregarDomicilio from "./AgregarDomicilio";
import EditarDomicilio from "./EditarDomicilio";

const ManejadorDomicilios = () => {
    const estadoInicialListaDomicilios = [];
    const [estadoListaDomicilios, setEstadoListaDomicilios] = useState(estadoInicialListaDomicilios);

    const esdatoInicialFormulario = {
        id: null,
        nombreS: "",
        direccionS: "",
        celularS: "",
        horaS: "",
        nombreD: "",
        direccionD: "",
        celularD: "",
        descripcionPaquete: "",
        estado:""
    };

    const [domicilioEditar, setDomicilioEditar] = useState(esdatoInicialFormulario);
    const [modoEdicion, setModoEdicion] = useState(false);

    useEffect(()=> {
        recuperaDomicilios();
    }, []);
    const recuperaDomicilios = () => {
        DomiciliosServices.getAll()
        .then(response => {
            setEstadoListaDomicilios(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    const agregarDomicilio = (domicilio) => {
        DomiciliosServices.create(domicilio)
        .then(response => {
            const nuevoDomicilio = {
                id: response.data.id,
                nombreS: response.data.nombreS,
                direccionS: response.data.direccionS,
                celularS: response.data.celularS,
                horaS: response.data.horaS,
                nombreD: response.data.nombreD,
                direccionD: response.data.direccionD,
                celularD: response.data.celularD,
                descripcionPaquete: response.data.descripcionPaquete        
            };
            setEstadoListaDomicilios([...estadoInicialListaDomicilios, nuevoDomicilio]);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const editarDomicilio = (domicilio) => {
        setModoEdicion(true);
        setDomicilioEditar({
            id: domicilio.id,
            nombreS: domicilio.nombreS,
            direccionS: domicilio.direccionS,
            celularS: domicilio.celularS,
            horaS: domicilio.horaS,
            nombreD: domicilio.nombreD,
            direccionD: domicilio.direccionD,
            celularD: domicilio.celularD,
            descripcionPaquete: domicilio.descripcionPaquete
        });
    };

    const eliminarDomicilio = (id) => {
        DomiciliosServices.remove(id)
        .then(response => {
            if(response.status === 204) {
                const domiciliosSinEliminado = estadoListaDomicilios.filter(
                    (domicilio) => domicilio.id !== id
                );
                setEstadoListaDomicilios(domiciliosSinEliminado);
            }
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const actualizarDomicilio = (id, domicilioActualizado) =>{
        setModoEdicion(false);
        DomiciliosServices.update(id, domicilioActualizado)
        .then(response => {
            const propietariosConElActualizado = estadoListaDomicilios.map(
                (domicilio) =>
                 domicilio.id === id ? domicilioActualizado : domicilio
            );
            setEstadoListaDomicilios(domicilioActualizado);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        })
    }

    return(
        <div className="row">
            <div className="col-md-8">
                <h2>Domicilios</h2>
                <TablaDomicilios
                    domicilios={estadoListaDomicilios}
                    editar={editarDomicilio}
                    eliminar={eliminarDomicilio}
                />
            </div>
            <div className="col-md-4">
                {!modoEdicion ? (
                    <>
                        <h2>Agregar Domicilio</h2>
                        <AgregarDomicilio agregar={agregarDomicilio}
                        />
                    </>
                ) : (
                    <>
                        <h2>Editar Domicilio</h2>
                        <EditarDomicilio
                            domicilioAEditar={domicilioEditar}
                            modoEdicion={setModoEdicion}
                            actualizar={actualizarDomicilio}
                        />
                    </>
                )}
            </div>
        </div>
    );
};
export default ManejadorDomicilios;