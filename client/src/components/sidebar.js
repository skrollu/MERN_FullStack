import React, { Component } from 'react';
import styles from '../css/sidebar.module.css';
import '../css/sidebar.css';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarStyle: props.style
        };
    }

    closeHandler = () => {

        this.setState({sidebarStyle: "sidebar close"});
       
        setTimeout(() => {
            this.props.close();
        }, 1000);
        
    }


    render() {
        console.log("Sidebar style: " + this.state.sidebarStyle)

        return (

            <div className={this.state.sidebarStyle}>
                <button className={styles.openbtn} onClick={() => this.closeHandler()}>Close</button>
                <h2>SideBar</h2>
                <ul className={styles.ul}>
                    <li className={styles.li}>Link</li>
                    <li className={styles.li}>Link</li>
                    <li className={styles.li}>Link</li>
                    <li className={styles.li}>Link</li>
                    <li className={styles.li}>Link</li>
                </ul>
            </div>
        );
    }
}

export default SideBar;