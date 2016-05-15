import React from 'react';

class WarScene extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <a-scene>

      <a-assets>
        <a-asset-item id='fighterDae' src='/assets/fighterPlane/model.dae' />
        <a-asset-item id='stall' src='/assets/Toilet_Stall.dae' />
        <a-asset-item id='tallGrass' src='/assets/tallGrass.dae' />
      </a-assets>

      <a-sky src='/assets/gloomySky.jpg' rotation='60 0 0' />

      <a-plane id='ground' src='/assets/redDirt.jpg' material='side:double' 
        position='0 0 -3' rotation='-90 0 0' width='10' height='10' />

      <a-entity position='0 1.5 0'>
        <a-camera id='camera' wasd-controls-enabled='true'/>
      </a-entity>

      <a-entity position='-47 25 0' rotation='0 180 0'>
        <a-collada-model src='#fighterDae' position='65 2 0' rotation='10 0 26'/>
        <a-collada-model src='#fighterDae' position='45 0 0' rotation='10 0 20'/>
        <a-animation
          begin='5000' 
          attribute='rotation'
          dur='8000'
          from='0 180 0'
          to='0 -180 0'
          repeat='indefinite'
          easing='linear'
        />
      </a-entity>

      <a-entity id='siren' position='10 3 -15' sound='src:assets/siren.mp3;autoplay:true;loop:true;' />

      <a-collada-model scale='2.3 1.5 2' src='#tallGrass' position='-1.5 -0.8 -1.5' />

      <a-collada-model scale='2.3 1.5 2' src='#stall' position='1.2 0 1' rotation='0 180 0'/>

      <a-light type='ambient' color='#f6da80'></a-light>

      </a-scene>
    );
  }
};

module.exports = WarScene;
