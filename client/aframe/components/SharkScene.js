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
         <a-videosphere src="#antarctica"></a-videosphere>
        <a-entity position='0 1.5 0'>
          <a-camera id='camera' wasd-controls-enabled='false'/>
        </a-entity>
      </a-scene>
    );
  }
};

module.exports = SharkScene
;
