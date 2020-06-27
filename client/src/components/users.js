import React, { Component } from 'react';
import styles from '../css/users.module.css';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetch('/api/users')
            .then(res => res.json())
            .then(users => this.setState({ users }, () => console.log('Users fetched...', users)));
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <ul className={styles.ul}>
                    {this.state.users.map(user =>
                        <li className={styles.li} key={user.id}>{user.name} {user.email}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Users;
