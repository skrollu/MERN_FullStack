import React, { Component, useState, useEffect } from 'react';
import Movies from './movies';
import Spinner from '../ui/spinner';
import styles from '../../css/moviesGrid.module.css';
import { connect } from 'react-redux';
import { getItems } from '../../actions/itemActions';
import PropTypes from 'prop-types'
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

    render(){
        return this.props.item.loading ? (
                <Spinner />
            ) : (
                <div>
                    <h2 className={styles.title}>Movies</h2>
                    <section className={styles.cards}>

                        {this.props.item.items.map((movie) => (
                            <Movies key={movie.id} movie={movie}></Movies>
                        ))}
                    </section>
                </div>
            );
    }
}

MoviesGrid.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item,
    loading: state.loading
});

export default connect(mapStateToProps, { getItems })(MoviesGrid);