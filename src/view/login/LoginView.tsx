import React, { useRef, useState } from "react";
import { Redirect, RouteComponentProps } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../store/store";
import { images } from "../../helper";
import { login } from "../../store/authSlice";
import { LoginRest } from "../../network/rest/index.network";
import RestError from "../../model/class/resterror.model.class";
import Response from "../../model/class/response.model.class";
import { Types } from "../../model/enum/types.enum";
import Empleado from "../../model/interfaces/empleado.interfaces";

const LoginView = (props: RouteComponentProps<{}>) => {

    const dispatch = useDispatch();
    const authentication = useSelector((state: RootState) => state.authentication.authentication)

    const [codigo, setCodigo] = useState<string>('');
    const [clave, setClave] = useState<string>('');
    const [codigoMessage, setCodigoMessage] = useState<string>('');
    const [claveMessage, setClaveMessage] = useState<string>('');
    const [process, setProcess] = useState<boolean>(false);
    const [processMessage, setProcessMessage] = useState<string>('');

    const [see, setSee] = useState<boolean>(true);

    const refCodigo = useRef<HTMLInputElement>(null);
    const refClave = useRef<HTMLInputElement>(null);

    const onEventLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (process) return;

        setCodigoMessage("");
        setClaveMessage("");
        setProcessMessage("");

        if (codigo == "") {
            refCodigo.current!.focus();
            setCodigoMessage("!El usuario es oblogatorio¡");
            return;
        }

        if (clave == "") {
            refClave.current!.focus();
            setClaveMessage("!La clave es oblogatorio¡");
            return;
        }

        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }

        setProcess(true);

        const response = await LoginRest<Empleado>(codigo, clave);

        if (response instanceof Response) {
            dispatch(login({ empleado: response.data, token : "123123" }));
        }

        if (response instanceof RestError) {
            if (response.getType() === Types.CANCELED) return;

            setProcess(false);
            setProcessMessage(response.getMessage());
            refCodigo.current!.focus();
        }
    }

    const onEventViewPassword = () => {
        setSee(!see);
    }

    if (authentication) {
        return <Redirect to="/inicio" />
    }

    return (
        <>
            <section className="material-half-bg-white">
                <div className="cover"></div>
            </section>

            <section className="login-content">

                <div className="tile p-0">
                    {
                        process ?
                            <div className="overlay">
                                <div className="m-loader mr-4">
                                    <svg className="m-circular" viewBox="25 25 50 50">
                                        <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10"></circle>
                                    </svg>
                                </div>
                                <h4 className="l-text text-white">Procesando Petición...</h4>
                            </div>
                            :
                            null
                    }

                    <form className="tile-body" onSubmit={onEventLogin}>
                        <div className="login-box">
                            <div className="login-form">
                                <h4 className="text-center mb-3">
                                    <img className="img-fluid" src={images.logo} alt="Logo" />
                                </h4>
                                <h4 className="login-head"><i className="fa fa-fw fa-info"></i>Credenciales de Acceso</h4>
                                <div className="form-group">
                                    <label className="control-label">Usuario</label>
                                    <input
                                        className="form-control mb-1"
                                        type="text"
                                        placeholder="Dijite su usuario"
                                        ref={refCodigo}
                                        value={codigo}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            if (event.target.value.length == 0) {
                                                setCodigoMessage("!El usuario es oblogatorio¡");
                                            } else {
                                                setCodigoMessage("");
                                            }
                                            setCodigo(event.target.value)
                                        }}
                                        autoFocus />
                                    <h6 className="form-group text-danger">
                                        {codigoMessage}
                                    </h6>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Contraseña</label>
                                    <div className="input-group mb-1">
                                        <input
                                            className="form-control"
                                            type={see ? "password" : "text"}
                                            placeholder="Dijite la contraseña"
                                            ref={refClave}
                                            value={clave}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                if (event.target.value.length == 0) {
                                                    setClaveMessage("!La clave es oblogatorio¡");
                                                } else {
                                                    setClaveMessage("");
                                                }
                                                setClave(event.target.value)
                                            }}
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-secondary"
                                                type="button"
                                                onClick={onEventViewPassword}>
                                                <i className={`fa ${!see ? "fa-eye" : "fa-eye-slash"}`}></i>
                                            </button>
                                        </div>
                                    </div>

                                    <h6 className="form-group control-label text-danger">
                                        {claveMessage}
                                    </h6>
                                </div>
                                <div className="form-group btn-container mb-1">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block">
                                        <i className="fa fa-sign-in fa-lg fa-fw"></i> Ingresar
                                    </button>
                                </div>
                                <div className="form-group text-center">
                                    <h5 className="text-danger">{processMessage}</h5>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </section>
        </>
    );
}

export default LoginView;