import { Container, Row, Col, Button,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUnUsuario } from "../../asyncMock/asyncMockUsuarios";

import "./NavBarInspector.css"

const NavBarInspector = () => {
  const [usuario, setUsuario] = useState("");
  const {selectValueHomeInspector} = useParams();

  useEffect(() => {
    getUnUsuario(selectValueHomeInspector)
    .then(res => setUsuario(res))
  })

  return (
    <header>
      <Container fluid className="bg-dark h-100">
        <Row className="h-100">
          <Col className="col-3 d-flex justify-content-start align-items-center ps-2">
            <img src="../../src/assets/Icono Inspector.ico" height={35}></img>
            <p className="text-light fw-bold ps-2">{usuario.nombre} {usuario.apellido}</p>
            <p className="text-light ps-2">Legajo N°{usuario.legajo}</p>
          </Col>
          <Col className="col-8 d-flex justify-content-start align-items-center text-light">
            <Nav className="gap-4">
                <Nav.Link to="/" className="text-light">INICIO</Nav.Link>
            </Nav>
          </Col>
          <Col className="col-1 d-flex justify-content-end align-items-center pe-2">
            <Link to="/"><Button variant="danger" className="ps-2 pe-2 fw-bold"> SALIR </Button></Link>
          </Col>
        </Row>
      </Container>
    </header>   
  )
}

export default NavBarInspector
