import React from 'react';
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

// import EmailService from './modules/views/EmailService';
// import SignIn from './SignIn';
// import SignUp from './SignUp';
// import ForgetPassword from './ForgotPassword';

function App() {
  return (
    <React.Fragment>
      <Container maxWidth='lg' style={{ height: '100vh' }}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <NavBar/>
              <Main />
            </Route>
            <Route path="/sorting-visualization" exact component={SortingVisualizer}/>
            <Route path="/data-structure-visualization" exact component={DataStructureVisualizer}/>
            {/* <Route path="/sign-in" exact component={SignIn}/>
            <Route path="/sign-up" exact component={SignUp}/>
            <Route path="/forgot-password/" exact component={ForgetPassword}/> */}
          </Switch>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
