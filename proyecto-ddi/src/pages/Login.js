import React, {useEffect} from 'react';
import { useAuth } from "../lib/auth";
import { Form, Input, Button, Checkbox } from 'antd';
import {Col, Row, Select} from "antd";
import "../styles/login.css";
import "../styles/login.css";
import { Link, useHistory } from "react-router-dom";
import Routes from "../constants/Routes";
const { Option } = Select;

const Login = () =>{



    // const onFinish = ( values) => {
    //     console.log('Success:', values);
    // };

    const onFinishFailedLog = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const history = useHistory();
    const { login, user } = useAuth();

    useEffect(() => {
        if (!!user) {
            history.replace(Routes.HOME);
        }
    }, [user]);

    const onFinishLog = ({ email, password }) => {
        login(email, password);
    };

    if (user === null) {
        return "Verificando sesión...";
    }
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    return (
        <div if="form"{...tailLayout} >
            <div id="form1">
                <Row>

                </Row>
                <Row justify='center'>
                    <Col justify='center'>
                        <p><h1>Ingresa</h1></p>
                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinishLog}
                        >
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Correo Electrónico o Usuario' }]}
                            >
                                <Input placeholder="Correo Electrónico o Nombre de usuario" />
                            </Form.Item>

                            <Form.Item

                                name="password"
                                rules={[{ required: true, message: 'Contraseña' }]}
                            >
                                <Input.Password placeholder="Contraseña"/>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Entrar
                                </Button>
                                O <Link to={Routes.Register}>Regístrate</Link>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>


        // </div>
    );

};

export default Login;