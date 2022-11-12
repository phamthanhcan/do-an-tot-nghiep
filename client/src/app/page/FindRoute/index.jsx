import MenuListRoutes from "./components/MenuListRoutes";
import Map from "./components/Map";
import SearchForm from "./components/SearchForm";
import { Container, Row, Col } from "reactstrap";

const FindRoute = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <Col xs="4">
            <MenuListRoutes />
          </Col>
          <Col xs="8">
            <SearchForm />
            <Map />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FindRoute;
