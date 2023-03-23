import React, { useRef, useState } from "react";
import { Redirect, RouteComponentProps } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../store/store";
import { images } from "../../helper";
import { login } from "../../store/authSlice";

const Login = (props: RouteComponentProps<{}>) => {

    const dispatch = useDispatch();
    const authentication = useSelector((state: RootState) => state.authentication.authentication)

    const [codigo, setCodigo] = useState<string>('');
    const [clave, setClave] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [process, setProcess] = useState<boolean>(false);

    const refCodigo = useRef<HTMLInputElement>(null);
    const refClave = useRef<HTMLInputElement>(null);

    const onEventLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (process) return;

        // setCodigoMessage("");
        // setClaveMessage("");

        if (codigo == "") {
            refCodigo.current!.focus();
            // setCodigoMessage("!El campo es oblogatorio¡");
            return;
        }

        if (clave == "") {
            refClave.current!.focus();
            // setClaveMessage("!El campo es oblogatorio¡");
            return;
        }

        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }

        setProcess(true);

        await new Promise((resolve) => {
            setTimeout(resolve, 3000);
        });

        const data = {
            "persNombre": "nombre",
            "persPaterno": "persPaterno",
            "persMaterno": "persMaterno"
        };

        dispatch(login({ user: data }));

        setProcess(false);
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
                                        className="form-control"
                                        type="text"
                                        placeholder="Dijite su usuario"
                                        ref={refCodigo}
                                        value={codigo}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCodigo(event.target.value)}
                                        autoFocus />
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Contraseña</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Dijite la contraseña"
                                        ref={refClave}
                                        value={clave}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setClave(event.target.value)}
                                    />
                                </div>
                                <div className="form-group btn-container">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block">
                                        <i className="fa fa-sign-in fa-lg fa-fw"></i> Ingresar
                                    </button>
                                </div>
                                <div className="form-group text-center">
                                    <label className="control-label text-danger">{message}</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </section>
        </>
    );
}

export default Login;