import { Row, Col } from "react-bootstrap";
import "./Login.css";
import CardLogin from "../CardLogin/CardLogin";

const Login = () => {
  return (
    <main className="main bg-dark">
      <Row className="pt-4 pb-4 h-100">
        <Col className="d-flex justify-content-center align-items-center">
          <CardLogin />
        </Col>
      </Row>
    </main>
  );
}

export default Login
