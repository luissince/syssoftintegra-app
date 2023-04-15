
import { RouteComponentProps } from "react-router-dom";

import ModalLista from "../../../helper/modalLista"
import { useState } from "react";

const CotizacionProceso = (props: RouteComponentProps<{}>) => {

    const [modalProducto, setModalProducto] = useState(false)
    const [modalCotizacion, setModalCotizacion] = useState(false)

    const openModalProducto = () => {
        setModalProducto(true)
    }

    const closeModalProducto = () => {
        setModalProducto(false)
    }

    const openModalCotizacion = () => {
        setModalCotizacion(true)
    }

    const closeModalCotizacion = () => {
        setModalCotizacion(false)
    }

    return (
        <>
            {
                modalProducto == true ?
                    <ModalLista size="modal-lg" title="Lista de Productos" handleCloseModal={closeModalProducto}>
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
                                    <table className="table table-striped table-hover table-border">
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

                    </ModalLista> : null
            }

            {
                modalCotizacion == true ?
                    <ModalLista size="modal-lg" title="Lista de Cotizaciones" handleCloseModal={closeModalCotizacion}>


                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Buscar por N° de Cotización o Cliente </label>
                                    <div className="input-group">
                                        <input id="txtSearchCotizacion" type="text" className="form-control" placeholder="Buscar" />
                                        <div className="input-group-append">
                                            <button id="btnRecargarCotizacion" className="btn btn-secondary" type="button" title="Recargar"><i className="fa fa-refresh"></i> Recargar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-12">
                                <div className="form-group">
                                    <label>Fecha Inicio </label>
                                    <input id="txtFechaInicialCotizacion" type="date" className="form-control" placeholder="Fecha de Inicio" />
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <div className="form-group">
                                    <label>Fecha Fin </label>
                                    <input id="txtFechaFinalCotizacion" type="date" className="form-control" placeholder="Fecha de Fin" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="table-responsive">
                                    <table className="table table-striped table-hover table-border">
                                        <thead className="table-header-background">
                                            <tr role="row">
                                                <th className="text-center">#</th>
                                                <th className="text-center">Fecha Registro</th>
                                                <th className="text-left">Cliente</th>
                                                <th className="text-left">Cotización</th>
                                                <th className="text-left">Observación</th>
                                                <th className="text-left">Uso</th>
                                                <th className="text-center">Total</th>
                                                <th className="text-center">Agregar</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tbListCotizacion">
                                            <tr>
                                                <td className="text-center" colSpan={8}><p>No hay datos para mostrar.</p></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-12 text-center">
                                <label>Paginación</label>
                                <div className="form-group" id="ulPaginationCotizacion">
                                    <button className="btn btn-outline-secondary">
                                        <i className="fa fa-angle-double-left"></i>
                                    </button>
                                    <button className="btn btn-outline-secondary">
                                        <i className="fa fa-angle-left"></i>
                                    </button>
                                    <span className="btn btn-outline-secondary disabled" id="lblPaginacion">0 - 0</span>
                                    <button className="btn btn-outline-secondary">
                                        <i className="fa fa-angle-right"></i>
                                    </button>
                                    <button className="btn btn-outline-secondary">
                                        <i className="fa fa-angle-double-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>


                    </ModalLista> : null
            }

            <div className="tile mb-4">

                <div className="overlay p-5 d-none" id="divOverlayPuntoVenta">
                    <div className="m-loader mr-4">
                        <svg className="m-circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10"></circle>
                        </svg>
                    </div>
                    <h4 className="l-text text-center text-white p-10" id="lblTextOverlayPuntoVenta">Cargando información...</h4>
                </div>

                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3 className="mr-2 mb-2"><i className="fa fa-long-arrow-left btn text-primary px-1" title="Atraz" onClick={() => props.history.goBack()}></i>Cotización</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                            <button className="btn btn-primary"><i className="fa fa-save"></i> Guardar</button> {" "}
                            <button className="btn btn-secondary" onClick={() => openModalProducto()}><i className="fa fa-archive"></i> Productos</button> {" "}
                            <button className="btn btn-secondary" onClick={() => openModalCotizacion()}><i className="fa fa-list-alt"></i> Cotización</button> {" "}
                            <button className="btn btn-secondary"><i className="fa fa-refresh"></i> Limpiar</button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label><i className="fa fa-user"></i> Cliente:</label>
                        <div className="form-group">
                            <select className="select2-selection__rendered form-control select2-hidden-accessible" id="cbCliente" data-select2-id="select2-data-cbCliente" tabIndex={-1} aria-hidden="true"></select>
                            <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-1-xto2" style={{ width: "100%" }}><span className="selection">
                                <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-cbCliente-container" aria-controls="select2-cbCliente-container">
                                    <span className="select2-selection__rendered" id="select2-cbCliente-container" role="textbox" aria-readonly="true" title="Buscar Cliente">
                                        <span className="select2-selection__placeholder">Buscar Cliente</span>
                                    </span>
                                    <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                                </span>
                            </span>
                                <span className="dropdown-wrapper" aria-hidden="true"></span>
                            </span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <label><i className="fa fa-calendar"></i> Fecha de Emisión:</label>
                        <div className="form-group">
                            <input className="form-control" type="date" id="txtFechaEmision" disabled />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <label><i className="fa fa-calendar"></i> Fecha de Vencimiento:</label>
                        <div className="form-group">
                            <input className="form-control" type="date" id="txtFechaVencimiento" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped table-hover table-border">
                                <thead className="table-header-background">
                                    <tr role="row">
                                        <th style={{ width: "5%" }}>Quitar</th>
                                        <th style={{ width: "5%" }}>Editar</th>
                                        <th style={{ width: "15%" }}>Cantidad</th>
                                        <th style={{ width: "30%" }}>Descripción</th>
                                        <th style={{ width: "15%" }}>Impuesto</th>
                                        <th style={{ width: "15%" }}>Precio</th>
                                        <th style={{ width: "15%" }}>Medida</th>
                                        <th style={{ width: "20%" }}>Importe</th>
                                    </tr>
                                </thead>
                                <tbody id="tbList">
                                    <tr>
                                        <td colSpan={8} className="text-center">!No hay datos para mostrar¡</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="form-group">
                            <label><i className="bi bi-journal-bookmark-fill"></i> Observación:</label>
                            <input className="form-control" type="text" id="txtObservacion" placeholder="Ingrese alguna observación" />
                        </div>

                        <div className="form-group">
                            <label><i className="bi bi-coin"></i> Moneda:</label>
                            <select className="form-control" id="cbMoneda"><option value="">- Seleccione -</option><option value="1">SOL</option></select>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 justify-content-end">
                        <table className="table border-0">
                            <tbody>
                                <tr>
                                    <td style={{ border: "none", padding: "5px 0" }}>IMPORTE BRUTO:</td>
                                    <td style={{ border: "none", padding: "0", textAlign: "right" }} id="lblImporteBruto">S/ 0.00</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "none", padding: "5px 0" }}>DESCUESTO TOTAL:</td>
                                    <td style={{ border: "none", padding: "0", textAlign: "right" }} id="lblDescuentoBruto">S/ 0.00</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "none", padding: "5px 0" }}>SUB IMPORTE:</td>
                                    <td style={{ border: "none", padding: "0", textAlign: "right" }} id="lblSubImporteNeto">S/ 0.00</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "none", padding: "5px 0" }}>IMPUESTO:</td>
                                    <td style={{ border: "none", padding: "0", textAlign: "right" }} id="lblImpuestoNeto">S/ 0.00</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "none", padding: "5px 0" }}>IMPORTE NETO:</td>
                                    <td style={{ border: "none", padding: "0", textAlign: "right" }} id="lblImporteNeto">S/ 0.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}
export default CotizacionProceso