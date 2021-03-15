import React from "react";
import { Button, Col, Image, Row } from "antd";
import logo from "../images/welldonekidslogo.png";
import Routes from "../constants/Routes";
import { Link } from "react-router-dom";
import { useAuth } from "../lib/auth";
import { Username } from "./Username";

const GameNav = () => {
  const { logout } = useAuth();
  const { username } = Username();

  return (
    <div id="gameNav">
      <Row justify="space-around" align="middle">
        <Col span={8}>
          <Image
            id="landing_logo"
            height={190}
            width={320}
            src={logo}
            alt="No image found"
          />
        </Col>
        <Col span={8}>
          <Row>
            <Col span={10}>
              <h1 id="sub_paragraph">Bienvenid@ {username}!</h1>
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <Button onClick={logout}>Cerrar sesión</Button>
            </Col>
            <Col span={10}>
              <Link to={Routes.USERSPROFILE}>
                <Button>Ver estadísticas</Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    // <div className="gameNav">
    //   <Row justify="space-around" align="middle">
    //     <Col flex={2}>
    //       <Image
    //           src={logo}
    //           id="landing_logo"
    //           height={190}
    //           width={320}
    //       />
    //     </Col>
    //
    //     <Row>
    //       <Row>
    //         <Col flex={3}>
    //           <h1>Bienvenido UserName</h1>
    //         </Col>
    //       </Row>
    //
    //       <Row>
    //         <Space>
    //           <Col span={24}>
    //             <Button onClick={logout}>Cerrar sesión</Button>
    //             <Link to={Routes.USERSPROFILE}>
    //               <Button>Ver estadísticas</Button>
    //             </Link>
    //           </Col>
    //         </Space>
    //       </Row>
    //     </Row>
    //   </Row>
    // </div>
  );
};
export default GameNav;
