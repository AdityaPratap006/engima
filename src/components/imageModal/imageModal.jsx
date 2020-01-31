import React from 'react';
import styles from './imageModal.module.scss';

const ImageModal = ({ image, alt, setModal }) => {
    return (
        <div className={styles['image-modal']}>
            <div className={styles['close-btn-div']}>
                <div className={styles['close-btn']} onClick={() => setModal(false)}>close</div>
            </div>

            <img src={image} alt={alt} />
        </div>
    )
}

export default ImageModal;
