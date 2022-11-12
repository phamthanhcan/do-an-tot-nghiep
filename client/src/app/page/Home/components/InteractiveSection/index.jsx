import FeedbackForm from "./components/FeedbackForm";
import FrequentlyQuestions from "./components/FrequentlyQuestions";
import { Container, Row, Col } from "reactstrap";

const InteractiveSection = () => {
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col xs="6">
          <FeedbackForm />
        </Col>
        <Col xs="6">
          <FrequentlyQuestions />
        </Col>
      </Row>
    </Container>
  );
};

export default InteractiveSection;
