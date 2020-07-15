import React, { Component } from 'react';
import styles from "../css/filter.module.css"
import { getItemsByTitle } from '../actions/itemActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Filter extends Component {
    constructor() {
        super();
        this.state = {
            sortBy: ""
        };
    }

    TextSearchHandler(event){
        event.preventDefault();
        const text = event.target.value;
        getItemsByTitle(this.props.item.collection, text)
    }

    search(event){
        event.preventDefault();
        console.log('searchMethod')
    }

    sortBy(){
        console.log('sortByMethod')
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <h2>Filter</h2>
                <form action="">
                    <input id="searchText"
                        type="text" 
                        placeholder="Search" 
                        className={styles.searchText}
                        onChange={(e) => this.TextSearchHandler(e)}></input>

                    <select id="sort-by" className={styles.sortBySelect} onSelect={() => this.sortBy()}>
                        <option value="">Sort by</option>
                        <option value="director">Director</option>
                        <option value="title">Title</option>
                        <option value="year">Year</option>
                    </select>
                    <button type="submit" className={styles.submitButton} onSubmit={(e) => this.search(e)}>Search</button>
                </form>
            </div>
        );
    }
}

Filter.propTypes = {
    getItemsByTitle: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired, //represent our state
}

const mapStateToProps = (state) => ({
    item: state.item  //represent our state
});

export default connect(mapStateToProps, { getItemsByTitle })(Filter);