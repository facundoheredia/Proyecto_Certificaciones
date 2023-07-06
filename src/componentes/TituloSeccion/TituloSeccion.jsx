import { Row } from "react-bootstrap"

const TituloSeccion = ({titulo}) => {
  return (
    <Row className="text-center pt-2 pb-2">
        <h2>{titulo}</h2>
    </Row>
  )
}

export default TituloSeccion
