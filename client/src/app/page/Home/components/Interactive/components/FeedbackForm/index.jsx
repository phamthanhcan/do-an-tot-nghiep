import { Button, Col, Form, Input, Row } from "reactstrap";

const FeedbackForm = () => {
  return (
    <div className="feedback-form">
      <h3 className="feedback-form-title">PHẢN ÁNH GÓP Ý</h3>
      <Form className="p-3 bg-light bg-gradient">
        <Input placeholder="Họ và tên" />
        <Row className="mt-3">
          <Col xs="6">
            <Input placeholder="Số điện thoại" />
          </Col>
          <Col xs="6">
            <Input placeholder="Email" />
          </Col>
        </Row>
        <Input
          className="mt-3"
          placeholder="Nội dung"
          type="textarea"
          rows="4"
        />
        <Button className="mt-3" color="primary">
          Gửi góp ý
        </Button>
      </Form>
    </div>
  );
};

export default FeedbackForm;
