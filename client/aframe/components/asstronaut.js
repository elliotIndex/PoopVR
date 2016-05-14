import React from 'react'

class asstronaut extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <a-collada-model src='#asstronautDae' position='0 -0.5 0' rotation='0 180 0'/>
    );
  }
};

module.exports = asstronaut;
