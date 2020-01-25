import React, { Suspense } from 'react';
import styles from './cardContainerStaff.module.scss';


const ComplainCard = React.lazy(() => import('../complainCard/complainCard'));


const CardContainerStaff = ({title}) => {
    return (
        <div className={styles['card-container']}>
            <div className={styles['title']}>
                {title}
            </div>
            <div className={styles['body']}>
                {
                   [...new Array(100)].map( i => (
                       <Suspense fallback={<div>Loading....</div>}>
                           <ComplainCard key={i} id={i}/>
                       </Suspense>
                   ))
                }
            </div>
        </div>
    )
}

export default CardContainerStaff;
