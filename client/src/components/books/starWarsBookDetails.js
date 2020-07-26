import React, { Component } from 'react'
import Spinner from '../ui/spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getItemById } from '../../actions/itemActions';
import styles from '../../css/books/starWarsBookDetails.module.css';

class StarWarsBookDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collection: "starwarsbook",
            id: props.match.params.id
        };
    }

    componentDidMount() {
        this.props.getItemById(this.state.collection, this.state.id)
    }

    render() {
        let book = this.props.item.item;

        return this.props.item.loading ? (
            <Spinner />
        ) : (
            <div className={styles.details}>
                <div className={styles.header}>
                    <p id="starWarsBookDetailTitle"><span className={styles.title}>{book.title} </span><em>{book.releaseDate}, {book.author}</em> </p>
                </div>
                <table id="starWarsBookDetailTable">
                    <tbody>
                        <tr>
                            <td id="starWarsBookDetailResume"><span className={styles.resume}><h4><em>Resume: </em></h4><p>{book.resume}</p></span></td>
                            <td>
                                <img
                                    id="starWarsBookDetailCover"
                                    height="350px"
                                    src={book.cover}
                                    alt='poster of ' />
                            </td>                                
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

StarWarsBookDetails.propTypes = {
    getItemById: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    item: state.item,
});

export default connect(mapStateToProps, { getItemById })(StarWarsBookDetails);