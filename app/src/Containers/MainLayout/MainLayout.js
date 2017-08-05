import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';

class MainLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withWidth()(MainLayout);
