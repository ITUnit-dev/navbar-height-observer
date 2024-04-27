import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./Navbar";
import { useContext } from "react";
import { Context } from "./main";
import { observer } from "mobx-react-lite";

function App() {
  const { store } = useContext(Context);
  return (
    <div>
      <BasicExample />
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: `calc(100vh - ${store.navHeight}px)` }}
      >
        <Row>
          <Col className="text-center">
            Current height of the component: {store.navHeight}px
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default observer(App);
