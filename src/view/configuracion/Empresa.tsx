import { RouteComponentProps } from "react-router-dom";
import Image from "../../helper/images"

const Empresa = (props: RouteComponentProps<{}>) => {

    return (
        <>
            <div className="app-title">
                <h1><i className="fa fa-folder"></i> Configuración <small>Empresa</small></h1>
            </div>

            <div className="tile">

                <div className="tile-body">

                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <label className="form-text"> R.U.C: <i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                    <div className="form-group">
                                        <input id="txtNumDocumento" className="form-control" type="text" placeholder="R.U.C." />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <label className="form-text"> Razón Social: <i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                    <div className="form-group">
                                        <input id="txtRazonSocial" className="form-control" type="text" placeholder="Razón Social" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <label className="form-text">Nombre Comercial: <i className="fa fa-fw fa-asterisk text-danger"></i></label>
                                    <div className="form-group">
                                        <input id="txtNomComercial" className="form-control" type="text" placeholder="Nombre Comercial" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12 text-center p-3">
                                    <img src={Image.no_image} style={{ objectFit: 'cover' }} width="160" height="160" id="lblImagen" />
                                </div>
                                <div className="col-md-12 text-center">
                                    <input type="file" id="fileImage" accept="image/png, image/jpeg, image/gif, image/svg" style={{ display: 'none' }} />
                                    <label className="btn btn-warning" htmlFor="fileImage" id="txtFile"><i className="fa fa-photo"></i> Subir Imagen</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <label className="form-text"> Dirección Fiscal:</label>
                            <div className="form-group">
                                <input id="txtDireccion" className="form-control" type="text" placeholder="Ingrese su dirección fiscal" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="form-text"> Ubigeo:</label>
                            <div className="form-group">
                                <select className="select2-selection__rendered form-control select2-hidden-accessible" id="cbUbigeo" tabIndex={-1} aria-hidden="true" data-select2-id="select2-data-cbUbigeo">
                                    <option value="" data-select2-id="select2-data-4-72ki">- Seleccionar -</option>
                                    <option value="1260" data-select2-id="select2-data-6-1ev5">LIMA - LIMA - LINCE(1260)</option>
                                </select>
                                {/* <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-3-ej3p" style={{width: "100%"}}>
                                    <span className="selection">
                                        <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-cbUbigeo-container" aria-controls="select2-cbUbigeo-container">
                                            <span className="select2-selection__rendered" id="select2-cbUbigeo-container" role="textbox" aria-readonly="true" title="LIMA - LIMA - LINCE(1260)">LIMA - LIMA - LINCE(1260)</span>
                                            <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                                        </span>
                                    </span>
                                    <span className="dropdown-wrapper" aria-hidden="true"></span>
                                </span> */}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <label className="form-text">Teléfono: <i className="fa fa-fw fa-asterisk text-danger"></i></label>
                            <div className="form-group">
                                <input id="txtTelefono" className="form-control" type="text" placeholder="Teléfono"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-text">Celular:</label>
                            <div className="form-group">
                                <input id="txtCelular" className="form-control" type="text" placeholder="Celular"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <label className="form-text">Pagina web:</label>
                            <div className="form-group">
                                <input id="txtPaginWeb" className="form-control" type="text" placeholder="Página Web"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-text">Email:</label>
                            <div className="form-group">
                                <input id="txtEmail" className="form-control" type="text" placeholder="Email"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <label className="form-text">Terminos:</label>
                            <div className="form-group">
                                <input id="txtTerminos" className="form-control" type="text" placeholder="Terminos"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-text">Condiciones:</label>
                            <div className="form-group">
                                <input id="txtCodiciones" className="form-control" type="text" placeholder="Condiciones"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <label className="form-text"> Usuario Sol:</label>
                            <div className="form-group">
                                <input id="txtUsuarioSol" className="form-control" type="text" placeholder="Usuario Sol"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-text"> Contraseña Sol:</label>
                            <div className="form-group">
                                <input id="txtClaveSol" className="form-control" type="password" placeholder="Password SOL"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-6">
                            <label className="form-text"> Seleccionar Archivo:</label>
                            <div className="form-group d-flex">
                                <input type="file" className="form-control d-none" id="fileCertificado"/>
                                    <div className="input-group">
                                        <label className="form-control" htmlFor="fileCertificado" id="lblNameCertificado">../resources/20547848307.pfx</label>
                                        <div className="input-group-append">
                                            <label htmlFor="fileCertificado" className="btn btn-info" id="btnReloadCliente">Subir</label>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="form-text"> Contraseña de tu Certificado:</label>
                            <div className="form-group">
                                <input id="txtClaveCertificado" className="form-control" type="password" placeholder="Contraseña de tu Certificado"/>
                            </div>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-6">
                            <label className="form-text">Id (Api Sunat):</label>
                            <div className="form-group">
                                <input id="txtIdApiSunat" className="form-control" type="text" placeholder="Contraseña de tu Certificado"/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="form-text">Clave (Api Sunat):</label>
                            <div className="form-group">
                                <input id="txtClaveApiSunat" className="form-control" type="text" placeholder="Contraseña de tu Certificado"/>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-text text-left text-danger">Todos los campos marcados con <i className="fa fa-fw fa-asterisk text-danger"></i> son obligatorios</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group text-right">
                                <button className="btn btn-success" type="button" id="btnGuardar"><i className="fa fa-save"></i> Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );

}

export default Empresa;