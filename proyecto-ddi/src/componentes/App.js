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
          </Switch>

      </MainLayout>
    </Router>
    </>
  );
}

export default App;