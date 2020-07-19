import React, { Component } from 'react';
//import styles from '../css/sidebar.module.css';
import { Link } from 'react-router-dom';
import '../css/sidebar.css';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarStyle: props.sidebarStyle
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
                    <Link to="/movies">
                        <li className={"li"}>Movies</li>
                    </Link>
                    <Link to="/customers">
                        <li className={"li"}>Customers</li>
                    </Link>
                    <Link to="/users">
                        <li className={"li"}>Users</li>
                    </Link>
                    <Link to="/books">
                        <li className={"li"}>Books</li>
                    </Link>
                    
                </ul>
            </div>
        );
    }
}

export default SideBar;