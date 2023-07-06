import { Row, Col } from "react-bootstrap";
import NavBarInspector from "../NavBarInspector/NavBarInspector";
import ListaObras from "../ListaObras/ListaObras";

const HomeInspector = () => {
  return (
    <>
      <NavBarInspector />
      <ListaObras />
    </>
  );
};

export default HomeInspector;
