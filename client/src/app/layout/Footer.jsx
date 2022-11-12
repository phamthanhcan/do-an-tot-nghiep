import { Row, Col, List, Container } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="bg-dark">
        <Row>
          <Col>
            <h3>WELCOME</h3>
            <p>ĐỒ ÁN TỐT NGHIỆP NHÓM 22 - DỰ ÁN BUSDANANG</p>
          </Col>
          <Col>
            <h3>LIÊN HỆ</h3>
            <List>
              <li>
                <span></span>
                107 Nguyễn Hữu Dật - Hoà Cường Bắc - TP Đà Nẵng
              </li>
              <li>
                <span></span>
                0921 194 881
              </li>
              <li>
                <span></span>
                Email: phamthanhcan830@gmail.com
              </li>
            </List>
          </Col>
          <Col>
            <h3>LIÊN HỆ WEBSITE</h3>
            <List>
              <li>
                <a href="/">UBND TP ĐÀ NẴNG</a>
              </li>
              <li>
                <a href="/">Sở giao thông vận tải</a>
              </li>
              <li>
                <a href="/">Sở tài nguyên môi trường</a>
              </li>
            </List>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
