import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers/customers';
import MoviesGrid from './components/movies/moviesGrid';
import Users from './components/users';
import SideBar from './components/sidebar';
import ToggleSideBar from './components/toggleSidebar';
import StarWarsBooks from './components/starWarsBooks';

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
          <h1 className="App-title">My API</h1>
        </header>
        
        {sidebar}
        
        <MoviesGrid />
        <Users />
        <Customers />
        <StarWarsBooks />
   

      </div>
    );
  }
}

export default App;
