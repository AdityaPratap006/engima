import React from 'react';
import styles from './staffComplaintDetails.module.scss';

import potholeImg from '../../assets/pothole-img.jpg';
import MapboxGLMap from '../map/map';



// const AnyReactComponent = ({ text }) => <div style={{ zIndex: 3 }}>{text}</div>;

const StaffComplaintDetails = () => {


    return (
        <div className={styles['page']}>
            <div className={styles['grid-container']}>

                <div className={styles['details']}>

                </div>
                <div className={styles['image']} style={{
                    backgroundImage: `url(${potholeImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    {/* <img alt={'proof'} src={potholeImg}/> */}
                </div>
                <div className={styles['settings']}>

                </div>
                <div className={styles['map']}>
                    <div style={{ height: '100%', width: '100%' }}>
                       <MapboxGLMap locationArray={[
                           {
                                lat:15.1890,
                                long:74.0124
                            },
                       ]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaffComplaintDetails;

