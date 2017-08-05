import React from 'react';
import PropTypes from 'prop-types';

import Connectors from './Connectors';

export default class MainLayout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
      <Connectors/>
        <div>
          This is awesome form!
        </div>
      </div>
    );
  }
}