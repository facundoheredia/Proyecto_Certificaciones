const roles = [
    {
      idRol: "1",
      nombreRol: "Director",
      imagenRol: "./assets/Icono Director.ico",
    },
    {
      idRol: "2",
      nombreRol: "Inspector",
      imagenRol: "./assets/Icono Inspector.ico",
    },
    {
      idRol: "3",
      nombreRol: "Administrador",
      imagenRol: "./assets/Icono Administrador.ico",
    },
  ];

  export const getRoles = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(roles);
      }, 100);
    });
  };