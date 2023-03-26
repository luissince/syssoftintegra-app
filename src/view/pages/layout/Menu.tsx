import React from "react";
import { Link } from 'react-router-dom';
import { images } from "../../../helper";

type Props = {
    url: string
}

const Menu = (props: Props) => {

    const treeViewMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        const listMenu = document.querySelectorAll<Element>('.app-menu li .app-menu__item[data-bs-toggle="treeview"]');

        const listParent = event.currentTarget.parentNode as HTMLElement;

        for (const rmElement of listMenu) {
            if (!listParent.classList.contains("is-expanded")) {
                rmElement.classList.remove("is-expanded");           
            }
        }

        listParent.classList.toggle("is-expanded");
    }

    return <>
        <div className="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
        <aside className="app-sidebar">
            <div className="app-sidebar__user">
                <div className="m-2">
                    <img className="img-fluid" src={images.logo} alt="User Image" />
                </div>

                <div className="m-1">
                    <p className="app-sidebar__user-name">TIENDA</p>
                </div>
            </div>
            <ul className="app-menu">

                <li>
                    <Link className="app-menu__item" id="tab-index" to={`${props.url}/dashboard`}>
                        <i className="app-menu__icon fa fa-dashboard"></i>
                        <span className="app-menu__label">Inicio</span>
                    </Link>
                </li>

                {/* <li className="treeview" id="treeview-ingresos">
                    <a
                        className="app-menu__item"
                        href="#"
                        data-bs-toggle="treeview"
                        aria-expanded="false"
                        role="button"
                        onClick={treeViewMenu}>
                        <i className="app-menu__icon fa fa-question-circle"></i>
                        <span className="app-menu__label">Centro de Ayuda</span>
                        <i className="treeview-indicator fa fa-angle-right"></i>
                    </a>
                    <ul className="treeview-menu">
                        <li>
                            <Link className="app-menu__item" id="tab-ventas" to={`${props.url}/new`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Nueva consulta</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/state`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Estado consulta</span>
                            </Link>
                        </li>
                    </ul>
                </li> */}

                <li className="treeview" id="treeview-ingresos">
                    <a
                        className="app-menu__item"
                        href="#"
                        data-bs-toggle="treeview"
                        aria-expanded="false"
                        role="button"
                        onClick={treeViewMenu}>
                        <i className="app-menu__icon fa fa-arrow-circle-up"></i>
                        <span className="app-menu__label">Ingresos</span>
                        <i className="treeview-indicator fa fa-angle-right"></i>
                    </a>
                    <ul className="treeview-menu">
                        <li>
                            <Link className="app-menu__item" id="tab-ventas" to={`${props.url}/ventas`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Ventas</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/pago-recibido`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Pagos recibidos</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/nota-credito`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Nota de crédito</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/guia-remision`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Guía remisión</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/cotizacion`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Cotización</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="treeview" id="treeview-ingresos">
                    <a
                        className="app-menu__item"
                        href="#"
                        data-bs-toggle="treeview"
                        aria-expanded="false"
                        role="button"
                        onClick={treeViewMenu}>
                        <i className="app-menu__icon fa fa-arrow-circle-down"></i>
                        <span className="app-menu__label">Gastos</span>
                        <i className="treeview-indicator fa fa-angle-right"></i>
                    </a>
                    <ul className="treeview-menu">
                        <li>
                            <Link className="app-menu__item" id="tab-ventas" to={`${props.url}/compras`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Compras</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/pago-echo`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Pagos echos</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/orden-compra`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Orden de compra</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="treeview" id="treeview-ingresos">
                    <a
                        className="app-menu__item"
                        href="#"
                        data-bs-toggle="treeview"
                        aria-expanded="false"
                        role="button"
                        onClick={treeViewMenu}>
                        <i className="app-menu__icon fa fa-skyatlas"></i>
                        <span className="app-menu__label">Facturación Electrónica</span>
                        <i className="treeview-indicator fa fa-angle-right"></i>
                    </a>
                    <ul className="treeview-menu">
                        <li>
                            <Link className="app-menu__item" id="tab-ventas" to={`${props.url}/cpe-electronico`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">CPE-Electrónicos</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/consulta-estado`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Consultar estado</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/consulta-global`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Consulta global</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="treeview" id="treeview-ingresos">
                    <a
                        className="app-menu__item"
                        href="#"
                        data-bs-toggle="treeview"
                        aria-expanded="false"
                        role="button"
                        onClick={treeViewMenu}>
                        <i className="app-menu__icon fa fa-users"></i>
                        <span className="app-menu__label">Contactos</span>
                        <i className="treeview-indicator fa fa-angle-right"></i>
                    </a>
                    <ul className="treeview-menu">
                        <li>
                            <Link className="app-menu__item" id="tab-ventas" to={`${props.url}/cliente`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Clientes</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/proveedor`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Proveedores</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="treeview" id="treeview-ingresos">
                    <a
                        className="app-menu__item"
                        href="#"
                        data-bs-toggle="treeview"
                        aria-expanded="false"
                        role="button"
                        onClick={treeViewMenu}>
                        <i className="app-menu__icon fa fa-cubes"></i>
                        <span className="app-menu__label">Inventario</span>
                        <i className="treeview-indicator fa fa-angle-right"></i>
                    </a>
                    <ul className="treeview-menu">
                        <li>
                            <Link className="app-menu__item" id="tab-ventas" to={`${props.url}/producto`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Productos</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/kardex`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Kardex</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/ajuste-inventario`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Ajustes</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link className="app-menu__item" id="tab-index" to={`${props.url}/reporte`}>
                        <i className="app-menu__icon fa fa-book"></i>
                        <span className="app-menu__label">Reportes</span>
                    </Link>
                </li>

                <li className="treeview" id="treeview-ingresos">
                    <a
                        className="app-menu__item"
                        href="#"
                        data-bs-toggle="treeview"
                        aria-expanded="false"
                        role="button"
                        onClick={treeViewMenu}>
                        <i className="app-menu__icon fa fa-cog"></i>
                        <span className="app-menu__label">Configuración</span>
                        <i className="treeview-indicator fa fa-angle-right"></i>
                    </a>
                    <ul className="treeview-menu">
                        <li>
                            <Link className="app-menu__item" id="tab-ventas" to={`${props.url}/empresa`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Empresa</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/tabla-basica`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Tabla básica</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/moneda`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Moneda</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/comprobante`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Comprobante</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/impuesto`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Impuesto</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/usuario`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Usuario</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/almacen`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Almacen</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="app-menu__item" id="tab-pago" to={`${props.url}/banco`}>
                                <i className="app-menu__icon fa fa-circle-o"></i>
                                <span className="app-menu__label">Banco</span>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    </>
}

export default Menu;