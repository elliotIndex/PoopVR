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
        <a-entity>
          <a-entity rotation={'0 ' + 1*360/5 + ' 0'}>
            <a-sphere color='#ee4035' position='0 1 -5' />
          </a-entity>
          <a-entity rotation={'0 ' + 2*360/5 + ' 0'}>
            <a-sphere color='#f37736' position='0 1 -5' />
          </a-entity>
          <a-entity rotation={'0 ' + 3*360/5 + ' 0'}>
            <a-sphere color='#fdf498' position='0 1 -5' />
          </a-entity>
          <a-entity rotation={'0 ' + 4*360/5 + ' 0'}>
            <a-sphere color='#7bc043' position='0 1 -5' />
          </a-entity>
          <a-entity rotation={'0 ' + 5*360/5 + ' 0'}>
            <a-sphere color='#0392cf' position='0 1 -5' />
          </a-entity>

          <a-animation
            begin='100'
            attribute='rotation'
            dur='8000'
            from='0 0 0'
            to='0 360 0'
            repeat='indefinite'
            easing='linear'
          />
        </a-entity>
        <a-sky color='skyblue' />
      </a-scene>
    );
  }
};

module.exports = LoadingScene;
