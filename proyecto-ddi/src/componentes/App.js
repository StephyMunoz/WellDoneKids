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
          </Switch>

      </MainLayout>
    </Router>
    </>
  );
}

export default App;
