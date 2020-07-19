import React from 'react';
import styles from '../../css/movieCard.module.css';

const MovieCard = ( {movie} ) => {

    return (
        <div className={styles.card}>
            <div className={styles.card_inner}>
                <div className={styles.card_front}>
                    <img
                        src={movie.poster}
                        alt='poster' /> 
                </div>
                <div className={styles.card_back}>
                    <ul>
                        <li>
                            <strong>{movie.title}</strong>
                        </li>
                        <li>
                            <em>{movie.year}, {movie.director}</em>
                        </li>
                        <li>
                            {movie.plot}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
    
}

export default MovieCard;
