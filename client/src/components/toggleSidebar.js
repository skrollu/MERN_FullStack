import React, { Component } from 'react';
import styles from '../css/toggleSidebar.module.css'

class ToggleSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className={styles.divbtn}>
                <button 
                    className={styles.openbtn} 
                    onClick={() => this.props.openHandler()}>
                    Menu
                </button>
            </div>
        );
    }
}

export default ToggleSideBar;
