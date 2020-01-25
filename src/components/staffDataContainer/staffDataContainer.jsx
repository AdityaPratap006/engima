import React from 'react';
import styles from './staffDataContainer.module.scss';

import { ResponsivePie } from '@nivo/pie';
import { ChartData } from './data';
import MapboxGLMap from '../map/map';

export const MyResponsivePie = ({ data /* see data tab */ }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'go'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 60,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)


const StaffDataContainer = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['graph-container']}>
                <MyResponsivePie data={ChartData}/>
            </div>
            <div className={styles['map-container']}>
                <MapboxGLMap locationArray={[
                    {
                        lat:15.2993,
                        long:74.1240
                    },
                    {
                        lat:15.2990,
                        long:74.1224
                    },
                    {
                        lat:15.2890,
                        long:74.1124
                    },
                    {
                        lat:15.1890,
                        long:74.0124
                    },
                    {
                        lat:15.0890,
                        long:74.224
                    },

                ]}/>
            </div>
        </div>
    )
}

export default StaffDataContainer;
