import React from 'react';

class WarScene extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <a-scene>
      <a-assets>
        <a-asset-item id="fighterDae" src="/assets/fighterPlane/model.dae"></a-asset-item>
      </a-assets>

      <a-sky src='/assets/prehistoric.jpg'/>
      <a-plane id='ground' material='color:brown;side:double' position='0 0 0' rotation='-90 0 0' width='100' height='100' />
      <a-entity position='0 1.5 0'>
        <a-camera id='camera' wasd-controls-enabled='false'/>
      </a-entity>

      <a-entity position='0 20 -10'>
        <a-collada-model src='#fighterDae' position='0 0 0' rotation='0 0 0'/>
        <a-collada-model src='#fighterDae' position='-5 0 0' rotation='0 0 0'/>
        {/*<a-animation 
          attribute='position'
          dur='15000'
          from='0 10 -100'
          to='0 10 100'
          repeat='indefinite'
        />*/}
      </a-entity>

      </a-scene>
    );
  }
};

module.exports = WarScene;
