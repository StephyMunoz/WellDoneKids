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



     const onFinish = ( values) => {
         console.log('Success:', values);
     };

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
            {...tailLayout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailedLog ={onFinishFailedLog}
          >
            <Form.Item
              name="username"
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
            </Form.Item>
          </Form>
          </Col>
          </Row>
          </div>

          <div id="form2">
          <Row justify='center'>
                  <Col justify='center'>
               <p><h1>Si no tienes una cuenta aún... regístrate!</h1></p> 
          <Form
            {...tailLayout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailedLog ={onFinishFailedLog }
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
                    </Select></div>
                    <br></br>
                    <br></br>
            <Form.Item {...tailLayout}>
            
      
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
      
};

export default Login;