import React from 'react';

class LoadingScene extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    // Generate scene
    // load assets
    // when the assets load, bring in the component that was loading
    return (
      <a-scene>
        <a-sphere position='0 1 -5'>
          <a-animation
            begin='100'
            attribute='rotation'
            dur='8000'
            from='0 180 0'
            to='0 -180 0'
            repeat='indefinite'
            easing='linear'
          />
        </a-sphere>
      </a-scene>
    );
  }
};

module.exports = LoadingScene;
