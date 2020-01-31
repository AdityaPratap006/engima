import React from 'react';
import styles from './backDrop.module.scss';

const BackDrop = ({setModal}) => {
    return (
        <div className={styles['backdrop']} onClick={()=> setModal(false)}>
            
        </div>
    )
}

export default BackDrop;
