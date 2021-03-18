import React from "react";
import { Col, Image, message, Row, Space } from "antd";
import trophy_n from "../images/trophies/trophy_not_unlocked.jpg";
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
import { useAuth } from "../lib/auth";
import "../styles/game.css";

const TrophyLogic = () => {
  const { user } = useAuth();

  const getTrophies = [
    {
      id: 0,
      title: "Medalla de iniciación",
      image: first_medal,
      subTitle: "La aventura comienza!!!",
      points: 1,
    },
    {
      id: 1,
      image: cute_trophy,
      title: "Trofeo feliz",
      subTitle: "Obtén 5 puntos por actividades realizadas",
      // success: true,
      points: 10,
    },
    {
      id: 2,
      image: trophy_1,
      title: "Trofeo de chocolate",
      subTitle: "Obtén 10 puntos por actividades realizadas",
      points: 10,
    },
    {
      id: 3,
      title: "Trofeo de papel",
      image: trophy_2,
      subTitle: "Obtén 20 puntos por actividades realizadas",
      points: 20,
    },
    {
      id: 4,
      image: trophy_3,
      title: "Trofeo de esfuerzo",
      subTitle: "Obtén 30 puntos por actividades realizadas",
      points: 30,
    },
    {
      id: 5,
      image: trophy_4,
      title: "Trofeo por esfuerzo arduo",
      subTitle: "Obtén 50 puntos por actividades realizadas",
      points: 50,
    },
    {
      id: 6,
      image: trophy_5,
      title: "Trofeo de inteligencia",
      subTitle: "Obtén 60 puntos por actividades realizadas",
      points: 60,
    },
    {
      id: 7,
      image: trophy_6,
      title: "Trofeo de logros sin fin",
      subTitle: "Obtén 70 puntos por actividades realizadas",
      points: 70,
    },
    {
      id: 8,
      image: trophy_7,
      title: "Trofeo de bronce",
      subTitle: "Obtén 80 puntos por actividades realizadas",
      points: 80,
    },
    {
      id: 9,
      image: trophy_8,
      title: "Trofeo de plata",
      subTitle: "Obtén 90 puntos por actividades realizadas",
      points: 90,
    },
    {
      id: 10,
      image: trophy_9,
      title: "Trofeo de oro. El logro definitivo",
      subTitle: "Obtén 100 puntos por actividades realizadas",
      points: 100,
    },
  ];
  console.log("score", user.score);

  return (
    <>
      <div>
        {getTrophies.map((trophy) => {
          return (
            <Row align="middle">
              {user.score >= trophy.points ? (
                <div id="trophy">
                  <Row>
                    <Col span={6}>
                      <Image
                        height={100}
                        width={90}
                        alt="No image found"
                        src={trophy.image}
                      />
                    </Col>

                    <Col span={16}>
                      {message.success(
                        `Genial, logro desbloqueado ${trophy.title}`
                      )}
                      <h3>{trophy.title}</h3>
                      <h4>{trophy.subTitle}</h4>
                      <h6>Logro desbloqueado</h6>
                    </Col>
                  </Row>
                </div>
              ) : (
                <div id="trophy">
                  <Row>
                    <Col span={6}>
                      <Image
                        height={100}
                        width={100}
                        alt="No image found"
                        src={trophy_n}
                      />
                    </Col>
                    <Col span={16}>
                      <h3>{trophy.title}</h3>
                      <h4>{trophy.subTitle} </h4>
                      <h6>Logro bloqueado</h6>
                    </Col>
                    <Space />
                  </Row>
                </div>
              )}
            </Row>
          );
        })}
      </div>
    </>
  );
};
export default TrophyLogic;
