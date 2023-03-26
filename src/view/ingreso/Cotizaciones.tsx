import { RouteComponentProps } from "react-router-dom";

const Cotizaciones = (props: RouteComponentProps<{}>) => {

    // this.props.history.push(`${this.props.location.pathname}/proceso`);

    return (
        <>
            <div className="app-title">
                <h1><i className="fa fa-folder"></i> Cotización <small>Lista</small></h1>
            </div>

            <div className="tile">
                <div className="tile-body">

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <button className="btn btn-primary" id="btnNueva" onClick={ () => props.history.push(`${props.location.pathname}/cotizacion-proceso`)}>
                                    <i className="fa fa-plus"></i> Nueva
                                </button>
                                {" "}
                                <button className="btn btn-secondary" id="btnReload">
                                    <i className="fa fa-refresh"></i> Recargar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <label><i className="fa fa-search"></i> Buscar por N° de Cotización o Cliente:</label>
                            <div className="form-group d-flex">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="txtBuscar" placeholder="Ingrese su cliente o serie y numeración" />
                                    <div className="input-group-append">
                                        <button className="btn btn-success" type="button" id="btnBuscar"><i className="fa fa-search"></i> Buscar</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <label><i className="fa fa-calendar"></i> Fecha de Inicio:</label>
                            <div className="form-group">
                                <input type="date" className="form-control" id="txtFechaInicial" />
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <label><i className="fa fa-calendar"></i> Fecha Final:</label>
                            <div className="form-group">
                                <input type="date" className="form-control" id="txtFechaFinal" />
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
                                            <th style={{ width: "5%" }}>PDF</th>
                                            <th style={{ width: "15%" }}>Fecha Registro</th>
                                            <th style={{ width: "20%" }}>Cliente</th>
                                            <th style={{ width: "10%" }}>Cotización</th>
                                            <th style={{ width: "15%" }}>Observación</th>
                                            <th style={{ width: "10%" }}>Uso</th>
                                            <th style={{ width: "10%" }}>Total</th>
                                            <th style={{ width: "5%" }}>Detalle</th>
                                            <th style={{ width: "5%" }}>Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbList">
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td className="text-center"><button className="btn btn-secondary"><i className="fa fa-file-pdf-o fa-sm"></i></button></td>
                                            <td className="text-centerr">-</td>
                                            <td className="text-left">-</td>
                                            <td className="text-left">-</td>
                                            <td className="text-left">-</td>
                                            <td className="text-center">-</td>
                                            <td className="text-center">-</td>
                                            <td className="text-centerr"><button className="btn btn-secondary"><i className="fa fa-eye fa-sm"></i></button></td>
                                            <td className="text-center"><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
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

export default Cotizaciones;