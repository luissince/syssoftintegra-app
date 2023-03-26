
import { RouteComponentProps } from "react-router-dom";
import Image from "../../helper/images";

const PuntoVenta = (props: RouteComponentProps<{}>) => {
    return (
        <>
            <div className="tile">

                <div className="overlay p-5 d-none" id="divOverlayPuntoVenta">
                    <div className="m-loader mr-4">
                        <svg className="m-circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth={4} strokeMiterlimit={10}></circle>
                        </svg>
                    </div>
                    <h4 className="l-text text-center text-white p-10" id="lblTextOverlayPuntoVenta">Cargando información...</h4>
                </div>

                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h4 className="mr-3"> Punto de Venta</h4>
                    </div>
                </div>

                <div className="row">


                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="card">

                            <div className="card-header">
                                <div className="row">
                                    <div className="col-md-12">

                                        <div className="bs-component" style={{ marginBottom: "15px" }}>
                                            <div className="btn-group" role="group">
                                                <button id="btnProductos" className="btn btn-secondary" type="button" title="Productos">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <img src={Image.producto} width="22" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            Productos(F2)
                                                        </div>
                                                    </div>
                                                </button>

                                                <button id="btnMovimientoCaja" className="btn btn-secondary" type="button" title="Movimiento de caja">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <img src={Image.cash_movimiento} width="22" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            Mov. Caja(F3)
                                                        </div>
                                                    </div>
                                                </button>

                                                <button id="btnLimpiar" className="btn btn-secondary" type="button" title="Limpiar Vista">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <img src={Image.escoba} width="22" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            Limpiar(F4)
                                                        </div>
                                                    </div>
                                                </button>

                                                <button id="btnVentas" className="btn btn-secondary" type="button" title="Ventas Echas">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <img src={Image.view} width="22" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            Ventas(F6)
                                                        </div>
                                                    </div>
                                                </button>

                                                <button id="btnCotizacion" className="btn btn-secondary" type="button" title="Cotización">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <img src={Image.cotizacion} width="22" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            Cotización(F7)
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="form-control" id="btnCodigo" title="Codigo de Barras">
                                                    <i className="fa fa-barcode"></i> CTRL+D
                                                </span>
                                            </div>
                                            <input id="txtCodigoBarra" type="search" className="form-control" placeholder="Código de barras" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="form-control" id="btnCodigo" title="Codigo de Barras">
                                                    <img src={Image.moneda} width="22" />
                                                </span>
                                            </div>
                                            <select className="form-control" id="cbMoneda"><option value="">- Seleccione -</option><option value="1">SOL</option></select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead className="table-header-background">
                                                    <tr role="row">
                                                        <th style={{ width: "5%" }}>Quitar</th>
                                                        <th style={{ width: "15%" }}>Cantidad</th>
                                                        <th style={{ width: "30%" }}>Descripción</th>
                                                        <th style={{ width: "15%" }}>Impuesto</th>
                                                        <th style={{ width: "15%" }}>Precio</th>
                                                        {/* <th width="15%">Descuento</th> */}
                                                        <th style={{ width: "20%" }}>Importe</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tbList"><tr>
                                                    <td colSpan={6} align="center"> !No hay datos para mostrar¡ </td>
                                                </tr></tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="card">

                            <div className="card-header p-0">
                                <button id="btnCobrar" className="btn btn-success btn-block">
                                    <div className="row justify-content-center align-items-center p-2">
                                        <div className="col-md-6 col-sm-6 col-6 text-left">
                                            <span className="text-white h5">COBRAR (F1)</span>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6 text-right">
                                            <span className="text-white h3" id="lblTotal">S/ 0.00</span>
                                        </div>
                                    </div>
                                </button>
                            </div>

                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-12">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="form-control">
                                                    <img src={Image.recibo} width="22" />
                                                </span>
                                            </div>
                                            <select id="cbComprobante" className="form-control" title="Comprobante de venta"><option value="1">NOTA DE VENTA</option><option value="2">BOLETA</option><option value="3">FACTURA</option></select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-12 pt-2">
                                        <div className="row">
                                            <div className="col-md-6 text-left">
                                                <h5>Serie: <span id="lblSerie">N001</span></h5>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <h5> N°: <span id="lblNumeracion">1</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tile border-0 p-0">

                                    <div className="overlay d-none p-5" id="divOverlayCliente">
                                        <div className="m-loader mr-4">
                                            <svg className="m-circular" viewBox="25 25 50 50">
                                                <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth={4} strokeMiterlimit={10}></circle>
                                            </svg>
                                        </div>
                                        <h4 className="l-text text-center text-white p-10" id="lblTextOverlayCliente">Cargando información...</h4>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="form-control">
                                                            <img src={Image.opciones} width="22" />
                                                        </span>
                                                    </div>
                                                    <select id="cbTipoDocumento" className="form-control" title="Comprobante de venta"><option value="1">DNI</option><option value="3">RUC</option><option value="1351">SIN DOCUMENTO</option></select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="form-control">
                                                            <img src={Image.search} width="22" />
                                                        </span>
                                                    </div>
                                                    <input id="txtNumero" type="text" className="form-control" placeholder="00000000" title="Número de documento" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-secondary" type="button" id="btnCliente">
                                                            <img src={Image.search_caja} width="18" height="18" />
                                                        </button>
                                                    </div>
                                                    <div className="input-group-append">
                                                        <button className="btn btn-secondary" type="button" id="btnSunat">
                                                            <img src={Image.sunat_logo} width="18" height="18" />
                                                        </button>
                                                    </div>
                                                    <div className="input-group-append">
                                                        <button className="btn btn-secondary" type="button" id="btnReniec">
                                                            <img src={Image.reniec} width="18" height="18" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="form-control">
                                                            <img src={Image.clients} width="22"/>
                                                        </span>
                                                    </div>
                                                    <input id="txtCliente" type="text" className="form-control" placeholder="Cliente" title="Información del cliente"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="form-control">
                                                            <img src={Image.telefono} width="22"/>
                                                        </span>
                                                    </div>
                                                    <input id="txtCelular" type="text" className="form-control" placeholder="N° de Celular" title="Número de celular"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="form-control">
                                                            <img src={Image.email} width="22"/>
                                                        </span>
                                                    </div>
                                                    <input id="txtEmail" type="text" className="form-control" placeholder="Correo Electrónico" title="Correo Electrónico"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="form-control">
                                                            <img src={Image.directorio} width="22"/>
                                                        </span>
                                                    </div>
                                                    <input id="txtDireccion" type="text" className="form-control" placeholder="Dirección de Vivienda o Local" title="Dirección de Vivienda"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-12">
                                        <table className="table border-0">
                                            <tbody>
                                                <tr>
                                                    <td width="50%" style={{border: "none", padding: "5px 0"}}>IMPORTE BRUTO:</td>
                                                    <td width="50%" style={{border: "none", padding: "0", textAlign: "right"}} id="lblImporteBruto">S/ 0.00</td>
                                                </tr>
                                                <tr>
                                                    <td width="50%" style={{border: "none", padding: "5px 0"}}>DESCUESTO TOTAL:</td>
                                                    <td width="50%" style={{border: "none", padding: "0", textAlign: "right"}} id="lblDescuentoBruto">S/ 0.00</td>
                                                </tr>
                                                <tr>
                                                    <td width="50%" style={{border: "none", padding: "5px 0"}}>SUB IMPORTE:</td>
                                                    <td width="50%" style={{border: "none", padding: "0", textAlign: "right"}} id="lblSubImporteNeto">S/ 0.00</td>
                                                </tr>
                                                <tr>
                                                    <td width="50%" style={{border: "none", padding: "5px 0"}}>IMPUESTO:</td>
                                                    <td width="50%" style={{border: "none", padding: "0", textAlign: "right"}} id="lblImpuestoNeto">S/ 0.00</td>
                                                </tr>
                                                <tr>
                                                    <td width="50%" style={{border: "none", padding: "5px 0"}}>IMPORTE NETO:</td>
                                                    <td width="50%" style={{border: "none", padding: "0", textAlign: "right"}} id="lblImporteNeto">S/ 0.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default PuntoVenta