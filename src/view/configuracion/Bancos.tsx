import { useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import useSweet from "../../component/alert";
import {
    showModal,
    hideModal,
    viewModal,
    clearModal,
} from "../../helper/tools";

const Bancos = (props: RouteComponentProps<{}>) => {

    const modal = useRef<HTMLDivElement>();

    const sweet = useSweet();

    const [text, setText] = useState<string>("");

    const onEventEliminar = () => {
        sweet.openInformation("title", "information");
        setTimeout(() => {
            sweet.openSuccess("title", "success");
        }, 5000);
    }

    useEffect(() => {
        viewModal("modalCambiar", () => {
            console.log("Cuando termina de cargar el modal");
        });

        clearModal("modalCambiar", () => {
            setText("");
            modal.current = undefined;
            console.log("Cuando se cierra el modal");
        });



        return () => {
            if (modal.current !== undefined) {
                hideModal(modal.current)
            }

            if (sweet.alert !== undefined && sweet.alert.isVisible()) {
                sweet.alert.closePopup();
            }

            console.log("close component");
        };
    }, []);

    return (
        <>
            {/* Inicio modal */}
            <div className="modal fade" id="modalCambiar" data-backdrop="static">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title"><i className="fa fa-question-circle"></i> Centro de Ayuda</h4>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label></label>
                            <input type={"text"}
                                value={text}
                                onChange={(value: React.ChangeEvent<HTMLInputElement>) => {
                                    setText(value.target.value);
                                }} />

                            <p>¿Qué es Lorem Ipsum?
                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>

                            <p>¿Qué es Lorem Ipsum?
                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>

                            <button className="btn btn-primary" onClick={() => {
                                if (modal.current != undefined) {
                                    hideModal(modal.current)
                                }
                            }}>
                                Cerrar
                            </button>
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
                                    const modalInstance = document.getElementById("modalCambiar") as HTMLDivElement;
                                    modal.current = modalInstance;
                                    showModal(modal.current);
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
    );

}

export default Bancos;