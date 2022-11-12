import { Form, Input, Row, Col, Button } from "reactstrap";

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
