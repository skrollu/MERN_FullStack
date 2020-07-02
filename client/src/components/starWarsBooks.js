import React, { Component } from 'react';
import styles from '../css/starWarsBooks.module.css';

class StarWarsBooks extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        fetch('/api/starWarsBooks')
            .then(res => res.json())
            .then(books => this.setState({ books }, () => console.log('Books fetched...', books)));
    }

    render() {
        return (
            <div>
                <h2>Star Wars Books</h2>
                <ul className={styles.ul}>
                    {this.state.books.map(book =>
                        <li className={styles.li} key={book.id}>
                     
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default StarWarsBooks;

/**
 * 
 * <li className={styles.li} key={book.id}>
                            <table>
                                <tr>
                                    <td><h1>{book.title} </h1></td>
                                    <td>
                                        <em>{book.releaseDate}, {book.author}</em>
                                    </td>
                                </tr>
                                <tr>
                                    <td><h4><em>Resume: </em></h4><p>{book.resume}</p></td>
                                    <td>
                                        <img class="fit-picture"
                                            height="350px"
                                            src={book.cover}
                                            alt='poster of ' />
                                    </td>
                                </tr>
                            </table>

                        </li>
 */