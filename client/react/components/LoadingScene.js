import React from 'react';

const colors = ['#ee4035', '#f37736', '#fdf498', '#7bc043', '#0392cf'];

class LoadingScene extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    // Generate scene
    // load assets
    // when the assets load, bring in the component that was loading
    return (
      <a-entity>
        <a-entity position="0 3 5">
          {colors.map((color, index) => (
            <a-entity key={index} rotation={`0 ${index*360/5} 0`}>
              <a-sphere color={color} position='0 1 -10' />
            </a-entity>
          ))}
          <a-animation begin='100' attribute='rotation' dur='8000' from='0 0 0'
            to='0 360 0' repeat='indefinite' easing='linear'
          />
        </a-entity>
        <a-entity position="0 -1 5">
          {colors.map((color, index) => (
            <a-entity key={index} rotation={`0 ${index*360/5} 0`}>
              <a-sphere color={color} position='0 1 -10' />
            </a-entity>
          ))}
          <a-animation begin='100' attribute='rotation' dur='8000' from='0 0 0'
            to='0 -360 0' repeat='indefinite' easing='linear'
          />
        </a-entity>
        <a-sky color='skyblue' />
      </a-entity>
    );
  }
};

module.exports = LoadingScene;
