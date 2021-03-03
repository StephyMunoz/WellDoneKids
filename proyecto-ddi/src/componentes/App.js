import React from 'react';
import '../styles/App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import TrialGame from "../pages/TrialGame";
import Home from "../pages/Home";
import MainLayout from "./MainLayout";
import Landing from './Landing';
import TrialGame1 from "../pages/TrialGame1";
import TrialGame2 from "../pages/TrialGame2";
import TrialGame3 from "../pages/TrialGame3";
import TrialGame4 from "../pages/TrialGame4";
<<<<<<< HEAD
import Login from "../pages/Login";
=======
import Game from "../pages/Game";
import Game1 from "../pages/Game1";
import Game2 from "../pages/Game2";
import Game3 from "../pages/Game3";
import Game4 from "../pages/Game4";
>>>>>>> 19d94b2b4ac20fb95f3a2688802c4e472cd10484

function App() {
  return (
    <>

    <Router>
      <MainLayout >
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route exact path="/trialgame">
                  <TrialGame />
              </Route>
              <Route exact path="/landing">
                <Landing/>
              </Route>
              <Route exact path="/trialgame1">
                  <TrialGame1/>
              </Route>
              <Route exact path="/trialgame2">
                  <TrialGame2/>
              </Route>
              <Route exact path="/trialgame3">
                  <TrialGame3/>
              </Route>
              <Route exact path="/trialgame4">
                  <TrialGame4/>
              </Route>
<<<<<<< HEAD
              <Route exact path="/login">
                  <Login/>
=======
              <Route exact path="/game">
                  <Game/>
              </Route>
              <Route exact path="/game1">
                  <Game1/>
              </Route>
              <Route exact path="/game2">
                  <Game2/>
              </Route>
              <Route exact path="/game3">
                  <Game3/>
              </Route>
              <Route exact path="/game4">
                  <Game4/>
>>>>>>> 19d94b2b4ac20fb95f3a2688802c4e472cd10484
              </Route>
          </Switch>

      </MainLayout>
    </Router>
    </>
  );
}

export default App;
