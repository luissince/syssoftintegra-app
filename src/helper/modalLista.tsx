interface ModalProps {
    size: string
    title: string
    handleCloseModal: () => void
    children: any;
}

const ModalLista = ({size, title, handleCloseModal, children}: ModalProps) => {

    return (
        <>
            <div className="md-custom">
                <div className={`md-dialog-custom ${size}`}>
                    <div className="md-content-custom">

                        <div className="md-header-custom">
                            <h4 className="md-title-custom"><i className="fa fa-folder"></i> {title}</h4>
                            <button type="button" className="close" aria-label="Close" onClick={() => handleCloseModal()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="md-body-custom">
                            {children}
                        </div>

                        {/* <div className="md-footer-custom">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="form-group">
                                        <label className="form-text text-left text-danger">Los campos marcados con * son obligatorios</label>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-right">
                                    <button className="btn btn-success" type="button"><i className="fa fa-save"></i> Guardar</button> {" "}
                                    <button className="btn btn-danger" type="button" onClick={() => handleCloseModal()}><i className="fa fa-close"></i> Cancelar</button>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </>
    )

}

export default ModalLista;