import React, { useState } from "react";
import { Col, Collapse, Image, Row } from "antd";
import trophy_n from "../images/trophies/trophy_not_unlocked.jpg";
import trophy_u from "../images/trophies/trophy_unlocked.png";
import cute_trophy from "../images/trophies/cute-trophy.jpg";
import first_medal from "../images/trophies/first-medal.png";
import trophy_1 from "../images/trophies/trophy1.jpg";
import trophy_2 from "../images/trophies/trophy2.jpg";
import trophy_3 from "../images/trophies/trophy3.jpg";
import trophy_4 from "../images/trophies/trophy4.jpg";
import trophy_5 from "../images/trophies/trophy5.jpg";
import trophy_6 from "../images/trophies/trophy6.jpg";
import trophy_7 from "../images/trophies/trophy7.jpg";
import trophy_8 from "../images/trophies/trophy8.jpg";
import trophy_9 from "../images/trophies/trophy9.png";
import trophy_10 from "../images/trophies/trophy10.jpg";

const TrophyLogic = () => {
  const [score, setScore] = useState(0);
  const [unlock, setUnlock] = useState(false);

  const getTrophies = [
    {
      id: 0,
      title: "Obtén tu medalla por la primera actividad realizada",
      image: first_medal,
      subTitle: "La aventura comienza!!! (Logro desbloqueado)",
      success: true,
    },
    {
      id: 0,
      image: trophy_n,
      subTitle: "La aventura comienza!!! (Logro bloqueado)",
      success: false,
    },
    {
      id: 1,
      image: cute_trophy,
      subTitle:
        "Obtén 5 puntos por actividades realizadas\n (Logro desbloqueado)",
      success: true,
    },
    {
      id: 1,
      image: trophy_n,
      subTitle: "Obtén 5 puntos por actividades realizadas\n (Logro bloqueado)",
      success: false,
    },
    {
      id: 2,
      image: trophy_1,
      subTitle:
        "Obtén 10 puntos por actividades realizadas\n (Logro desbloqueado)",
      success: true,
    },
    {
      id: 2,
      image: trophy_n,
      subTitle:
        "Obtén 10 puntos por actividades realizadas\n (Logro bloqueado)",
      success: false,
    },
    {
      id: 3,
      image: trophy_2,
      subTitle:
        "Obtén 20 puntos por actividades realizadas\n (Logro desbloqueado)",
      success: true,
    },
    {
      id: 3,
      image: trophy_n,
      subTitle:
        "Obtén 20 puntos por actividades realizadas\n (Logro bloqueado)",
      success: false,
    },
    {
      id: 4,
      image: trophy_3,
      subTitle:
        "Obtén 30 puntos por actividades realizadas\n (Logro desbloqueado)",
      success: true,
    },
    {
      id: 4,
      image: trophy_n,
      subTitle:
        "Obtén 30 puntos por actividades realizadas\n (Logro bloqueado)",
      success: false,
    },
    {
      id: 5,
      image: trophy_4,
      subTitle:
        "Obtén 50 puntos por actividades realizadas\n (Logro desbloqueado)",
      success: true,
    },
    {
      id: 5,
      image: trophy_n,
      subTitle:
        "Obtén 50 puntos por actividades realizadas\n (Logro bloqueado)",
      success: false,
    },
    {
      id: 6,
      image: trophy_5,
      subTitle:
        "Obtén 60 puntos por actividades realizadas\n (Logro desbloqueado)",
      success: true,
    },
    {
      id: 6,
      image: trophy_n,
      subTitle:
        "Obtén 60 puntos por actividades realizadas\n (Logro bloqueado)",
      success: false,
    },
    {
      id: 7,
      image: trophy_6,
      subTitle:
        "Obtén 70 puntos por actividades realizadas\n (Logro desbloqueado)",
      success: true,
    },
    {
      id: 7,
      image: trophy_n,
      subTitle:
        "Obtén 70 puntos por actividades realizadas\n (Logro bloqueado)",
      success: false,
    },
    {
      id: 8,
      image: trophy_7,
      subTitle:
        "Obtén 80 puntos por actividades realizadas\n (Logro desbloqueado)",
      success: true,
    },
    {
      id: 8,
      image: trophy_n,
      subTitle:
        "Obtén 80 puntos por actividades realizadas\n (Logro bloqueado)",
      success: false,
    },
    {
      id: 9,
      image: trophy_8,
      subTitle:
        "Obtén 90 puntos por actividades realizadas\n (Logro desbloqueado)",
      success: true,
    },
    {
      id: 9,
      image: trophy_n,
      subTitle:
        "Obtén 90 puntos por actividades realizadas\n (Logro bloqueado)",
      success: false,
    },
    {
      id: 10,
      image: trophy_9,
      subTitle:
        "Obtén 100 puntos por actividades realizadas\n (Logro desbloqueado)",
      success: true,
    },
    {
      id: 10,
      image: trophy_n,
      subTitle:
        "Obtén 100 puntos por actividades realizadas\n (Logro bloqueado)",
      success: false,
    },
  ];
  getTrophies.map((trophy, i) => {
    if (i === 0) {
      trophy.success = false;
    }
    if (!trophy.success) {
      console.log("hell", trophy);
    }
  });

  return (
    <>
      {}
      <div id="trophy">
        {getTrophies.map((trophy) => {
          // console.log("cc", trophy.id);
          return (
            <Row align="middle">
              <Col span={6}>
                <Image
                  height={100}
                  width={100}
                  src={getTrophies[0].image}
                  alt="No image found"
                />
              </Col>
              <Col span={16}>
                {/*<h4>{trophy[unlock][0].subTitle}</h4>*/}
                {/*<h4>Obten tu primer video de recompensa</h4>*/}
              </Col>
            </Row>
          );
        })}
      </div>
      {/*<div id="trophy">*/}
      {/*  <Row align="middle">*/}
      {/*    <Col span={6}>*/}
      {/*      <Image*/}
      {/*        height={100}*/}
      {/*        width={100}*/}
      {/*        src={getTrophies[0].true[0].image}*/}
      {/*        alt="No image found"*/}
      {/*      />*/}
      {/*    </Col>*/}
      {/*    <Col span={16}>*/}
      {/*      <h3>La aventura comienza! (desbloqueado)</h3>*/}
      {/*      <h4>Realiza tu primera actividad</h4>*/}
      {/*    </Col>*/}
      {/*  </Row>*/}
      {/*</div>*/}
    </>
  );
};
export default TrophyLogic;
