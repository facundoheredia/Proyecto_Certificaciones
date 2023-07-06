const usuarios = [
    {
      id: "1",
      nombre: "Facundo",
      apellido: "Heredia",
      legajo: "37889",
      rol: "2",
    },
    {
      id: "2",
      nombre: "Lucia",
      apellido: "Mora",
      legajo: "11111",
      rol: "2",
    },
    {
      id: "3",
      nombre: "Claudio",
      apellido: "Patrucco",
      legajo: "22222",
      rol: "2",
    },
    {
      id: "4",
      nombre: "Santiago",
      apellido: "Narizzano",
      legajo: "33333",
      rol: "2",
    },
    {
      id: "5",
      nombre: "Santiago",
      apellido: "Brardinelli",
      legajo: "999999",
      rol: "1",
    },
    {
      id: "6",
      nombre: "Fabian",
      apellido: "Zapata",
      legajo: "88888",
      rol: "1",
    },
    {
      id: "7",
      nombre: "Natalia",
      apellido: "Natalia",
      legajo: "77777",
      rol: "3",
    },
  ];
  
  export const getUsuarios = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(usuarios);
      }, 100);
    });
  };
  
  export const getUnUsuario = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const usuario = usuarios.find((usua) => usua.id == id);
        resolve(usuario);
      }, 100);
    });
  };
  
  export const getUsuariosPorRol = (idRol) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const usuariosRol = usuarios.filter((usua) => usua.rol === idRol);
        resolve(usuariosRol);
      }, 100);
    });
  };
  
  