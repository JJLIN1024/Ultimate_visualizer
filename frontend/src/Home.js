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
import Sorting from './modules/views/Sorting';
import SignIn from './SignIn';
import SignUp from './SignUp';

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
          <Route path="/ultimate-visualizer/Sorting" exact component={Sorting}/>
          <Route path="/ultimate-visualizer/sign-in" exact component={SignIn}/>
          <Route path="/ultimate-visualizer/sign-up" exact component={SignUp}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default withRoot(Index);
