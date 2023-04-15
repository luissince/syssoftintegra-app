import { RouteComponentProps } from "react-router-dom";

const Compras = (props: RouteComponentProps<{}>) => {

    return (
        <>

            <div className="app-title">
                <h1><i className="fa fa-folder"></i> Compras <small>Lista</small></h1>
            </div>

            <div className="tile">
                <div className="tile-body">

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <button className="btn btn-primary" id="btnNuevaCompra" onClick={() => props.history.push(`${props.location.pathname}/compra-proceso`)}>
                                    <i className="fa fa-plus"></i> Nueva compra
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
                                    <option value="1">PAGADO</option>
                                    <option value="2">POR PAGAR</option>
                                    <option value="3">ANULADO</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12">
                            <label><i className="fa fa-search"></i> Buscar por Proveedor o Serie/Numeración::</label>
                            <div className="form-group d-flex">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Escribir para filtrar" id="txtSearch" />
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
                                            <th style={{ width: "5%" }}>Anular</th>
                                            <th style={{ width: "5%" }}>PDF</th>
                                            <th style={{ width: "5%" }}>Detalle</th>
                                            <th style={{ width: "10%" }}>Fecha</th>
                                            <th style={{ width: "15%" }}>Proveedor</th>
                                            <th style={{ width: "15%" }}>Comprobante</th>
                                            <th style={{ width: "10%" }}>Tipo</th>
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
                                            <td className="text-left">-</td>
                                            <td className="text-left">-</td>
                                            <td className="text-left">-</td>
                                            <td className="text-center">-</td>
                                            <td className="text-center"><div className="badge badge-danger">MODIFICADO</div></td>
                                            <td className="text-right">-</td>
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

export default Compras;