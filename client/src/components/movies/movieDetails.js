import React, { Component } from 'react'
import Spinner from '../ui/spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import styles from '../../css/movies/movieDetails.module.css'
import { getItemById } from '../../actions/itemActions';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            collection: "movie",
            id: props.match.params.id
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
                <ul id="movieDetailList">           
                    <li>
                        <span className={styles.title}>
                            <strong id="strongTitle">{movie.title}</strong>
                        </span>
                        <em id="directorYearRuntime"> {movie.director}, {movie.year}, ({movie.runtime} minutes) </em>
               {/*          {
                            movie.actors.map((actor) => (
                                <span>{actor}, </span>        
                            ))
                        } */}
                        <strong id="metacritic">Metacritic: {movie.metacritic}</strong>
                        <p id="actors">{movie.actors}</p>
                    </li>
                    <li>
                        <p id="plot">&emsp;&emsp;{movie.plot}</p>
                    </li>
                </ul>

                <div className={styles.iframe_container}>
                    <iframe
                        id="youtubeTrailer"
                        title={movie.title}
                        width="560"
                        height="315"
                        src={movie.youtubeEmbedUrl}                      
                        allowFullScreen>
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
