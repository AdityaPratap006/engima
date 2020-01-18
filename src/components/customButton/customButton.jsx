import React from 'react';
import styles from './customButton.module.scss';

const CustomButton = ({ text, width, height, onClick, ...otherProps}) => {
    return (
        <button className={styles['button']} style={{ width: width, height: height }} onClick={onClick} {...otherProps}>
            {text}
        </button>
    )
}

export default CustomButton;
