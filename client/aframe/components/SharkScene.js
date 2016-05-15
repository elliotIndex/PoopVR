import React from 'react';

class SharkScene
 extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <a-scene>
        <a-assets>
          <a-asset-item id="stall" src="/assets/Toilet_Stall.dae" />
          <video id="sharks" autoplay loop="true" src="/assets/SharkShipwreck.mp4" />
        </a-assets>
         <a-videosphere src="#sharks" />
        <a-entity position='0 1.5 0'>
          <a-camera id='camera' wasd-controls-enabled='false'/>
        </a-entity>
        <a-collada-model scale="2.3 1.2 1.6" src='#stall' position='1.2 0 1' rotation='0 180 0'/>
      </a-scene>
    );
  }
};

module.exports = SharkScene
;
