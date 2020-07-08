import React, { Component } from 'react';
import styles from '../css/starWarsBooks.module.css';
import axios from 'axios';

class StarWarsBooks extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        axios.get('/api/starWarsBooks')
            .then(res => {
                const data = res.data
                this.setState({ books: data })
                console.log('Books fetched...', this.state.books)
            });
    }

    render() {
        return (
            <div>
                <h2 className={styles.title}>Star Wars Books</h2>
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