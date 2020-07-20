import React, { Component } from 'react'
import Spinner from '../ui/spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getItemById } from '../../actions/itemActions';
import styles from '../../css/books/starWarsBookDetails.module.css';

class StarWarsBookDetails extends Component {

    constructor({ match }, props) {
        super(props);

        this.state = {
            collection: "starwarsbook",
            id: match.params.id
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
            <div>
                <ul className={styles.ul}>
                    <li className={styles.li} key={book._id}>
                        <div className={styles.header}>
                            <p><span className={styles.title}>{book.title} </span><em>{book.releaseDate}, {book.author}</em> </p>
                        </div>
                        <table>
                            <tr>
                                <td><span className={styles.resume}><h4><em>Resume: </em></h4><p>{book.resume}</p></span></td>
                                <td>
                                    <img class="fit-picture"
                                        height="350px"
                                        src={book.cover}
                                        alt='poster of ' />
                                </td>                                
                            </tr>
                        </table>
                    </li>
                </ul>
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