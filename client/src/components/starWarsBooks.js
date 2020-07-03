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

export default StarWarsBooks;