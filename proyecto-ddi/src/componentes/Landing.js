import React from 'react';
import '../styles/game.css';
import '../styles/game.css';
import {Image} from 'antd';

import logo from "../images/welldonekidslogo.png";

const Landing = () => {
    return(
        <>
        <h1>LANDING</h1>
        <Image
            src={logo}
            alt="Not image found"/>
        </>
    );
}
export default Landing;