import React from 'react';
import { Layout} from 'antd';
import Nav from "./Nav";
import '../styles/game.css';
import '../images/welldonekidslogo.png';


const Landing = () => {
    return(
        <>
        <h1>LANDING</h1>
        <img src={'/images/welldonekidslogo.png'} alt="Not image found"/>
        </>
    );
}
export default Landing;