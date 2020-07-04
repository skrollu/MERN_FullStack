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

                <button className={"openbtn"} onClick={() => this.closeHandler()}>Close</button>
                <h2>SideBar</h2>
                <ul className={"ul"}>
                    <li className={"li"}>Link</li>
                    <li className={"li"}>Link</li>
                </ul>
            </div>
        );
    }
}

export default SideBar;