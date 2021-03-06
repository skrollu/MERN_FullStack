import React, { Component } from 'react';
import styles from '../../css/books/starWarsBooks.module.css';
import { connect } from 'react-redux'
import { getItems } from '../../actions/itemActions'
import PropTypes from 'prop-types'
import Spinner from '../ui/spinner';
import { Link } from 'react-router-dom';

class StarWarsBooks extends Component {
    constructor() {
        super();
        this.state = {
            collection: "starwarsbooks"
        };
    }

    componentDidMount() {
        this.props.getItems(this.state.collection);
    }

    render() {
        return this.props.item.loading ? (
            <div>
                <Spinner />
            </div>
        ) : (
            <div>
                <h2 id="componentTitle" className={styles.title}>Star Wars Books</h2>
                <ul id="starWarsBooksList" className={styles.ul}>
                    {this.props.item.items.map(book =>
                        <li id={`starWarsBook${book._id}`} className={styles.li} key={book._id}>
                            <div className={styles.header}>
                                <p id={`starWarsBookTitle${book._id}`}><Link key={`link_${book._id}`}to={`/book/${(book._id)}`}><span className={styles.header_title}>{book.title}</span></Link><em> {book.releaseDate}, {book.author}</em> </p>
                            </div>

                            <table id={`starWarsBooksDetailTable${book._id}`}>
                                <tbody>
                                    <tr>
                                        <td id={`starWarsBooksResume${book._id}`}><span className={styles.resume}><h4><em>Resume: </em></h4><p>{book.resume}</p></span></td>
                                        <td>
                                            <div>
                                                <img 
                                                    id={`starWarsBookCover${book._id}`}
                                                    height="350px"
                                                    src={book.cover}
                                                    alt={`Cover of ${book.title}`}/>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
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
}

const mapStateToProps = (state) => ({
    item: state.item,
});

export default connect(mapStateToProps, { getItems })(StarWarsBooks);