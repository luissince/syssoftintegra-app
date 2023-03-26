
import { RouteComponentProps} from "react-router-dom";

const CotizacionProceso = (props: RouteComponentProps<{}>) => {
    return (
        <>
            <div className="tile mb-4">

                <div className="overlay p-5 d-none" id="divOverlayPuntoVenta">
                    <div className="m-loader mr-4">
                        <svg className="m-circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"></circle>
                        </svg>
                    </div>
                    <h4 className="l-text text-center text-white p-10" id="lblTextOverlayPuntoVenta">Cargando información...</h4>
                </div>

                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3 className="mr-2 mb-2"><i className="fa fa-long-arrow-left btn text-primary px-1" title="Atraz" onClick={ () => props.history.goBack()}></i>Cotización</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                            <button className="btn btn-primary" id="btnGuardar"><i className="fa fa-save"></i> Guardar</button> {" "}
                            <button className="btn btn-secondary" id="btnProductos"><i className="fa fa-archive"></i> Productos</button> {" "}
                            <button className="btn btn-secondary" id="btnCotizaciones"><i className="fa fa-list-alt"></i> Cotización</button> {" "}
                            <button className="btn btn-secondary" id="btnLimpiar"><i className="fa fa-refresh"></i> Limpiar</button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label><i className="fa fa-user"></i> Cliente:</label>
                        <div className="form-group">
                            <select className="select2-selection__rendered form-control select2-hidden-accessible" id="cbCliente" data-select2-id="select2-data-cbCliente" tabIndex={-1} aria-hidden="true"></select>
                            <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-1-xto2" style={{width: "100%"}}><span className="selection">
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
                            <input className="form-control" type="date" id="txtFechaEmision" disabled/>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <label><i className="fa fa-calendar"></i> Fecha de Vencimiento:</label>
                        <div className="form-group">
                            <input className="form-control" type="date" id="txtFechaVencimiento"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped table-hover table-border">
                                <thead className="table-header-background">
                                    <tr role="row">
                                        <th style={{width: "5%"}}>Quitar</th>
                                        <th style={{width: "5%"}}>Editar</th>
                                        <th style={{width: "15%"}}>Cantidad</th>
                                        <th style={{width: "30%"}}>Descripción</th>
                                        <th style={{width: "15%"}}>Impuesto</th>
                                        <th style={{width: "15%"}}>Precio</th>
                                        <th style={{width: "15%"}}>Medida</th>
                                        <th style={{width: "20%"}}>Importe</th>
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
                            <input className="form-control" type="text" id="txtObservacion" placeholder="Ingrese alguna observación"/>
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
                                    <td style={{border: "none", padding:"5px 0"}}>IMPORTE BRUTO:</td>
                                    <td style={{border: "none", padding: "0", textAlign: "right"}} id="lblImporteBruto">S/ 0.00</td>
                                </tr>
                                <tr>
                                    <td style={{border: "none", padding:"5px 0"}}>DESCUESTO TOTAL:</td>
                                    <td style={{border: "none", padding: "0", textAlign: "right"}} id="lblDescuentoBruto">S/ 0.00</td>
                                </tr>
                                <tr>
                                    <td style={{border: "none", padding:"5px 0"}}>SUB IMPORTE:</td>
                                    <td style={{border: "none", padding: "0", textAlign: "right"}} id="lblSubImporteNeto">S/ 0.00</td>
                                </tr>
                                <tr>
                                    <td style={{border: "none", padding:"5px 0"}}>IMPUESTO:</td>
                                    <td style={{border: "none", padding: "0", textAlign: "right"}} id="lblImpuestoNeto">S/ 0.00</td>
                                </tr>
                                <tr>
                                    <td style={{border: "none", padding:"5px 0"}}>IMPORTE NETO:</td>
                                    <td style={{border: "none", padding: "0", textAlign: "right"}} id="lblImporteNeto">S/ 0.00</td>
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