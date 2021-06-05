import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container } from '@material-ui/core';
import NavBar from './component/NavBar/NavBar';
import Main from './component/Main';
import SortingVisualizer from './component/SortingVisualizer';
import DataStructureVisualizer from './component/DataStructureVisualizer';
import Footer from './component/Footer';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import ForgetPassword from './component/ForgetPassword';

function App() {
  return (
      <Container maxWidth='lg' style={{ height: '100vh' }} className="App-Container">
        <Router>
          <Switch>
            <Route path="/" exact>
              <NavBar/>
              <Main />
            </Route>
            <Route path="/sorting-visualization" exact component={SortingVisualizer}/>
            <Route path="/data-structure-visualization" exact component={DataStructureVisualizer}/>
            <Route path="/sign-in" exact component={SignIn}/>
            <Route path="/sign-up" exact component={SignUp}/>
            <Route path="/forgot-password/" exact component={ForgetPassword}/>
          </Switch>
          <Footer/>
        </Router>
      </Container>
  );
}

export default App;
