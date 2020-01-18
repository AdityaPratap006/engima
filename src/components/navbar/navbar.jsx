import React from 'react';
import styles from './navbar.module.scss'

const Navbar = () => {
    return (
        <div className={styles['navbar']}>
            <div className={styles['app-title']}>
                <h5>Admin Panel</h5>
            </div>
        </div>
    )
}

export default Navbar;
