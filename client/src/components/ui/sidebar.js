import React, { Component } from 'react';
//import styles from '../css/sidebar.module.css';
import { Link } from 'react-router-dom';
import '../../css/ui/sidebar.css';

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
        //console.log("Sidebar style: " + this.state.sidebarStyle)

        return (

            <div className={this.state.sidebarStyle}> {/* TODO revoir l'exemple dans le projet redux*/}

                <button className={"openbtn"} onClick={() => this.closeHandler()}>Close</button>

                <div>
                    <ul className={"ul"}>
                        <Link to="/">
                            <li>Welcome</li>
                        </Link>
                        <Link to="/movies">
                            <li>Movies</li>
                        </Link>
                        <Link to="/books">
                            <li>Books</li>
                        </Link>
                        <Link to="/customers">
                            <li>Customers</li>
                        </Link>
                        <Link to="/users">
                            <li>Users</li>
                        </Link>
                    </ul>
                </div>
   
                <div className="contact">
                    <h4>Contact me: </h4>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/mathieu.ibersien/">Facebook</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/Maaaaamath">Twitter</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/mamath_ib/">Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/">LinkedIn comming out soon...</a>
                        </li>
                        <li>
                            <a href="https://github.com/">GitHub comming out soon...</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;