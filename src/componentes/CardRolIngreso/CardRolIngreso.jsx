import { Col,Card,Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const CardRolIngreso = ({tituloRol,imagenRol,idRol}) => {
  return (
    <Col className="d-flex justify-content-center align-items-center">
       <Card style={{ width: '12rem' }} className='p-2 d-flex justify-content-center align-items-center bg-light shadow'>
       <Card.Img style={{ width: '8rem' }} variant="top" src={imagenRol} alt="imagen rol" className="pt-2 pb-2"/>
       <Card.Body className="pt-2 pb-2">
         <Card.Title>{tituloRol}</Card.Title>
       </Card.Body>
       <Card.Body className="pt-2 pb-2">
         <Link to={`/login/${idRol}`}><Button variant="dark" className="ps-2 pe-2">INGRESAR</Button></Link>
       </Card.Body>
     </Card>
  </Col>
  )
}

export default CardRolIngreso