import { RouteComponentProps } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
    showModal,
    hideModal,
    viewModal,
    clearModal,
} from "../../helper/tools"
import Image from "../../helper/images"

const Clientes = (props: RouteComponentProps<{}>) => {

    const divModal = useRef<HTMLDivElement>()

    useEffect(() => {
        viewModal("modalCliente", () => {
            // 
        })

        clearModal("modalCliente", () => {

            divModal.current = undefined
        })

        return () => {
            if (divModal.current !== undefined) {
                hideModal(divModal.current)
            }

            // if (sweet.alert !== undefined && sweet.alert.isVisible()) {
            //     sweet.alert.closePopup()
            // }

        }
    }, [])

    const openModal = () => {
        const modalInstance = document.getElementById("modalCliente") as HTMLDivElement
        divModal.current = modalInstance
        showModal(divModal.current)
    }

    return (
        <>

            {/* Inicio modal */}
            <div className="modal fade" id="modalCliente" data-backdrop="static">
                <div className="modal-dialog">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title" id="lblTitleCrud">Agregar Clientes</h4>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="tile border-0 p-0">

                                <div className="overlay p-5 d-none" id="divOverlayCrudCliente">
                                    <div className="m-loader mr-4">
                                        <svg className="m-circular" viewBox="25 25 50 50">
                                            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10"></circle>
                                        </svg>
                                    </div>
                                    <h4 className="l-text text-center text-white p-10" id="lblTextOverlayCrudCliente">Cargando información...</h4>
                                </div>

                                <div className="bs-component">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#tabPrimero" id="navTabPrimero">Datos básicos</a></li>
                                        <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tabSegundo" id="navTabSegundo">Datos de contacto</a></li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane fade active show p-2" id="tabPrimero">

                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Tipo documento</label>
                                                        <div className="input-group">
                                                            <select className="form-control" id="cbDocumentType">
                                                                <option value="">- Seleccione -</option>
                                                                <option value="1">DNI</option>
                                                                <option value="3">RUC</option>
                                                                <option value="1351">SIN DOCUMENTO</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>N° Documento</label>
                                                        <div className="input-group">
                                                            <input id="txtDocumentNumber" type="text" className="form-control" placeholder="00000000" title="Ingrese su n° de documento"/>
                                                                <div className="input-group-append">
                                                                    <button className="btn btn-secondary" type="button" title="Reniec" id="btmReniec">
                                                                        <img src={Image.reniec} width="18" height="18"/>
                                                                    </button>
                                                                </div>
                                                                <div className="input-group-append">
                                                                    <button className="btn btn-secondary" type="button" title="Sunat" id="btnSunat">
                                                                        <img src={Image.sunat_logo} width="18" height="18"/>
                                                                    </button>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Razón social/Datos de la persona</label>
                                                        <div className="input-group">
                                                            <input id="txtInformacion" className="form-control" type="text" placeholder="Ingrese Razón social/Datos de la persona"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Teléfono</label>
                                                        <div className="input-group">
                                                            <input id="txtTelefono" className="form-control" type="text" placeholder="Ingrese su Teléfono"/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Celular</label>
                                                        <div className="input-group">
                                                            <input id="txtCelular" className="form-control" type="text" placeholder="Ingrese n° de Celular"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <div className="input-group">
                                                            <input id="txtEmail" className="form-control" type="text" placeholder="Ingrese su Email"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Dirección</label>
                                                        <div className="input-group">
                                                            <input id="txtDireccion" className="form-control" type="text" placeholder="Ingrese su Dirección"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="tab-pane fade p-2" id="tabSegundo">

                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Representante</label>
                                                        <div className="input-group">
                                                            <input id="txtRepresentante" className="form-control" type="text" placeholder="Ingrese su Representante"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-xs-12">
                                                    <label>Estado </label>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                                            <div className="form-group">
                                                                <input type="radio" id="rbActivo" name="rbEstado"defaultChecked/>
                                                                    <label htmlFor="rbActivo">
                                                                        Activo
                                                                    </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                                            <div className="form-group">
                                                                <input type="radio" id="rbInactivo" name="rbEstado"/>
                                                                    <label htmlFor="rbInactivo" className="radio-custom-label">
                                                                        Inactivo
                                                                    </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="form-group">
                                        <label className="form-text text-left text-danger">Los campos marcados con * son obligatorios</label>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-right">
                                    <button className="btn btn-success" type="button" id="btnSaveBanco"><i className="fa fa-save"></i> Guardar</button> {" "}
                                    <button className="btn btn-danger" type="button" data-bs-dismiss="modal"><i className="fa fa-close"></i> Cancelar</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {/* fin modal */}

            <div className="app-title">
                <h1><i className="fa fa-folder"></i> Clientes <small>Lista</small></h1>
            </div>

            <div className="tile">
                <div className="tile-body">

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <button className="btn btn-primary" id="btnAgregar" onClick={()=>openModal()}>
                                    <i className="fa fa-plus"></i> Agregar
                                </button>
                                {" "}
                                <button className="btn btn-secondary" id="btnReload">
                                    <i className="fa fa-refresh"></i> Recargar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <label>Buscar por n° de documento o datos de persona(Enter para completar):</label>
                            <div className="form-group d-flex">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="..." id="txtBuscar" />
                                    <div className="input-group-append">
                                        <button className="btn btn-success" type="button" id="btnBuscar"><i className="fa fa-search"></i> Buscar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="table-responsive">
                                <table className="table table-striped" style={{ borderWidth: "1px", borderStyle: "dashed", borderColor: "#007bff" }}>
                                    <thead className="table-header-background">
                                        <tr>
                                            <th style={{ width: "5%" }}>N°</th>
                                            <th style={{ width: "10%" }}>Documento</th>
                                            <th style={{ width: "20%" }}>Datos Personales</th>
                                            <th style={{ width: "10%" }}>Teléfono/Celular</th>
                                            <th style={{ width: "25%" }}>Dirección</th>
                                            <th style={{ width: "10%" }}>Representante</th>
                                            <th style={{ width: "5%" }}>Predet.</th>
                                            <th style={{ width: "5%" }}>Editar</th>
                                            <th style={{ width: "5%" }}>Eliminar</th>
                                            <th style={{ width: "5%" }}>Predet.</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbList">
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td className="text-left">SIN DOCUMENTO<br />00000000</td>
                                            <td className="text-left">PUBLICO GENERAL</td>
                                            <td className="text-left"></td>
                                            <td className="text-left"></td>
                                            <td className="text-left"></td>
                                            {/* <td className="text-center"><button className="btn btn-success"><i className="fa fa-square-o"></i></button></td> */}
                                            <td className="text-center"><i className="bi bi-check-square fa-lg text-success"></i></td>
                                            <td className="text-center"><button className="btn btn-warning"><i className="fa fa-edit"></i></button></td>
                                            <td className="text-center"><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
                                            <td className="text-center"><button className="btn btn-info"><i className="fa fa-check-square-o"></i></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-12 text-center">
                            <label>Paginación</label>
                            <div className="form-group" id="ulPagination">
                                <button className="btn btn-outline-secondary" >
                                    <i className="fa fa-angle-double-left"></i>
                                </button>
                                <button className="btn btn-outline-secondary">
                                    <i className="fa fa-angle-left"></i>
                                </button>
                                <span className="btn btn-outline-secondary disabled" id="lblPaginacion">1 - 1</span>
                                <button className="btn btn-outline-secondary">
                                    <i className="fa fa-angle-right"></i>
                                </button>
                                <button className="btn btn-outline-secondary">
                                    <i className="fa fa-angle-double-right"></i>
                                </button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Clientes;