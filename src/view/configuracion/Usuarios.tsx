import { RouteComponentProps } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
    showModal,
    hideModal,
    viewModal,
    clearModal,
} from "../../helper/tools"
import { ListarEmpleados } from "../../network/rest/index.network";
import RestError from "../../model/class/resterror.model.class";
import { Types } from "../../model/enum/types.enum";
import Params from "../../model/interfaces/params.interfaces";
import Respuesta from "../../model/interfaces/respuesta.interfaces";
import Empleado from "../../model/interfaces/empleado.interfaces";
import Response from "../../model/class/response.model.class";

const Usuarios = (props: RouteComponentProps<{}>) => {

    const divModal = useRef<HTMLDivElement>()
    const [fillActive, setFillActive] = useState('tab1');

    const fillTable = async () =>{

        const params: Params = {
            opcion: 0,
            search: "",
            posicionPagina: 0,
            filasPorPagina: 10
        }

        const response = await ListarEmpleados<Respuesta>(params);

        if(response instanceof Response){
            const  empleado = response.data.resultado as Empleado[];
            console.log(empleado)
        }

        if(response instanceof RestError){
            if (response.getType() === Types.CANCELED) return;

            console.log(response)
        }

    }

    useEffect(() => {
        viewModal("modalUsuario", () => {
            // 
        })

        clearModal("modalUsuario", () => {

            divModal.current = undefined
        })

        fillTable();

        return () => {
            if (divModal.current !== undefined) {
                hideModal(divModal.current)
            }

            // if (sweet.alert !== undefined && sweet.alert.isVisible()) {
            //     sweet.alert.closePopup()
            // }

        }
    }, [])

    const openModal = () => {
        const modalInstance = document.getElementById("modalUsuario") as HTMLDivElement
        divModal.current = modalInstance
        showModal(divModal.current)
    }

    const selectTab = (value: string) => {
        if (value === fillActive) {
            return;
        }

        setFillActive(value);
    }

    function onFocusTab(idTab: string, idContent: string) {
        const tabs = document.getElementById(idTab) as HTMLElement;


        if (!tabs.classList.contains('active')) {

            const tabList = document.getElementById("myTab") as HTMLUListElement
            const tabContent = document.getElementById("myTabContent") as HTMLDivElement

            for (let child of tabList.childNodes) {
                // child.childNodes[0].classList.remove('active')
                console.log(child)
            }

            // for(let child of tabContent.childNodes) {
            //     /child.classList.remove('show', 'active')
            // }

            // for (let child of document.getElementById('myTab').childNodes) {
            //     child.childNodes[0].classList.remove('active')
            // }
            // for (let child of document.getElementById('myTabContent').childNodes) {
            //     child.classList.remove('show', 'active')
            // }
            // document.getElementById(idTab).classList.add('active');
            // document.getElementById(idContent).classList.add('show', 'active');
        }
    }

    // function onFocusTab2(idTab: string, idContent: string): void {
    //     if (!document.getElementById(idTab)!.classList.contains('active')) {
    //         for (let child of document.getElementById('myTab')!.childNodes) {
    //             (child as HTMLElement).childNodes[0].classList.remove('active');
    //         }
    //         for (let child of document.getElementById('myTabContent')!.childNodes) {
    //             (child as HTMLElement).classList.remove('show', 'active');
    //         }
    //         document.getElementById(idTab)!.classList.add('active');
    //         document.getElementById(idContent)!.classList.add('show', 'active');
    //     }
    // }

    return (
        <>
            {/* Inicio modal */}
            <div className="modal fade" id="modalUsuario" data-backdrop="static">
                <div className="modal-dialog">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title" id="lblTitleCrud">Agregar Usuario</h4>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="tile border-0 p-0">
                                <div className="overlay p-5 d-none" id="divOverlayUsuario">
                                    <div className="m-loader mr-4">
                                        <svg className="m-circular" viewBox="25 25 50 50">
                                            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth={4} strokeMiterlimit={10}></circle>
                                        </svg>
                                    </div>
                                    <h4 className="l-text text-center text-white p-10" id="lblTextOverlayUsuario">Cargando información...</h4>
                                </div>

                                <div className="bs-component">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation"><a className="nav-link active" href="#tabPrimero" data-bs-toggle="tab" role="tab" id="navTabPrimero" aria-selected="true">Datos básicos</a></li>
                                        <li className="nav-item" role="presentation"><a className="nav-link" href="#tabSegundo" role="tab" data-bs-toggle="tab" id="navTabSegundo" aria-selected="false">Datos de contacto</a></li>
                                        <li className="nav-item" role="presentation"><a className="nav-link" href="#tabTercero" data-bs-toggle="tab" role="tab" id="navTabTercero" aria-selected="false">Acceso al sistema</a></li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">

                                        <div className="tab-pane fade p-2 show active" id="tabPrimero" role="tabpanel">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Tipo documento:</label>
                                                        <div className="input-group">
                                                            <select className="form-control" id="cbTipoDocumento">
                                                                <option value="1">DNI</option><option value="3">RUC</option>
                                                                <option value="1351">SIN DOCUMENTO</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>N° Documento:</label>
                                                        <div className="input-group">
                                                            <input id="txtNumDocumento" className="form-control" type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Apellidos: </label>
                                                        <div className="input-group">
                                                            <input id="txtApellidos" className="form-control" type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Nombres:</label>
                                                        <div className="input-group">
                                                            <input id="txtNombres" className="form-control" type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Sexo:</label>
                                                        <div className="input-group">
                                                            <select className="form-control" id="cbSexo">
                                                                <option value="2">FEMENINO</option>
                                                                <option value="1">MASCULINO</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Fecha nacimiento:</label>
                                                        <div className="input-group">
                                                            <input id="txtFechaNacimiento" className="form-control" type="date" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade p-2" id="tabSegundo" role="tabpanel">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Teléfono:</label>
                                                        <div className="input-group">
                                                            <input id="txtTelefono" className="form-control" type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Celular:</label>
                                                        <div className="input-group">
                                                            <input id="txtCelular" className="form-control" type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Email: </label>
                                                        <div className="input-group">
                                                            <input id="txtEmail" className="form-control" type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Dirección:</label>
                                                        <div className="input-group">
                                                            <input id="txtDireccion" className="form-control" type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade p-2" id="tabTercero" role="tabpanel">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Usuario:</label>
                                                        <div className="input-group">
                                                            <input id="txtUsuario" className="form-control" type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Contraseña:</label>
                                                        <div className="input-group">
                                                            <input id="txtClave" className="form-control" type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Rol:</label>
                                                        <div className="input-group">
                                                            <select id="cbRol" className="form-control">
                                                                <option value="1">ADMINISTRADOR(A)</option>
                                                                <option value="2">CAJA</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Estado:</label>
                                                        <div className="input-group">
                                                            <select id="cbEstado" className="form-control">
                                                                <option value="1">ACTIVO</option>
                                                                <option value="2">INACTIVO</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className=" modal-footer">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="form-group">
                                        <label className="form-text text-left text-danger">Los campos marcados con * son obligatorios</label>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-right">
                                    <button className="btn btn-success" type="button" id="btnSaveBanco"><i className="fa fa-save"></i> Guardar</button> {" "}
                                    <button className="btn btn-danger" type="button" data-bs-dismiss="modal"><i className="fa fa-close"></i> Cancelar</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {/* fin modal */}

            <div className="app-title">
                <h1><i className="fa fa-folder"></i> Usuarios <small>Lista</small></h1>
            </div>

            <div className="tile">
                <div className="tile-body">

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <button className="btn btn-primary" id="btnAgregar" onClick={() => openModal()}>
                                    <i className="fa fa-plus"></i> Agregar
                                </button>
                                {" "}
                                <button className="btn btn-secondary" id="btnReload">
                                    <i className="fa fa-refresh"></i> Recargar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <label>Buscar por el nombre del usuario:</label>
                            <div className="form-group d-flex">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Ingrese los datos requeridos" id="txtBuscar" />
                                    <div className="input-group-append">
                                        <button className="btn btn-success" type="button" id="btnBuscar"><i className="fa fa-search"></i> Buscar</button>
                                    </div>
                                </div>
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
                                            <th style={{ width: "15%" }}>Empleado</th>
                                            <th style={{ width: "10%" }}>Teléfono/Celular</th>
                                            <th style={{ width: "10%" }}>Dirección</th>
                                            <th style={{ width: "10%" }}>Rol</th>
                                            <th style={{ width: "10%" }}>Estado</th>
                                            <th style={{ width: "5%" }}>Editar</th>
                                            <th style={{ width: "5%" }}>Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbList">
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td className="text-left">ADMINISTRADOR, GENERAL</td>
                                            <td className="text-left"><br /></td>
                                            <td className="text-left"></td>
                                            <td className="text-left">ADMINISTRADOR(A)</td>
                                            <td className="text-center"><span className="badge badge-success">ACTIVO</span></td>
                                            <td className="text-center"><button className="btn btn-warning"><i className="fa fa-edit"></i></button></td>
                                            <td className="text-center"><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
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

export default Usuarios;