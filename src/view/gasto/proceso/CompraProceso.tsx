import { RouteComponentProps } from "react-router-dom";

const CompraProceso = (props: RouteComponentProps<{}>) => {
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
                        <h3 className="mr-2 mb-2"><i className="fa fa-long-arrow-left btn text-primary px-1" title="Atraz" onClick={() => props.history.goBack()}></i>Compra</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                            <button className="btn btn-primary" id="btnGuardar"><i className="fa fa-save"></i> Guardar</button> {" "}
                            <button className="btn btn-secondary" id="btnProductos"><i className="fa fa-archive"></i> Productos</button> {" "}
                            <button className="btn btn-secondary" id="btnLimpiar"><i className="fa fa-paint-brush"></i> Limpiar</button> {" "}
                            <button className="btn btn-secondary" id="btnProveedor"><i className="fa fa-address-book"></i> Proveedores</button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label><i className="bi bi-truck"></i> Proveedor:</label>
                        <div className="form-group">
                            <input className="form-control" type="search" placeholder="Buscar" id="txtBuscarProveedor" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label><i className="fa fa-calendar"></i> Fecha:</label>
                        <div className="form-group">
                            <input className="form-control" type="date" id="txtFechaRegistro" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label><i className="bi bi-houses-fill"></i> Almacen:</label>
                        <div className="form-group">
                            <select className="select2-selection__rendered form-control" id="cbAlmacen">
                            </select>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label><i className="bi bi-receipt"></i> Comprobante:</label>
                        <div className="form-group">
                            <select className=" form-control" id="cbComprobante">
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label><i className="fa fa-files-o"></i> Serie y Numeracion:</label>
                        <div className="form-group">
                            <div className="d-flex">
                                <input className="form-control mr-1" type="text" id="txtSerie" placeholder="Serie" />
                                <input className="form-control ml-1" type="text" id="txtNumeracion" placeholder="Numeracion" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped table-hover table-border">
                                <thead className="table-header-background">
                                    <tr role="row">
                                        <th style={{ width: "5%" }}>Accion</th>
                                        <th style={{ width: "15%" }}>Cantidad</th>
                                        <th style={{ width: "30%" }}>Clave/Descripción</th>
                                        <th style={{ width: "15%" }}>Costo Unitario</th>
                                        <th style={{ width: "15%" }}>Impuesto %</th>
                                        <th style={{ width: "20%" }}>Importe</th>
                                    </tr>
                                </thead>
                                <tbody id="tbList">
                                    <tr>
                                        <td colSpan={6} align="center">!No hay datos para mostrar¡</td>
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
                            {/* <div class="justify-content-center p-1" title="Notas">
                                <img src="./images/asignacion.png" width="22" height="22">
                            </div> */}
                            <label><i className="bi bi-journal-bookmark-fill"></i> Notas:</label>
                            <input className="form-control" type="text" id="txtNota" placeholder="Ingrese alguna Nota" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 justify-content-end">
                        <table className="table border-0">
                            <tbody>
                                <tr>
                                    <td style={{border: "none", padding: "5px 0"}}>SUB IMPORTE:</td>
                                    <td style={{border: "none", padding: "0", textAlign: "right"}} id="lblSubImporteNeto">M 0.00</td>
                                </tr>
                                <tr>
                                    <td style={{border: "none", padding: "5px 0"}}>IMPUESTO:</td>
                                    <td style={{border: "none", padding: "0", textAlign: "right"}} id="lblImpuestoNeto">M 0.00</td>
                                </tr>
                                <tr>
                                    <td style={{border: "none", padding: "5px 0"}}>IMPORTE NETO:</td>
                                    <td style={{border: "none", padding: "0", textAlign: "right"}} id="lblImporteNeto">M 0.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </>
    )
}
export default CompraProceso