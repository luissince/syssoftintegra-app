import { RouteComponentProps } from "react-router-dom";

const Kardex = (props: RouteComponentProps<{}>) => {

    return (
        <>
            <div className="app-title">
                <h1><i className="fa fa-folder"></i> Kardex <small>Lista</small></h1>
            </div>

            <div className="tile">
                <div className="tile-body">

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <button className="btn btn-primary" id="btnProductos">
                                    <i className="fa fa-archive"></i> Productos
                                </button>
                                {" "}
                                <button className="btn btn-secondary" id="btnRestablecer" onClick={ () => props.history.push(`${props.location.pathname}/restablecer-kardex-proceso`)}>
                                    <i className="fa fa-eraser"></i> Restablecer Kardex
                                </button>
                                {" "}
                                <button className="btn btn-secondary" id="btnReload">
                                    <i className="fa fa-refresh"></i> Recargar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label><i className="fa fa-search"></i> Buscar por clave o clave alterna:</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Escribir para filtrar" id="txtSearch" />
                                    <div className="input-group-append">
                                        <button type="button" className="btn btn-success" id="btnBuscar"><i className="fa fa-search"></i> Buscar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label><i className="bi bi-houses-fill"></i> Almacen:</label>
                                <div className="input-group">
                                    <select className="form-control" id="cbAlmacen"><option value="0">PRINCIPAL</option> </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <label>Nombre de Producto:</label>
                            <div className="form-group">
                                <label className="text-primary text-bold text-md" id="lblProducto">Producto</label>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <label>Metodo</label>
                            <div className="form-group">
                                <label className="text-primary text-bold text-md">Promedio ponderado</label>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <label>Cantidad Actual</label>
                            <div className="form-group">
                                <label className="text-primary text-bold text-md" id="lblCantidadActual">0.00</label>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <label>Valor Actual</label>
                            <div className="form-group">
                                <label className="text-primary text-bold text-md" id="lblValorActual">0.00</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="table-responsive">
                                <table className="table table-striped" style={{ borderWidth: "1px", borderStyle: "dashed", borderColor: "#007bff" }}>
                                    <thead className="table-header-background">
                                        <tr>
                                            <th style={{ width: "5%" }} rowSpan={2}>N°</th>
                                            <th style={{ width: "10%" }} rowSpan={2}>Fecha</th>
                                            <th style={{ width: "25%" }} rowSpan={2}>Detalle</th>
                                            <th style={{ width: "15%" }} className="text-center" colSpan={3}>Unidades</th>
                                            <th style={{ width: "15%" }} className="text-center" colSpan={1}>Cambios</th>
                                            <th style={{ width: "15%" }} className="text-center" colSpan={3}>Valores</th>
                                        </tr>
                                        <tr>
                                            <th style={{ width: "10%" }} className="text-center">Entrada</th>
                                            <th style={{ width: "10%" }} className="text-center">Salida</th>
                                            <th style={{ width: "10%" }} className="text-center">Existencia</th>
                                            <th style={{ width: "10%" }} className="text-center">Costo variable</th>
                                            <th style={{ width: "10%" }} className="text-center">Debe</th>
                                            <th style={{ width: "10%" }} className="text-center">Haber</th>
                                            <th style={{ width: "10%" }} className="text-center">Saldo</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbList">

                                        <tr>
                                            <td className="text-left">1</td>
                                            <td className="text-left">22/03/2023<br/>3:19:41 PM</td>
                                            <td className="text-left">ENTRADA<br/>N/D</td>
                                            <td className="text-right text-bold" style={{ backgroundColor: "#c6efd0", color: "#297521" }}>10.00</td>
                                            <td className="text-right text-bold" style={{ backgroundColor: "#ffc6d1", color: "##890d15" }}></td>
                                            <td className="text-right">10.00</td><td className="text-right">1.00</td>
                                            <td className="text-right">10.00</td><td className="text-right"></td>
                                            <td className="text-right">10.00</td>
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

export default Kardex;