import Empleado from "./empleado.interfaces";

export default interface Respuesta {
    resultado: Empleado[];
    total: number;
}