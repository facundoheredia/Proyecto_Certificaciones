import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext} from "react";
import { LoginContexto } from "../../context/context";

import "./NavBar.css";

const NavBar = () => {
  const {usuario} = useContext(LoginContexto);
  const {nombre,apellido,legajo} = usuario;

  ingresarUsuario("facundo","heredia","333");

  return (
    <header>
      {
        usuario &&
        <Container fluid className="bg-dark h-100">
          <Row className="h-100">
            <Col className="col-3 d-flex justify-content-start align-items-center ps-2">
              <img src="../../src/assets/Icono Inspector.ico" height={35}></img>
              <p className="text-light fw-bold ps-2"> {nombre} {apellido} </p>
              <p className="text-light ps-2">Legajo N°{legajo}</p>
            </Col>
            <Col className="col-8 d-flex justify-content-start align-items-center text-light">
              <Nav className="gap-4">
                <Nav.Link to="/" className="text-light">INICIO</Nav.Link>
              </Nav>
            </Col>
            <Col className="col-1 d-flex justify-content-end align-items-center pe-2">
              <Link to="/">
                <Button variant="danger" className="ps-2 pe-2 fw-bold">SALIR</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      }
    </header>
  );
};

export default NavBar;


/*
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUnUsuario } from "../../asyncMock/asyncMockUsuarios";

import "./NavBar.css";

const NavBar = () => {
  const [usuario, setUsuario] = useState("");
  const { idUsuario } = useParams();

  useEffect(() => {
    getUnUsuario(idUsuario).then((res) => setUsuario(res));
  }, [idUsuario]);

  if(!usuario) {
    return (
      <header>
        <Container fluid className="bg-dark h-100">
          <Row className="h-100">
            <Col className="d-flex justify-content-center align-items-center">
              <p className="text-light fw-bold text-center pt-2 fs-4">BIENVENIDO, INGRESE</p>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }

  return (
    <header>
      <Container fluid className="bg-dark h-100">
        <Row className="h-100">
          <Col className="col-3 d-flex justify-content-start align-items-center ps-2">
            <img src="../../src/assets/Icono Inspector.ico" height={35}></img>
            <p className="text-light fw-bold ps-2"> {usuario.nombre} {usuario.apellido} </p>
            <p className="text-light ps-2">Legajo N°{usuario.legajo}</p>
          </Col>
          <Col className="col-8 d-flex justify-content-start align-items-center text-light">
            <Nav className="gap-4">
              <Nav.Link to="/" className="text-light">INICIO</Nav.Link>
            </Nav>
          </Col>
          <Col className="col-1 d-flex justify-content-end align-items-center pe-2">
            <Link to="/">
              <Button variant="danger" className="ps-2 pe-2 fw-bold">SALIR</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default NavBar;
*/