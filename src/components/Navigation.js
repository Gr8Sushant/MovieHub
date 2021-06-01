import React, { Component } from 'react';
import Toolbar from './Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './backdrop/Backdrop';


class Navigation extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };


  render(){
    let sideDrawer;
    let backdrop;

  if (this.state.sideDrawerOpen){
    backdrop = <Backdrop click={this.backDropClickHandler}/>
  }
  return (
    <div style={{height: '100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
    </div>
  );
}
}

export default Navigation;
