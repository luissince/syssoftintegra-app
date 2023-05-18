interface Params {
    opcion: number;
    search: string;
    posicionPagina: number;
    filasPorPagina: number;
}

export interface LoginParams {
    usuario: string;
    clave: string;
} 

export interface ListaDetalleParams  {
    opcion: string;
    idMantenimiento: string;
    nombre: string;

}

export default Params;