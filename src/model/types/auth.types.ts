import Empleado from "../interfaces/empleado.interfaces";

type Auth = {
    loading: boolean,
    user: Empleado | null,
    token: string| null,
    authentication: boolean,
}

export default Auth;