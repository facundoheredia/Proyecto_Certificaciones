const obras = [
  {
    id: "1",
    instituto: "EP N° 42",
    contrato: "REFACCION DE INSTALACIONES ELECTRICAS",
    empresa: "EMCOSERV S.R.L",
    expediente: "4049-D-11800-2022",
    ordenDeCompra: "1080/2022",
    monto: 42500650,
    dias: "90",
    inicio: "08/12/2022",
    finalizacion: "02/04/2023",
    idInspector: "1",
  },
  {
    id: "2",
    instituto: "EP N° 82 / ES N° 61",
    contrato: "Construccion de nuevos baños",
    empresa: "VEZZATO S.A.",
    expediente: "4049-D-1145-2022",
    ordenDeCompra: "120/2022",
    monto: 54821335,
    dias: "120",
    inicio: "02/01/2023",
    finalizacion: "02/06/2023",
    idInspector: "1",
  },
  {
    id: "3",
    instituto: "ET N° 1",
    contrato: "Nuevo edificio ET N° 1",
    empresa: "VEZZATO S.A.",
    expediente: "4049-D-1254-2023",
    ordenDeCompra: "410/2022",
    monto: 321333540,
    dias: "300",
    inicio: "01/03/2022",
    finalizacion: "01/12/2023",
    idInspector: "2",
  },
  {
    id: "4",
    instituto: "EES N° 8",
    contrato: "Construccion nuevo edificio E.E.S. N°8",
    empresa: "CYLP S.A.",
    expediente: "4049-D-1145-2022",
    ordenDeCompra: "120/2022",
    monto: 333543725.48,
    dias: "300",
    inicio: "03/04/2023",
    finalizacion: "28/01/2024",
    idInspector: "1",
  },
];

export const getObras = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(obras);
    }, 100);
  });
};

export const getObrasPorInspector = (idInspector) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const obrasInspector = obras.filter(
        (obra) => obra.idInspector === idInspector
      );
      resolve(obrasInspector);
    }, 100);
  });
};

export const getObra = (idObra) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const obraEncontrada = obras.find((obra) => obra.id === idObra);
      resolve(obraEncontrada);
    }, 100);
  });
};
