import {useState,createContext} from 'react'

export const LoginContexto = createContext({usuario:{}});

export const LoginProvider = ({childen}) => {
    const [usuario,setUsuario] = useState("");

    setUsuario("facundo heredia 333");

    {
        /*
        const [usuario,setUsuario] = useState({});

        const ingresarUsuario = ({nombreUsuario, apellidoUsuario, legajoUsuario}) => {
        const usuario = [{nombre: nombreUsuario, apellidoUsuario, legajo:legajoUsuario}];
        setUsuario(usuario);
        }
        */
    }

    
    return (
        <LoginContexto.Provider value={{usuario}}>
            {childen}
        </LoginContexto.Provider>
    )
}

/*
import {useState, createContext} from 'react'

export const LoginContexto = createContext({usuario:[]});

export const LoginProvider = ({childen}) => {
    const [usuario,setUsuario] = useState([]);

    const ingresarUsuario = ({nombre, apellido, legajo}) => {
        const usuario = [{nombre, apellido, legajo}];
        setUsuario(usuario);
    }
    
    return (
        <LoginContexto.Provider value={{usuario,ingresarUsuario}}>
            {childen}
        </LoginContexto.Provider>
    )
}
*/