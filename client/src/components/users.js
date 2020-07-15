import React, { Component } from 'react';
import styles from '../css/users.module.css';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions'
import PropTypes from 'prop-types';
import Spinner from './ui/spinner';


class Users extends Component {
    constructor() {
        super();
        this.state = {
            collection: "users"
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
                <h2 className={styles.title}>Users</h2>
                <ul className={styles.ul}>
                    {this.props.item.items.map(user =>
                        <li className={styles.li} key={user.id}>{user.name} {user.email}</li>
                    )}
                </ul>
            </div>
        );
    }
}

Users.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    item: state.item,
});

export default connect(mapStateToProps, { getItems })(Users);
