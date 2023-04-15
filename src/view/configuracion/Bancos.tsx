import { useEffect, useRef, useState } from "react"
import { RouteComponentProps } from "react-router-dom"
import useSweet from "../../component/alert"
import {
    showModal,
    hideModal,
    viewModal,
    clearModal,
} from "../../helper/tools"

const Bancos = (props: RouteComponentProps<{}>) => {

    const divModal = useRef<HTMLDivElement>()
    const sweet = useSweet()

    const [nombreBanco, setNombreBanco] = useState<string>("")

    const onEventEliminar = () => {
        sweet.openInformation("title", "information")
        setTimeout(() => {
            sweet.openSuccess("title", "success")
        }, 5000)
    }

    useEffect(() => {
        viewModal("modalBanco", () => {
            console.log("Cuando termina de cargar el modal")
        })

        clearModal("modalBanco", () => {
            setNombreBanco("")
            divModal.current = undefined
            console.log("Cuando se cierra el modal")
        })

        return () => {
            if (divModal.current !== undefined) {
                hideModal(divModal.current)
            }

            if (sweet.alert !== undefined && sweet.alert.isVisible()) {
                sweet.alert.closePopup()
            }

            console.log("close component")
        }
    }, [])

    return (
        <>
            {/* Inicio modal */}
            <div className="modal fade" id="modalBanco" data-backdrop="static">
                <div className="modal-dialog">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title" id="lblTitleCrud">Agregar Banco</h4>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="tile border-0 p-0">

                                <div className="overlay p-5 d-none" id="divOverlayBanco">
                                    <div className="m-loader mr-4">
                                        <svg className="m-circular" viewBox="25 25 50 50">
                                            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10"></circle>
                                        </svg>
                                    </div>
                                    <h4 className="l-text text-center text-white p-10" id="lblTextOverlayBanco">Cargando información...</h4>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Nombre de la cuenta <i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                            <div className="input-group">
                                                <input
                                                    id="txtNombre"
                                                    className="form-control"
                                                    type="text"
                                                    value={nombreBanco}
                                                    placeholder="Ingrese el nombre de la cuenta"
                                                    onChange={(nombreBanco: React.ChangeEvent<HTMLInputElement>) => {
                                                        setNombreBanco(nombreBanco.target.value)
                                                    }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Número de la cuenta</label>
                                            <div className="input-group">
                                                <input id="txtNumero" className="form-control" type="text" placeholder="Ingrese el número de cuenta" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Moneda <i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                            <div className="input-group">
                                                <select className="form-control" id="cbMoneda">
                                                    <option value="">- Seleccione -</option>
                                                    <option value="1">SOL</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Saldo inicial <i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                            <div className="input-group">
                                                <input id="txtSaldo" className="form-control" type="text" placeholder="Ingrese el saldo inicial" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label>Descripción</label>
                                            <div className="input-group">
                                                <input id="txtDescripcion" className="form-control" type="text" placeholder="Ingrese alguna descripción" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <label>Cuenta en Efectivo <input type="radio" id="rbEfectivo" name="forma" /></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <label>Cuenta Bancaria <input type="radio" id="rbBancaria" name="forma" /></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <label><input type="checkbox" id="cbMostrar" /> Mostrar cuenta en los reportes de comprobantes</label>
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
                                    {/* <button className="btn btn-primary" onClick={() => {
                                        if (divModal.current != undefined) {
                                            hideModal(divModal.current)
                                        }
                                    }}> Cerrar </button> */}
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
                <h1><i className="fa fa-folder"></i> Bancos <small>Lista</small></h1>
            </div>

            <div className="tile">
                <div className="tile-body">

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <button className="btn btn-primary" onClick={() => {
                                    const modalInstance = document.getElementById("modalBanco") as HTMLDivElement
                                    divModal.current = modalInstance
                                    showModal(divModal.current)
                                }}>
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
                            <label>Buscar por el nombre del banco:</label>
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
                                            <th style={{ width: "15%" }}>Nombre de la Cuenta</th>
                                            <th style={{ width: "15%" }}>Número de la Cuenta</th>
                                            <th style={{ width: "20%" }}>Descripción</th>
                                            <th style={{ width: "15%" }}>Tipo de Cuenta</th>
                                            <th style={{ width: "10%" }}>Mostrar Cuenta</th>
                                            <th style={{ width: "10%" }}>Saldo</th>
                                            <th style={{ width: "5%" }}>Editar</th>
                                            <th style={{ width: "5%" }}>Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbList">
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td className="text-left">-</td>
                                            <td className="text-left">-</td>
                                            <td className="text-left">-</td>
                                            <td className="text-left">-</td>
                                            <td className="text-left">-</td>
                                            <td className="text-left">-</td>
                                            <td className="text-center"><button className="btn btn-warning"><i className="fa fa-edit"></i></button></td>
                                            <td className="text-center"><button onClick={onEventEliminar} className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
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
    )

}

export default Bancos