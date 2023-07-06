import { Row, Table, Button } from "react-bootstrap";

const ListaDocumentacionObra = () => {
  return (
<Row className="ps-2 pe-2">
      <Table bordered hover>
        <thead className="bg-dark text-light text-center">
          <tr>
            <th>NOMBRE</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>CONTRATO</td>
            <td>
              <Button className="ps-2 pe-2">VER</Button>
              <Button className="ps-2 pe-2">DESCARGAR</Button>
            </td>
          </tr>
          <tr className="text-center">
            <td>ORDEN DE COMPRA</td>
            <td>
              <Button className="ps-2 pe-2">VER</Button>
              <Button className="ps-2 pe-2">DESCARGAR</Button>
            </td>
          </tr>
          <tr className="text-center">
            <td>ADJUNDICACION</td>
            <td>
              <Button className="ps-2 pe-2">VER</Button>
              <Button className="ps-2 pe-2">DESCARGAR</Button>
            </td>
          </tr>
          <tr className="text-center">
            <td>OFERTA</td>
            <td>
              <Button className="ps-2 pe-2">VER</Button>
              <Button className="ps-2 pe-2">DESCARGAR</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Row>
  )
}

export default ListaDocumentacionObra
