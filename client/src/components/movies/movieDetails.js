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
            <div>
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
                <div className={styles.iframe_container}>
                    <iframe
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
