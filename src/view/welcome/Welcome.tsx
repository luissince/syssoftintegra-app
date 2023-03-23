import { RouteComponentProps } from "react-router-dom";

const Welcome = (props: RouteComponentProps<{}>) => {

    return (
        <>
            <div className="app-title">
                <div>
                    <h1><i className="fa fa-smile-o"></i> Bienvenido a SysSoft Integra</h1>
                </div>
                <ul className="app-breadcrumb breadcrumb">
                    <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
                </ul>
            </div>

            <div className="tile mb-4 pt-xl-3 pb-xl-3 pl-xl-5">
                <div className="row">
                    <div className="col-lg-12">
                        <label htmlFor="f-inicio">Bienvenido al Sistema de SysSoft Integra, donde podrá realizar operaciones de venta, compras, cartera de cliente, gastos entre otras funcionalidades para llevar a cabo una mejor administración de su negocio.</label>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Welcome;