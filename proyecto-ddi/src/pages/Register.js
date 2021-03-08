import React from 'react';
import {Button, Col, Form, Input, Row, Select} from "antd";
import {useAuth} from "../lib/auth";

const { Option } = Select;

const Register = () => {
    const { register } = useAuth();
    const onFinish = (data) => {
        register(data);
        console.log('user', data);
    };
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <div if="form">

            <div id="form2">
                <Row justify='center'>
                    <Col justify='center'>
                        <p><h1>Si no tienes una cuenta aún... regístrate!</h1></p>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Nombre de usuario' }]}
                            >
                                <Input placeholder="Nombre"/>
                            </Form.Item>

                            <Form.Item
                                name="emailaddress"
                                rules={[{ required: true, message: 'Correo Electrónico ' }]}
                            >
                                <Input placeholder="Correo Electrónico"/>
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Contraseña' }]}
                            >
                                <Input.Password placeholder="Contraseña"/>
                            </Form.Item>

                            <Form.Item
                                name="passwordconfirm"
                                rules={[{ required: true, message: 'Confirma tu contraseña' }]}
                            >
                                <Input.Password placeholder="Confirmar contraseña" />
                            </Form.Item>
                            <div id="seelect-year">
                                <Select defaultValue="Ingrese la edad del niño o niña" style={{ width: 320 }} >
                                    <Option value="6">6 años</Option>
                                    <Option value="7">7 años</Option>
                                    <Option value="8">8 años</Option>
                                    <Option value="9">9 años</Option>
                                    <Option value="10">10 años</Option>
                                    <Option value="11">11 años</Option>

                                </Select>

                            </div>


                            <Form.Item {...tailLayout}>
                                <br></br>
                                <br></br>

                                <Button type="primary" htmlType="submit">

                                    Registrarse
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default Register;