import { RouteComponentProps } from "react-router-dom";

const ConsultarEstado = (props: RouteComponentProps<{}>) => {

    return (
        <>
            <div className="app-title">
                <h1><i className="fa fa-folder"></i> Consultar Estado <small>Ver</small></h1>
            </div>

            <div className="tile">

                <div className="tile-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <h4>Credenciales </h4>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <h4>Datos del Comprobante </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Ruc: </label>
                            <div className="form-group">
                                <input id="txtRuc" className="form-control" type="text" placeholder="Ingrese su RUC" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label>Ruc Emisor: </label>
                            <div className="form-group">
                                <input id="txtRucEmision" className="form-control" type="text" placeholder="Ingrese RUC" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>usuario: </label>
                            <div className="form-group">
                                <input id="txtUsuario" className="form-control" type="text" placeholder="Ingrese su Usuario"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label>Tipo: </label>
                            <div className="form-group">
                                <select id="txtTipo" className="form-control">
                                    <option value=""> -- Seleccione -- </option>
                                    <option value="01">01 - Factura</option>
                                    <option value="03">03 - Boleta De Venta</option>
                                    <option value="07">07 - Nota de Crédito</option>
                                    <option value="08">08 - Nota de Débito</option>
                                    <option value="R1">R1 - Recibo por Honorarios</option>
                                    <option value="R7">R7 - Nota Crédito Recibo por Honorarios </option>
                                    <option value="04">04 - Liquidación de Compra</option>
                                    <option value="23">23 - Póliza de Adjudicación Electrónica</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Contraseña: </label>
                            <div className="form-group">
                                <input id="txtClave" className="form-control" type="password" placeholder="Ingrese Contraseña"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label>Serie: </label>
                            <div className="form-group">
                                <input id="txtSerie" className="form-control" type="text" placeholder="F001 / B001 / etc" maxLength={4}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6">
                            <label>Correlativo: </label>
                            <div className="form-group">
                                <input id="txtCorrelativo" className="form-control" type="number" placeholder="ingrese correlativo (1,2,3...)"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <button className="btn btn-success" id="consultarEstado"> Consultar Estado </button> {" "}
                                <button className="btn btn-primary" id="consultarCdr"> Consultar CDR </button> {" "}
                                <button className="btn btn-danger" id="limpiarConsulta"> Limpiar </button>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <h4>Resultado</h4>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <label>Codigo:</label>
                            <label className="badge badge-light" id="lblCodigo"></label>
                        </div>

                        <div className="col-md-12">
                            <label>Respuesta:</label>
                            <label className="badge badge-light" id="lblRespuesta"></label>

                        </div>

                        <div className="col-md-12">
                            <div style={{ fontSize: "15px"}}>
                                Ruta de descarga : <span id="lblRutaDescarga"></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );

}

export default ConsultarEstado;