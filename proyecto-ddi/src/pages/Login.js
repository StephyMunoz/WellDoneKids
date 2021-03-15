import React, { useEffect } from "react";
import { useAuth } from "../lib/auth";
import { Space, Button, Col, Form, Input, Row } from "antd";
import "../styles/login.css";
import { Link, useHistory } from "react-router-dom";
import Routes from "../constants/Routes";
import withoutAuth from "../hocs/withoutAuth";

const Login = () => {
  const history = useHistory();
  const { login, user } = useAuth();

  useEffect(() => {
    if (!!user) {
      history.replace(Routes.HOME);
    }
  }, [user]);

  const onFinishLog = ({ email, password }) => {
    login(email, password);
    console.log("user", user);
  };

  if (user === null) {
    return "Verificando sesión...";
  }
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  return (
    <div id="form" {...tailLayout}>
      <div id="form1">
        <Row justify="center">
          <Col span={40}>
            <h1>Ingresa para disfrutar de todos los beneficios!!!</h1>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinishLog}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Correo Electrónico" }]}
              >
                <Input placeholder="Correo Electrónico" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "Contraseña" }]}
              >
                <Input.Password placeholder="Contraseña" />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Space>
                  <Button type="primary" htmlType="submit">
                    Entrar
                  </Button>
                  O <Link to={Routes.Register}>Regístrate</Link>
                </Space>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default withoutAuth(Login);
