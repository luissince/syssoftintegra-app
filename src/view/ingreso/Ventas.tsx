import { RouteComponentProps } from "react-router-dom";

const Ventas = (props: RouteComponentProps<{}>) => {

    return (
        <>
            <div className="app-title">
                <h1><i className="fa fa-folder"></i> Ventas <small>Lista</small></h1>
            </div>

            <div className="tile">
                <div className="tile-body">

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <button className="btn btn-primary" id="btnNuevaVenta" onClick={ () => props.history.push(`${props.location.pathname}/punto-venta`)}>
                                    <i className="fa fa-plus"></i> Nueva venta
                                </button>
                                {" "}
                                <button className="btn btn-secondary" id="btnReload">
                                    <i className="fa fa-refresh"></i> Recargar
                                </button>
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
                                    <option value="0">TODOS</option>
                                    <option value="1">NOTA DE VENTA</option>
                                    <option value="2">BOLETA</option>
                                    <option value="3">FACTURA</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                            <label><i className="fa fa-info-circle"></i> Estado:</label>
                            <div className="form-group">
                                <select id="cbEstado" className="form-control">
                                    <option value="0">TODOS</option>
                                    <option value="1">COBRADO</option>
                                    <option value="2">POR COBRAR</option>
                                    <option value="3">ANULADO</option>
                                    <option value="4">POR LLEVAR</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12">
                            <label><i className="fa fa-search"></i> Buscar:</label>
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
                            <label><i className="bi bi-coin"></i> Total de Ventas:</label>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend"><span className="input-group-text">S/</span></div>
                                    <div className="input-group-append"><span className="input-group-text" id="lblTotalVenta">0.00</span></div>
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
                                            <th style={{ width: "5%" }}>Anular</th>
                                            <th style={{ width: "5%" }}>PDF</th>
                                            <th style={{ width: "5%" }}>Detalle</th>
                                            <th style={{ width: "10%" }}>Fecha</th>
                                            <th style={{ width: "15%" }}>Comprobante</th>
                                            <th style={{ width: "15%" }}>Cliente</th>
                                            <th style={{ width: "10%" }}>Tipo</th>
                                            <th style={{ width: "10%" }}>Metodo</th>
                                            <th style={{ width: "10%" }}>Estado</th>
                                            <th style={{ width: "10%" }}>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbList">
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td className="text-center"><button className="btn btn-danger"><i className="fa fa-ban fa-sm"></i></button></td>
                                            <td className="text-center"><button className="btn btn-secondary"><i className="fa fa-file-pdf-o fa-sm"></i></button></td>
                                            <td className="text-centerr"><button className="btn btn-secondary"><i className="fa fa-eye fa-sm"></i></button></td>
                                            <td className="text-left">22/03/2023<br />3:21:31 PM</td>
                                            <td className="text-left">FACTURA <br />F001-2<br /> <span className="text-danger">Modificado(FN01-1)</span></td>
                                            <td className="text-left">20530010172<br />MILLA SEIS SERVICIOS GENERALES S.R.L.</td>
                                            <td className="text-center">CONTADO</td>
                                            <td className="text-center">EFECTIVO</td>
                                            <td className="text-center"><div className="badge badge-danger">MODIFICADO</div></td>
                                            <td className="text-right">S/ 4.00</td>
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

export default Ventas;