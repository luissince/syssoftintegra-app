import { RouteComponentProps } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
    showModal,
    hideModal,
    viewModal,
    clearModal,
} from "../../../helper/tools"
import { ListarEmpleadosRest } from "../../../network/rest/index.network";
import RestError from "../../../model/class/resterror.model.class";
import { Types } from "../../../model/enum/types.enum";
import Params from "../../../model/interfaces/params.interfaces";
import Respuesta from "../../../model/interfaces/respuesta.interfaces";
import Empleado from "../../../model/interfaces/empleado.interfaces";
import Response from "../../../model/class/response.model.class";
import Paginacion from "../../../component/paginacion.component";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/authSlice";
import { images } from "../../../helper";
import useSweet from "../../../component/alert.component";
import Registrar from "./widget/Registrar";

const Usuarios = (props: RouteComponentProps<{}>) => {

    const dispatch = useDispatch();
    const sweet = useSweet()

    const opcion = useRef<number>(0);
    const paginacion = useRef<number>(0);
    const restart = useRef<boolean>(false);
    const totalPaginacion = useRef<number>(0);
    const filasPorPagina = useRef<number>(10);
    const [buscar, setBuscar] = useState<string>("");
    const [empleados, setEmpleados] = useState<Empleado[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [mensaje, setMensaje] = useState<string>("Mostranto 0 de 0 Páginas");

    const abortControllerTable = useRef(new AbortController());

    const MODAL_REGISTRO = useRef("modalUsuario");
    const divModal = useRef<HTMLDivElement>()

    const openModal = () => {
        const modalInstance = document.getElementById(MODAL_REGISTRO.current) as HTMLDivElement
        divModal.current = modalInstance
        showModal(divModal.current)
    }

    const loadInit = async () => {
        if (loading) return;

        paginacion.current = 1;
        restart.current = true;
        fillTable("");
        opcion.current = 0;
    }

    const onEvenBuscar = async (value: string) => {
        if (loading) return;

        if (value.trim().length === 0) return;

        paginacion.current = 1;
        restart.current = false;
        fillTable(value.trim());
        opcion.current = 1;
    }

    const paginacionTable = (listid: number) => {
        paginacion.current = listid;
        restart.current = false;
        onEventPaginacion();
    }

    const onEventPaginacion = () => {
        switch (opcion.current) {
            case 0:
                fillTable("");
                break;
            case 1:
                fillTable(buscar);
                break;

            default: fillTable("");
        }
    }

    const fillTable = async (buscar: string) => {
        setLoading(true);
        setEmpleados([]);

        const params: Params = {
            "opcion": opcion.current,
            "search": buscar,
            "posicionPagina": ((paginacion.current - 1) * filasPorPagina.current),
            "filasPorPagina": filasPorPagina.current
        }

        const response = await ListarEmpleadosRest<Respuesta>(params, abortControllerTable.current);

        if (response instanceof Response) {
            totalPaginacion.current = Math.ceil(response.data.total / filasPorPagina.current);
            const messagePaginacion = `Mostrando ${response.data.resultado.length} de ${totalPaginacion.current} Páginas`;

            setEmpleados(response.data.resultado as Empleado[])
            setMensaje(messagePaginacion);
            setLoading(false);
        }

        if (response instanceof RestError) {
            if (response.getType() === Types.CANCELED) return;

            if (response.getType() === Types.CANCELED) return;

            if (response.getStatus() == 401) {
                dispatch(logout());
                return;
            }

            if (response.getStatus() == 403) {
                dispatch(logout());
                return;
            }

            setEmpleados([]);
            setLoading(false);
        }
    }

    useEffect(() => {

        //  viewModal(MODAL_REGISTRO.current, () => {
        //     // 
        //     console.log("viewModal")
        // })

        // clearModal(MODAL_REGISTRO.current, () => {
        //     console.log("clearModal")
        //     divModal.current = undefined
        // })
       

        loadInit();

        return () => {
            abortControllerTable.current.abort();

            if (divModal.current !== undefined) {
                hideModal(divModal.current)
            }

            if (sweet.alert !== undefined && sweet.alert.isVisible()) {
                sweet.alert.closePopup()
            }
        }
    }, []);


    return (
        <>
            {/* Inicio modal */}
            <Registrar
                name={MODAL_REGISTRO.current}
                // name="modalUsuario"
                sweet={sweet}
                divModal={divModal}
            />
            {/* fin modal */}

            <div className="app-title">
                <h1><i className="fa fa-folder"></i> Usuarios <small>Lista</small></h1>
            </div>

            <div className="tile">
                <div className="tile-body">

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <button className="btn btn-primary"
                                    onClick={openModal}>
                                    <i className="fa fa-plus"></i> Agregar
                                </button>
                                {" "}
                                <button className="btn btn-secondary"
                                    onClick={loadInit}>
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
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ingrese los datos requeridos"
                                        value={buscar}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setBuscar(event.target.value);
                                            onEvenBuscar(event.currentTarget.value);
                                        }} />
                                    <div className="input-group-append">
                                        <button className="btn btn-success" type="button" onClick={onEventPaginacion}><i className="fa fa-search"></i> Buscar</button>
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
                                    <tbody>
                                        {
                                            loading ?
                                                <tr>
                                                    <td className="text-center" colSpan={8}>
                                                        <img src={images.loading} width="34" height="34" />
                                                        <p>Cargando información...</p>
                                                    </td>
                                                </tr>
                                                :
                                                empleados.length == 0 ?
                                                    <tr>
                                                        <td className="text-center" colSpan={8}>
                                                            <p>No hay datos para mostrar.</p>
                                                        </td>
                                                    </tr>
                                                    :
                                                    empleados.map((item, index) => {
                                                        const estado = item.detalle?.nombre == "ACTIVO" ? <span className="badge badge-success">{item.detalle.nombre}</span> : <span className="badge badge-danger">{item.detalle?.nombre}</span>;

                                                        return (<tr key={index}>
                                                            <td className="text-center">{item.id}</td>
                                                            <td className="text-left">{item.numeroDocumento} <br /> {item.nombres}, {item.apellidos}</td>
                                                            <td className="text-left">{item.telefono} {item.celular}</td>
                                                            <td className="text-left">{item.direccion}</td>
                                                            <td className="text-left">{item.rol?.nombre}</td>
                                                            <td className="text-center">{estado}</td>
                                                            <td className="text-center"><button className="btn btn-warning"><i className="fa fa-edit"></i></button></td>
                                                            <td className="text-center"><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
                                                        </tr>
                                                        );
                                                    })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-5">
                            <div className="dataTables_info mt-2" role="status" aria-live="polite">{mensaje}</div>
                        </div>
                        <div className="col-sm-12 col-md-7">
                            <div className="dataTables_paginate paging_simple_numbers">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-end">
                                        <Paginacion
                                            loading={loading}
                                            restart={restart.current}
                                            paginacion={paginacion.current}
                                            totalPaginacion={totalPaginacion.current}
                                            fillTable={paginacionTable}
                                        />
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Usuarios;