import { useEffect, useRef } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
    showModal,
    hideModal,
    viewModal,
    clearModal,
} from "../../helper/tools"

const Almacenes = (props: RouteComponentProps<{}>) => {

    const divModal = useRef<HTMLDivElement>()

    useEffect(() => {
        viewModal("modalAlmacen", () => {
            // 
        })

        clearModal("modalAlmacen", () => {

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


    return (
        <>

            {/* Inicio modal */}
            <div className="modal fade" id="modalAlmacen" data-backdrop="static">
                <div className="modal-dialog">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title" id="lblTitleCrud">Agregar Almacen</h4>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="tile border-0 p-0">
                                <div className="overlay p-5 d-none" id="divOverlayAlmacen">
                                    <div className="m-loader mr-4">
                                        <svg className="m-circular" viewBox="25 25 50 50">
                                            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10"></circle>
                                        </svg>
                                    </div>
                                    <h4 className="l-text text-center text-white p-10" id="lblTextOverlayAlmacen">Cargando información...</h4>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Nombre <i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                            <input id="txtNombre" type="text" className="form-control" placeholder="Ingrese el nombre del almacen" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Ubigeo <i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                            <select id="cbUbigeo" className="select2-selection__rendered form-control select2-hidden-accessible" data-select2-id="select2-data-cbUbigeo" tabIndex={-1} aria-hidden="true"></select>
                                            <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-1-yede" style={{ width: "100%" }}>
                                                <span className="selection">
                                                    <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-cbUbigeo-container" aria-controls="select2-cbUbigeo-container">
                                                        <span className="select2-selection__rendered" id="select2-cbUbigeo-container" role="textbox" aria-readonly="true" title="Buscar Ubigeo">
                                                            <span className="select2-selection__placeholder">Buscar Ubigeo</span>
                                                        </span>
                                                        <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                                                    </span>
                                                </span>
                                                <span className="dropdown-wrapper" aria-hidden="true"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Dirección</label>
                                            <input id="txtDireccion" type="text" className="form-control" placeholder="Ingrese la dirección del almacen." />
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
                <h1><i className="fa fa-folder"></i> Almacenes <small>Lista</small></h1>
            </div>

            <div className="tile">
                <div className="tile-body">

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <button className="btn btn-primary" id="btnAgregar" onClick={() => {
                                    const modalInstance = document.getElementById("modalAlmacen") as HTMLDivElement
                                    divModal.current = modalInstance
                                    showModal(divModal.current)
                                }}>
                                    <i className="fa fa-plus"></i> Agregar jaja
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
                            <label>Buscar por el nombre de almacen:</label>
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
                                            <th style={{ width: "10%" }}>Fecha</th>
                                            <th style={{ width: "20%" }}>Nombre</th>
                                            <th style={{ width: "20%" }}>Ubigeo</th>
                                            <th style={{ width: "25%" }}>Dirección</th>
                                            <th style={{ width: "10%" }}>Estado</th>
                                            <th style={{ width: "5%" }}>Editar</th>
                                            <th style={{ width: "5%" }}>Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbList">
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td className="text-left">20/03/2023</td>
                                            <td className="text-left">PRINCIPAL</td>
                                            <td className="text-left">LIMA-LIMA-LINCE(150116)</td>
                                            <td className="text-left">CAL. SOLEDAD NRO. 113 DPTO. 402 LINCE LIMA LIMA LINCE</td>
                                            <td className="text-center"><span className="badge badge-success">ACTIVO</span></td>
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

export default Almacenes;