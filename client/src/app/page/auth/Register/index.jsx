import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const Register = () => {
  return (
    <div className="auth-wrapper">
      <div>
        <h2>ĐĂNG KÝ THÀNH VIÊN</h2>
        <Form className="auth-form">
          <div className="p-3 bg-light bg-gradient">
            <FormGroup>
              <Label for="name">Họ và tên</Label>
              <Input id="name" />
            </FormGroup>
            <FormGroup>
              <Label for="gender">Giới tính</Label>
              <Input id="gender" type="select">
                <option>Nam</option>
                <option>Nữ</option>
                <option>Khác</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="phone">Số điện thoại</Label>
              <Input id="phone" />
            </FormGroup>
            <FormGroup>
              <Label for="identity">CMND/CCCD</Label>
              <Input id="identity" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input id="email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Mật khẩu</Label>
              <Input id="password" />
            </FormGroup>
            <FormGroup>
              <Label for="re-password">Nhập lại mật khẩu</Label>
              <Input id="re-password" />
            </FormGroup>
            <FormGroup>
              <Label> </Label>
              <Button color="primary">Đăng ký</Button>
            </FormGroup>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
