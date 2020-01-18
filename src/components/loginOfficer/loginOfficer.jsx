import React, { useState } from 'react';
import styles from './loginOfficer.module.scss';

import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';

const LoginOfficer = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const handleUserIdChange = (event) => {

        setUserId(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log({
            userId,
            password
        })
    }

    return (
        <div className={styles['card']}>
            <div className={styles['title']}>
                <span>I'm an Officer</span>
            </div>
            <div className={styles['form-container']}>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        name='userid'
                        type='text'
                        value={userId}
                        onChange={handleUserIdChange}
                        required
                        label={'User ID'}

                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        label={'Secret Password'}

                    />
                    <div className={styles['button-container']}>
                        <CustomButton
                            text="Login"
                            type="submit"

                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginOfficer;
