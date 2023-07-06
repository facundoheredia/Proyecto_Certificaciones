import { Row, Col, Badge } from "react-bootstrap";

const EncabezadoObra = ({instituto,contrato,empresa,expediente,ordenDeCompra,dias,monto,inicio,finalizacion}) => {

  return (
    <>
      <Row className="p-2">
        <Col className="col-2 p-2 border">
          <Row>
            <p className="fw-bold">INSTITUTO</p>
            <p>{instituto}</p>
          </Row>
        </Col>
        <Col className="col-8 p-2 border">
          <Row>
            <p className="fw-bold">CONTRATO</p>
            <p>{contrato}</p>
          </Row>
        </Col>
        <Col className="col-2 p-2 border">
          <Row>
            <p className="fw-bold text-center">ESTADO</p>
            <Badge pill bg="success" className="p-2">FINALIZADA</Badge>
          </Row>
        </Col>
      </Row>
      <Row className="p-2">
        <Col className="col-2 p-2 border">
          <Row>
            <p className="fw-bold">EMPRESA</p>
            <p>{empresa}</p>
          </Row>
          <Row>
            <p className="fw-bold">REPRESENTANTE TECNICO</p>
            <p>ING. CESAR ROBERTO GOMEZ</p>
          </Row>
        </Col>
        <Col className="col-2 p-2 border">
          <Row>
            <p className="fw-bold">EXPEDIENTE</p>
            <p>{expediente}</p>
          </Row>
          <Row>
            <p className="fw-bold">ORDEN DE COMPRA</p>
            <p>{ordenDeCompra}</p>
          </Row>
        </Col>
        <Col className="col-2 p-2 border">
          <Row>
            <p className="fw-bold">DIAS</p>
            <p>{dias}</p>
          </Row>
          <Row>
            <p className="fw-bold">MONTO DE OBRA</p>
            <p>${monto}.-</p>
          </Row>
        </Col>
        <Col className="col-2 p-2 border">
          <Row>
            <p className="fw-bold">INICIO DE OBRA</p>
            <p>{inicio}</p>
          </Row>
          <Row>
            <p className="fw-bold">FINALIZACION DE OBRA</p>
            <p>{finalizacion}</p>
          </Row>
        </Col>
        <Col className="col-2 p-2 border">
          <Row>
            <p className="fw-bold">AMPLIACION DE PLAZO</p>
            <p>-</p>
          </Row>
          <Row>
            <p className="fw-bold">NUEVA FINALIZACION</p>
            <p>-</p>
          </Row>
        </Col>
        <Col className="col-2 p-2 border">
          <Row>
            <p className="fw-bold">ADICIONAL</p>
            <p>-</p>
          </Row>
          <Row>
            <p className="fw-bold">NEUTRALIZACION</p>
            <p>-</p>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default EncabezadoObra;
