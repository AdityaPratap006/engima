import React from 'react';
import styles from './officerDashboard.module.scss';
import OfficerAreaList from '../../components/officerAreaList/officerAreaList';

const OfficerDashboard = () => {
    return (
        <div className={styles['dashboard']}>
            <div className={styles['main-container']}>
                <div className={styles['area-list']}>
                    <OfficerAreaList/>
                </div>
            </div>
        </div>

    )
}

export default OfficerDashboard;
