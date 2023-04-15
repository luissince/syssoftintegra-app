import { useEffect, useRef } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
    showModal,
    hideModal,
    viewModal,
    clearModal,
} from "../../../helper/tools"

const RestablecerKardexProceso = (props: RouteComponentProps<{}>) => {

    const divModal = useRef<HTMLDivElement>()

    useEffect(() => {
        viewModal("modalProducto", () => {
            // 
        })

        clearModal("modalProducto", () => {

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

    const openModalProductos = () => {
        const modalInstance = document.getElementById("modalProducto") as HTMLDivElement
        divModal.current = modalInstance
        showModal(divModal.current)
    }

    return (
        <>

            {/* Inicio modal */}
            <div className="modal fade" id="modalProducto" data-backdrop="static">
                <div className="modal-dialog modal-lg">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title" id="lblTitleCrud"><i className="fa fa-cubes"></i> Lista de Productos</h4>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <label>Buscar por Nombre del Producto o Clave/Clave Alterna</label>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Buscar producto..." id="txtBuscarProducto" />
                                            <div className="input-group-append">
                                                <button className="btn btn-secondary" id="btnRecargarProductos">
                                                    <i className="fa fa-search"></i> Recargar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-hover">
                                            <thead className="table-header-background">
                                                <tr>
                                                    <th>N°</th>
                                                    <th>Clave/Nombre</th>
                                                    <th>Categoría/Marca</th>
                                                    <th>Cantidad</th>
                                                    <th>Impuesto</th>
                                                    <th>Precio</th>
                                                </tr>
                                            </thead>
                                            <tbody id="tbProductos">
                                                <tr>
                                                    <td>1</td>
                                                    <td>123176979653<br />AGUA CIELO</td>
                                                    <td>GENERAL<br /></td>
                                                    <td><span className="text-success">8.00<br />UNIDAD(MEDIDA)</span></td>
                                                    <td>IGV (18)</td>
                                                    <td>1.50</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <button className="btn btn-primary" id="btnAnterior">
                                        <i className="fa fa-arrow-circle-left"></i>
                                    </button>
                                    <span className="m-2" id="lblPaginaActual">1</span>
                                    <span className="m-2">de</span>
                                    <span className="m-2" id="lblPaginaSiguiente">1</span>
                                    <button className="btn btn-primary" id="btnSiguiente">
                                        <i className="fa fa-arrow-circle-right"></i>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            {/* fin modal */}

            <div className="tile mb-4">

                <div className="overlay p-5 d-none" id="divOverlayProducto">
                    <div className="m-loader mr-4">
                        <svg className="m-circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10"></circle>
                        </svg>
                    </div>
                    <h4 className="l-text text-center p-10 text-white" id="lblTextOverlayProducto">Cargando información...</h4>
                </div>

                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3 className="mr-2 mb-2"><i className="fa fa-long-arrow-left btn text-primary px-1" title="Atraz" onClick={() => props.history.goBack()}></i>Restablecer Kardex</h3>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <button className="btn btn-success" id="btnGuardar">
                                <i className="fa fa-floppy-o"></i> Realizar proceso
                            </button>
                            {" "}
                            <button className="btn btn-secondary" id="btnProductos" onClick={ ()=> openModalProductos()}>
                                <i className="fa fa-search"></i> Buscar productos
                            </button>
                            {" "}
                            <button className="btn btn-danger" id="btnTodosProductos">
                                <i className="fa fa-exchange"></i> Lista Todos los Productos
                            </button>
                        </div>
                        {/* <button className="btn button-secondary margin-10">
                            <img src="./image/reports.png" width="18" />Generar reporte
                        </button> */}
                    </div>
                </div>

                <div className="row ">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="table-responsive">
                            <table className="table table-striped table-hover table-border">
                                <thead className="table-header-background">
                                    <tr>
                                        <th>Acción</th>
                                        <th>Clave/Nombre</th>
                                        <th>Marca</th>
                                        <th>Nueva Existencia</th>
                                        <th>Existencia Actual</th>
                                    </tr>
                                </thead>
                                <tbody id="tbList"></tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default RestablecerKardexProceso