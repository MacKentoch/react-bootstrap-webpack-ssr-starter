// @flow weak

import React, {
  Component
}                         from 'react';
// import PropTypes          from 'prop-types';
import {
  NavigationBar,
  BackToTop
}                         from '../../components';
import navigationModel    from '../../models/navigation.json';
import MainRoutes         from '../../routes/MainRoutes';
import { withRouter }     from 'react-router';

class App extends Component {
  state = { navModel: navigationModel };

  render() {
    const { navModel } = this.state;

    return (
      <div id="appContainer">
        <NavigationBar
          brand={navModel.brand}
          navModel={navModel}
          handleLeftNavItemClick={this.handleLeftNavItemClick}
          handleRightNavItemClick={this.handleRightNavItemClick}
        />
        <div className="container-fluid">
          <MainRoutes />
        </div>
        <BackToTop
          minScrollY={40}
          scrollTo={'appContainer'}
        />
      </div>
    );
  }

  /* eslint-disable no-unused-vars*/
  handleLeftNavItemClick = (event, viewName) => {
    // something to do here?
  }

  handleRightNavItemClick = (event, viewName) => {
    // something to do here?
  }
  /* eslint-enable no-unused-vars*/
}

export default withRouter(App);
