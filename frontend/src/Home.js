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

function Index() {
  return (
    <React.Fragment>
      <Router>
        <AppAppBar />
        <Switch>
          <Route path="/ultimate-visualizer" exact>
            <Intro />
            <SortTools />
            <EmailService />
            <AppFooter />
          </Route>
          <Route path="/ultimate-visualizer/Sorting" exact component={SortingVisualizer}/>
          <Route path="/ultimate-visualizer/sign-in" exact component={SignIn}/>
          <Route path="/ultimate-visualizer/sign-up" exact component={SignUp}/>
          <Route path="/ultimate-visualizer/forgot-password/" exact component={ForgetPassword}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default withRoot(Index);
