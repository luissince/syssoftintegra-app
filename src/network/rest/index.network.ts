import axios from 'axios';
import Response from '../../model/class/response.model.class';
import Resolve from '../../model/class/resolve.model.class';
import RestError from '../../model/class/resterror.model.class';
import Params, { ListaDetalleParams, LoginParams } from '../../model/interfaces/params.interfaces';
import Empleado from '../../model/interfaces/empleado.interfaces';

/**
 * 
 */
const instance = axios.create({
    baseURL: import.meta.env.VITE_URL_APP,
    timeout: 10000,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
});

/**
 * 
 */
instance.interceptors.request.use((config) => {
    const storage = window.localStorage as Storage;
    const token = storage.getItem('token');
    // if (token !== null) {
    //     config.headers.Authorization = 'Bearer ' + JSON.parse(token);
    // }
    return config;
});


/**
 * 
 * @param params 
 * @param abortController 
 * @returns 
 */
export async function LoginRest<Empleado>(params: LoginParams, abortController: AbortController | null = null): Promise<Response<Empleado> | RestError> {
    return await Resolve.create<Empleado>(instance.post<Empleado>("/login", params,{
        signal: abortController?.signal,    }));
}

/**
 * 
 * @param params 
 * @param abortController 
 * @returns 
 */
export async function ListarEmpleadosRest<Respuesta>(params: Params, abortController: AbortController | null = null): Promise<Response<Respuesta> | RestError> {
    return await Resolve.create<Respuesta>(instance.get<Respuesta>("/empleados", {
        signal: abortController?.signal,
        params: params
    }));
}

/**
 * 
 * @param params 
 * @param abortController 
 * @returns 
 */
export async function RegistrarEmpleadoRest<String>(params: Empleado, abortController: AbortController | null = null): Promise<Response<String> | RestError> {
    return await Resolve.create<String>(instance.post<String>("/empleado", params, {
        signal: abortController?.signal,
    }));
}

/**
 * 
 * @param params 
 * @param abortController 
 * @returns 
 */
export async function ObtenerUsuarioRest<Rol>(abortController: AbortController | null = null): Promise<Response<Rol> | RestError> {
    return await Resolve.create<Rol>(instance.get<Rol>("/empleado", {
        signal: abortController?.signal,
    }));
}

/**
 * 
 * @param params 
 * @param abortController 
 * @returns 
 */
export async function ActualizarUsuarioRest<Rol>(abortController: AbortController | null = null): Promise<Response<Rol> | RestError> {
    return await Resolve.create<Rol>(instance.put<Rol>("/empleado", {
        signal: abortController?.signal,
    }));
}

/**
 * 
 * @param params 
 * @param abortController 
 * @returns 
 */
export async function EliminarUsuarioRest<Rol>(abortController: AbortController | null = null): Promise<Response<Rol> | RestError> {
    return await Resolve.create<Rol>(instance.delete<Rol>("/empleado", {
        signal: abortController?.signal,
    }));
}

/**
 * 
 * @param params 
 * @param abortController 
 * @returns 
 */
export async function ObtenerEmpresaRest<Empresa>(abortController: AbortController | null = null): Promise<Response<Empresa> | RestError> {
    return await Resolve.create<Empresa>(instance.get<Empresa>("/empresa", { signal: abortController?.signal }));
}

/**
 * 
 * @param params 
 * @param abortController 
 * @returns 
 */
export async function ListaDetalleIdMantenimientoRest<Detalle>(param: ListaDetalleParams, abortController: AbortController | null = null): Promise<Response<Detalle> | RestError> {
    return await Resolve.create<Detalle>(instance.get<Detalle>("/lista-detalle-idmantenimiento", {
        signal: abortController?.signal,
        params: param
    }));
}

/**
 * 
 * @param params 
 * @param abortController 
 * @returns 
 */
export async function ListarRolesRest<Rol>(abortController: AbortController | null = null): Promise<Response<Rol> | RestError> {
    return await Resolve.create<Rol>(instance.get<Rol>("/listar-roles", {
        signal: abortController?.signal,
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