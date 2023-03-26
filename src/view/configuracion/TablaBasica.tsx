import { RouteComponentProps } from "react-router-dom";

const TablaBasica = (props: RouteComponentProps<{}>) => {

    return (
        <>
            <div className="app-title">
                <h1><i className="fa fa-folder"></i> Mantenimiento <small>Detalles básicos</small></h1>
            </div>

            <div className="tile">

                <div className="tile-body">

                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <button className="btn btn-primary" id="btnAgregar">
                                    <i className="fa fa-plus"></i>
                                    Agregar
                                </button>
                                {" "}
                                <button className="btn btn-secondary" id="btnRecargar">
                                    <i className="fa fa-refresh"></i>
                                    Recargar
                                </button>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <label> Items <span id="lblMantenimiento" className="text-danger">(DIRECTORIO)</span></label>
                            <div className="form-group d-flex">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="txtBuscarTable" placeholder="Buscar..." />
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-striped" style={{ borderWidth: "1px", borderStyle: "dashed", borderColor: "#007bff" }}>
                                    <thead className="bg-primary text-white">
                                        <tr>
                                            <th scope="col" className="th-porcent-5">N°</th>
                                            <th scope="col" className="th-porcent-15">Nombre</th>
                                            <th scope="col" className="th-porcent-5">Opción</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbListMantenimiento">
                                        <tr>
                                            <td>1</td>
                                            <td>DIRECTORIO</td>
                                            <td><button className="btn btn-danger" id="btn0002"><i className="fa fa-external-link-square "></i></button></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>DOCUMENTO DE IDENTIDAD</td>
                                            <td><button className="btn btn-info" id="btn0003"><i className="fa fa-external-link-square "></i></button></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>SEXO</td>
                                            <td><button className="btn btn-info" id="btn0004"><i className="fa fa-external-link-square "></i></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <label> Ingrese el nombre del detalle <span id="lblDetalle" className="text-danger">(DIRECTORIO)</span></label>
                            <div className="form-group d-flex">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="txtBuscarDetalle" placeholder="Buscar..." />
                                </div>
                            </div>

                            <div className="table-responsive">
                                <table className="table table-striped" style={{ borderWidth: "1px", borderStyle: "dashed", borderColor: "#007bff" }}>
                                    <thead className="table-header-background">
                                        <tr>
                                            <th scope="col" style={{ width: "5%" }}>N°</th>
                                            <th scope="col" style={{ width: "10%" }}>Codigo Aux.</th>
                                            <th scope="col" style={{ width: "15%" }}>Nombre</th>
                                            <th scope="col" style={{ width: "15%" }}>Descripción</th>
                                            <th scope="col" style={{ width: "5%" }}>Estado</th>
                                            <th scope="col" style={{ width: "5%" }}>Editar</th>
                                            <th scope="col" style={{ width: "5%" } }>Quitar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbListDetalle">
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td></td>
                                            <td>TELEFONO</td>
                                            <td></td>
                                            <td className="text-center">ACTIVO</td>
                                            <td className="text-center"><button className="btn btn-warning"><i className="fa fa-edit"></i></button></td>
                                            <td className="text-center"><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">2</td>
                                            <td></td>
                                            <td>CELULAR</td>
                                            <td>NÚMERO DE CELULAR</td>
                                            <td className="text-center">ACTIVO</td>
                                            <td className="text-center"><button className="btn btn-warning"><i className="fa fa-edit"></i></button></td>
                                            <td className="text-center"><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <label> Las opciones del detalle están en el panel de los botones.</label>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );

}

export default TablaBasica;