import { useEffect, useRef } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
    showModal,
    hideModal,
    viewModal,
    clearModal,
} from "../../helper/tools"

const Comprobantes = (props: RouteComponentProps<{}>) => {

    const divModal = useRef<HTMLDivElement>()

    useEffect(() => {
        viewModal("modalComprobante", () => {
            // 
        })

        clearModal("modalComprobante", () => {

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
        const modalInstance = document.getElementById("modalComprobante") as HTMLDivElement
        divModal.current = modalInstance
        showModal(divModal.current)
    }

    return (
        <>

            {/* Inicio modal */}
            <div className="modal fade" id="modalComprobante" data-backdrop="static">
                <div className="modal-dialog">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title" id="lblTitleCrud">Agregar Comprobantes</h4>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="tile p-0 border-0">

                                <div className="overlay p-5 d-none" id="divOverlayComprobante">
                                    <div className="m-loader mr-4">
                                        <svg className="m-circular" viewBox="25 25 50 50">
                                            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10"></circle>
                                        </svg>
                                    </div>
                                    <h4 className="l-text text-center text-white p-10" id="lblTextOverlayComprobante">Cargando información...</h4>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Nombre del Coomprobante <i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                            <div className="input-group">
                                                <input id="txtNombre" className="form-control" type="text" placeholder="Ingrese el nombre del comprobante"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Código Alterno</label>
                                            <div className="input-group">
                                                <input id="txtCodigoAlterno" className="form-control" type="text" placeholder="Ingrese el código alterno"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Serie <i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                            <div className="input-group">
                                                <input id="txtSerie" className="form-control" type="text" placeholder="Ingrese la serie"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Numeración <i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                            <div className="input-group">
                                                <input id="txtNumeracion" className="form-control" type="text" placeholder="Ingrese la numeración"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Comprobante para Guía de Remisión </label>
                                            <div className="input-group">
                                                <input id="cbGuiaRemision" type="checkbox"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Comprobante Facturado </label>
                                            <div className="input-group">
                                                <input id="cbFacturado" type="checkbox"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Comprobante para Nota de Crédito </label>
                                            <div className="input-group">
                                                <input id="cbNotaCredito" type="checkbox"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Estado </label>
                                            <div className="input-group">
                                                <input id="cbEstado" type="checkbox"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Usa número de caracteres el comprobante </label>
                                            <div className="input-group">
                                                <input id="cbUsaCaracteres" type="checkbox"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Caracteres a usar </label>
                                            <div className="input-group">
                                                <input id="txtCaracter" className="form-control" type="text" placeholder="0" disabled/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" modal-footer">
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
                <h1><i className="fa fa-folder"></i> Comprobantes <small>Lista</small></h1>
            </div>

            <div className="tile">
                <div className="tile-body">

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <button className="btn btn-primary" id="btnAgregar" onClick={() => openModal()}>
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
                            <label>Buscar por el nombre del comprobante, serie o numeración:</label>
                            <div className="form-group d-flex">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Ingrese los datos requeridos" id="txtBuscar" />
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
                                            <th style={{ width: "20%" }}>Tipo de comprobante</th>
                                            <th style={{ width: "10%" }}>Serie</th>
                                            <th style={{ width: "10%" }}>Numeración</th>
                                            <th style={{ width: "10%" }}>Destino</th>
                                            <th style={{ width: "10%" }}>Codigo Alterno</th>
                                            <th style={{ width: "5%" }}>Estado</th>
                                            <th style={{ width: "5%" }}>Usa Caracteres</th>
                                            <th style={{ width: "5%" }}>Preted.</th>
                                            <th style={{ width: "5%" }}>Editar</th>
                                            <th style={{ width: "5%" }}>Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbList">
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td className="text-left">NOTA CREDITO FACTURA</td>
                                            <td className="text-left">FN01</td>
                                            <td className="text-left">1</td>
                                            {/* <td className="text-center"><i className="bi bi-truck fa-lg"></i></td> */}
                                            <td className="text-center"><i className="bi bi-receipt fa-lg"></i></td>
                                            {/* <td className="text-center"><i className="bi bi-window-stack fa-lg"></i></td> */}
                                            <td className="text-center">07</td>
                                            <td className="text-center"><span className="badge badge-success">ACTIVO</span></td>
                                            <td className="text-center"><span className="text-warning">NO</span></td>
                                            <td className="text-left"><i className="bi bi-check-square fa-lg text-success"></i></td>
                                            <td className="text-center"><button className="btn btn-warning"><i className="fa fa-edit"></i></button></td>
                                            <td className="text-center"><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
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

export default Comprobantes;