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

            <div className={this.state.sidebarStyle}> {/*revoir l'exemple dans le projet redux*/}

                <button className={"openbtn"} onClick={() => this.closeHandler()}>Close</button>

                <ul className={"ul"}>
                    <Link to="/">
                        <li>Welcome</li>
                    </Link>
                    <Link to="/movies">
                        <li>Movies</li>
                    </Link>
                    <Link to="/customers">
                        <li>Customers</li>
                    </Link>
                    <Link to="/users">
                        <li>Users</li>
                    </Link>
                    <Link to="/books">
                        <li>Books</li>
                    </Link>
                    
                </ul>
            </div>
        );
    }
}

export default SideBar;