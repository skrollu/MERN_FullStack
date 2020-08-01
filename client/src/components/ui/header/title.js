import logo from '../../../img/logo.svg';
import styles from '../../../css/ui/header.module.css';
import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <div>
                <img id="appLogo" src={logo} className={styles.appLogo} alt="logo" />
                <h1 id="appTitle" className={styles.appTitle}>My API</h1>
            </div>
        )
    }
}
