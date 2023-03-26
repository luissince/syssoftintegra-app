import { RouteComponentProps } from "react-router-dom";
import Image from "../../../helper/images"

const RestablecerKardexProceso = (props: RouteComponentProps<{}>) => {
    return (
        <>
            <div className="tile mb-4">

                <div className="overlay p-5 d-none" id="divOverlayProducto">
                    <div className="m-loader mr-4">
                        <svg className="m-circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"></circle>
                        </svg>
                    </div>
                    <h4 className="l-text text-center p-10 text-white" id="lblTextOverlayProducto">Cargando información...</h4>
                </div>

                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3 className="mr-2 mb-2"><i className="fa fa-long-arrow-left btn text-primary px-1" title="Atraz" onClick={() => props.history.goBack()}></i>Restablecer Kardex</h3>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <button className="btn btn-success" id="btnGuardar">
                                <i className="fa fa-floppy-o"></i> Realizar proceso
                            </button>
                            {" "}
                            <button className="btn btn-secondary" id="btnProductos">
                                <i className="fa fa-search"></i> Buscar productos
                            </button>
                            {" "}
                            <button className="btn btn-danger" id="btnTodosProductos">
                                <i className="fa fa-exchange"></i> Lista Todos los Productos
                            </button>
                        </div>
                        {/* <button className="btn button-secondary margin-10">
                            <img src="./image/reports.png" width="18" />Generar reporte
                        </button> */}
                    </div>
                </div>

                <div className="row ">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="table-responsive">
                            <table className="table table-striped table-hover table-border">
                                <thead className="table-header-background">
                                    <tr>
                                        <th>Acción</th>
                                        <th>Clave/Nombre</th>
                                        <th>Marca</th>
                                        <th>Nueva Existencia</th>
                                        <th>Existencia Actual</th>
                                    </tr>
                                </thead>
                                <tbody id="tbList"></tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default RestablecerKardexProceso