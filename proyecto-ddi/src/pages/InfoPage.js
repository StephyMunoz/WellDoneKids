import React from 'react';
import '../styles/game.css';
import {Image} from 'antd';
import logo from "../images/welldonekidslogo.png";
import { Row, Col } from 'antd';
import { Button } from 'antd';
import img1 from "../images/info1.jpg";
import img2 from "../images/info2.jpg";
import img3 from "../images/info3.jpg";
import img4 from "../images/info4.jpg";
import img5 from "../images/info5.jpg";


const InfoPage = () => {
    return(
        <>
        <Row style={{padding:'7em', fontSize:'18px'}}>
            <Col span={16}>
                <p>Well Done Kids! es un sitio que permite a tus hijos realizar 
                actividades entretenidas para reforzar los conocimientos adquiridos en la 
                escuela. Nuestra misión es ser el sitio educativo preferido por los mas 
                pequeños y por sus padres, quienes pueden estar tranquilos al saber que 
                sus hijos están utilizando su tiempo libre de forma productiva y segura.
                </p>
                <p>Sigue leyendo para conocer como puedes probar nuestras actividades o
                    crear una cuenta para acceder a todas las características.
                </p>
                </Col>
            <Col span={8} justify="center">
                <Image src={img1} alt="No image found" width={400} style={{margin:'auto'}}/>
            </Col>
        </Row>
        <Row style={{padding:'1em 7em', fontSize:'18px' }}>
            <Col span={12}>
                <Image src={img2} alt="No image found" width={400}/>
            </Col>
            <Col span={12}>
                <h1>Juega y aprende</h1>
                <p>Puedes probar las actividades que tenemos para tu hijo presionando el botón
                    al final de esta sección. Encontrarás una selección aleatoria de actividades
                    cortas y sencillas que mantendrán a tu hijo entretenido mientras refuerza sus
                    conocimientos, luego de diez actividades realizadas con éxito podrás observar 
                    un link hacia un video de YouTube como recompensa a los esfuerzos de tu hijo.
                </p>
                <Button>Juega ahora </Button>
            </Col>
        </Row>
        <Row style={{padding:'1em 7em', fontSize:'18px'}}>
            <Col span={12}>
                <h1>Regístrate</h1>
                <p>Al registrar a tu peque tendrás varios beneficios como recibir vía correo 
                    electrónico los avances que ha tenido tu hijo o hija cada cierto periodo que 
                    tú mismo puedes seleccionar.
                </p>
                <p>Además, el niño/a tendrá la libertad de seleccionar las materias que desea repasar
                    y sus intereses para que los videos recompensa sean de acuerdo con lo que le gusta.
                    Selecciona el botón a continuacion para crear una cuenta, o si ya estás registrado, ingresar.
                </p>
                <Button>Ingresa o crea tu cuenta</Button>
            </Col>
            <Col span={12}>
                <Image src={img3} alt="No image found" width={400}/>
            </Col>
        </Row>
        <Row style={{padding:'1em 7em', fontSize:'18px'}}>
            <Col span={12}>
                <Image src={img4} alt="No image found" width={400}/>
            </Col>
            <Col span={12}>
                <h1>¿Quiénes somos?</h1>
                <p>Somos cuatro estudiantes de la Escuela Politécnica Nacional de la Escuela de Formación 
                    de Tecnólogos.
                </p>
                <p>Con este proyecto queremos contribuir a que los más peques de la casa tengan un espacio 
                    en el que puedan aprender de una forma didáctica e interactiva, con retroalimentación
                    instantánea que le permita saber si esta fallando en algo o lo está haciendo genial.
                </p>
                <p>Los niños/as cada vez usan más horas al día el celular y queremos conseguir que hagan un 
                    buen uso de los aparatos electrónicos, asi como ayudar a los padres de la familia a que 
                    tengan la seguridad de dejar que sus hijos/as usen nuestro sitio y se puedan enfocar en 
                    sus labores cotidianas sin preocuparse por los sitios que visitan los peques.
                </p>
            </Col>
        </Row>
        <Row style={{padding:'1em 7em', fontSize:'18px'}}>
            <Col span={12}>
                <h1>Contáctanos</h1>
                <h3>Dirección: Ladrón de Guevara E11-253</h3>
                <h3>Correo electrónico:<br></br> Welldondekids.info@gmail.com</h3>
                <h3>Teléfono: 55555555</h3>
                <h3>Redes sociales:</h3>
            </Col>
            <Col span={12}>
                <Image src={img5} alt="No image found" width={400}/>
            </Col>
        </Row>
        </>
    );
}
export default InfoPage;