import React from 'react';
import DinoScene from '../../aframe/components/DinoScene';
import WarScene from '../../aframe/components/WarScene';

const pooScenes = {
  war: WarScene,
  dino: DinoScene,
}

class PickYourPoo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loadPoo(poo) {
    this.setState({ scene: pooScenes[poo] });
  }

  render () {
    if (this.state.scene) {
      return <this.state.scene />;
    } else {
      return (
        <div>
          <h1 class="title">PoopVR</h1>
          <i class="em em-poop"></i>
          <div class="status">
            <p>Pick your Poo!</p>
          </div>
          <ul>
            <li onClick={() => this.loadPoo('war')}>World War Two</li>
            <li onClick={() => this.loadPoo('dino')}>Prehistoric Poo</li>
          </ul>
        </div>
      );
    }
  }
};

module.exports = PickYourPoo;
