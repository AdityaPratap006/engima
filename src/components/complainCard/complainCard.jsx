import React, { useState, useRef, useEffect } from 'react';
import styles from './complainCard.module.scss';

import { Link, useRouteMatch } from 'react-router-dom';

import { ReactComponent as OptionsIcon } from '../../assets/ellipsis-h-solid.svg';
import potholeImg from '../../assets/pothole-img.jpg';

const ComplainCard = ({id}) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = (ref,event) => {
        if (ref.current && ref.current.contains(event.target)) {
            setMenuOpen(!menuOpen);
        }
        
    }

    /**
 * Hook that alerts clicks outside of the passed ref
 */
    function useOutsideAlerter(ref, exceptionRef) {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {

            if(  exceptionRef.current && exceptionRef.current.contains(event.target)){
                return;
            }

            if ( ref.current && !ref.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }

        useEffect(() => {
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        });
    }

    const wrapperRef = useRef(null);
    const exceptionRef = useRef(null);
    useOutsideAlerter(wrapperRef, exceptionRef);

    const match = useRouteMatch();
    return (
        <div  className={styles['card']}>
            <div  ref={exceptionRef} className={styles['options-menu']} style={{
                display: menuOpen ? 'flex' : 'none',
            }}>
                <Link to={`${match.path.slice(0,-9)}complaint/:${id}`} style={{ textDecoration: 'none'}}>
                    <span>View Details</span>
                </Link>
            </div>
            <div className={styles['title']}>
                <OptionsIcon  ref={wrapperRef} className={styles['icon']} onClick={(e) => toggleMenu(wrapperRef,e)} />
            </div>
            <div className={styles['body']}>
                <img alt="pothole" src={potholeImg} />
            </div>
            <div className={styles['footer']}>
                <div>
                    <small>Date</small>
                    <span>18 Jan 2020</span>
                </div>
                <div>
                    <small>Time</small>
                    <span> 7:30 pm</span>
                </div>
                <div>
                    <small>Location</small>
                    <span>ABCD, Goa</span>
                </div>
                <div>
                    <small>Severity</small>
                    <span>High</span>
                </div>

            </div>
        </div>
    )
}

export default ComplainCard;
