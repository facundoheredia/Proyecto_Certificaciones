import { Container, Col, Row} from "react-bootstrap";
import EncabezadoObra from "../EncabezadoObra/EncabezadoObra";
import GraficoObra from "../GraficoObra/GraficoObra";
import ListaCertificados from "../ListaCertificados/ListaCertificados";
import TituloSeccion from "../TituloSeccion/TituloSeccion";
import ListaDocumentacionObra from "../ListaDocumentacionObra/ListaDocumentacionObra";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getObra } from "../../asyncMock/asyncMockObras";

const Obra = () => {
  const [obra, setObra] = useState([]);
  const {idObra} = useParams();

  useEffect (() => {
    getObra(idObra)
    .then(res => setObra(res))
  },[idObra])

  return (
    <main className="bg-light">
      <Container fluid>
        <TituloSeccion titulo={"DATOS DE LA OBRA"} />
          <EncabezadoObra {...obra}/>
        <TituloSeccion titulo={"GRAFICO AVANCE DE LA OBRA"} />
        <GraficoObra />
        <Row className="pb-4">
          <Col>
            <TituloSeccion titulo={"LISTA DE CERTIFICADOS DE LA OBRA"} />
            <ListaCertificados />
          </Col>
          <Col>
            <TituloSeccion titulo={"DOCUMENTACION CARGADA"} />
            <ListaDocumentacionObra />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Obra;
