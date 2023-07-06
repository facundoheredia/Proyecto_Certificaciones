import { useEffect, useState } from "react"
import { Card,Button,Form } from "react-bootstrap"
import { getUsuariosPorRol } from "../../asyncMock/asyncMockUsuarios";
import { getRoles } from "../../asyncMock/asyncMockRoles";
import { Link } from "react-router-dom";

const CardLogin = () => {
  const [roles,setRoles] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [idUsuario, setidUsuario] = useState("");
  
  useEffect(()=>{
    const funcionRoles = getRoles;

    funcionRoles()
    .then(res => setRoles(res))
    .catch(error => console.error(error))
  },[])

  const onChangeRol = (e) => {
    const value = e.target.value;
    setSelectValue(value);
  }

  useEffect(()=>{
    const funcionUsuarios = getUsuariosPorRol;

    funcionUsuarios(selectValue)
    .then(res => setUsuarios(res))
    .catch(error => console.error(error))
  },[selectValue])

  const onChangeUsuario = (e) => {
    const valueUsuario = e.target.value;
    setidUsuario(valueUsuario);
  }


  return (
    <Card style={{ width: '30rem' }} className='p-2 d-flex justify-content-center align-items-center bg-light shadow'>
    <Card.Img style={{ width: '8rem' }} variant="top" src="../../src/assets/Icono Inspector.ico" alt="imagen rol" className="pt-2 pb-2"/>
    <Card.Body className="pt-2 pb-2">
      <Card.Title>{"INGRESE"}</Card.Title>
    </Card.Body>
    <Form>
      <Form.Label htmlFor="inputRol">Rol</Form.Label>
      <Form.Select aria-label="Default select example" style={{width:'20rem'}} id="rolLogin" onChange={onChangeRol}>
        <option value="0"> </option>
        {roles.map(esteRol =><option key={esteRol.idRol} value={esteRol.idRol}>{esteRol.nombreRol}</option>)}
      </Form.Select>
      <Form.Label htmlFor="inputName">Usuario</Form.Label>
      <Form.Select aria-label="Default select example" style={{width:'20rem'}} id="nombreLogin" onChange={onChangeUsuario}>
        <option value="0"> </option>
        {usuarios.map(esteUsuario =><option key={esteUsuario.id} value={esteUsuario.id}>{esteUsuario.nombre} {esteUsuario.apellido} - Legajo N°{esteUsuario.legajo}</option>)}
      </Form.Select>
      <Form.Label htmlFor="inputPassword">Contraseña</Form.Label>
      <Form.Control type="password" id="passwordLogin" style={{width:'20rem'}}/>
      <Card.Body className="pt-2 pb-2">
        <Link to={`/${idUsuario}`}><Button variant="dark" className="ps-2 pe-2">INGRESAR</Button></Link>
      </Card.Body>
    </Form>    
  </Card>
  )
}

export default CardLogin

//<Link to={"/homeInspector"}><Button variant="dark" className="ps-2 pe-2">INGRESAR</Button></Link>