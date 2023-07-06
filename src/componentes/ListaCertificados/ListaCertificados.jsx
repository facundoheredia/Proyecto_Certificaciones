import { Row, Table, Button } from "react-bootstrap";

const ListaCertificados = () => {
  return (
    <Row className="ps-2 pe-2">
      <Table bordered hover>
        <thead className="bg-dark text-light text-center">
          <tr>
            <th>N°</th>
            <th>MES</th>
            <th>MONTO</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>1</td>
            <td>ENERO</td>
            <td>$42500650.-</td>
            <td>
              <Button className="ps-2 pe-2">VER</Button>
              <Button className="ps-2 pe-2">MODIFICAR</Button>
              <Button className="ps-2 pe-2">ELIMINAR</Button>
            </td>
          </tr>
          <tr className="text-center">
            <td>2</td>
            <td>FEBRERO</td>
            <td>$42452650.-</td>
            <td>
              <Button className="ps-2 pe-2">VER</Button>
              <Button className="ps-2 pe-2">MODIFICAR</Button>
              <Button className="ps-2 pe-2">ELIMINAR</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Row>
  );
};

export default ListaCertificados;
