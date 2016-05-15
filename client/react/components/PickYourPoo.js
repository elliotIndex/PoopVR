import React from 'react';

class PickYourPoo extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      +<!DOCTYPE html>
 <html>
   <head>
     <title>Poop VR</title>
   </head>
   <link href='https://fonts.googleapis.com/css?family=Molle:400italic' rel='stylesheet' type='text/css'>
   <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet">

   <style type="text/css">
     body {
       text-align: center;
       background-color: #ddc78c;
     }
     h1 {
       font-family: 'Molle', cursive;
       text-align: center;
       font-size: 100px;
       margin-top: 100px;
       color: #6E401B;

     }
     i {
       font-size: 40px;
       margin: 10px;
     }
     .status {
       font-size: 50px;
       font-family: 'Molle', cursive;
       color: #6F6F6F;
       animation-name: color_change;
       animation-duration: 1s;
       animation-iteration-count: infinite;
       animation-direction: alternate;
     }

     @-webkit-keyframes color_change {
       from { color: #6E401B; }
       to { color: #ddc78c; }
     }
     @-moz-keyframes color_change {
       from { color: #6E401B; }
       to { color: #ddc78c; }
     }
     @-ms-keyframes color_change {
       from { color: #6E401B; }
       to { color: #ddc78c; }
     }
     @-o-keyframes color_change {
       from { color: #6E401B; }
       to { color: #ddc78c; }
     }
     @keyframes color_change {
       from { color: #6E401B; }
       to { color: #ddc78c; }
     }
   </style>

   <body>
     <h1 class="title">PoopVR</h1>
     <i class="em em-poop"></i>
     <div class="status">
       <p>Coming Soon!</p></div>

   </body>
 </html>
  }
};

module.exports = PickYourPoo;
