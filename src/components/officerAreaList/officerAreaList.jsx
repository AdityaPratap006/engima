import React from 'react';
import styles from './officerAreaList.module.scss';
import OfficerAreaListCard from '../officerAreaListCard/officerAreaListCard';

const OfficerAreaList = () => {
    return (
        <div className={styles['list']}>
          {
             [ ...new Array(12)].map((obj, i) => {
                  return   <OfficerAreaListCard key={i} data={obj}/>
              })
          }
        </div>
    )
}

export default OfficerAreaList;
