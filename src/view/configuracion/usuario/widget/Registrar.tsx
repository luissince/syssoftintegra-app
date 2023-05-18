import { useEffect, useState, useRef } from "react";
import { alertWarning, clearModal, hideModal, viewModal } from "../../../../helper/tools";
import Sweet from "../../../../model/interfaces/Sweet.interface";
import Detalle from "../../../../model/interfaces/detalle.interfaces";
import Rol from "../../../../model/interfaces/rol.interfaces";
import { ListaDetalleParams } from "../../../../model/interfaces/params.interfaces";
import { ListaDetalleIdMantenimientoRest, ListarRolesRest, RegistrarEmpleadoRest } from "../../../../network/rest/index.network";
import Response from "../../../../model/class/response.model.class";
import RestError from "../../../../model/class/resterror.model.class";
import Empleado from "../../../../model/interfaces/empleado.interfaces";
import { Types } from "../../../../model/enum/types.enum";
import toast from 'react-hot-toast';
import { images } from "../../../../helper";

type Props = {
    name: string,
    sweet: Sweet,
    divModal: React.MutableRefObject<HTMLDivElement | undefined>
}

function Registrar(props: Props) {

    const [tiposDocumentos, setTiposDocumentos] = useState<Detalle[]>([]);
    const [sexos, setSexos] = useState<Detalle[]>([]);
    const [roles, setRoles] = useState<Rol[]>([]);
    const [estados, setEstados] = useState<Detalle[]>([]);

    const [tipoDocumento, setTipoDocumento] = useState<number>(0);
    const [numeroDocumento, setNumeroDocumento] = useState<string>("");
    const [apellidos, setApellidos] = useState<string>("");
    const [nombres, setNombres] = useState<string>("");
    const [fechaNacimiento, setFechaNacimiento] = useState<string>("");
    const [telefono, setTelefono] = useState<string>("");
    const [celular, setCelular] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [direccion, setDireccion] = useState<string>("");
    const [usuario, setUsuario] = useState<string>("");
    const [clave, setClave] = useState<string>("");
    const [sexo, setSexo] = useState<number>(0);
    const [estado, setEstado] = useState<number>(0);

    const refTipoDocumento = useRef<HTMLSelectElement>(null);
    const refNumeroDocumento = useRef<HTMLInputElement>(null);

    const abortController = useRef(new AbortController());

    const [cargando, setCargando] = useState<boolean>(false);

    useEffect(() => {
        viewModal(props.name, () => {
            // 
            console.log("viewModal")
            setCargando(true);
            cargarInformacion();
        })

        clearModal(props.name, () => {
            console.log("clearModal")
            props.divModal.current = undefined
        })

        return () => abortController.current.abort();
    }, []);

    const cargarInformacion = async () => {
        const params1: ListaDetalleParams = {
            opcion: "1",
            idMantenimiento: "0003",
            nombre: "RUC"
        }
        const response1 = await ListaDetalleIdMantenimientoRest<Detalle[]>(params1, abortController.current);
        if (response1 instanceof Response) {
            setTiposDocumentos(response1.data);
        }


        const params2: ListaDetalleParams = {
            opcion: "0",
            idMantenimiento: "0004",
            nombre: ""
        }
        const response2 = await ListaDetalleIdMantenimientoRest<Detalle[]>(params2, abortController.current);
        if (response2 instanceof Response) {
            setSexos(response2.data);
        }

        const response3 = await ListarRolesRest<Rol[]>();
        if (response3 instanceof Response) {
            setRoles(response3.data);
        }

        const params4: ListaDetalleParams = {
            opcion: "0",
            idMantenimiento: "0001",
            nombre: ""
        }
        const response4 = await ListaDetalleIdMantenimientoRest<Detalle[]>(params4, abortController.current);
        if (response4 instanceof Response) {
            setEstados(response4.data);
        }

        setCargando(false)
    }


    const onEventProcesar = () => {

        if (tipoDocumento == 0) {
            alertWarning("Advertencia", "Seleccione el tipo de documento.")
            refTipoDocumento.current?.focus()
            return
        }

        if (numeroDocumento == "") {
            alertWarning("Advertencia", "Ingrese el número de documento.")
            refNumeroDocumento.current?.focus()
            return
        }


        const payload: Empleado = {
            id: 0,
            idEmpleado: "",
            tipoDocumento: tipoDocumento,
            numeroDocumento: numeroDocumento,
            apellidos: apellidos,
            nombres: nombres,
            sexo: 0,
            fechaNacimiento: "2023-04-07",
            puesto: 1,
            roles: 1,
            estado: 1,
            telefono: "",
            celular: "",
            email: "",
            direccion: "",
            usuario: "",
            clave: "",
            sistema: true,
            huella: "",
        }

        props.sweet.openDialog("Usuario", "¿Está segundo de continuar?", async (value: boolean) => {
            if (value) {
                hideModal(props.divModal?.current!);
                props.sweet.openInformation("Usuario", "Procesando información...")

                const response = await RegistrarEmpleadoRest<string>(payload);

                if (response instanceof Response) {
                    props.sweet.openSuccess("Usuario", response.data, () => {

                    });
                }

                if (response instanceof RestError) {
                    if (response.getType() === Types.CANCELED) return;


                    props.sweet.openWarning("Usuario", response.getMessage());
                }
            }
        });
    }

    return (
        <div className="modal fade" id={props.name} data-bs-backdrop="static" data-bs-keyboard="false" aria-modal="true" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Agregar Usuario</h4>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <div className="tile border-0 p-0">
                            {cargando && <div className="overlay p-5">
                                <div className="m-loader mr-4">
                                    <svg className="m-circular" viewBox="25 25 50 50">
                                        <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth={4} strokeMiterlimit={10}></circle>
                                    </svg>
                                </div>
                                <h4 className="l-text text-center text-white p-10">Cargando información...</h4>
                            </div>}

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
                                                        <select
                                                            className="form-control"
                                                            ref={refTipoDocumento}
                                                            value={tipoDocumento}
                                                            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                                                setTipoDocumento(parseInt(event.target.value))
                                                            }}>
                                                                <option value="0">- Seleccione -</option>
                                                            {
                                                                tiposDocumentos.map((item, index) => {
                                                                    return (<option key={index} value={item.idDetalle}>{item.nombre}</option>);
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label>N° Documento:</label>
                                                    <div className="input-group">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder=""
                                                            ref={refNumeroDocumento}
                                                            value={numeroDocumento}
                                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                                setNumeroDocumento(event.target.value);
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label>Apellidos: </label>
                                                    <div className="input-group">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder=""
                                                            value={apellidos}
                                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                                setApellidos(event.target.value);
                                                            }} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label>Nombres:</label>
                                                    <div className="input-group">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder=""
                                                            value={nombres}
                                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                                setNombres(event.target.value);
                                                            }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label>Sexo:</label>
                                                    <div className="input-group">
                                                        <select
                                                            className="form-control"
                                                            value={sexo}
                                                            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                                                setSexo(parseInt(event.target.value))
                                                            }} >
                                                            {
                                                                sexos.map((item, index) => {
                                                                    return (<option key={index} value={item.idDetalle}>{item.nombre}</option>);
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label>Fecha nacimiento:</label>
                                                    <div className="input-group">
                                                        <input
                                                            className="form-control"
                                                            type="date"
                                                            placeholder=""
                                                            value={fechaNacimiento}
                                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                                setFechaNacimiento(event.target.value);
                                                            }} />
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
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder=""
                                                            value={telefono}
                                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                                setTelefono(event.target.value);
                                                            }} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label>Celular:</label>
                                                    <div className="input-group">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder=""
                                                            value={celular}
                                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                                setCelular(event.target.value);
                                                            }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label>Email: </label>
                                                    <div className="input-group">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder=""
                                                            value={email}
                                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                                setEmail(event.target.value);
                                                            }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label>Dirección:</label>
                                                    <div className="input-group">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder=""
                                                            value={direccion}
                                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                                setDireccion(event.target.value);
                                                            }} />
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
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder=""
                                                            value={usuario}
                                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                                setUsuario(event.target.value);
                                                            }} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label>Contraseña:</label>
                                                    <div className="input-group">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder=""
                                                            value={clave}
                                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                                setClave(event.target.value);
                                                            }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label>Rol:</label>
                                                    <div className="input-group">
                                                        <select
                                                            className="form-control"
                                                            value={sexo}
                                                            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                                                setSexo(parseInt(event.target.value))
                                                            }} >
                                                            {
                                                                roles.map((item, index) => {
                                                                    return (<option key={index} value={item.idRol}>{item.nombre}</option>);
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <label>Estado:</label>
                                                    <div className="input-group">
                                                        <select
                                                            className="form-control"
                                                            value={estado}
                                                            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                                                setEstado(parseInt(event.target.value))
                                                            }} >
                                                            {
                                                                estados.map((item, index) => {
                                                                    return (<option key={index} value={item.idDetalle}>{item.nombre}</option>);
                                                                })
                                                            }
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
                                <button
                                    className="btn btn-success"
                                    type="button"
                                    onClick={onEventProcesar}>
                                    <i className="fa fa-save"></i> Guardar
                                </button>
                                {" "}
                                <button
                                    className="btn btn-danger"
                                    type="button"
                                    data-bs-dismiss="modal">
                                    <i className="fa fa-close"></i> Cancelar
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Registrar;