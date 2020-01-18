import React, { useState } from 'react';
import styles from './dashboardStaff.module.scss';

import CardContainerStaff from '../../components/cardContainerStaff/cardContainerStaff';
import TabOption from '../../components/tabOption/tabOption';


const renderLaptopVersion = () => {

    return (
        <div className={styles['main-container']}>
            <CardContainerStaff title={'Pending'} />
            <CardContainerStaff title={'In Progress'} />
            <CardContainerStaff title={'Fixed'} />
        </div>
    );
}

const renderMobileVersion = (currentTab, setCurrentTab) => {

    let container = null;

    if(currentTab === 'pending'){
        container = <CardContainerStaff title={'Pending'}/>;
    }
    else if(currentTab === 'fixed'){
        container = <CardContainerStaff title={'Fixed'}/>;
    }
    else{
        container = <CardContainerStaff title={'In Progress'}/>;
    }

    return (
        <div className={styles['main-container-mobile']}>
            <div className={styles['tabs']}>
                <div className={styles['option']} onClick={()=>{setCurrentTab('pending')}}>
                     <TabOption text={'Pending'} selected={currentTab==='pending'} />
                </div>
                <div className={styles['option']} onClick={()=>{setCurrentTab('inprogress')}}>
                     <TabOption text={'In Progress'} selected={currentTab==='inprogress'} />
                </div>
                <div className={styles['option']} onClick={()=>{setCurrentTab('fixed')}}>
                     <TabOption text={'Fixed'} selected={currentTab==='fixed'} />
                </div>
            </div>
            {
                container
            }
        </div>
    );
}

const Dashboard = () => {

    const [ currentTab, setCurrentTab] = useState('pending');

    return (
        <div className={styles['dashboard']}>
            {
                (window.innerWidth > 1100)
                ? renderLaptopVersion()
                : renderMobileVersion(currentTab, setCurrentTab)
            }
        </div>
    )
}

export default Dashboard;
