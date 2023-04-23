import React, { useEffect } from 'react';
import '../../assets/css/loader.css';
import { useDispatch } from 'react-redux';
import { restore, starting } from '../../store/authSlice';

const LoadView = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        valid();
    }, []);

    const valid = async () => {
        const user = window.localStorage.getItem("user");
        const token = window.localStorage.getItem("token");
        
        if (user == null || token == null) {
            dispatch(starting());
            return;
        }

        dispatch(restore({ empleado: JSON.parse(user), token: JSON.parse(token), authentication: true }));
    }

    return (
        <>
            <div className="loader text-center">
                <div className="loader-inner">

                    <div className="lds-roller mb-3">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <h4 className="text-uppercase font-weight-bold">Cargando...</h4>
                    <p className="font-italic text-muted">Se está estableciendo conexión con el servidor...</p>
                </div>
            </div>
        </>
    );
}

export default LoadView;