import React from 'react';

class DinoScene extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <a-scene>
      <a-assets>
        <a-asset-item id="asstronautDae" src="/assets/John_glenn/model.dae"></a-asset-item>
      </a-assets>

      <a-sky src='/assets/prehistoric.jpg'/>
      <a-plane id='ground' material='color:brown;side:double' position='0 0 0' rotation='-90 0 0' width='100' height='100' />
      <a-entity position='0 1.5 0'>
        <a-camera id='camera'/>
      </a-entity>
      <a-collada-model src='#asstronautDae' position='0 -0.5 0' rotation='0 180 0'/>

      <a-entity position='0 10 -10'>
        <a-plane src='/assets/ptero.png' transparent='true' width='3' height='2' rotation='90 0 0'/>
        <a-animation 
          attribute='position'
          dur='15000'
          from='0 10 -100'
          to='0 10 100'
          repeat='indefinite'
        />
      </a-entity>

      </a-scene>
    );
  }
};

module.exports = DinoScene;
