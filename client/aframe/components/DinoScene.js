import React from 'react';

class DinoScene extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <a-scene>
      <a-sky color='blue'/>
      <a-camera id='camera' position='0 1.3 0'/>
      </a-scene>
    );
  }
};

module.exports = DinoScene;
