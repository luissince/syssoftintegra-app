import { RouteComponentProps } from "react-router-dom";

const btnAjusteInventario = (props: RouteComponentProps<{}>) => {

    return (
        <>
            <div className="app-title">
                <h1><i className="fa fa-folder"></i> Ajustes de Inventario <small>Lista</small></h1>
            </div>

            <div className="tile">
                <div className="tile-body">

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <button className="btn btn-primary" id="btnAjusteInventario" onClick={ () => props.history.push(`${props.location.pathname}/ajuste-inventario-proceso`)}>
                                    <i className="fa fa-plus"></i> Realizar ajuste
                                </button>
                                {" "}
                                <button className="btn btn-secondary" id="btnReload">
                                    <i className="fa fa-refresh"></i> Recargar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <label><i className="bi bi-arrow-left-right"></i> Moviminento:</label>
                            <div className="form-group">
                                <select className="form-control" id="cbTipoMovimiento">
                                    <option value="0">--TODOS--</option>
                                    <option value="1">SALIDA</option>
                                    <option value="2">ENTRADA</option>
                                    <option value="3">DEVOLUCION</option>
                                    <option value="4">AJUSTE</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <label><i className="fa fa-calendar"></i> Fecha Inicio:</label>
                            <div className="form-group">
                                <input type="date" className="form-control" id="txtFechaInicio" />
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <label><i className="fa fa-calendar"></i> Fecha Termino:</label>
                            <div className="form-group">
                                <input type="date" className="form-control" id="txtFechaTermino" />
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
                                            <th style={{ width: "15%" }}>Tipo Ajuste</th>
                                            <th style={{ width: "10%" }}>Fecha y Hora</th>
                                            <th style={{ width: "25%" }}>Observación</th>
                                            <th style={{ width: "20%" }}>Información</th>
                                            <th style={{ width: "10%" }}>Estado</th>
                                            <th style={{ width: "7%" }}>Detalle</th>
                                            <th style={{ width: "7%" }}>Anular</th>
                                            <th style={{ width: "7%" }}>Excel</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbList">
                                        <tr>
                                            <td>1</td>
                                            <td>INCREMENTO <i className="fa fa-arrow-up text-success"></i><br/>ENTRADA</td>
                                            <td>23/03/2023<br/>10:51:11 PM</td><td>N/D</td>
                                            <td>MOVIMIENTO DE PRODUCTOS</td>
                                            <td><div className="text-success">COMPLETADO</div></td>
                                            <td className="text-center"><button className="btn btn-warning btn-sm"><i className="fa fa-search fa-lg"></i></button></td>
                                            <td className="text-center"><button className="btn btn-danger btn-sm"><i className="fa fa-trash fa-lg"></i></button></td>
                                            <td className="text-center"><button className="btn btn-success btn-sm"><i className="fa fa-file-excel-o fa-lg"></i></button></td>
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

export default btnAjusteInventario;