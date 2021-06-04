import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SortTools from './modules/views/SortTools';
import AppFooter from './modules/views/AppFooter';
import Intro from './modules/views/Intro';
import EmailService from './modules/views/EmailService';
import AppAppBar from './modules/views/AppAppBar';
import SortingVisualizer from './modules/views/SortingVisualizer';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgetPassword from './ForgotPassword';
import DataStructureVisualizer from './modules/views/DataStructureVisualizer';

function Index() {
  return (
    <React.Fragment>
      <Router>
        <AppAppBar />
        <Switch>
          <Route path="/" exact>
            <Intro />
            <SortTools />
            <EmailService />
            <AppFooter />
          </Route>
          <Route path="/Sorting" exact component={SortingVisualizer}/>
          <Route path="/Data-Structure" exact component={DataStructureVisualizer}/>
          <Route path="/sign-in" exact component={SignIn}/>
          <Route path="/sign-up" exact component={SignUp}/>
          <Route path="/forgot-password/" exact component={ForgetPassword}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default withRoot(Index);
