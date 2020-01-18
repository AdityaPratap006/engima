import React from 'react';
import styles from './tabOption.module.scss';

const TabOption = ({text, selected}) => {
    return (
        <div className={`${styles['tab']} ${selected? styles['selected'] : ''}`}>
            {text}
        </div>
    )
}

export default TabOption;
