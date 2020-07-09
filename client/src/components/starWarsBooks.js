import React, { Component } from 'react';
import styles from '../css/starWarsBooks.module.css';
import { connect } from 'react-redux'
import { getItems } from '../actions/itemActions'
import PropTypes from 'prop-types'
import Spinner from './ui/spinner';

class StarWarsBooks extends Component {
    constructor() {
        super();
        this.state = {
            collection: "starWarsbooks"
        };
    }

    componentDidMount() {
        this.props.getItems(this.state.collection);
    }

    render() {
        return this.props.item.loading ? (
            <Spinner />
        ) : (
            <div>
                <h2 className={styles.title}>Star Wars Books</h2>
                <ul className={styles.ul}>
                    {this.props.item.items.map(book =>
                        <li className={styles.li} key={book.id}>
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
                    )}
                </ul>
            </div>
        );
    }
}

StarWarsBooks.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item,
    loading: state.loading
});

export default connect(mapStateToProps, { getItems })(StarWarsBooks);