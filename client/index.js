import React from 'react';
import ReactDOM from 'react-dom';
import AFRAME from 'aframe';

import DinoScene from './aframe/components/DinoScene'
import WarScene from './aframe/components/WarScene'

ReactDOM.render(
  <div>
    <WarScene/>
  </div>
, document.getElementById('app'));
