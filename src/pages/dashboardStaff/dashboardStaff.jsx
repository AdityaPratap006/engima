import React, { useState } from 'react';
import styles from './dashboardStaff.module.scss';

import CardContainerStaff from '../../components/cardContainerStaff/cardContainerStaff';
import TabOption from '../../components/tabOption/tabOption';
import SmallContainerStaff from '../../components/smallContainerStaff/smallContainerStaff';
import StaffDataContainer from '../../components/staffDataContainer/staffDataContainer';
import MapboxGLMap from '../../components/map/map';

import { MyResponsivePie } from '../../components/staffDataContainer/staffDataContainer';
import { ChartData } from '../../components/staffDataContainer/data';


const renderLaptopVersion = () => {

    return (
        <div className={styles['main-container']}>
            <StaffDataContainer/>
            <CardContainerStaff title={'Pending'} />
            <SmallContainerStaff/>
            {/* <CardContainerStaff title={'In Progress'} />
            <CardContainerStaff title={'Fixed'} /> */}
        </div>
    );
}

const renderMobileVersion = (currentTab, setCurrentTab) => {

    let container = null;

    if(currentTab === 'pending'){
        container = <CardContainerStaff title={'Pending'}/>;
    }
    else if(currentTab === 'inprogress'){
        container = <CardContainerStaff title={'In Progress'}/>;
    }
    else if(currentTab === 'map'){
        container = (<div className={styles['mobile-map-container']}>
            <div className={styles['title']}>
                Map
            </div>
            <div  className={styles['body']}>
                <MapboxGLMap locationArray={[
                    {
                        lat:'15.24',
                        long:'74.25',
                    }
                ]}/>
            </div>
        </div>);
    }
    else if(currentTab === 'chart'){
        container = (<div className={styles['mobile-chart-container']}>
            <div className={styles['title']}>
                    Insights
            </div>
            <div className={styles['body']}>
                <MyResponsivePie data={ChartData}/>
            </div>
        </div>);
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
                <div className={styles['option']} onClick={()=>{setCurrentTab('chart')}}>
                     <TabOption text={'Insights'} selected={currentTab==='chart'} />
                </div>
                <div className={styles['option']} onClick={()=>{setCurrentTab('map')}}>
                     <TabOption text={'map'} selected={currentTab==='map'} />
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
