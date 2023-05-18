import Detalle from "./detalle.interfaces";
import Rol from "./rol.interfaces";

export default interface Empleado{
  id: number;
  idEmpleado: string,
  tipoDocumento: number,
  numeroDocumento: string ,
  apellidos: string,
  nombres: string,
  sexo: number,
  fechaNacimiento: string,
  puesto: number,
  roles: number,
  estado: number,
  telefono: string,
  celular: string,
  email: string,
  direccion: string,
  usuario: string,
  clave: string,
  sistema: boolean,
  huella: string,
  detalle?: Detalle,
  rol?: Rol
}