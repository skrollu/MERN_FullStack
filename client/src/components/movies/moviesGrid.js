import React, { useState, useEffect} from 'react'
import Movies from './movies'
import Spinner from '../ui/spinner'
import styles from '../../css/moviesGrid.module.css'
import axios from 'axios';

const MoviesGrid = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/movies')
            .then(res => {
                const data = res.data
                setMovies(data);
                setIsLoading(false);
                console.log('Movies fetched...', movies)
            }); 
    });

    return isLoading ? (
        <Spinner />
    ) : (
        <div>
            <h2 className={styles.title}>Movies</h2>
            <section className={styles.cards}>
                    
                {movies.map((movie) => (
                    <Movies key={movie.id} movie={movie}></Movies>
                ))}
            </section>    
        </div>
    );
}

export default MoviesGrid;