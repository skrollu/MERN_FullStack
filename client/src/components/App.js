import React, { Component } from 'react';
//import photoDeProfil from './img/FacebookPhotoDeProfil.jpg'
//import logoStarWars from './img/starWarsSpin.gif';
import styles from '../css/App.module.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from '../store';
import Customers from './customers/customers';
import MoviesGrid from './movies/moviesGrid';
import Users from './users';
import SideBar from './ui/sidebar';
import Header from './ui/header/header';
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

    //console.log("sideBarOpen: " + this.state.sidebarOpen);
    
    let sidebar;
    if(this.state.sidebarOpen){
      sidebar = <SideBar close={() => this.sidebarCloseHandler()} sidebarStyle={"sidebar"}/>;
    }

    return (
      <div className={styles.grid_container}>
        <Provider store={store}>
          <Router>
            <div className={styles.app}>
              <div className={styles.appHeader}>
                <header id="headerApp">  
                  <Header openHandler={() => this.openHandler()}/>
                </header>
              </div>
              
              {sidebar}

              <div className={styles.main}>
                <main>
                  <Filter />
                
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
                </main>
              </div>

              <div className={styles.footer}>
                <footer id="footer">
                  All right reserved. Mathieu Ibersien. 2020.
                </footer>
              </div>

            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
