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
        }, 300);
        
    }


    render() {
        //console.log("Sidebar style: " + this.state.sidebarStyle)

        return (

            <div className={this.state.sidebarStyle}> {/* TODO revoir l'exemple dans le projet redux*/}
                <aside>
                    <button id="closeButtonSidebar" className={"openbtn"} onClick={() => this.closeHandler()}>Close</button>

                    <div>
                        <ul id="sidebarLinkList" className={"ul"}>
                            <Link id="linkToWelcome" to="/">
                                <li>Welcome</li>
                            </Link>
                            <Link id="linkToMovies" to="/movies">
                                <li>Movies</li>
                            </Link>
                            <Link id="linkToBooks" to="/books">
                                <li>Books</li>
                            </Link>
                            <Link id="linkToCustomers" to="/customers">
                                <li>Customers</li>
                            </Link>
                            <Link id="linkToUsers" to="/users">
                                <li>Users</li>
                            </Link>
                        </ul>
                    </div>
    
                    <div className="contact">
                        <h4 id="contactMeTitle">Contact me: </h4>
                        <ul id="contactMeList">
                            <li>
                                <a id="linkToMyFacebook" href="https://www.facebook.com/mathieu.ibersien/">Facebook</a>
                            </li>
                            <li>
                                <a id="linkToMyTwitter" href="https://twitter.com/Maaaaamath">Twitter</a>
                            </li>
                            <li>
                                <a id="linkToMyInstagam" href="https://www.instagram.com/mamath_ib/">Instagram</a>
                            </li>
                            <li>
                                <a id="linkToMyLinkedIn" href="https://www.linkedin.com/">LinkedIn comming out soon...</a>
                            </li>
                            <li>
                                <a id="linkToMyGitHub" href="https://github.com/">GitHub comming out soon...</a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        );
    }
}

export default SideBar;