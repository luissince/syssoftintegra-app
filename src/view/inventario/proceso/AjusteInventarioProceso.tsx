import { RouteComponentProps } from "react-router-dom";
import Image from "../../../helper/images"

const AjusteInventarioProceso = (props: RouteComponentProps<{}>) => {
    return (
        <>
            <div className="tile mb-4">

                <div className="overlay p-5 d-none" id="divOverlayAjuste">
                    <div className="m-loader mr-4">
                        <svg className="m-circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"></circle>
                        </svg>
                    </div>
                    <h4 className="l-text text-center p-10 text-white" id="lblTextOverlayAjuste">Cargando información...</h4>
                </div>

                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3 className="mr-2 mb-2"><i className="fa fa-long-arrow-left btn text-primary px-1" title="Atraz" onClick={() => props.history.goBack()}></i>Realizar ajuste de inventario</h3>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <button className="btn btn-success" id="btnGuardar">
                                <i className="fa fa-floppy-o"></i> Registrar
                            </button>
                            {" "}
                            <button className="btn btn-secondary" id="btnProductos">
                                <i className="fa fa-search"></i> Productos
                            </button>
                            {" "}
                            <button className="btn btn-danger" id="btnProductosNegativos">
                                <i className="fa fa-long-arrow-down"></i> Producto Negativos
                            </button>
                            {" "}
                            <button className="btn btn-danger" id="btnTodosProductos">
                                <i className="fa fa-exchange"></i> Todos los Productos
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <label>Tipo de ajuste:</label>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <div className="form-group">
                                    <input type="radio" id="rbIncremento" name="tbTipoAjuste" checked/>
                                        <label htmlFor="rbIncremento">
                                            &nbsp; Incremento
                                        </label>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <div className="form-group">
                                    <input type="radio" id="rbDecremento" name="tbTipoAjuste"/>
                                        <label htmlFor="rbDecremento">
                                            &nbsp; Decremento
                                        </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <label>Estado del ajuste:</label>
                        <div className="form-group">
                            <input type="checkbox" id="cbEstadoMivimiento" checked/>
                                <label htmlFor="cbEstadoMivimiento" id="lblEstadoMovimiento"> &nbsp;Validado</label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <label>Metodo de ajuste:</label>
                        <div className="form-group">
                            <select className="form-control" id="cbTipoMovimiento">
                                <option value="2">ENTRADA</option>
                                <option value="3">DEVOLUCION</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <label>Código de Verificación:</label>
                        <div className="form-group">
                            <input type="text" id="txtCodigoVerificacion" className="form-control" placeholder="Ingrese el código de verificación"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <label>Observación:</label>
                        <div className="form-group">
                            <input type="text" className="form-control" value="N/D" id="txtObservacion"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <label>Almacén:</label>
                        <div className="form-group">
                            <select className="form-control" id="cbAlmacen"><option value="0">PRINCIPAL</option> </select>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead className="table-header-background">
                                    <tr>
                                        <th style={{width: "10%"}}>Acción</th>
                                        <th style={{width: "30%"}}>Clave/Nombre</th>
                                        <th style={{width: "15%"}}>Marca</th>
                                        <th style={{width: "15%"}}>Nueva Existencia</th>
                                        <th style={{width: "15%"}}>Existencia Actual</th>
                                        <th style={{width: "15%"}}>Medida</th>
                                    </tr>
                                </thead>
                                <tbody id="tbList">
                                    <tr>
                                        <td className="text-center" colSpan={6}>Tabla sin contenido</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
export default AjusteInventarioProceso
