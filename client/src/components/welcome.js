import React, { Component } from 'react';
import styles from '../css/welcome.module.css';
import photoDeProfil from '../img/FacebookPhotoDeProfil.jpg'

export default class Welcome extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>Welcome</h1>
                <div className={styles.image_container}>
                    <img 
                        className={styles.image}
                        src={photoDeProfil}
                        alt="Profil" />
                </div>
                <div className={styles.description}>
                    <p>
                        Welcome to my Api. A MERN fullstack project. It's a sandbox project to test new techonologies and train myself...
                        You can use it by creating a .env file and add this <strong>key: </strong>
                        <div className={styles.key}>
                            <em>MONGO_DB_CLUSTER0_PSW="mongodb+srv://m001-student:m001-mongodb-basics@cluster0-k0jgn.mongodb.net/MyApi?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"</em>
                        </div>
                    </p>
                </div>
            </div>
        )
    }
}
