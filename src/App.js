import React, { Component } from 'react';
import './App.scss';
import { Button, Content } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import { Theme } from '@carbon/react';

class App extends Component {
  render() {
    return (
      // <div>
      //   Hello Carbon! Well, not quite yet. This is the starting point for the
      //   Carbon tutorial.
      // </div>
      <>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>
          <Button>Hi Click me!</Button>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path={'/repos'} component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
