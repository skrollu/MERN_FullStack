import React, { Component } from 'react';
import styles from '../css/movies.module.css';

class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        fetch('/api/movies')
            .then(res => res.json())
            .then(movies => this.setState({ movies }, () => console.log('Movies fetched...', movies)));
    }

    render() {
        return (
            <div>
                <h2>Movies</h2>
                <ul className={styles.ul}>
                    {this.state.movies.map(movie =>
                        <li className={styles.li} key={movie.id}>
                            <table>
                                <tr>
                                    <td><h1>{movie.title} </h1></td>
                                    <td>
                                        <em>{movie.year}, {movie.director}</em>
                                    </td>
                                </tr>
                                <tr>
                                    <td><h4><em>Plot: </em></h4><p>{movie.plot}</p></td>
                                    <td>
                                        <img class="fit-picture"
                                            height="350px"
                                            src={movie.poster}
                                            alt='poster of ' /> 
                                    </td>
                                </tr>
                            </table>

                        </li> 
                    )}
                </ul>
            </div>
        );
    }
}

export default Movies;
