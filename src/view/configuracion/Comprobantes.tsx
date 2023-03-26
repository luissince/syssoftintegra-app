import { RouteComponentProps } from "react-router-dom";

const Comprobantes = (props: RouteComponentProps<{}>) => {

    return (
        <>
            <div className="app-title">
                <h1><i className="fa fa-folder"></i> Comprobantes <small>Lista</small></h1>
            </div>

            <div className="tile">
                <div className="tile-body">

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <button className="btn btn-primary" id="btnAgregar">
                                    <i className="fa fa-plus"></i> Agregar
                                </button>
                                {" "}
                                <button className="btn btn-secondary" id="btnReload">
                                    <i className="fa fa-refresh"></i> Recargar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <label>Buscar por el nombre del comprobante, serie o numeración:</label>
                            <div className="form-group d-flex">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Ingrese los datos requeridos" id="txtBuscar" />
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
                                            <th style={{ width: "20%" }}>Tipo de comprobante</th>
                                            <th style={{ width: "10%" }}>Serie</th>
                                            <th style={{ width: "10%" }}>Numeración</th>
                                            <th style={{ width: "10%" }}>Destino</th>
                                            <th style={{ width: "10%" }}>Codigo Alterno</th>
                                            <th style={{ width: "5%" }}>Estado</th>
                                            <th style={{ width: "5%" }}>Usa Caracteres</th>
                                            <th style={{ width: "5%" }}>Preted.</th>
                                            <th style={{ width: "5%" }}>Editar</th>
                                            <th style={{ width: "5%" }}>Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbList">
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td className="text-left">NOTA CREDITO FACTURA</td>
                                            <td className="text-left">FN01</td>
                                            <td className="text-left">1</td>
                                            {/* <td className="text-center"><i className="bi bi-truck fa-lg"></i></td> */}
                                            <td className="text-center"><i className="bi bi-receipt fa-lg"></i></td>
                                            {/* <td className="text-center"><i className="bi bi-window-stack fa-lg"></i></td> */}
                                            <td className="text-center">07</td>
                                            <td className="text-center"><span className="badge badge-success">ACTIVO</span></td>
                                            <td className="text-center"><span className="text-warning">NO</span></td>
                                            <td className="text-left"><i className="bi bi-check-square fa-lg text-success"></i></td>
                                            <td className="text-center"><button className="btn btn-warning"><i className="fa fa-edit"></i></button></td>
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

export default Comprobantes;