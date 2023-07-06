import { Container, Row, Table, Button,Badge } from "react-bootstrap";
import { useParams,Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getObrasPorInspector } from "../../asyncMock/asyncMockObras";
import "./ListaObras.css";

const ListaObras = () => {
  const [obras, setObras] = useState([]);
  const {idUsuario} = useParams();

  useEffect(() => {
    getObrasPorInspector(idUsuario)
    .then(res => setObras(res))
  },[idUsuario])

  return (
<main className="bg-light">
      <Container fluid>
        <Row className="pt-2 pb-2">
          <p className="fw-bold text-center">ACA BARRA BUSCADORA</p>
        </Row>
        <Row className="ps-2 pe-2">
          <Table bordered hover>
            <thead className="bg-dark text-light text-center">
              <tr>
                <th>INSTITUTO</th>
                <th>NOMBRE CONTRATO</th>
                <th>EMPRESA</th>
                <th>EXPEDIENTE</th>
                <th>OR. DE COMPRA</th>
                <th>MONTO</th>
                <th>DIAS</th>
                <th>INICIO</th>
                <th>FINALIZACION</th>
                <th>ESTADO</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {obras.map(estaObra =><tr key={estaObra.id} className="text-center align-middle">
                                      <td>{estaObra.instituto}</td>
                                      <td>{estaObra.contrato}</td>
                                      <td>{estaObra.empresa}</td>
                                      <td>{estaObra.expediente}</td>
                                      <td>{estaObra.ordenDeCompra}</td>
                                      <td>{`$ ${estaObra.monto}.-`}</td>
                                      <td>{estaObra.dias}</td>
                                      <td>{estaObra.inicio}</td>
                                      <td>{estaObra.finalizacion}</td>
                                      <td><Badge pill bg="success" className="p-2">ACTIVA</Badge></td>
                                      <td>
                                        <Button variant="info" className="ps-2 pe-2"><Link to={`/obra/${estaObra.id}`} className="text-dark">VER</Link></Button>
                                      </td>
                                    </tr>)}
            </tbody>
          </Table>
        </Row>
      </Container>
    </main>
  )
}

export default ListaObras