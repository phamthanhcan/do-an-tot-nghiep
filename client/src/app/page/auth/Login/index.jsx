import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const Login = () => {
  return (
    <div className="auth-wrapper">
      <div>
        <h2>ĐĂNG NHẬP THÀNH VIÊN</h2>
        <Form className="auth-form">
          <div className="p-3 bg-light bg-gradient">
            <FormGroup>
              <Label for="username">Email</Label>
              <Input id="username" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Mật khẩu</Label>
              <Input id="password" />
            </FormGroup>
            <Button color="primary">Đăng nhập</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
