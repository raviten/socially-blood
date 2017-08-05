import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppTheme from './AppTheme';

import MainLayout from './MainLayout/MainLayout';
import PostForm from './Forms/PostForm';

const history = createBrowserHistory();

const App = () => (
  <MuiThemeProvider muiTheme={AppTheme}>
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        
        <MainLayout>
          <Route exact path="/" component={PostForm} />
        </MainLayout>

      </Switch>
    </Router>
  </MuiThemeProvider>
);

export default App;
