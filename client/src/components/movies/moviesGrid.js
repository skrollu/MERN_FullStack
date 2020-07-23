import React, { Component, useState, useEffect } from 'react';
import MovieCard from './movieCard';
import Spinner from '../ui/spinner';
import styles from '../../css/movies/moviesGrid.module.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItems } from '../../actions/itemActions';
import PropTypes from 'prop-types';
import Filter from '../ui/filter';

/*
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
    */
class MoviesGrid extends Component {
    constructor() {
        super();
        this.state = {
            collection: "movies"
        };
    }

    componentDidMount() {
        this.props.getItems(this.state.collection);
    }

    handleClick(event, movie){
        //console.log('Movie Card Selected: ' + movie)
    }

    render() { 
        return this.props.item.loading ? (
            <div>
                <Filter />
                <Spinner />
            </div>
            ) : (
                <div>
                    <h2 className={styles.title}>Movies</h2>
                    <Filter />
                    <div>
                        <section className={styles.grid}>

                            {this.props.item.items.map((movie) => (
                                <Link key={`link_${movie._id}`} to={`/movie/${(movie._id)}`} onClick={(e) => this.handleClick(e, movie)}>
                                    <MovieCard movie={movie}></MovieCard>
                                </Link>
                            ))}
                        </section>
                    </div>
                </div>
            );
    }
}

MoviesGrid.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems })(MoviesGrid);