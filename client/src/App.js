import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
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
      sidebar = <SideBar close={() => this.sidebarCloseHandler()} sidebarStyle={"sidebar"}/>;
    }

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <ToggleSideBar openHandler={() => this.openHandler()} />
              <h1 className="App-title">My API</h1>
            </header>

            {sidebar}

          </div>

          <Route path="/" exact component={MoviesGrid}/>
          <Route path="/customers" exact component={Customers} />
          <Route path="/books" exact component={StarWarsBooks} />
          <Route path="/users" exact component={Users} />

        </Router>
      </Provider>
    );
  }
}

export default App;
