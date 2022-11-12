import { Form, FormGroup, Input, Label, Row, Col, Button } from "reactstrap";
import SearchIcon from "../../../../../assets/icons/SearchIcon";

const SearchForm = () => {
  return (
    <Form className="mb-3">
      <Row>
        <Col xs="5">
          <Input placeholder="Điểm khởi hành" />
        </Col>
        <Col xs="5">
          <Input placeholder="Điểm đến" />
        </Col>
        <Col xs="2">
          <Button color="primary"> Tìm kiếm</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
