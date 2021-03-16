import React, { useEffect, useState } from "react";
import "../styles/game.css";
import withAuth from "../hocs/withAuth";
import Questions from "../components/Questions";

const Game1 = ({ subject }) => {
  //console.log("sub from game", subject);
  const [selecSubject, setSelecSubject] = useState(null);

  useEffect(() => {
    setSelecSubject(subject);
  }, [selecSubject]);
  return (
    <>
      <Questions selecSubject={selecSubject} />
    </>
  );
};

export default withAuth(Game1);
