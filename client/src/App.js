import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import Movies from './components/movies';
import Users from './components/users';
import SideBar from './components/sidebar';
import ToggleSideBar from './components/toggleSidebar';

class App extends Component {

  constructor(){
    super();
    this.state = {
      sidebarOpen: false,
    }
  }

  openHandler(){
    if (this.state.sidebarOpen === false ){
      this.setState({ sidebarOpen: true });
    } else {
      this.setState({ sidebarOpen: false });
    }
  }

  sidebarCloseHandler(){
    this.setState({ sidebarOpen: false });
  }

  render() {

    console.log("sideBarOpen: " + this.state.sidebarOpen);
    
    let sidebar;
    if(this.state.sidebarOpen){
      sidebar = <SideBar close={() => this.sidebarCloseHandler()} style={"sidebar"}/>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ToggleSideBar openHandler={() => this.openHandler()}/>
          <h1 className="App-title">Movie Viewer</h1>
        </header>
        
        {sidebar}
        
        <Users />
        <Customers />
        <Movies />
      </div>
    );
  }
}

export default App;
