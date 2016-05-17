import React from 'react';
import LoadingScene from './LoadingScene';

class DisplayScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    var assets = document.querySelector('a-assets');

    if (assets.hasLoaded) {
      this.setLoaded();
      console.log('fast loaded!');
    } else {
      console.log('setting listener', assets);
      assets.addEventListener('loaded', this.setLoaded);
    }
  }

  render () {
    this.setLoaded = () => {
      console.log('done loading!');
      this.setState({
        loading: false,
      });
    }
    return this.state.loading ? <LoadingScene /> : <this.props.scene />;
  }
};

module.exports = DisplayScene;
