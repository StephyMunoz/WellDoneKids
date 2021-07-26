import React, { useState }  from "react";
import {Button, Col, Row, Modal} from "antd";
import "../styles/game.css"

const PayPal = () => {
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
        <div className="Game">
            <Row justify="space-around" align="middle">
                <Col span={24}>
                    <h1>Accede a la suscripción Premium</h1>
                    <h2>Tu hijo aprenderá mucho</h2>
                </Col>
                <Col span={24}>
                    <Button onClick={showModal}>Acceder a suscripción Premiun</Button>
                    <Modal title="Suscripción de pago" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <p>Accede a la suscripción de pago</p>
                        <p>Por tan solo</p>
                        <p id="paypal">$4.99</p>
                    </Modal>
                </Col>
            </Row>
        </div>
    );
}
export default PayPal;