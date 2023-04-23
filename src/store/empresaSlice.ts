import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Empresa from "../model/interfaces/empresa.interfaces";

const initialState: Empresa = {
    idEmpresa: 0,
    celular: "",
    certificadoClave: "",
    certificadoRuta: "",
    claveApiSunat: "",
    claveSol: "",
    condiciones: "",
    domicilio: "",
    email: "",
    giroComercial: 0,
    idApiSunat: "",
    image: [],
    imagenRuta: "",
    nombre: "",
    nombreComercial: "",
    numeroDocumento: "",
    paginaWeb: "",
    razonSocial: "",
    telefono: "",
    terminos: "",
    tipoDocumento: 0,
    ubigeo: 0,
    usuarioSol: ""
}

export const empresaSlice = createSlice({
    name: 'empresa',
    initialState,
    reducers: {
        addEmpresa: (state, action: PayloadAction<Empresa>) => {
            console.log(action.payload)
            // state = action.payload
            state.idEmpresa = action.payload.idEmpresa;
            state.numeroDocumento = action.payload.numeroDocumento;
            state.razonSocial = action.payload.razonSocial;
        }
    }
});

export const { addEmpresa } = empresaSlice.actions

export default empresaSlice.reducer