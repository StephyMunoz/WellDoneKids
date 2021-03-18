import React, { useEffect } from "react";
import { useAuth } from "../lib/auth";
import { Button, Col, Form, Input, Row, Space, Image } from "antd";
import "../styles/login.css";
import monster from "../images/monster.png";
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
        <Row justify="center" gutter={16}>
          <Col className="gutter-row" span={{ sm: 24, md: 4 }}>
            <h1>Ingresa para disfrutar de todos los beneficios!!!</h1>
            <Image justify="center" src={monster} width={150} />
          </Col>
          <Col className="gutter-row" span={{ sm: 24, md: 12 }}>
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
