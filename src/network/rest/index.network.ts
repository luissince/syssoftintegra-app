import axios from 'axios';
import Response from '../../model/class/response.model.class';
import Resolve from '../../model/class/resolve.model.class';
import RestError from '../../model/class/resterror.model.class';
import Params from '../../model/interfaces/params';

const instance = axios.create({
    baseURL: import.meta.env.VITE_URL_APP,
    timeout: 10000,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
});

instance.interceptors.request.use((config) => {
    const storage = window.localStorage as Storage;
    const token = storage.getItem('token');
    if (token !== null) {
        config.headers.Authorization = 'Bearer ' + JSON.parse(token);
    }
    return config;
});

export async function LoginRest<Empleado>(usuario: string, clave: string, abortController: AbortController | null = null): Promise<Response<Empleado> | RestError> {
    return await Resolve.create<Empleado>(instance.get<Empleado>("/login?usuario=" + usuario + "&clave=" + clave + "", { signal: abortController?.signal }));
}



// por eso te digo que sea post con body 
// es mas rapido pasarle en el body al busqueda
// export async function ListarEmpleados<Respuesta>(param: Params, abortController: AbortController | null = null): Promise<Response<Respuesta> | RestError> {
//     return await Resolve.create<Respuesta>(instance.get<Respuesta>("/empleados?opcion="+param.opcion+"&search="+param.search+"", { signal: abortController?.signal }));
// }

export async function ListarEmpleados<Respuesta>(params: Params, abortController: AbortController | null = null): Promise<Response<Respuesta> | RestError> {
    return await Resolve.create<Respuesta>(instance.get<Respuesta>("/empleados", { 
        signal: abortController?.signal,
        params: params
     }));
}

// export async function EstudianteRest<Estudiante>(codigo: string, signal = null): Promise<Response<Estudiante> | RestError> {
//     return await Resolve.create<Estudiante>(instance.get<Estudiante>("/MostrarFacultad/" + codigo, { signal: signal! }));
// }

// export async function TrabajadorRest<Trabajador>(dni: string, signal = null): Promise<Response<Trabajador> | RestError> {
//     return await Resolve.create<Trabajador>(instance.get<Trabajador>("/Soporte/obtenerDatosTrabajadorPorDni/" + dni, { signal: signal! }));
// }

// export async function ValidarTokenRest<Void>(signal = null): Promise<Response<Void> | RestError> {
//     return await Resolve.create<Void>(instance.get<Void>("/Aplicacion/validarToken", { signal: signal! }));
// }

// export async function SoporteListarConsultas<Void>(params: object,signal = null): Promise<Response<Void> | RestError> {
//     return await Resolve.create<Void>(instance.get<Void>("Soporte/listarConsultas", { signal: signal! }));
// }