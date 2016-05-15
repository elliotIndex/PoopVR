import React from 'react';
import DisplayScene from './DisplayScene';
import DinoScene from '../../aframe/components/DinoScene';

class ContainerScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true, // set to false when assets load
    };
  }



  componentDidMount() {
    var scene = document.querySelector('a-scene');

    if (scene.hasLoaded) {
      this.setLoaded();
    } else {
      scene.addEventListener('loaded', this.setLoaded);
    }
  }

  render () {
    this.setLoaded = () => {
      this.setState({
        loading: false,
      });
    }
    return (
      <a-scene>
        <a-assets>
          <a-asset-item id='stall' src='/assets/Toilet_Stall.dae' />
          <a-asset-item id='fern' src='/assets/fern.dae' />
        </a-assets>
        <DisplayScene loading={this.state.loading} scene={DinoScene}/>
      </a-scene>
    );
  }
};

module.exports = ContainerScene;
