import React, { Component } from 'react';
import photoDeProfil from './img/FacebookPhotoDeProfil.jpg'
import logo from './logo.svg';
import logoStarWars from './img/starWarsSpin.gif';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './store';
import Customers from './components/customers/customers';
import MoviesGrid from './components/movies/moviesGrid';
import Users from './components/users';
import SideBar from './components/sidebar';
import ToggleSideBar from './components/toggleSidebar';
import StarWarsBooks from './components/starWarsBooks';
import MovieDetails from './components/movies/movieDetails';
import Welcome from './components/welcome'

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
{/*               <div className="image_container">
                <img
                  className="image"
                  src={photoDeProfil}
                  alt="Photo de Profil" />
              </div> */}
              <ToggleSideBar openHandler={() => this.openHandler()} />
              <h1 className="App-title">My API</h1>
            </header>
            {sidebar}
          </div>

          <Switch>
            <Route path="/" component={Welcome} />   
            <Route path="/movies" component={MoviesGrid}/>
            <Route path="/customers" component={Customers} />
            <Route path="/books" component={StarWarsBooks} />
            <Route path="/users" component={Users} />
            <Route path={`/movie/:id`} component={MovieDetails}/>
            <Route path="/" component={() => <div>Erreur 404</div>} />   
          </Switch>

        </Router>
      </Provider>
    );
  }
}

export default App;
