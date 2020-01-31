import React, { Suspense } from 'react';
import styles from './staffCardContainer.module.scss';

import InfiniteScroll from 'react-infinite-scroller';
// import ComplainCard from '../complainCard/complainCard';

const ComplainCard = React.lazy(() => import('../complainCard/complainCard'));


const CardContainerStaff = ({ title }) => {

    // const [state, setState] = React.useState({
    //     items: [],
    //     skip: 0,
    //     perLoad: 2,
    //     hasMore: true,
    // });

    const [items, setItems] = React.useState([]);
    const [skip, setSkip] = React.useState(0);
    const [hasMore, setHasMore] = React.useState(true);


    const loadMore = () => {
        
        // const { items, skip, perLoad } = state;
        return fetch(
            `https://jsonplaceholder.typicode.com/posts?_start=${skip}&_limit=${10}`
        )
            .then(res => res.json())
            .then(res => {
                setItems([...items, ...res]);

                setSkip(skip + 10);
                setHasMore(res.length >= 10);
            })
            .catch(err => console.error);
    };


   

    return (
        <div className={styles['card-container']}>
            <div className={styles['title']}>
                {title}
            </div>
            <div className={styles['body']}   >
                    <InfiniteScroll
                        hasMore={hasMore}
                        loadMore={loadMore}
                        pageStart={skip}
                        loader={<h1 key={-1}>Loading List!!!</h1>}
                        useWindow={false}
                       

                    >
                        {
                            items.map((obj, i) => (

                                <Suspense key={i} fallback={<div>Loading....</div>}>
                                    <ComplainCard id={i} />
                                </Suspense>
                            ))
                        }
                    </InfiniteScroll>
            </div>
        </div>
    )
}

export default CardContainerStaff;
