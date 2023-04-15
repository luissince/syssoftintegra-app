import { useEffect, useRef } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
    showModal,
    hideModal,
    viewModal,
    clearModal,
} from "../../helper/tools"


const Impuesto = (props: RouteComponentProps<{}>) => {

    const divModal = useRef<HTMLDivElement>()

    useEffect(() => {
        viewModal("modalImpuesto", () => {
            // 
        })

        clearModal("modalImpuesto", () => {

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
        const modalInstance = document.getElementById("modalImpuesto") as HTMLDivElement
        divModal.current = modalInstance
        showModal(divModal.current)
    }


    return (
        <>

            {/* Inicio modal */}
            <div className="modal fade" id="modalImpuesto" data-backdrop="static">
                <div className="modal-dialog">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title" id="lblTitleCrud">Agregar Impuestos</h4>
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
                                            <label>Nombre de la operación<i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                            <div className="input-group">
                                                <select className="form-control" id="cbNombreOperacion">
                                                    <option value="">- Seleccione -</option>
                                                    <option value="1">Operación 1</option>
                                                    <option value="1">Operación 2</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Nombre del impuesto<i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                            <input id="txtNombreImpuesto" type="text" className="form-control" placeholder="..." />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Valor<i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                            <input id="txtValor" type="text" className="form-control" placeholder="..." />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Código<i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                            <input id="txtCodigo" type="text" className="form-control" placeholder="..." />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Número<i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                            <input id="txtNumero" type="text" className="form-control" placeholder="..." />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Nombre<i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                            <input id="txtNombre" type="text" className="form-control" placeholder="..." />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Letra<i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                            <input id="txtLetra" type="text" className="form-control" placeholder="..." />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Categoria<i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                            <input id="txtCategoria" type="text" className="form-control" placeholder="..." />
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
                <h1><i className="fa fa-folder"></i> Impuesto <small>Lista</small></h1>
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
                            <label>Buscar por el nombre del impuesto:</label>
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
                                            <th style={{ width: "30%" }}>Operación</th>
                                            <th style={{ width: "30" }}>Impuesto</th>
                                            <th style={{ width: "10%" }}>Valor</th>
                                            <th style={{ width: "10%" }}>Codigo</th>
                                            <th style={{ width: "5%" }}>Preted.</th>
                                            <th style={{ width: "5%" }}>Editar</th>
                                            <th style={{ width: "5%" }}>Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbList">
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td className="text-left">OP. INAFECTADA</td>
                                            <td className="text-left">NINGUNO(%)</td>
                                            <td className="text-left">0.0</td>
                                            <td className="text-left"></td>
                                            <td className="text-center"><i className="bi bi-check-square fa-lg text-success"></i></td>
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

export default Impuesto;