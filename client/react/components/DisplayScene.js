import React from 'react';
import LoadingScene from './LoadingScene';

class DisplayScene extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return this.props.loading ? <LoadingScene /> : <this.props.scene />;
  }
};

module.exports = DisplayScene;
