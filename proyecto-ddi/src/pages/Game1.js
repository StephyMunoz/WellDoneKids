import React from 'react';
import {useEffect, useState} from 'react';
import '../styles/game.css';
import {Button, Col, Input, Row, Radio} from "antd";
import GameNav from "../components/GameNav";
import Routes from "../constants/Routes";
import {Link} from "react-router-dom";
import withAuth from "../hocs/withAuth";
import {db} from '../firebase';
import Questions from "../components/Questions";




const Game1 = () => {


    return (
        <>
            hols questions
            {<Questions/>}
        </>
    );
}
export default withAuth(Game1);