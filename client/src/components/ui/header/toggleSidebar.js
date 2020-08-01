import React, { Component } from 'react';
import styles from '../../../css/ui/toggleSidebar.module.css'

class ToggleSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <button 
                    id="toggleSidebarButton"
                    className={styles.openbtn} 
                    onClick={() => this.props.openHandler()}>
                    Menu
                </button>
            </div>
        );
    }
}

export default ToggleSideBar;
