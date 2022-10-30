import {useState, useEffect} from 'react';
import { Image } from 'react-bootstrap';

import styles from './SmallImage.module.css';

const SmallImage = props => {

    const { imgSrc, caption, setExpandedImgSrc } = props;

    const handleImageClick = e => {
        e.preventDefault();

        setExpandedImgSrc(imgSrc);
    }

    return (
        <div 
            className={styles.main}>
            <Image
                src={imgSrc}
                title={caption || ''}
                className={styles.img}
                onClick={handleImageClick}/>
        </div>
    )
}

export default SmallImage;