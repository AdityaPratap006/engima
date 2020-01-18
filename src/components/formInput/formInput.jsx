import React from 'react';
import styles from './formInput.module.scss';

const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <div className={styles['group']}>
            <input className={styles['form-input']} onChange={handleChange} {...otherProps}  />
            {
                label ?
                (<label className={ `${otherProps.value.length ? styles['shrink'] : '' } ${styles['form-input-label']}`}>
                    {label}
                </label>)
                :null
            }
        </div>
    )
}

export default FormInput;
