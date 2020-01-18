import React from 'react';
import styles from './cardContainerStaff.module.scss';
import ComplainCard from '../complainCard/complainCard';

const CardContainerStaff = ({title}) => {
    return (
        <div className={styles['card-container']}>
            <div className={styles['title']}>
                {title}
            </div>
            <div className={styles['body']}>
                {
                   [1,2,3,4,5,6,7,8].map( i => <ComplainCard key={i} id={i}/>)
                }
            </div>
        </div>
    )
}

export default CardContainerStaff;
