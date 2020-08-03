import React, { Component } from 'react'
import styles from '../../../css/ui/header.module.css';
import ToggleSideBar from './toggleSidebar';
import { Link } from 'react-router-dom';
import Title from './title';

class Header extends Component {

    render() {
        return (
            <div className={styles.wrappeHeader}>
                <div className={styles.hamburgerMenu}>
                    <ToggleSideBar openHandler={() => this.props.openHandler()} />
                </div>
                <div className={styles.title}>
                    <Link to='/'>
                        <Title />
                    </Link>
                </div>
                <div className={styles.option}>
                    <div className={styles.wrapperOption}>
                        <div className={styles.cart}>
                            <Link to='/'>
                                Cart
                            </Link>
                        </div>
                        <div className={styles.account}>
                            <Link to='/'>
                                My Account
                            </Link>
                        </div>
                    </div>
                </div>          
            </div>
        )
    }
}

export default Header;