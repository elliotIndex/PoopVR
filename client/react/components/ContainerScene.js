import React from 'react';
import DisplayScene from './DisplayScene';
import DinoScene from '../../aframe/components/DinoScene';

class ContainerScene extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <a-scene>
        <a-assets>
          <a-asset-item id='dino' src='/assets/Toilet_Stall.dae' />
          <a-asset-item id='stall' src='/assets/Toilet_Stall.dae' />
          <a-asset-item id='fern' src='/assets/fern.dae' />
          <img id='ptero' src='/assets/ptero.png' />
          <img id='muddyGround' src='/assets/muddyGround.jpg' />
          <img id='jungle' src='/assets/prehistoric.jpg' />
        </a-assets>
        <DisplayScene scene={DinoScene}/>
      </a-scene>
    );
  }
};

module.exports = ContainerScene;
