import { Routes, Route } from "react-router-dom"
//import Home from "../Home/Home"
import ListaObras from "../ListaObras/ListaObras"
import Obra from "../Obra/Obra"
import Login from "../Login/Login"

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/:idUsuario" element={<ListaObras />} />
      <Route path="/obra/:idObra" element={<Obra />} />
    </Routes>
  )
}

export default Rutas