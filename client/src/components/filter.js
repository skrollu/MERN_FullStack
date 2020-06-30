import React, { Component } from 'react';
import styles from "../css/filter.module.css"

class Filter extends Component {
    constructor() {
        super();
        this.state = {
     
        };
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <h2>Filter</h2>
                <form>
                    <input id="searchText" type="text" placeholder="Search" className={styles.searchText}></input>

                    <select id="sort-by" className={styles.sortBySelect}>
                        <option value="">Sort by</option>
                        <option value="director">Director</option>
                        <option value="title">Title</option>
                        <option value="year">Year</option>
                    </select>
                    <button type="submit" className={styles.submitButton}>Search</button>
                </form>
            </div>
        );
    }
}

export default Filter;
