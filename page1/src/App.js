import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Page1 from 'components/Page1';
import AOS from 'aos';
import { isMobile } from 'react-device-detect';

import 'aos/dist/aos.css';
import './common.css';
import './fonts.css';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });
      AOS.refresh();
    }, 1500);
  }

  render() {
    return (
      <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <Switch>
          <Route exact path="/">
            <div>
              pxCode Screen List: <br />
              <Link to="/Page1">Page1</Link>
            </div>
          </Route>

          <Route exact path="/Page1" component={Page1} />
        </Switch>
      </Router>
    );
  }
}

export default App;
