import React, { Component } from 'react'
import Spinner from '../ui/spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import styles from '../../css/movieDetails.module.css'
import { getItemById } from '../../actions/itemActions';

class MovieDetails extends Component {
    constructor({ match }, props) {
        super(props);
    
        this.state = {
            collection: "movie",
            id: match.params.id
        };
    }

    componentDidMount(){
        this.props.getItemById(this.state.collection, this.state.id)
    }

    render() {
        let movie = this.props.item.item;

        return this.props.item.loading ? (
            <Spinner />
        ) : (
            <div className={styles.movie}>
                <ul>           
                    <li>
                        <span className={styles.title}>
                            <strong>{movie.title}</strong>
                        </span>
                        <em> {movie.director}, {movie.year}, ({movie.runtime} minutes) </em>
               {/*          {
                            movie.actors.map((actor) => (
                                <span>{actor}, </span>        
                            ))
                        } */}
                        <strong>Metacritics: {movie.metacritic}</strong>
                        <p>{movie.actors}</p>
                    </li>
                    <li>
                        <p>&emsp;&emsp;{movie.plot}</p>
                    </li>
                </ul>

                <div className={styles.iframe_container}>
                    <iframe
                        title={movie.title}
                        width="560"
                        height="315"
                        src={movie.youtubeEmbedUrl}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        );
    }
}

MovieDetails.propTypes = {
    getItemById: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    item: state.item,
});

export default connect(mapStateToProps, { getItemById })(MovieDetails);
