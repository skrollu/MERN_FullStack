import React, { Component } from 'react';
//import photoDeProfil from './img/FacebookPhotoDeProfil.jpg'
import logo from '../img/logo.svg';
//import logoStarWars from './img/starWarsSpin.gif';
import '../css/App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from '../store';
import Customers from './customers/customers';
import MoviesGrid from './movies/moviesGrid';
import Users from './users';
import SideBar from './ui/sidebar';
import ToggleSideBar from './ui/toggleSidebar';
import StarWarsBooks from './books/starWarsBooks';
import MovieDetails from './movies/movieDetails';
import Welcome from './welcome';
import Filter from './ui/filter';
import StarWarsBookDetails from './books/starWarsBookDetails';

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
            <Filter />
          </div>

          <Switch>
            <Route path="/" exact component={Welcome} />   
            <Route path="/movies" component={MoviesGrid}/>
            <Route path={`/movie/:id`} component={MovieDetails}/>
            <Route path="/books" component={StarWarsBooks} />
            <Route path={`/book/:id`} component={StarWarsBookDetails}/>
            <Route path="/customers" component={Customers} />
            <Route path="/users" component={Users} />
            <Route path="/" component={() => <div>Erreur 404</div>} />   
          </Switch>

        </Router>
      </Provider>
    );
  }
}

export default App;
