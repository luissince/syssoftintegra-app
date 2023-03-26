import { RouteComponentProps } from "react-router-dom";

import Image from "../../helper/images"

const Reportes = (props: RouteComponentProps<{}>) => {

    return (
        <>
            <div className="app-title">
                <h1><i className="fa fa-folder"></i> Reporte <small>Opciones</small></h1>
            </div>

            <div className="tile">
                <div className="tile-body">

                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="card mb-3 card-default">
                                <button className="btn btn-link" id="btnFacturados">
                                    <h5 className="card-title">Comprobantes</h5>
                                    <div className="card-body">
                                        <img src={Image.sunat_logo} alt="Vender" width="54" />
                                    </div>
                                    <div className="card-footer border-0">Facturación SUNAT</div>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="card mb-3 card-default">
                                <button className="btn btn-link" id="btnVentaLibre">
                                    <h5 className="card-title">Ope. Venta/Libre</h5>
                                    <div className="card-body">
                                        <img src={Image.sales} alt="Vender" width="54" />
                                    </div>
                                    <div className="card-footer border-0">Documento</div>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="card mb-3 card-default">
                                <button className="btn btn-link" id="btnVentaPos">
                                    <h5 className="card-title">Ope. Venta/Pos</h5>
                                    <div className="card-body">
                                        <img src={Image.caja_registradora} alt="Vender" width="54" />
                                    </div>
                                    <div className="card-footer border-0">Documento</div>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="card mb-3 card-default">
                                <button className="btn btn-link" id="btnIngresosEgresos">
                                    <h5 className="card-title">Ingresos/Egresos</h5>
                                    <div className="card-body">
                                        <img src={Image.movimiento} alt="Vender" width="54" />
                                    </div>
                                    <div className="card-footer border-0">Documento</div>
                                </button>
                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="card mb-3 card-default">
                                <button className="btn btn-link" id="">
                                    <h5 className="card-title">Compras</h5>
                                    <div className="card-body">
                                        <img src="./images/purchases.png" alt="Vender" width="54"/>
                                    </div>
                                    <div className="card-footer border-0">Documento</div>
                                </button>
                            </div>
                        </div> */}

                    </div>

                    <div className="row">

                        {/* <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="card mb-3 card-default">
                                <button className="btn btn-link" id="">
                                    <h5 className="card-title">Resumen General</h5>
                                    <div className="card-body">
                                        <img src="./images/sitio-web.png" alt="Vender" width="54"/>
                                    </div>
                                    <div className="card-footer border-0">Documento</div>
                                </button>
                            </div>
                        </div> */}

                        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="card mb-3 card-default">
                                <button className="btn btn-link" id="btnUtilidad">
                                    <h5 className="card-title">Utilidad</h5>
                                    <div className="card-body">
                                        <img src={Image.utilidad} alt="Vender" width="54"/>
                                    </div>
                                    <div className="card-footer border-0">Documento</div>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="card mb-3 card-default">
                                <button className="btn btn-link" id="btnInventario">
                                    <h5 className="card-title">Inventario</h5>
                                    <div className="card-body">
                                        <img src={Image.almacen} alt="Vender" width="54"/>
                                    </div>
                                    <div className="card-footer border-0">Documento</div>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );

}

export default Reportes;