import React from 'react';
import DinoScene from '../../aframe/components/DinoScene';
import WarScene from '../../aframe/components/WarScene';
import SharkScene from '../../aframe/components/SharkScene';
import VideoScene from '../../aframe/components/VideoScene';
import RollerCoasterScene from '../../aframe/components/RollerCoasterScene';
import MoonScene from '../../aframe/components/MoonScene';

const pooScenes = {
  war: WarScene,
  dino: DinoScene,
  shark: SharkScene,
  coaster: RollerCoasterScene,
  moon: MoonScene,
}

class PickYourPoo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loadPoo(poo) {
    this.setState({ scene: pooScenes[poo] });
  }

  loadVideoPoo(video) {
    this.setState({
      scene: () => <VideoScene video={video} />
    });
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
          <h3>Poop Scenes</h3>
          <ul>
            <li onClick={() => this.loadPoo('war')}>World War Two</li>
            <li onClick={() => this.loadPoo('dino')}>Prehistoric Poo</li>
            <li onClick={() => this.loadPoo('moon')}>Lunar Poo</li>
          </ul>
          <h3>Theatrical Experiences</h3>
            <ul>
              <li onClick={() => this.loadVideoPoo('SharkShipwreck')}>Shark Shit</li>
              <li onClick={() => this.loadVideoPoo('RollerCoaster')}>Throne Ride</li>
            </ul>
        </div>
      );
    }
  }
};

module.exports = PickYourPoo;
