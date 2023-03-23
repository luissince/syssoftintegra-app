import { RouteComponentProps } from "react-router-dom";

const Dashboard = (props: RouteComponentProps<{}>) => {

    return (
        <>
            <div className="app-title">
                <h1><i className="fa fa fa-dashboard"></i> Dashboard <small><span className="spinner-border spinner-border-sm"></span> </small></h1>
            </div>

            <div className="tile mb-4">
                <div className="tile-body">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="card mb-3 text-white bg-primary">
                                <div className="card-body">
                                    <h3 className="text-white">{"S/ 0.00"}</h3>
                                    <p className="m-0">VENTAS DEL DÍA</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="card mb-3 text-white bg-danger">
                                <div className="card-body">
                                    <h3 className="text-white">{"S/ 0.00"}</h3>
                                    <p className="m-0">COMPRAS DEL DÍA</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="card mb-3 text-white bg-warning">
                                <div className="card-body">
                                    <h3 className="text-white">{"0"}</h3>
                                    <p className="m-0">CUENTAS POR COBRAR</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="card mb-3 text-white bg-success">
                                <div className="card-body">
                                    <h3 className="text-white">{"0"}</h3>
                                    <p className="m-0">CUENTAS POR PAGAR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Dashboard;