import { RouteComponentProps } from "react-router-dom";


const ConsultaGlobal = (props: RouteComponentProps<{}>) => {

    return (
        <>
            <div className="app-title">
                <h1><i className="fa fa-folder"></i> Consulta Masiva de Comprobantes de Pago <small>Lista</small></h1>
            </div>

            <div className="tile">
                <div className="tile-body">

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <h4> Resumen de documentos emitidos</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <label><i className="fa fa-calendar"></i> Fecha de Inicio:</label>
                            <div className="form-group">
                                <input className="form-control" type="date" id="txtFechaInicial"/>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <label><i className="fa fa-calendar"></i> Fecha de Fin:</label>
                            <div className="form-group">
                                <input className="form-control" type="date" id="txtFechaFinal"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="table-responsive">
                                <table className="table table-striped" style={{ borderWidth: "1px", borderStyle: "dashed", borderColor: "#007bff" }}>
                                    <thead className="table-header-background">
                                        <tr>
                                            <th style={{ width: "5%" }} >#</th>
                                            <th style={{ width: "10%" }} >RUC</th>
                                            <th style={{ width: "5%" }} >Tipo Comprobante</th>
                                            <th style={{ width: "5%" }} >Serie</th>
                                            <th style={{ width: "5%" }} >Nro Comprobante</th>
                                            <th style={{ width: "10%" }} >Fecha Emisión</th>
                                            <th style={{ width: "10%" }} >Importe Total</th>
                                            <th style={{ width: "10%" }} >Estado Codigo</th>
                                            <th style={{ width: "10%" }} >Estado Comprobante</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbList">
                                        <tr>
                                            <td className="text-center" colSpan={9}>
                                                <p>Tabla sin datos para mostrar.</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );

}

export default ConsultaGlobal;