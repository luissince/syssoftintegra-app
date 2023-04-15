import Empleado from "./empleado";

export default interface Respuesta {
    resultado: Empleado[];
    total: number;
}