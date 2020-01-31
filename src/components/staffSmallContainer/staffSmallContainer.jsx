import React from 'react';
import styles from './staffSmallContainer.module.scss'

import ComplainCard from  '../complainCard/complainCard';

const SmallContainerStaff = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['title']}>
                In Progress    
            </div>
            <div className={styles['body']}>
                {
                   [1,2,3,4,5,6,7,8].map( i => <ComplainCard key={i} id={i} small/>)
                }
            </div>
        </div>
    )
}

export default SmallContainerStaff;
