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
         
            <form id="filterForm" action="" onSubmit={(e) => this.search(e)}>
                <div className={styles.wrapper}>
                    <div className={styles.searchTextBarArea}>
                        <input
                            id="searchText"
                            type="text"
                            placeholder="Search"
                            className={styles.searchText}
                            onChange={(e) => this.TextSearchHandler(e)}></input>
                    </div>
       
                    <div className={styles.sortByButtonListArea}>
                        <select id="sort-by" onSelect={() => this.sortBy()} className={styles.sortBySelect}>>
                            <option value="">Sort by</option>
                            <option value="director">Director</option>
                            <option value="title">Title</option>
                            <option value="year">Year</option>
                        </select>
                    </div>

                    <div className={styles.searchButtonArea}>
                        <button id="submitFormButton" type="submit" className={styles.submitButton}> Search</button>
                    </div>
                </div>
            </form>
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

