import { RouteComponentProps } from "react-router-dom";
import Image from "../../helper/images";

const CpeElectronicos = (props: RouteComponentProps<{}>) => {

    return (
        <>
            <div className="app-title">
                <h1><i className="fa fa-folder"></i> Comprobante de Pago Electrónico <small>Lista</small></h1>
            </div>

            <div className="tile">
                <div className="tile-body">

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <h4> Resumen de Boletas/Facturas/Nota Crédito/Nota Débito</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <img src={Image.sunat_logo} width="28" height="28" />
                                <span className="small"> Estados SUNAT:</span>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <img src={Image.accept} width="28" height="28" />
                                <span className="small"> Aceptado</span>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <img src={Image.unable} width="28" height="28" />
                                <span className="small"> Rechazado</span>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <img src={Image.reuse} width="28" height="28" />
                                <span className="small"> Pendiente de Envío</span>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <img src={Image.error} width="28" height="28" />
                                <span className="small"> Comunicación de Baja (Anulado)</span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
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
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <label><i className="fa fa-list"></i> Comprobantes:</label>
                            <div className="form-group">
                                <select id="cbComprobante" className="form-control">
                                    <option value="0">TODOS</option><option value="2">BOLETA</option>
                                    <option value="3">FACTURA</option>
                                    <option value="4">GUIA REMISION</option>
                                    <option value="5">NOTA CREDITO BOLETA</option>
                                    <option value="6">NOTA CREDITO FACTURA</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                            <label><i className="fa fa-info-circle"></i> Estado:</label>
                            <div className="form-group">
                                <select id="cbEstado" className="form-control">
                                    <option value="0">TODOS</option>
                                    <option value="1">DECLARAR</option>
                                    <option value="3">ANULAR</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12">
                            <label>Buscar:</label>
                            <div className="form-group d-flex">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Escribir para filtrar" id="txtSearch" />
                                    <div className="input-group-append">
                                        <button className="btn btn-success" type="button" id="btnBuscar"><i className="fa fa-search"></i> Buscar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <label>Opción:</label>
                            <div className="form-group">
                                <button className="btn btn-secondary" id="btnReload">
                                    <i className="fa fa-refresh"></i> Recargar
                                </button>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <label>Procesar:</label>
                            <div className="form-group">
                                <button className="btn btn-primary" id="btnEnvioMasivo">
                                    <i className="fa fa-arrow-circle-up"></i> Envío masivo
                                </button>
                            </div>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="table-responsive">
                                <table className="table table-striped" style={{ borderWidth: "1px", borderStyle: "dashed", borderColor: "#007bff" }}>
                                    <thead className="table-header-background">
                                        <tr>
                                            <th style={{ width: "5%" }}>#</th>
                                            <th style={{ width: "5%" }}>Reiniciar</th>
                                            <th style={{ width: "5%" }}>Anular</th>
                                            <th style={{ width: "5%" }}>PDF</th>
                                            <th style={{ width: "5%" }}>Detalle</th>
                                            <th style={{ width: "10%" }}>Fecha</th>
                                            <th style={{ width: "15%" }}>Comprobante</th>
                                            <th style={{ width: "15%" }}>Cliente</th>
                                            <th style={{ width: "10%" }}>Estado</th>
                                            <th style={{ width: "10%" }}>Total</th>
                                            <th style={{ width: "10%" }}>Estado SUNAT</th>
                                            <th style={{ width: "25%" }}>Observación SUNAT</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbList">
                                        <tr> 
                                            <td className="text-center">5</td>
                                            <td className="text-center"><button className="btn btn-secondary btn-sm"><i className="bi bi-arrow-clockwise"></i> </button></td>
                                            <td className="text-center"><button className="btn btn-secondary btn-sm"><i className="bi bi-file-earmark-x-fill"></i> </button></td>
                                            <td className="text-center"><button className="btn btn-secondary btn-sm"><i className="bi bi-file-earmark-pdf-fill"></i> </button></td>
                                            <td className="text-centerr"><button className="btn btn-secondary btn-sm"><i className="bi bi-eye-fill"></i> </button></td>
                                            <td className="text-left">22/03/2023<br/>3:21:14 PM</td>
                                            <td className="text-left">FACTURA <br/><i className="bi bi-window-stack"></i> F001-1</td>
                                            <td className="text-left">RUC - 20530010172<br/>MILLA SEIS SERVICIOS GENERALES S.R.L.</td>
                                            <td className="text-center"><div className="badge badge-success">DECLARAR</div></td>
                                            <td className="text-right">S/ 4.00</td>
                                            <td className="text-center"><button className="btn btn-secondary btn-sm"><img src={Image.accept} width="26"/> </button></td>
                                            <td className="text-left"><p className="recortar-texto">La Factura numero F001-1, ha sido aceptada</p></td>
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
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );

}

export default CpeElectronicos;