import React, { useState } from "react";
import "../styles/game.css";
import { Button, Col, Image, Modal, Row } from "antd";
import logo from "../images/welldonekidslogo.png";
import Routes from "../constants/Routes";
import { Link } from "react-router-dom";
import { useAuth } from "../lib/auth";

const Landing = () => {
  const { user } = useAuth();
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

  return (
    <>
      <div id="background">
        <Row justify="center">
          <Col sm={{ span: 20 }} xl={{ span: 14 }}>
            <Image
              id="landing_logo"
              width="100%"
              src={logo}
              alt="No image found"
            />
          </Col>
        </Row>
        <Row id="row_margin" justify="center">
          <Col xs={{ span: 23 }} xl={{ span: 14 }}>
            <h1 id="center_paragraph">
              Well Done Kids! es un sitio educativo que permite a los más peques
              de la casa aprender con actividades cortas y entretenidas, y al
              final, obtener una recompensa por el trabajo realizado
            </h1>
          </Col>
        </Row>
        <Row id="row_margin" justify="center" gutter={64} align="middle">
          <Col xs={{ span: 22 }} xl={{ span: 10 }}>
            <h1 id="sub_paragraph">¿Por qué usar nuestro sitio?</h1>
            <div id="rectangle">
              <h3 id="sub_paragraph">
                ¿Estás preocupado de que tu peque no esté aprendiendo lo
                suficiente?
                <br />
                ¿Tu hijo pasa muy aburrido sin nada que hacer?
              </h3>
              <h3 id="sub_paragraph">
                Este sitio podría ser la solución a tus problemas. Puedes probar
                nuestras actividades sin necesidad de registrarte
              </h3>
              <Row justify="center">
                {user ? (
                  <Col lg={{ span: 8 }} xl={{ span: 5 }}>
                    <Link to={Routes.GAME}>
                      <Button id="colored_button" type="primary" size="large">
                        Juega ahora
                      </Button>
                    </Link>
                  </Col>
                ) : (
                  <Col lg={{ span: 8 }} xl={{ span: 5 }}>
                    <Link to={Routes.TRIALGAME}>
                      <Button id="colored_button" type="primary" size="large">
                        Juega ahora
                      </Button>
                    </Link>
                  </Col>
                )}
              </Row>
            </div>
          </Col>
          <Col xs={{ span: 22 }} xl={{ span: 10 }}>
            <h1 id="sub_paragraph">¿Por qué registrarse?</h1>
            <div id="rectangle">
              <h3 id="sub_paragraph">
                Tu peque podrá acceder a una mayor personalización en sus
                actividades y recompensas
              </h3>
              <Row justify="center">
                <Col lg={{ span: 8 }} xl={{ span: 5 }}>
                  {user ? (
                    <>
                      <Button
                        id="colored_button"
                        type="primary"
                        size="large"
                        onClick={showModal}
                      >
                        Registrate
                      </Button>
                      <Modal
                        title="Usuario ya registrado!!"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                      ></Modal>
                    </>
                  ) : (
                    <Link to={Routes.Register}>
                      <Button id="colored_button" type="primary" size="large">
                        Regístrate
                      </Button>
                    </Link>
                  )}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row id="row_margin" justify="center" gutter={64} align="middle">
          <Col xs={{ span: 22 }} xl={{ span: 10 }}>
            <h1 id="sub_paragraph">¿Quieres conocer más?</h1>
            <div id="rectangle">
              <h3 id="sub_paragraph">
                Ingresa aquí y conoce más acerca de nosotros y del sitio que
                podría ayudar a tu hijo
              </h3>
              <Row justify="center">
                <Col lg={{ span: 8 }} xl={{ span: 5 }}>
                  <Link to={Routes.INFO}>
                    <Button id="colored_button" type="primary" size="large">
                      Más información
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={{ span: 22 }} xl={{ span: 10 }}>
            <h1 id="sub_paragraph">
              ¿Ya estás registrado? Ingresa a continuación
            </h1>
            <Row justify="center">
              <Col lg={{ span: 8 }} xl={{ span: 5 }}>
                {user ? (
                  <>
                    <Button
                      id="colored_button"
                      type="primary"
                      size="large"
                      onClick={showModal}
                    >
                      Inicia sesión
                    </Button>
                    <Modal
                      title="Usuario ya registrado!!"
                      visible={isModalVisible}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <p className="modals">
                        Usuario registrado <br></br>ve a la seccion de juegos{" "}
                        <br></br> para seguir disfrutando
                      </p>
                    </Modal>
                  </>
                ) : (
                  <Link to={Routes.LOGIN}>
                    <Button id="colored_button" type="primary" size="large">
                      Inicia sesión
                    </Button>
                  </Link>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Landing;
