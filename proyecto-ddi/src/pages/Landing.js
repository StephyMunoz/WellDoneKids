import React, {useState} from 'react';
import '../styles/game.css';
import {Modal, Button, Col, Image, Row} from 'antd';
import logo from "../images/welldonekidslogo.png";
import Routes from "../constants/Routes";
import {Link} from "react-router-dom";
import {useAuth} from "../lib/auth";

const Landing = () => {
    const { user} = useAuth();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return(
        <>
        <div id="background">
            <Row justify="center">
                <Col span={8}>
                    <Image id="landing_logo" height={290} width={420} src={logo} alt="No image found"/>
                </Col>
            </Row>
            <Row id="row_margin" justify="center">
                <Col span={14}>
                    <h1 id="center_paragraph">Well Done Kids! es un sitio educativo que permite a los más peques de la casa aprender con actividades 
                        cortas y entretenidas, y al final, obtener una recompensa por el trabajo realizado</h1>
                </Col>
            </Row>
            <Row id="row_margin" justify="center" gutter={64} align="middle">
                <Col span={10}>
                    <h1 id="sub_paragraph">¿Por qué usar nuestro sitio?</h1>
                    <div id="rectangle">
                        <h3 id="sub_paragraph">¿Estás preocupado de que tu peque no esté aprendiendo lo suficiente?<br/>
                        ¿Tu hijo pasa muy aburrido sin nada que hacer?</h3>
                        <h3 id="sub_paragraph">Este sitio podría ser la solución a tus problemas. Puedes probar nuestras
                            actividades sin necesidad de registrarte</h3>
                        <Row justify="center">
                            { user ?
                                <Col span={5}>
                                    <Link to={Routes.GAME}>
                                        <Button id="colored_button" type="primary" size="large">Juega ahora</Button>
                                    </Link>
                                </Col>
                                :
                                <Col span={5}>
                                    <Link to={Routes.TRIALGAME}>
                                        <Button id="colored_button" type="primary" size="large">Juega ahora</Button>
                                    </Link>
                                </Col>
                            }

                        </Row>
                    </div>
                </Col>
                <Col span={10}>
                    <h1 id="sub_paragraph">¿Por qué registrarse?</h1>
                    <div id="rectangle">
                        <h3 id="sub_paragraph">Al registrarte en nuestro sitio puedes recibir notificaciones a tu correo electrónico del avance
                            que va teniendo tu hijo. Además, él/ella podrá acceder a una mayor personalización en sus
                            actividades y recompensas</h3>
                        <Row justify="center">

                            <Col span={5}>
                                {
                                    user ?
                                        <>
                                            <Button id="colored_button" type="primary" size="large" onClick={showModal}>Registrate</Button>
                                            <Modal title="Usuario registrado" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                                <p>Usuario registrado</p>
                                                <p>ve a la sección de juegos</p>
                                                <p>para seguir disfrutando</p>
                                            </Modal>
                                        </>
                                        :
                                        <Link to={Routes.Register}>
                                            <Button id="colored_button" type="primary" size="large">Regístrate</Button>
                                        </Link>
                                }

                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row id="row_margin" justify="center" gutter={64} align="middle">
                <Col span={10}>
                    <h1 id="sub_paragraph">¿Quieres conocer más?</h1>
                    <div id="rectangle">
                        <h3 id="sub_paragraph">Ingresa aquí y conoce más acerca de nosotros y del sitio que podría
                            ayudar a tu hijo</h3>
                        <Row justify="center">
                            <Col span={5}>
                                <Link to={Routes.INFO}>
                                    <Button id="colored_button" type="primary" size="large">Más información</Button>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col span={10}>
                    <h1 id="sub_paragraph">¿Ya estás registrado? Ingresa a continuación</h1>
                    <Row justify="center">
                        <Col span={5}>
                            {
                                user ?
                                    <>
                                        <Button id="colored_button" type="primary" size="large" onClick={showModal}>Inicia sesión</Button>
                                        <Modal title="Usuario registrado" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                            <p>Usuario registrado</p>
                                            <p>ve a la sección de juegos</p>
                                            <p>para seguir disfrutando</p>
                                        </Modal>
                                    </>
                                    :
                                    <Link to={Routes.LOGIN}>
                                        <Button id="colored_button" type="primary" size="large">Inicia sesión</Button>
                                    </Link>
                            }

                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        </>
    );
}
export default Landing;