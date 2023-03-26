import { RouteComponentProps } from "react-router-dom";
import Image from "../../../helper/images"

const ProductoProceso = (props: RouteComponentProps<{}>) => {
    return (
        <>

            <div className="tile mb-4">

                <div className="overlay p-5 d-none" id="divOverlayProducto">
                    <div className="m-loader mr-4">
                        <svg className="m-circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"></circle>
                        </svg>
                    </div>
                    <h4 className="l-text text-center p-10 text-white" id="lblTextOverlayProducto">Cargando información...</h4>
                </div>

                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3 className="mr-2 mb-2"><i className="fa fa-long-arrow-left btn text-primary px-1" title="Atraz" onClick={() => props.history.goBack()}></i>Producto</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <button className="btn btn-success" id="btnRegistrar">
                                <i className="fa fa-floppy-o"></i> Registrar
                            </button>
                            {" "}
                            <button className="btn btn-secondary" id="btnCancelar">
                                <i className="fa fa-paint-brush"></i> Limpiar
                            </button>
                        </div>
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="card card-default">
                            <div className="card-header">
                                <h4 className="card-title">Información General</h4>
                            </div>
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <label>Clave <i className="text-danger fa fa-info-circle"></i></label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Clave del producto" id="txtClave" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <label>Clave Alterna</label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Clave alterna del producto" id="txtClaveAlterna" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-xs-12 text-center m-2">
                                                <img src={Image.no_image} style={{ objectFit: "cover" }} width="160" height="160" id="lblImagen" />
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-xs-12 text-center m-2">
                                                <input type="file" id="fileImage" accept="image/png, image/jpeg, image/gif, image/svg" style={{ display: "none" }} />
                                                <label htmlFor="fileImage" className="btn btn-outline-secondary m-0">
                                                    <div className="content-button">
                                                        <i className="fa fa-picture-o"></i>
                                                    </div>
                                                </label>
                                                {" "}
                                                <button className="btn btn-outline-secondary" id="btnRemove">
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <label>Nombre <i className="text-danger fa fa-info-circle"></i></label>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Nombre producto" id="txtNombre" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12 col-xs-12">
                                                <label>Unidad de Medida(Precione espacio o doble click) <i className="text-danger fa fa-info-circle"></i></label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Unidad" id="txtUnidadMedida" autoComplete="off" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 col-xs-12">
                                                <label>Categoría(Precione espacio o doble click) <i className="text-danger fa fa-info-circle"></i></label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Producto" id="txtCategoria" autoComplete="off" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <label>
                                            Se Vende <i className="text-danger fa fa-info-circle"></i>
                                        </label>
                                    </div>

                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <input type="radio" id="rbUnidad" name="tbSeVende" checked />
                                                    <label htmlFor="rbUnidad">
                                                        &nbsp;Por Unidad/Pza o Por Precio Base
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <input type="radio" id="rbMoneda" name="tbSeVende" />
                                                    <label htmlFor="rbMoneda">
                                                        &nbsp; Por Valor Monetario
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <input type="radio" id="rbGranel" name="tbSeVende" />
                                                    <label htmlFor="rbGranel">
                                                        &nbsp; A granel(Km,Ml,Mc, etc.)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="card card-default">
                            <div className="card-header">
                                <h4 className="card-title">Información de Almacen</h4>
                            </div>
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12 ">
                                        <div className="form-group border-bottom mt-3">
                                            <label htmlFor="cbCosto">El producto utiliza inventario&nbsp;&nbsp;</label>
                                            <input type="checkbox" id="cbCosto" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row disabled" id="divCosto">
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                <label>Costo <i className="text-danger fa fa-info-circle"></i></label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Costo de compra" id="txtCosto" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                                        <label>Stock mínimo </label>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Stock mínimo" id="txtStockMinimo" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                                        <label>Stock máximo </label>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Stock máximo" id="txtStockMaximo" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <label>Valor de salida del producto</label>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <input type="radio" id="rbUnidadSalida" name="tbValorSalida" checked />
                                                    <label htmlFor="rbUnidadSalida">
                                                        &nbsp; Por Unidades(cantidades)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <input type="radio" id="rbMonedaSalida" name="tbValorSalida" />
                                                    <label htmlFor="rbMonedaSalida">
                                                        &nbsp; Por valor monetario(S/, $, U, etc.)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <input type="radio" id="rbGranelSalida" name="tbValorSalida" />
                                                    <label htmlFor="rbGranelSalida">
                                                        &nbsp;Por medidas(kg, cm, falón, etc.)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <label>Impuesto <i className="text-danger fa fa-info-circle"></i></label>
                                        <div className="form-group">
                                            <select className="form-control" id="cbImpuesto">
                                                <option value="">--TODOS--</option>
                                                <option value="1">NINGUNO(%)</option>
                                                <option value="2">IGV (18)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <input type="radio" id="rbPrecioNormal" name="tbTipoPrecio" checked />
                                            <label htmlFor="rbPrecioNormal">
                                                &nbsp;Lista de Precio Normal
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-md-12 col-sm-12 col-xs-12" id="divPrecioNormal">
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12 col-xs-12">
                                                <label>Precio General <i className="text-danger fa fa-info-circle"></i></label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Precio General" id="txtPrecioGeneral" />
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12 col-xs-12">
                                                <label>Precio 2 </label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Precio 2" id="txtPrecio2" />
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12 col-xs-12">
                                                <label>Precio 3 </label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Precio 3" id="txtPrecio3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <input type="radio" id="rbPrecioPersonalizado" name="tbTipoPrecio" />
                                            <label htmlFor="rbPrecioPersonalizado">
                                                &nbsp;Lista de Precios Personalizados
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-md-12 col-sm-12 col-xs-12" id="divPrecioPersonalizado" style={{ display: "none" }}>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12 col-xs-12">
                                                <label>Precio General <i className="text-danger fa fa-info-circle"></i></label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Clave del producto" id="txtPrecioGeneralPersonalizado" />
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12 col-xs-12">
                                                <label>Opción </label>
                                                <div className="form-group">
                                                    <button className="btn btn-success" id="btnAgregar">
                                                        <i className="fa fa-plus"></i> Agregar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                <table className="table table-striped table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: "30%" }}>Nombre</th>
                                                            <th style={{ width: "30%" }}>Precio del Monto</th>
                                                            <th style={{ width: "30%" }}>Cantidad</th>
                                                            <th style={{ width: "10%" }}>Opcion</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="tbPrecios">

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="card card-default">
                            <div className="card-header">
                                <h4 className="card-title">Información Adicional</h4>
                            </div>
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <label>Nombre alterna </label>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Nombre alterna " id="txtNombreAlterna" />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-12 col-xs-12">
                                        <label>Estado </label>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <input type="radio" id="rbActivo" name="tbEstado" checked />
                                                    <label htmlFor="rbActivo"> Activo</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <input type="radio" id="tbDesactivo" name="tbEstado" />
                                                    <label htmlFor="tbDesactivo" className="radio-custom-label"> Inactivo</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <label>Marca(Precione espacio o doble click) </label>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Marca" id="txtMarca" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <label>Presentación(Precione espacio o doble click) </label>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Presentación" id="txtPresentacion" autoComplete="false" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <label>Clave única del producto </label>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Clave única del producto" id="txtClaveUnica" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <label>Descripción </label>
                                        <div className="form-group">
                                            <textarea id="txtDescripcion" className="form-control" rows={5}>
                                            </textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <input type="checkbox" id="cbLote" />
                                            <label htmlFor="cbLote">&nbsp;Lote(Indica si manejara un control de lotes y caducidades para este artículo)</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <label>Usar en </label>
                                        <div className="row">
                                            <div className="col-md-2 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <input type="radio" id="rbTodoModulos" name="tbPara" checked />
                                                    <label htmlFor="rbTodoModulos"> Todos los módulos</label>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <input type="radio" id="rbModuloVentas" name="tbPara" />
                                                    <label htmlFor="rbModuloVentas" className="radio-custom-label"> Solo ventas</label>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <input type="radio" id="rbModuloProduccion" name="tbPara" />
                                                    <label htmlFor="rbModuloProduccion" className="radio-custom-label"> Solo producción</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default ProductoProceso