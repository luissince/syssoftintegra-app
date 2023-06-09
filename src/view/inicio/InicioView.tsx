import { useEffect, useState } from "react";
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../store/store";
import Menu from "../pages/layout/Menu";
import Header from "../pages/layout/Header";
import NotFound from "../pages/404/NotFound";
import Welcome from "../welcome/Welcome";
import Dashboard from "../dashboard/Dashboard";

import Ventas from "../ingreso/Ventas";
import PagoRecibido from "../ingreso/PagoRecibidos";
import NotaCredito from "../ingreso/NotaCredito";
import Cotizaciones from "../ingreso/Cotizaciones";

import Compras from "../gasto/Compras";
import PagoHechos from "../gasto/PagoEchos";

import CpeElectronicos from "../facturacion/CpeElectronicos";
import ConsultarEstado from "../facturacion/ConsultarEstado";
import ConsultaGlobal from "../facturacion/ConsultaGlobal";

import Clientes from "../contacto/Clientes";
import Proveedores from "../contacto/Proveedores";

import Productos from "../inventario/Productos";
import Kardex from "../inventario/Kardex";
import AjusteInventario from "../inventario/AjusteInventario";

import Reportes from "../reporte/Reportes";

import EmpresaView from "../configuracion/EmpresaView";
import TablaBasica from "../configuracion/TablaBasica";
import Monedas from "../configuracion/Monedas";
import Comprobantes from "../configuracion/Comprobantes";
import Impuestos from "../configuracion/Impuestos";
import Usuarios from "../configuracion/usuario/Usuarios";
import Almacenes from "../configuracion/Almacenes";
import Bancos from "../configuracion/Bancos";

import PuntoVenta from "../punto-venta/PuntoVenta";
import CotizacionProceso from "../ingreso/proceso/CotizacionProceso";
import CompraProceso from "../gasto/proceso/CompraProceso";
import ProductoProceso from "../inventario/proceso/ProductoProceso";
import RestablecerKardexProceso from "../inventario/proceso/RestablecerKardexProceso";
import AjusteInventarioProceso from "../inventario/proceso/AjusteInventarioProceso";
import { ObtenerEmpresaRest } from "../../network/rest/index.network";
import Empresa from "../../model/interfaces/empresa.interfaces";
import Response from "../../model/class/response.model.class";
import RestError from "../../model/class/resterror.model.class";
import { Types } from "../../model/enum/types.enum";
import { addEmpresa } from "../../store/empresaSlice";
import { logout } from "../../store/authSlice";
import { images } from "../../helper";
import { Toaster } from 'react-hot-toast';

const InicioView = (props: RouteComponentProps<{}>) => {
    const dispatch = useDispatch();
    const authentication = useSelector((state: RootState) => state.authentication.authentication)

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const load = async () => {
            const response = await ObtenerEmpresaRest<Empresa>();
            if (response instanceof Response) {
                dispatch(addEmpresa(response.data));
                setLoading(false);
            }

            if (response instanceof RestError) {
                if (response.getType() === Types.CANCELED) return;

                dispatch(logout());
            }
        }

        load();
    }, []);

    useEffect(() => {
        const onEventClick = (event: Event) => {
            let overlaySidebar = document.getElementsByClassName("app-sidebar__overlay")[0];
            if (event.target === overlaySidebar) {
                const app = document.getElementsByClassName('app');
                app[0].classList.toggle('sidenav-toggled');
            }
        }

        window.addEventListener('click', onEventClick);

        return () => {
            window.removeEventListener('click', onEventClick);
        }
    }, []);

    if (!authentication) {
        return <Redirect to="/login" />
    }

    const { path, url } = props.match;

    return (
        <>
            {loading && <div className="splash">
                <div className="m-2">
                    <img className="img-fluid" src={images.logo} alt="User Image" />
                </div>
                <div className="m-loader m-2">
                    <svg className="m-circular" viewBox="25 25 50 50">
                        <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10"></circle>
                    </svg>
                </div>
                <h4 className="l-text text-white m-2 text-center">Cargando información...</h4>
            </div>}

            <Header {...props} />

            <Menu url={url} />

            <main className="app-content">
                <Switch>

                    <Route
                        path="/inicio"
                        exact={true}>
                        <Redirect to={`${path}/welcome`} />
                    </Route>

                    <Route
                        path={`${path}/welcome`}
                        exact={true}
                        render={(props) => <Welcome {...props} />}
                    />
                    <Route
                        path={`${path}/dashboard`}
                        exact={true}
                        render={(props) => <Dashboard {...props} />}
                    />

                    {/* Punto de venta */}
                    {/* <Route
                        path={`${path}/ventas/punto-venta`}
                        exact={true}
                        render={(props) => <PuntoVenta {...props} />}
                    /> */}

                    {/* Ingesos */}
                    {/* <Route
                        path={`${path}/ventas`}
                        exact={true}
                        render={(props) => <Ventas {...props} />}
                    />
                    <Route
                        path={`${path}/pago-recibido`}
                        exact={true}
                        render={(props) => <PagoRecibido {...props} />}
                    />
                    <Route
                        path={`${path}/nota-credito`}
                        exact={true}
                        render={(props) => <NotaCredito {...props} />}
                    />
                    <Route
                        path={`${path}/cotizacion`}
                        exact={true}
                        render={(props) => <Cotizaciones {...props} />}
                    />
                    <Route
                        path={`${path}/cotizacion/cotizacion-proceso`}
                        exact={true}
                        render={(props) => <CotizacionProceso {...props} />}
                    /> */}


                    {/* Gastos */}
                    {/* <Route
                        path={`${path}/compras`}
                        exact={true}
                        render={(props) => <Compras {...props} />}
                    />
                    <Route
                        path={`${path}/compras/compra-proceso`}
                        exact={true}
                        render={(props) => <CompraProceso {...props} />}
                    />

                    <Route
                        path={`${path}/pago-echo`}
                        exact={true}
                        render={(props) => <PagoHechos {...props} />}
                    /> */}

                    {/* Facturacion */}
                    {/* <Route
                        path={`${path}/cpe-electronico`}
                        exact={true}
                        render={(props) => <CpeElectronicos {...props} />}
                    />
                    <Route
                        path={`${path}/consulta-estado`}
                        exact={true}
                        render={(props) => <ConsultarEstado {...props} />}
                    />
                    <Route
                        path={`${path}/consulta-global`}
                        exact={true}
                        render={(props) => <ConsultaGlobal {...props} />}
                    /> */}

                    {/* Contactos */}
                    <Route
                        path={`${path}/cliente`}
                        exact={true}
                        render={(props) => <Clientes {...props} />}
                    />
                    <Route
                        path={`${path}/proveedor`}
                        exact={true}
                        render={(props) => <Proveedores {...props} />}
                    />

                    {/* Productos */}
                    <Route
                        path={`${path}/producto`}
                        exact={true}
                        render={(props) => <Productos {...props} />}
                    />
                    <Route
                        path={`${path}/producto/producto-proceso`}
                        exact={true}
                        render={(props) => <ProductoProceso {...props} />}
                    />
                    <Route
                        path={`${path}/kardex`}
                        exact={true}
                        render={(props) => <Kardex {...props} />}
                    />
                    <Route
                        path={`${path}/kardex/restablecer-kardex-proceso`}
                        exact={true}
                        render={(props) => <RestablecerKardexProceso {...props} />}
                    />
                    <Route
                        path={`${path}/ajuste-inventario`}
                        exact={true}
                        render={(props) => <AjusteInventario {...props} />}
                    />
                    <Route
                        path={`${path}/ajuste-inventario/ajuste-inventario-proceso`}
                        exact={true}
                        render={(props) => <AjusteInventarioProceso {...props} />}
                    />

                    {/* Reportes */}
                    <Route
                        path={`${path}/reporte`}
                        exact={true}
                        render={(props) => <Reportes {...props} />}
                    />

                    {/* Configuracion */}
                    <Route
                        path={`${path}/empresa`}
                        exact={true}
                        render={(props) => <EmpresaView {...props} />}
                    />
                    <Route
                        path={`${path}/tabla-basica`}
                        exact={true}
                        render={(props) => <TablaBasica {...props} />}
                    />
                    <Route
                        path={`${path}/moneda`}
                        exact={true}
                        render={(props) => <Monedas {...props} />}
                    />
                    {/* <Route
                        path={`${path}/comprobante`}
                        exact={true}
                        render={(props) => <Comprobantes {...props} />}
                    /> */}
                    {/* <Route
                        path={`${path}/impuesto`}
                        exact={true}
                        render={(props) => <Impuestos {...props} />}
                    /> */}
                    <Route
                        path={`${path}/usuario`}
                        exact={true}
                        render={(props) => <Usuarios {...props} />}
                    />
                    <Route
                        path={`${path}/almacen`}
                        exact={true}
                        render={(props) => <Almacenes {...props} />}
                    />
                    {/* <Route
                        path={`${path}/banco`}
                        exact={true}
                        render={(props) => <Bancos {...props} />}
                    /> */}

                    {/*<Route
                        path={`${path}/new`}
                        exact={true}
                        render={(props) => <NewQuery {...props} />}
                    />
                    <Route
                        path={`${path}/new/response`}
                        exact={true}
                        render={(props) => <ResponseQuery {...props} />}
                    />
                    <Route
                        path={`${path}/state`}
                        exact={true}
                        render={(props) => <StateQuery {...props} />}
                    /> */}

                    <Route component={NotFound} />
                </Switch>
            </main>

            <Toaster />
        </>
    );
}

export default InicioView;
