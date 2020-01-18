import React from 'react';
import styles from './login.module.scss';
import LoginStaff from '../../components/loginStaff/loginStaff';
import LoginOfficer from '../../components/loginOfficer/loginOfficer';

const Login = () => {
    return (
        <div className={styles['login-page']}>
            <div className={styles['container']}>
                <LoginStaff />
                <LoginOfficer />
            </div>
        </div>
    )
}

export default Login;
