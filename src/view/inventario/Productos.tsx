import { RouteComponentProps } from "react-router-dom";

const Productos = (props: RouteComponentProps<{}>) => {

    return (
        <>
            <div className="app-title">
                <h1><i className="fa fa-folder"></i> Productos <small>Lista</small></h1>
            </div>

            <div className="tile">
                <div className="tile-body">

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <button className="btn btn-primary" id="btnAgregar" onClick={ () => props.history.push(`${props.location.pathname}/producto-proceso`)}>
                                    <i className="fa fa-plus"></i> Agregar
                                </button>
                                {" "}
                                <button className="btn btn-secondary" id="btnReload">
                                    <i className="fa fa-refresh"></i> Recargar
                                </button>
                                {" "}
                                <button className="btn btn-secondary" id="btnCatalogo">
                                    <i className="fa fa-file-image-o"></i> Catalogo
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                        <label><i className="fa fa-barcode"></i> Clave/ Clave Alterna(Enter): </label>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Clave o clave alterna" id="txtClaveProducto"/>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
                        <label><i className="fa fa-search"></i> Buscar por la Descripción:</label>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Descripción del producto" id="txtDescripcionProducto"/>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-6 col-md-12 col-sm-12 col-12">
                        <label><i className="fa fa-list"></i> Categoría:</label>
                        <div className="form-group">
                            <select className="form-control" id="cbCategoria">
                                <option value="">- Seleccionar -</option>
                                <option value="2393">AWETT</option>
                                <option value="2382">GENERAL</option>
                                <option value="2386">MATERIA PRIMA</option>
                                <option value="2388">METAL</option>
                                <option value="2385">PLASTICO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-6 col-md-12 col-sm-12 col-12">
                        <label><i className="fa fa-list"></i> Marca:</label>
                        <div className="form-group">
                            <select className="form-control" id="cbMarca">
                                <option value="">- Seleccionar -</option>
                            </select>
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
                                            <th style={{ width: "20%" }}>Descripción</th>
                                            <th style={{ width: "10%" }}>Categoría/Marca</th>
                                            <th style={{ width: "10%" }}>Costo</th>
                                            <th style={{ width: "10%" }}>Precio</th>
                                            <th style={{ width: "10%" }}>Impuesto</th>
                                            <th style={{ width: "10%" }}>Cantidad</th>
                                            <th style={{ width: "10%" }}>Imagen</th>
                                            <th style={{ width: "10%" }} colSpan={2}>Opciones</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbList">
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td className="text-left">123176979653 <br/>AGUA CIELO</td>
                                            <td className="text-left">GENERAL<br/></td>
                                            <td className="text-right">1.00</td>
                                            <td className="text-right">1.50</td>
                                            <td className="text-right">IGV (18)</td>
                                            <td className="text-left"><span className="text-xs-bold text-primary">7.00<br/>UNIDAD(MEDIDA)</span></td>
                                            <td className="text-center"><i className="fa fa-picture-o fa-lg text-secondary"></i> </td>
                                            <td><button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button></td>
                                            <td><button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
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

export default Productos;