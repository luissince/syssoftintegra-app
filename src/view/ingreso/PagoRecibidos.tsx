import { RouteComponentProps } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
    showModal,
    hideModal,
    viewModal,
    clearModal,
} from "../../helper/tools"

const PagoRecibidos = (props: RouteComponentProps<{}>) => {

    const divModal = useRef<HTMLDivElement>()

    useEffect(() => {
        viewModal("modalPagoRecibido", () => {
            // 
        })

        clearModal("modalPagoRecibido", () => {

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
        const modalInstance = document.getElementById("modalPagoRecibido") as HTMLDivElement
        divModal.current = modalInstance
        showModal(divModal.current)
    }

    return (
        <>

            {/* Inicio modal */}
            <div className="modal fade" id="modalPagoRecibido" data-backdrop="static">
                <div className="modal-dialog">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title" id="lblTitleCrud">Nuevo Ingreso</h4>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="tile border-0 p-0">
                                <div className="overlay p-5 d-none" id="divOverlayEgreso">
                                    <div className="m-loader mr-4">
                                        <svg className="m-circular" viewBox="25 25 50 50">
                                            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10"></circle>
                                        </svg>
                                    </div>
                                    <h4 className="l-text text-center text-white p-10" id="lblTextOverlayEgreso">Cargando información...</h4>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Cliente</label>
                                            <div className="input-group">
                                                <select id="cbCliente" className="select2-selection__rendered form-control select2-hidden-accessible" tabIndex={-1} aria-hidden="true" data-select2-id="select2-data-cbProveedor"></select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Observación</label>
                                            <div className="input-group">
                                                <input id="txtObservacion" className="form-control" type="text" placeholder="Ingrese alguna descripción" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Monto</label>
                                            <div className="input-group">
                                                <input id="txtMonto" className="form-control" type="text" placeholder="0.00" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <label>Forma de Pago</label>
                                        <div className="row">
                                            <div className="col-md-3 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <input type="radio" id="rbEfectivo" name="rbForma" defaultChecked />
                                                    <label htmlFor="rbEfectivo">
                                                        Efectivo
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <input type="radio" id="rbTarjeta" name="rbForma" />
                                                    <label htmlFor="rbTarjeta" className="radio-custom-label">
                                                        Tarjeta
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <input type="radio" id="rbDeposito" name="rbForma" />
                                                    <label htmlFor="rbDeposito" className="radio-custom-label">
                                                        Deposito
                                                    </label>
                                                </div>
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
                <h1><i className="fa fa-folder"></i> Pagos recibidos <small>Lista</small></h1>
            </div>

            <div className="tile">
                <div className="tile-body">

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <button className="btn btn-primary" id="btnNuevo" onClick={()=>openModal()}> 
                                    <i className="fa fa-plus"></i> Nuevo
                                </button>
                                {" "}
                                <button className="btn btn-secondary" id="btnReload">
                                    <i className="fa fa-refresh"></i> Recargar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12">
                            <label><i className="fa fa-search"></i> Filtrar por cliente o procedencia:</label>
                            <div className="form-group d-flex">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Escribir para filtrar" id="txtSearch" />
                                    <div className="input-group-append">
                                        <button type="button" className="btn btn-success" id="btnBuscar"><i className="fa fa-search"></i> Buscar</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <label><i className="fa fa-calendar"></i> Fecha de Inicio:</label>
                            <div className="form-group">
                                <input className="form-control" type="date" id="txtFechaInicial" />
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <label><i className="fa fa-calendar"></i> Fecha de Fin:</label>
                            <div className="form-group">
                                <input className="form-control" type="date" id="txtFechaFinal" />
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
                                            <th style={{ width: "15%" }}>Cliente</th>
                                            <th style={{ width: "15%" }}>Detalle</th>
                                            <th style={{ width: "15%" }}>Procedencia</th>
                                            <th style={{ width: "15%" }}>Forma Cobro</th>
                                            <th style={{ width: "10%" }}>Monto</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbList">
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td className="text-center">22/03/2023<br />3:21:14 PM</td>
                                            <td><br /></td>
                                            <td>VENTA CON EFECTIVO DE SERIE Y NUMERACIÓN DEL COMPROBANTE F001-1</td>
                                            <td className="text-center">VENTA</td>
                                            <td className="text-center">EFECTIVO</td>
                                            <td className="text-center">4.00</td>
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

export default PagoRecibidos;