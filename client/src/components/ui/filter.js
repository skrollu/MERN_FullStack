import React, { Component } from 'react';
import styles from '../../css/ui/filter.module.css'
import { connect } from 'react-redux';
import { getItemsByText } from '../../actions/itemActions';
import PropTypes from 'prop-types'

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
        console.log(text);
        this.props.getItemsByText(this.props.item.collection, text)
    }

    search(event){
        event.preventDefault();
        //this.props.getItemsBy(this.props.item.collection )
    }

    sortBy(){
        console.log('sortByMethod')
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <form id="filterForm" action="" onSubmit={(e) => this.search(e)}>
                    <input 
                        id="searchText"
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
                    <button id="submitFormButton" type="submit" className={styles.submitButton}>Search</button>
                </form>
            </div>
        );
    }
}

Filter.propTypes = {
    getItemsByText: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    item: state.item,
});

export default connect(mapStateToProps, { getItemsByText })(Filter);

