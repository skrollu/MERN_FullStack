import React from 'react';
import styles from '../../css/movies/movieCard.module.css';

const MovieCard = ( {movie} ) => {

    return (
        <div className={styles.card}>
            <div className={styles.card_inner}>
                <div className={styles.card_front}>
                    <img 
                        id={`movieCardPoster${movie._id}`}
                        src={movie.poster}
                        alt='poster' /> 
                </div>
                <div className={styles.card_back}>
                    <ul id={`movieCardList${movie._id}`}>
                        <li>
                            <strong id={`movieCardTitle${movie._id}`}>{movie.title}</strong>
                        </li>
                        <li>
                            <em id={`movieCardYearDirector${movie._id}`}>{movie.year}, {movie.director}</em>
                        </li>
                        <li id={`movieCardPlot${movie._id}`}>
                            {movie.plot}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );    
}

export default MovieCard;
